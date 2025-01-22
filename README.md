![Screenshot (3)](https://github.com/user-attachments/assets/6c72ae83-8d2e-4803-bcc4-659540924d22)
![Screenshot (2)](https://github.com/user-attachments/assets/3c4a9b2b-6586-464e-b07f-20f03e6d0d96)

How to run this project:

For Frontend
Follow the below steps to run the project:

Firstly clone or unzip the project folder.
Go to the frontend directory by using the following command cd frontend.
create a .env.local file in the backend root directory as the same level where the package.json is located and keep the following environment variables there:
>>> Stepup firebase app and configure the environment

VITE_API_KEY=AIzaSyAP-7GMnkDvQk6r5UZ2igQVPf79WuTsCSc
VITE_AUTH_DOMAIN=gym-store-mern-app.firebaseapp.com
VITE_PROJECT_ID=gym-store-mern-app
VITE_STORAGE_BUCKET=gym-store-mern-app.appspot.com
VITE_MESSAGING_SENDERID=545695423944
VITE_APPID=1:545695423944:web:81fa0ed0c2520033b3b4fd
Then run npm install commend to install node dependencies.
Finally, to run the project, use npm run dev command.
For Backend
Follow the below steps to run the project:

Firstly clone or unzip the project folder.
Go to the backend directory by using the following command  cd backend.
Then run npm install commend to install node dependencies.
create a .env file in the backend root directory as the same level where the package.json is located and keep the following environment variables there:
DB_URL="mongodb+srv://20224084:SEo6IZQtdstL53Sd@cluster0.c2lts.mongodb.net/Gym-store?retryWrites=true&w=majority&appName=Cluster0"

JWT_SECRET_KEY=
'5efeecdd27872f599e82f814099c744b9af0fa753b8988cc033d98627eaf1781eefbaabd7428256ab9ad1fb01a4c57568311c48a0ff54716c64f8d2ff85e6be9'

Note: Please setup mongodb and change the MongoDB url and set your jwt secret key above.
Finally, to run the project, use npm run start:dev command.
