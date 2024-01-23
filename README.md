# Web Push Notifications Project [🇪🇸]

## Descripción
Este proyecto utiliza Node.js para implementar notificaciones push web con los módulos Express, Morgan, Dotenv y Web-Push.

## Dependencias

- [Express](https://www.npmjs.com/package/express): Marco web rápido y minimalista para Node.js.
- [Morgan](https://www.npmjs.com/package/morgan): Middleware para la generación de registros de solicitudes HTTP.
- [Dotenv](https://www.npmjs.com/package/dotenv): Carga variables de entorno desde un archivo `.env`.
- [Web-Push](https://www.npmjs.com/package/web-push): Biblioteca para trabajar con notificaciones push web.

## Instrucciones de Instalación

1. Clona este repositorio: `git clone https://github.com/tu-usuario/tu-proyecto.git`
2. Entra al directorio del proyecto: `cd tu-proyecto`
3. Instala las dependencias: `npm install`

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto.
2. Genera las claves VAPID con el siguiente comando:
   ```
   npx web-push generate-vapid-keys
   ```
3. Agrega las siguientes variables con tus propias claves VAPID:
   ```
   VAPID_PUBLIC_KEY=tu_public_key
   VAPID_PRIVATE_KEY=tu_private_key
   ```

# Web Push Notifications Project [🇺🇸]

This proyect uses Node.js to implement web-push notifications whit the Express, Morgan, Dotenv and Web-Push modules.

## Dependencies

- [Express](https://www.npmjs.com/package/express): Fast, minimalist web framework for Node.js.
- [Morgan](https://www.npmjs.com/package/morgan): Middleware for generating HTTP request logs.
- [Dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file.
- [Web-Push](https://www.npmjs.com/package/web-push): Library for working with web push notifications.

## Installation Instructions

1. Clone this repository: `git clone https://github.com/your-username/your-proyect.git`
2. Navigate to the project directory: `cd your-project`
3. Install dependencies: `npm install`

## Configuration

1. Create a `.env` file in the project's root.
2. Generate VAPID keys with the following command:
   ```
   npx web-push generate-vapid-keys
   ```
3. Add the followings variables whit your own VAPID keys:
   ```
   VAPID_PUBLIC_KEY=your_public_key
   VAPID_PRIVATE_KEY=your_private_key
   ```
