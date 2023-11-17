# Live Product
https://www.open-forumz.com

# Installation

## 1. Install the NextJS app
````bash
npm install --force
npm run dev
````

## 2. Firebase authentication
1. Create a Firebase account
2. Create a Firebase project
3. Create a Firebase app (Settings Icon -> Project Settings -> General -> Your Apps)
4. Set the environment variables specified in src/auth/auth.tsx (e.g. using .env.local)
5. Prod only: Modify next.config.js, and specify the correct destionation in the rewrites, based on your Firebase app configuration
6. Prod only: Open Google Cloud Console -> APIs & Services -> Credentials -> Create Credentials -> OAuth client ID -> For authorized origins, add your firebase app path, and your domain; For authorized redirect URIs, add the same as before, with the prefix "/__/auth/handler"
7. Prod only: In the Firebase console, add your domain to the "Authorized domains" list
