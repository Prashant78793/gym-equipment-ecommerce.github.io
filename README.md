 ![Screenshot (2)](https://github.com/user-attachments/assets/3c4a9b2b-6586-464e-b07f-20f03e6d0d96) ![Screenshot (3)](https://github.com/user-attachments/assets/6c72ae83-8d2e-4803-bcc4-659540924d22)


How to run this project:

For Frontend
Follow the below steps to run the project:

Firstly clone or unzip the project folder.
Go to the frontend directory by using the following command cd frontend.
create a .env.local file in the backend root directory as the same level where the package.json is located and keep the following environment variables there:
>>> Stepup firebase app and configure the environment

VITE_API_KEY=

VITE_AUTH_DOMAIN=

VITE_PROJECT_ID=

VITE_STORAGE_BUCKET=

VITE_MESSAGING_SENDERID=

VITE_APPID=

Then run npm install commend to install node dependencies.
Finally, to run the project, use npm run dev command.
For Backend
Follow the below steps to run the project:

Firstly clone or unzip the project folder.
Go to the backend directory by using the following command  cd backend.
Then run npm install commend to install node dependencies.
create a .env file in the backend root directory as the same level where the package.json is located and keep the following environment variables there:
DB_URL=

JWT_SECRET_KEY=


Note: Please setup mongodb and change the MongoDB url and set your jwt secret key above.
Finally, to run the project, use npm run start:dev command.
