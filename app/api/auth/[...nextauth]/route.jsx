import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import User from '@models/user';
import { connectToDB } from '@utils/database';

/* use https://console.cloud.google.com/ to create a new project */
const handler = NextAuth({
    providers: [ /* creating a list of providers */
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ], 
    // always want to keep an existing session, so keep user data 
    async session ({session}) {
        const sessionUser = await User.findOne({
            email: session.user.email // getting current one from the session
        })
        session.user.id = sessionUser._id.toString(); // call as a function

        return session; // always returning the updated session 

    },
    // sign in function, to sign in or create a new user
    async signIn({profile}) {
        try {
         // serverLess route -> lambda function
         await connectToDB();

         // check if user already exists
         const userExists = await User.findone({ 
            email: profile.email
        });
        
         // if not, create a new user and save it to the database
         if(!userExists){
            await User.create ({
                email: profile.email, // pass in the email
                username: profile.name.replace(" ", ""). // ensure it has no spaces
                toLowerCase(),// ensure it is lower case
                image: profile.picture


            })
         }   
         return true;

        } catch(error) {
            console.log(error);
            return false;
        }
    }
})

export {handler as GET, handler as POST}