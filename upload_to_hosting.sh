
#!/bin/bash

echo "🚀 Загрузка файлов на хостинг reg.ru"
echo "=================================="

# FTP настройки
FTP_HOST="server203.hosting.reg.ru"
FTP_USER="gsl@list.ru"
FTP_PASS="Only4me1@@@"
REMOTE_DIR="/domains/gsl.ru/public_html"
LOCAL_DIR="/home/ubuntu/kohico_shop/static_deploy"

# Проверка существования локальных файлов
if [ ! -d "$LOCAL_DIR" ]; then
    echo "❌ Папка $LOCAL_DIR не найдена!"
    exit 1
fi

echo "📁 Загружаемые файлы:"
ls -la $LOCAL_DIR

# Загрузка через FTP с использованием lftp
lftp -c "
set ftp:ssl-allow false;
set ssl:verify-certificate false;
open ftp://$FTP_USER:$FTP_PASS@$FTP_HOST;
cd $REMOTE_DIR;
lcd $LOCAL_DIR;
mirror -R -e -v;
quit
"

if [ $? -eq 0 ]; then
    echo "✅ Файлы успешно загружены на https://gsl.ru"
    echo "🌐 Сайт будет доступен через несколько минут"
else
    echo "❌ Ошибка при загрузке файлов"
    exit 1
fi
