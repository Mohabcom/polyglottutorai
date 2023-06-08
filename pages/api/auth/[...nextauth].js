import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '@/lib/mongodb';
import { mongooseConnect } from '@/lib/mongoose';
import { User } from '@/models/User';
import { compare } from 'bcryptjs';

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                },
            },
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            name: 'Credentials',
            async authorize(credentials, req) {
                mongooseConnect().catch((error) => {
                    error: 'Connection Failed';
                });
                const user = await User.findOne({
                    email: credentials.email,
                    provider: 'credentials',
                });
                if (!user) {
                    throw new Error('User Not Found');
                }
                const checkPassword = await compare(
                    credentials.password,
                    user.password,
                );
                if (!checkPassword || user.email !== credentials.email) {
                    throw new Error('Username or Password does not match');
                }
                delete user.password;
                // console.log(user);
                return user;
            },
        }),
    ],
    secret: process.env.SECRET,
    callbacks: {
        jwt: async ({ token, user }) => {
            user && (token.user = user);
            return token;
        },
        session: async ({ session, token, user }) => {
            if (session?.user && user?.id) {
                session.user.id = user.id;
            }
            console.log({
                ...session,
                user: { ...session.user, ...user, ...token.user },
            });
            return {
                ...session,
                user: { ...session.user, ...user, ...token.user },
            };
        },
    },
    session: {
        strategy: "jwt",
    },
    adapter: MongoDBAdapter(clientPromise),
    debug: true,
});
