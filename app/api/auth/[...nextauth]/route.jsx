import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';


/* use https://console.cloud.google.com/ to create a new project */
const handler = NextAuth({
    providers: [ /* creating a list of providers */
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ], 
    async session ({session}) {

    },
    async signIn({profile}) {
        try {
         // serverLess route -> lambda function

        } catch(error) {

        }
    }
})

export {handler as GET, handler as POST}