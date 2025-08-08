
'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-pink-600">KOHICO</h1>
              <span className="ml-2 text-sm text-gray-500">Премиум корейская косметика</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/catalog" className="text-gray-700 hover:text-pink-600 transition-colors">
                Каталог
              </Link>
              <Link href="/brands" className="text-gray-700 hover:text-pink-600 transition-colors">
                Бренды
              </Link>
              <Link href="/delivery" className="text-gray-700 hover:text-pink-600 transition-colors">
                Доставка
              </Link>
              <Link href="/contacts" className="text-gray-700 hover:text-pink-600 transition-colors">
                Контакты
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/cart" className="text-gray-600 hover:text-pink-600">
                🛒 Корзина
              </Link>
              <Link href="/auth/signin" className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors">
                Войти
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Премиум корейская<br/>
              <span className="text-pink-600">косметика</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Откройте для себя лучшее в K-beauty: эффективные формулы, 
              инновационные ингредиенты и роскошный уход для вашей кожи
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/catalog" className="bg-pink-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-pink-700 transition-colors">
                Смотреть каталог
              </Link>
              <Link href="/brands" className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-pink-50 transition-colors">
                О брендах
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают KOHICO?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы предлагаем только оригинальную продукцию от ведущих корейских брендов
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">100% Оригинал</h3>
              <p className="text-gray-600">Только оригинальная продукция напрямую от корейских производителей</p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Быстрая доставка</h3>
              <p className="text-gray-600">Доставим ваш заказ по всей России за 1-3 дня</p>
            </div>
            
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Экспертные консультации</h3>
              <p className="text-gray-600">Наши специалисты помогут подобрать идеальный уход для вашей кожи</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Brands */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Популярные бренды</h2>
            <p className="text-gray-600">Ведущие корейские бренды косметики</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/brands/cosrx" className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-pink-600">CX</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">COSRX</h3>
                <p className="text-gray-600 mb-4">Эффективные средства для проблемной кожи</p>
                <span className="text-sm text-pink-600 font-semibold">15+ товаров</span>
              </div>
            </Link>
            
            <Link href="/brands/beauty-of-joseon" className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple-600">BJ</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Beauty of Joseon</h3>
                <p className="text-gray-600 mb-4">Традиционные корейские рецепты красоты</p>
                <span className="text-sm text-purple-600 font-semibold">12+ товаров</span>
              </div>
            </Link>
            
            <Link href="/brands/the-ordinary" className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-green-600">TO</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">The Ordinary</h3>
                <p className="text-gray-600 mb-4">Активные ингредиенты по доступным ценам</p>
                <span className="text-sm text-green-600 font-semibold">20+ товаров</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Status Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-8">
              <span className="text-green-600 mr-2">✅</span>
              Сайт успешно запущен!
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">KOHICO интернет-магазин работает!</h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4">✅ Что работает:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Главная страница</li>
                  <li>• Навигационное меню</li>
                  <li>• Адаптивный дизайн</li>
                  <li>• База данных SQLite</li>
                  <li>• Next.js сервер запущен</li>
                  <li>• Tailwind CSS стили</li>
                  <li>• Мобильная версия</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4">🚀 В разработке:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Каталог товаров</li>
                  <li>• Система аутентификации</li>
                  <li>• Корзина покупок</li>
                  <li>• Админ-панель</li>
                  <li>• Интеграция с оплатой</li>
                  <li>• API для доставки</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex justify-center space-x-4">
              <Link href="/admin" className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Админ-панель
              </Link>
              <Link href="/catalog" className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors">
                Каталог товаров
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-pink-400 mb-4">KOHICO</h3>
              <p className="text-gray-300">Премиум корейская косметика для вашей красоты</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/catalog" className="hover:text-pink-400 transition-colors">Уход за лицом</Link></li>
                <li><Link href="/catalog" className="hover:text-pink-400 transition-colors">Декоративная косметика</Link></li>
                <li><Link href="/catalog" className="hover:text-pink-400 transition-colors">Уход за телом</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/delivery" className="hover:text-pink-400 transition-colors">Доставка и оплата</Link></li>
                <li><Link href="/contacts" className="hover:text-pink-400 transition-colors">Возврат товара</Link></li>
                <li><Link href="/contacts" className="hover:text-pink-400 transition-colors">Контакты</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <p>Email: info@kohico.ru</p>
                <p>Telegram: @kohico_shop</p>
                <p>Время работы: 9:00-20:00 МСК</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2025 KOHICO. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
