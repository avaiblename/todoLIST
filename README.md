# Веб-приложение "Список дел"

## Описание
Приложение позволяет пользователям регистрироваться, авторизовываться и управлять задачами (CRUD, категории, фильтрация). Проект реализован с использованием микросервисной архитектуры, включающей сервисы аутентификации, управления задачами, API-шлюз и фронтенд.

## Технологии
- **Backend**: TypeScript, Express.js, Sequelize, PostgreSQL
- **Frontend**: HTML, CSS, JavaScript
- **Контейнеризация**: Docker, Docker Compose

## Требования
- Node.js 14+
- Docker и Docker Compose
- Git

## Установка и запуск
1. Склонируйте репозиторий:
   ```bash
   git clone https://github.com/username/todo-list-app.git
   cd todo-list-app
Замените https://github.com/username/todo-list-app.git на URL вашего репозитория.

Создайте файл .env в корне проекта со следующим содержимым:
env


DATABASE_URL=postgres://user:password@localhost:5432/todo_db
JWT_SECRET=your_secret_key
Замените your_secret_key на ваш реальный секретный ключ.
Установите зависимости для каждого сервиса:

cd auth-service && npm install
cd ../task-service && npm install
cd ../api-gateway && npm install
cd ..
Запустите проект с помощью Docker Compose:

docker-compose up --build


Откройте браузер и перейдите по адресу http://localhost:8080, чтобы получить доступ к фронтенду.