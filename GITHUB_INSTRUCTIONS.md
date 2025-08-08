
# 📤 Инструкции по загрузке KOHICO на GitHub

## ✅ Что уже сделано:

1. **Интернет-магазин KOHICO** создан и готов к работе
2. **Git репозиторий** инициализирован с коммитом
3. **GitHub Actions** настроен для автоматического деплоя
4. **Remote origin** добавлен: `https://github.com/Yuriuser1/CoHiCo.git`
5. **Документация** создана (README.md, DEPLOY.md)

## 🔑 Для завершения загрузки нужно:

### 1. Получить GitHub токен доступа
- Перейдите: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
- Создайте новый токен с правами **repo**
- Скопируйте токен

### 2. Загрузить код на GitHub
В терминале выполните:

```bash
cd /home/ubuntu/kohico_shop

# Введите ваш GitHub username при запросе
# Введите Personal Access Token вместо пароля
git push -u origin master
```

**Альтернативно с токеном в URL:**
```bash
git push https://YOUR_USERNAME:YOUR_TOKEN@github.com/Yuriuser1/CoHiCo.git master
```

## ⚙️ Настройка автоматического деплоя

После загрузки кода, настройте секреты в GitHub:

1. Откройте репозиторий: https://github.com/Yuriuser1/CoHiCo
2. Settings → Secrets and variables → Actions → New repository secret

### Добавьте секреты:

```
FTP_HOST = kohico.ru
FTP_USERNAME = u3175586  
FTP_PASSWORD = Only4me1@@@

DATABASE_URL = postgresql://username:password@localhost:5432/kohico
NEXTAUTH_URL = https://kohico.ru
NEXTAUTH_SECRET = [сгенерируйте: openssl rand -base64 32]
YUKASSA_SHOP_ID = [ваш ID из ЮКасса]
YUKASSA_SECRET_KEY = [ваш ключ из ЮКасса]
```

## 🚀 Результат

После этого:
- ✅ Код будет на GitHub: https://github.com/Yuriuser1/CoHiCo
- ✅ Каждый push в `main` будет автоматически деплоить на kohico.ru
- ✅ Сайт будет доступен по адресу https://kohico.ru

## 📁 Структура проекта

```
kohico_shop/
├── README.md              # Описание проекта
├── DEPLOY.md             # Инструкции по деплою
├── package.json          # Зависимости Node.js
├── .github/workflows/    # GitHub Actions
├── app/                  # Next.js приложение
│   ├── app/             # Страницы и API
│   ├── components/      # React компоненты
│   ├── prisma/         # База данных
│   └── ...
└── ...
```

---

## 🆘 Нужна помощь?

Если возникнут проблемы:
1. Проверьте права доступа к репозиторию GitHub
2. Убедитесь, что токен имеет права **repo**
3. Проверьте правильность URL репозитория

**Проект готов к загрузке! 🎉**
