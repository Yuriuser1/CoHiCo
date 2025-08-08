
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Truck, Package, MapPin, Clock, CreditCard, Shield } from "lucide-react";
import Link from "next/link";

export default function DeliveryPage() {
  const deliveryOptions = [
    {
      id: "courier-spb",
      name: "Курьерская доставка по СПб",
      price: "500 ₽",
      time: "1-2 дня",
      description: "Доставка курьером до двери в удобное для вас время",
      icon: Truck,
      features: [
        "Доставка до двери",
        "Выбор времени доставки",
        "Оплата курьеру или онлайн",
        "SMS-уведомления"
      ]
    },
    {
      id: "sdek",
      name: "СДЭК",
      price: "от 400 ₽",
      time: "3-5 дней",
      description: "Доставка в пункты выдачи или курьером по всей России",
      icon: Package,
      features: [
        "20,000+ пунктов выдачи",
        "Курьерская доставка",
        "Отслеживание заказа",
        "Примерка перед покупкой"
      ]
    },
    {
      id: "russian-post",
      name: "Почта России",
      price: "от 300 ₽",
      time: "5-10 дней",
      description: "Надежная доставка в любую точку России",
      icon: MapPin,
      features: [
        "Доставка в любую точку РФ",
        "Отслеживание посылки",
        "Получение в отделении",
        "Доступные цены"
      ]
    },
    {
      id: "yandex",
      name: "Яндекс.Доставка",
      price: "от 450 ₽",
      time: "1-3 дня",
      description: "Быстрая доставка в крупных городах России",
      icon: Clock,
      features: [
        "Доставка в день заказа",
        "Отслеживание в реальном времени",
        "Удобные временные окна",
        "SMS и push-уведомления"
      ]
    }
  ];

  const paymentMethods = [
    {
      name: "Банковские карты",
      description: "Visa, MasterCard, МИР",
      icon: CreditCard
    },
    {
      name: "Электронные кошельки",
      description: "ЮMoney, Qiwi, WebMoney",
      icon: Package
    },
    {
      name: "Наличными курьеру",
      description: "Только для курьерской доставки",
      icon: Truck
    }
  ];

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Доставка и оплата
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Мы предлагаем удобные способы доставки и безопасные методы оплаты
          для вашего комфорта
        </p>
      </div>

      {/* Free Shipping Banner */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl p-6 mb-12">
        <div className="flex items-center justify-center text-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Бесплатная доставка</h2>
            <p className="text-lg">
              При заказе от 5 000 ₽ доставка по всей России бесплатно!
            </p>
          </div>
        </div>
      </div>

      {/* Delivery Options */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Способы доставки
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deliveryOptions.map((option) => (
            <Card key={option.id} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <option.icon className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{option.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary">{option.price}</Badge>
                      <Badge variant="outline">{option.time}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{option.description}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-pink-600 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Способы оплаты
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paymentMethods.map((method, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{method.name}</h3>
                <p className="text-sm text-gray-600">{method.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-flex items-center bg-green-50 text-green-800 px-4 py-2 rounded-lg">
            <Shield className="w-5 h-5 mr-2" />
            Все платежи защищены SSL-шифрованием
          </div>
        </div>
      </div>

      {/* Delivery Process */}
      <div className="bg-gray-50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Как происходит доставка
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Оформление", desc: "Выберите товары и оформите заказ" },
            { step: "2", title: "Подтверждение", desc: "Мы свяжемся с вами для подтверждения" },
            { step: "3", title: "Упаковка", desc: "Товары упаковываются с особой заботой" },
            { step: "4", title: "Доставка", desc: "Получите заказ удобным способом" }
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {item.step}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Готовы сделать заказ?
        </h2>
        <p className="text-gray-600 mb-6">
          Выберите товары в нашем каталоге и оформите заказ прямо сейчас
        </p>
        <Button asChild size="lg" className="bg-pink-600 hover:bg-pink-700">
          <Link href="/catalog">
            Перейти в каталог
          </Link>
        </Button>
      </div>
    </div>
  );
}
