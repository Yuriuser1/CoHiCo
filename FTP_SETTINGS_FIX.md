
# 🔧 ИСПРАВЛЕНИЕ FTP НАСТРОЕК - РЕШЕНИЕ ОШИБКИ "530 Login incorrect"

## 🚨 ПРОБЛЕМА:
```
FTPError: 530 Login incorrect.
```

## ✅ РЕШЕНИЕ:

### 1. Проверьте FTP данные из панели reg.ru:

Зайдите в панель управления reg.ru и найдите данные для FTP:

```
🏠 FTP Сервер: server203.hosting.reg.ru
👤 FTP Логин: u******** (ваш логин)  
🔐 FTP Пароль: [ваш пароль]
📁 Папка сайта: /domains/kohico.ru/public_html/
```

### 2. Настройте GitHub Secrets:

Перейдите в GitHub → Settings → Secrets and variables → Actions

Создайте/обновите следующие секреты:

| Имя секрета | Значение | Пример |
|-------------|----------|---------|
| `FTP_HOST` | `server203.hosting.reg.ru` | ✅ |
| `FTP_USERNAME` | Ваш FTP логин от reg.ru | `u1234567` |
| `FTP_PASSWORD` | Ваш FTP пароль от reg.ru | `your_password` |

### 3. ВАЖНО! Проверьте точность данных:

❌ **Частые ошибки:**
- Лишние пробелы в начале/конце
- Неправильный сервер (должен быть `server203.hosting.reg.ru`)
- Старый пароль (если менялся)
- Не тот логин (должен начинаться с `u`)

✅ **Правильно:**
- Точное копирование из панели reg.ru
- Без пробелов
- Актуальный пароль

### 4. Пошаговая инструкция:

#### Шаг 1: Зайдите в панель reg.ru
1. Откройте https://www.reg.ru
2. Войдите в личный кабинет
3. Выберите домен `kohico.ru`
4. Перейдите в "Управление хостингом"

#### Шаг 2: Найдите FTP данные
1. Найдите раздел "FTP доступ"
2. Скопируйте:
   - Сервер: `server203.hosting.reg.ru`
   - Логин: `u*******`
   - Пароль: (если забыли, создайте новый)

#### Шаг 3: Обновите GitHub Secrets
1. Откройте https://github.com/Yuriuser1/CoHiCo
2. Settings → Secrets and variables → Actions
3. Обновите секреты:
   ```
   FTP_HOST: server203.hosting.reg.ru
   FTP_USERNAME: [ваш FTP логин]
   FTP_PASSWORD: [ваш FTP пароль]
   ```

#### Шаг 4: Протестируйте
1. Actions → Deploy to Reg.ru → Run workflow
2. Должно подключиться без ошибок

## 🔍 ДОПОЛНИТЕЛЬНАЯ ДИАГНОСТИКА:

### Тест FTP подключения (локально):
Если хотите проверить FTP данные локально:

```bash
# Установите FTP клиент
sudo apt install ftp

# Попробуйте подключиться
ftp server203.hosting.reg.ru
# Введите логин и пароль
```

### Альтернативные FTP настройки:
Если основной сервер не работает, попробуйте:
- `ftp.hosting.reg.ru`
- `server203.hosting.reg.ru`

## 📋 ЧЕКЛИСТ:

- [ ] Проверил FTP данные в панели reg.ru
- [ ] Обновил `FTP_HOST` в GitHub Secrets
- [ ] Обновил `FTP_USERNAME` в GitHub Secrets  
- [ ] Обновил `FTP_PASSWORD` в GitHub Secrets
- [ ] Убедился, что нет лишних пробелов
- [ ] Запустил GitHub Actions workflow
- [ ] FTP подключение успешно

## 🎯 ОЖИДАЕМЫЙ РЕЗУЛЬТАТ:

После исправления secrets должно появиться:
```
✅ Connected to FTP server
✅ Uploading files to /domains/kohico.ru/public_html/
✅ Deployment completed successfully
```

---

## 🔧 Если проблема остается:

1. **Смените FTP пароль** в панели reg.ru
2. **Обновите секрет** `FTP_PASSWORD` в GitHub
3. **Попробуйте снова**

---

**Дата:** 8 августа 2025  
**Статус:** 🔧 ТРЕБУЕТ ИСПРАВЛЕНИЯ SECRETS  
**Следующий шаг:** Обновить FTP данные в GitHub Secrets  
