
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Заполните все обязательные поля" },
        { status: 400 }
      );
    }

    // Save contact form to database
    await prisma.contactForm.create({
      data: {
        name,
        email,
        subject: subject || "Общий вопрос",
        message,
      },
    });

    return NextResponse.json({ message: "Сообщение отправлено успешно" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Ошибка при отправке сообщения" },
      { status: 500 }
    );
  }
}
