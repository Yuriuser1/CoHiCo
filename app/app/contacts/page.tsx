
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export default function ContactsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Контакты
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Свяжитесь с нами любым удобным способом. Мы всегда готовы помочь с выбором
          премиальной корейской косметики
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Основные контакты
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Телефон</h3>
                  <p className="text-gray-600">+7 (812) 123-45-67</p>
                  <p className="text-sm text-gray-500">Ежедневно с 10:00 до 22:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">info@kohico.ru</p>
                  <p className="text-sm text-gray-500">Ответим в течение 2 часов</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Telegram</h3>
                  <p className="text-gray-600">@KoHiCo</p>
                  <p className="text-sm text-gray-500">Быстрые ответы и консультации</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Адрес</h3>
                  <p className="text-gray-600">Санкт-Петербург</p>
                  <p className="text-sm text-gray-500">Работаем онлайн по всей России</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Режим работы</h3>
                  <p className="text-gray-600">Ежедневно с 10:00 до 22:00</p>
                  <p className="text-sm text-gray-500">По московскому времени</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card>
            <CardHeader>
              <CardTitle>Часто задаваемые вопросы</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Как проверить подлинность товара?</h3>
                <p className="text-sm text-gray-600">
                  Все товары в KOHICO - оригинальные. У нас есть сертификаты подлинности 
                  от официальных дистрибьюторов корейских брендов.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Сколько времени занимает доставка?</h3>
                <p className="text-sm text-gray-600">
                  По Санкт-Петербургу - 1-2 дня, по России через СДЭК - 3-7 дней,
                  Почтой России - 5-14 дней в зависимости от региона.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Можно ли вернуть товар?</h3>
                <p className="text-sm text-gray-600">
                  Да, вы можете вернуть товар в течение 14 дней, если упаковка 
                  не была нарушена. Косметика - товар личной гигиены.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Напишите нам</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
