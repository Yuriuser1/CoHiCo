
"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, CreditCard, Loader2 } from "lucide-react";

function PaymentProcessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(true);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const paymentId = searchParams?.get("payment_id");
  const orderId = searchParams?.get("order_id");

  useEffect(() => {
    // Mock payment processing
    const processPayment = async () => {
      if (!paymentId || !orderId) {
        router.push("/");
        return;
      }

      // Simulate payment processing delay
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      try {
        // Update payment status in database
        const response = await fetch("/api/payment/webhook", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            payment_id: paymentId,
            order_id: orderId,
            status: "succeeded", // Mock successful payment
          }),
        });

        if (response.ok) {
          setPaymentSuccess(true);
        } else {
          throw new Error("Payment failed");
        }
      } catch (error) {
        console.error("Payment processing error:", error);
        // In real implementation, redirect to error page
        setPaymentSuccess(false);
      } finally {
        setIsProcessing(false);
      }
    };

    processPayment();
  }, [paymentId, orderId, router]);

  if (isProcessing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
            </div>
            <CardTitle>Обработка платежа</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600">
              Пожалуйста, подождите. Мы обрабатываем ваш платеж...
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Не закрывайте эту страницу
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
            paymentSuccess ? "bg-green-100" : "bg-red-100"
          }`}>
            {paymentSuccess ? (
              <CheckCircle className="w-8 h-8 text-green-600" />
            ) : (
              <CreditCard className="w-8 h-8 text-red-600" />
            )}
          </div>
          <CardTitle>
            {paymentSuccess ? "Платеж успешен!" : "Ошибка платежа"}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-gray-600">
            {paymentSuccess
              ? "Спасибо за покупку! Ваш заказ принят в обработку."
              : "К сожалению, не удалось обработать платеж. Попробуйте снова."}
          </p>
          
          {paymentSuccess && (
            <div className="text-sm text-gray-500">
              Информация о заказе отправлена на вашу электронную почту
            </div>
          )}

          <div className="space-y-2">
            <Button 
              onClick={() => router.push(paymentSuccess ? "/orders" : "/cart")} 
              className="w-full"
            >
              {paymentSuccess ? "Мои заказы" : "Вернуться в корзину"}
            </Button>
            <Button 
              variant="outline" 
              onClick={() => router.push("/")} 
              className="w-full"
            >
              На главную
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function PaymentProcessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
            </div>
            <CardTitle>Загрузка...</CardTitle>
          </CardHeader>
        </Card>
      </div>
    }>
      <PaymentProcessContent />
    </Suspense>
  );
}
