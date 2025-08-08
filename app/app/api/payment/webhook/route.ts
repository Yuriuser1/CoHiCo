
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { payment_id, order_id, status } = body;

    if (!payment_id || !order_id) {
      return NextResponse.json(
        { error: "Отсутствуют обязательные параметры" },
        { status: 400 }
      );
    }

    // Find order by payment ID or order ID
    const order = await prisma.order.findFirst({
      where: {
        OR: [
          { paymentId: payment_id },
          { id: order_id },
        ],
      },
    });

    if (!order) {
      return NextResponse.json(
        { error: "Заказ не найден" },
        { status: 404 }
      );
    }

    let newStatus = order.status;
    let newPaymentStatus = order.paymentStatus;

    // Update status based on payment result
    if (status === "succeeded") {
      newStatus = "CONFIRMED";
      newPaymentStatus = "PAID";
    } else if (status === "canceled") {
      newStatus = "CANCELLED";
      newPaymentStatus = "FAILED";
    }

    // Update order
    await prisma.order.update({
      where: { id: order.id },
      data: {
        status: newStatus,
        paymentStatus: newPaymentStatus,
        statusLog: {
          create: {
            status: newStatus,
            comment: status === "succeeded" 
              ? "Платеж успешно получен" 
              : "Платеж отклонен",
          },
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Ошибка при обработке webhook" },
      { status: 500 }
    );
  }
}
