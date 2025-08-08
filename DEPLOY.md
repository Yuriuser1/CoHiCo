
# 🚀 Деплой KOHICO на рег.ру

## 📋 Подготовка к деплою

### 1. GitHub настройки

#### Секреты репозитория (Settings → Secrets and variables → Actions):

```
# FTP деплой на рег.ру
FTP_HOST=kohico.ru
FTP_USERNAME=u3175586
FTP_PASSWORD=Only4me1@@@

# Альтернативно SSH
SSH_HOST=kohico.ru
SSH_USERNAME=u3175586
SSH_PASSWORD=Only4me1@@@

# База данных
DATABASE_URL=postgresql://u3175586:password@localhost:5432/u3175586_kohico

# NextAuth
NEXTAUTH_URL=https://kohico.ru
NEXTAUTH_SECRET=your-generated-secret-key

# ЮКасса
YUKASSA_SHOP_ID=your-shop-id
YUKASSA_SECRET_KEY=your-secret-key
```

#### Генерация NEXTAUTH_SECRET:
```bash
openssl rand -base64 32
```

### 2. Настройка домена на рег.ру

1. Войдите в панель управления рег.ру (gsl@list.ru / Only4me1@@@)
2. Перейдите в раздел "Хостинг" → "Host-0 u3175586"
3. Настройте домен kohico.ru:
   - Привяжите к папке `/public_html/`
   - Включите поддержку Node.js (если доступно)
   - Настройте SSL сертификат

### 3. База данных PostgreSQL

В панели управления хостингом:
1. Создайте базу данных `u3175586_kohico`
2. Создайте пользователя с полными правами
3. Обновите `DATABASE_URL` в секретах GitHub

## 🔧 Автоматический деплой

После настройки секретов, каждый push в ветку `main` будет автоматически:
1. Собирать приложение
2. Загружать файлы на сервер рег.ру
3. Перезапускать приложение

## 🖥️ Ручной деплой

Если автоматический деплой не работает:

### Через FTP:
1. Соберите проект: `npm run build`
2. Загрузите содержимое папки `out/` в `/public_html/`

### Через SSH:
```bash
ssh u3175586@kohico.ru
cd /home/u3175586/domains/kohico.ru/public_html
git clone https://github.com/Yuriuser1/CoHiCo.git .
npm install
npm run build
npm start
```

## 📦 Структура на сервере

```
/home/u3175586/domains/kohico.ru/
├── public_html/           # Корень сайта
│   ├── app/              # Next.js приложение
│   ├── package.json
│   ├── .env              # Переменные окружения
│   └── ...
├── logs/                 # Логи
└── tmp/                  # Временные файлы
```

## 🔍 Проверка деплоя

После деплоя проверьте:
1. ✅ Сайт открывается по адресу https://kohico.ru
2. ✅ Каталог товаров загружается
3. ✅ База данных подключена (товары отображаются)
4. ✅ Регистрация/авторизация работает
5. ✅ Корзина функционирует
6. ✅ ЮКасса инициализируется

## 🐛 Решение проблем

### Сайт не открывается:
- Проверьте настройки домена в панели рег.ру
- Убедитесь, что файлы загружены в правильную папку
- Проверьте права доступа к файлам (755/644)

### Ошибки базы данных:
- Проверьте правильность `DATABASE_URL`
- Выполните миграции: `npx prisma db push`
- Проверьте подключение к PostgreSQL

### Проблемы с ЮКасса:
- Проверьте настройки магазина в личном кабинете ЮКасса
- Убедитесь в правильности `YUKASSA_SHOP_ID` и `YUKASSA_SECRET_KEY`

## 📞 Поддержка

- Техподдержка рег.ру: https://www.reg.ru/support/
- Документация ЮКасса: https://yookassa.ru/docs/
- Документация Next.js: https://nextjs.org/docs
