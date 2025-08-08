
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Не авторизован" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const {
      items,
      totalAmount,
      subtotalAmount,
      shippingAmount,
      customerInfo,
      shippingAddress,
      deliveryType,
      notes
    } = body;

    // Validate required fields
    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "Корзина пуста" },
        { status: 400 }
      );
    }

    // Generate order number
    const orderNumber = `KH${Date.now()}`;

    // Create order in database
    const order = await prisma.order.create({
      data: {
        orderNumber,
        userId: (session.user as any).id,
        status: "PENDING",
        totalAmount: Math.round(totalAmount),
        subtotalAmount: Math.round(subtotalAmount),
        shippingAmount: Math.round(shippingAmount),
        customerName: customerInfo.name,
        customerEmail: customerInfo.email,
        customerPhone: customerInfo.phone || "",
        shippingAddress,
        deliveryType,
        notes: notes || "",
        paymentStatus: "PENDING",
        items: {
          create: items.map((item: any) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: Math.round(item.price),
          })),
        },
        statusLog: {
          create: {
            status: "PENDING",
            comment: "Заказ создан",
          },
        },
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    // Update customer stats if exists
    try {
      await prisma.customer.upsert({
        where: { email: customerInfo.email },
        update: {
          name: customerInfo.name,
          phone: customerInfo.phone || undefined,
          lastOrderAt: new Date(),
          orderCount: { increment: 1 },
          totalSpent: { increment: Math.round(totalAmount) },
        },
        create: {
          email: customerInfo.email,
          name: customerInfo.name,
          phone: customerInfo.phone || undefined,
          registeredAt: new Date(),
          lastOrderAt: new Date(),
          orderCount: 1,
          totalSpent: Math.round(totalAmount),
        },
      });
    } catch (error) {
      console.error("Error updating customer:", error);
    }

    return NextResponse.json(order);
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { error: "Ошибка при создании заказа" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Не авторизован" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const isAdmin = (session.user as any).isAdmin;

    let whereCondition = {};
    
    // Regular users can only see their own orders
    if (!isAdmin) {
      whereCondition = { userId: (session.user as any).id };
    }

    const orders = await prisma.order.findMany({
      where: whereCondition,
      include: {
        items: {
          include: {
            product: {
              include: {
                brand: true,
              },
            },
          },
        },
        statusLog: {
          orderBy: { createdAt: "desc" },
        },
      },
      orderBy: { createdAt: "desc" },
      take: isAdmin ? 50 : 10, // Admins see more orders
    });

    return NextResponse.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "Ошибка при получении заказов" },
      { status: 500 }
    );
  }
}
