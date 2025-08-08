
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

// Mock YuKassa payment creation
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Не авторизован" },
        { status: 401 }
      );
    }

    const { orderId, amount, description } = await request.json();

    // Verify order exists and belongs to user
    const order = await prisma.order.findFirst({
      where: {
        id: orderId,
        userId: (session.user as any).id,
      },
    });

    if (!order) {
      return NextResponse.json(
        { error: "Заказ не найден" },
        { status: 404 }
      );
    }

    // In a real implementation, you would integrate with YuKassa API here
    // For now, we'll create a mock payment and return a mock confirmation URL
    const paymentId = `payment_${Date.now()}`;
    
    // Update order with payment info
    await prisma.order.update({
      where: { id: orderId },
      data: {
        paymentId,
        paymentMethod: "bank_card",
      },
    });

    // Mock YuKassa response
    const mockPaymentResponse = {
      id: paymentId,
      status: "pending",
      amount: {
        value: (amount / 100).toFixed(2),
        currency: "RUB",
      },
      description,
      confirmation: {
        type: "redirect",
        confirmation_url: `${process.env.NEXTAUTH_URL}/payment/process?payment_id=${paymentId}&order_id=${orderId}`,
      },
      created_at: new Date().toISOString(),
    };

    return NextResponse.json({
      ...mockPaymentResponse,
      confirmation_url: mockPaymentResponse.confirmation.confirmation_url,
    });
  } catch (error) {
    console.error("Error creating payment:", error);
    return NextResponse.json(
      { error: "Ошибка при создании платежа" },
      { status: 500 }
    );
  }
}
