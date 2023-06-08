'use client';

import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import axios from 'axios';
// import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import Link from 'next/link';
import Image from 'next/image';
import germanPNG from '../public/flags/german.png';
import frenchPNG from '../public/flags/french.png';
import arabicPNG from '../public/flags/arabic.png';
import englishPNG from '../public/flags/english.png';
import spanishPNG from '../public/flags/spanish.png';

export default function Home() {
    const router = useRouter();
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.push(`/login`);
        },
    });
    const userId = session?.user?.id;

    const newConversation = async (language) => {
        try {
            const response = await axios.post('/api/conversation', {
                language,
                userId,
            });
            router.push(`/chat/${response.data._id}`);
        } catch (error) {
            console.log(error);
        }
    };
    // const [conversations, setConversations] = useState([]);

    // useEffect(() => {
    //     if (userId) {
    //         fetchConversations();
    //     }
    // }, [userId]);

    const fetchConversations = async () => {
        const fetchedConversations = await axios.get(
            '/api/conversation?userid=' + userId,
        );
        return fetchedConversations.data
        // setConversations(fetchedConversations.data);
    };

    const checkLanguage = async(language) => {
        const conversations = await fetchConversations()
        const conversationExisting = conversations.find(
            (c) => c.language === language,
        );
        if (conversationExisting) {
            router.push(`/chat/${conversationExisting.conversationId}`);
        } else {
            newConversation(language);
        }
    };

    return (
        <div className="h-screen max-h-screen animated-gradient-bg">
            <div className="flex flex-col items-center justify-center h-full">
                <div className="w-full flex flex-wrap gap-4 items-center justify-center">
                    <button
                        onClick={() => checkLanguage('german')}
                        className="md:hover:pb-12 transition-all"
                    >
                        <Image
                            src={germanPNG}
                            alt="german"
                            className="w-32 h-32 rounded-full"
                        />
                    </button>
                    <button
                        onClick={() => checkLanguage('spanish')}
                        className="md:hover:pb-12 transition-all"
                    >
                        <Image
                            src={spanishPNG}
                            alt="spanish"
                            className="w-32 h-32 rounded-full"
                        />
                    </button>
                    <button
                        onClick={() => checkLanguage('english')}
                        className="md:hover:pb-12 transition-all"
                    >
                        <Image
                            src={englishPNG}
                            alt="english"
                            className="w-32 h-32 rounded-full"
                        />
                    </button>
                    <button
                        onClick={() => checkLanguage('french')}
                        className="md:hover:pb-12 transition-all"
                    >
                        <Image
                            src={frenchPNG}
                            alt="french"
                            className="w-32 h-32 rounded-full"
                        />
                    </button>
                    <button
                        onClick={() => checkLanguage('arabic')}
                        className="md:hover:pb-12 transition-all"
                    >
                        <Image
                            src={arabicPNG}
                            alt="arabic"
                            className="w-32 h-32 rounded-full"
                        />
                    </button>
                </div>
                Signed in as {session?.user?.email} <br />
                <button className='btn' 
                    onClick={() => {
                        signOut();
                    }}
                >
                    Sign out
                </button>
            </div>
        </div>
    );
}

export async function getServerSideProps({req}) {
    const session = await getSession({ req })

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: {session}
    }
}