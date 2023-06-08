'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import germanPNG from '../../public/flags/german.png';
// import frenchPNG from '../../public/flags/french.png';
// import arabicPNG from '../../public/flags/arabic.png';
// import englishPNG from '../../public/flags/english.png';
// import spanishPNG from '../../public/flags/spanish.png';

export default function Home() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.push(`/login`);
        },
    });
    const userId = session?.user?.id;
    const router = useRouter();
    const { id } = router.query;
    const [messages, setMessages] = useState([]);
    const [language, setLanguage] = useState('');
    const [inputText, setInputText] = useState('');

    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'instant' });
    };
    useEffect(() => {
        if (messages) {
            scrollToBottom();
        }
    }, [messages]);

    useEffect(() => {
        if (id) {
            fetchMessages();
        }
    }, [id]);

    const fetchMessages = async () => {
        const fetchedMessages = await axios.get(
            '/api/conversation?id=' + id[0],
        );
        setLanguage(fetchedMessages?.data?.language);
        setMessages(fetchedMessages?.data?.messages);
    };
    const sendMessage = async (e) => {
        e.preventDefault();
        try {
            let newMessages = messages;
            newMessages.push({
                role: 'user',
                content: inputText,
            });
            setMessages(newMessages);
            scrollToBottom();
            setInputText('');

            const response = await axios.put('/api/conversation?id=' + id[0], {
                language,
                userId,
                messages,
            });
            console.log(response);
            setMessages(response.data.messages);
            setLanguage(response.data.language);
        } catch (error) {
            console.log(error);
        }
    };
    const deleteChat = async () => {
        await axios.delete(`/api/conversation?id=${id[0]}&userid=${userId}`);
        router.push('/chat');
    };

    return (
        <div className="h-screen animated-gradient-bg overflow-hidden">
            <div className="h-full flex flex-col items-center justify-center">
                <div className="w-full flex flex-row items-center justify-center gap-4">
                    <h3 className="text-xl font-bold my-4 text-center">
                        {language?.toUpperCase()}
                    </h3>
                    <button onClick={deleteChat} className="z-50">
                        delete
                    </button>
                </div>
                <div className="grow md:w-3/4 p-6 overflow-y-scroll no-scrollbar">
                    {messages &&
                        messages.map(({ role, content }, index) => (
                            <>
                                {role === 'system' ? (
                                    <></>
                                ) : role === 'user' ? (
                                    <div key={`${role}-${index}`} className="w-full flex flex-row-reverse">
                                        <p className="p-4 bg-gray-300 rounded-lg my-4 max-w-2xl ml-20">
                                            {content}
                                        </p>
                                    </div>
                                ) : (
                                    <div key={`${role}-${index}`} className="w-full p-4 max-w-2xl my-4 mr-20 flex flex-col bg-gray-300 rounded-lg">
                                        <p className="mb-2">{content}</p>
                                        <button className="text-blue-500 self-end pb-2 pr-4">
                                            Translate Message
                                        </button>
                                        {/* <div id={`${role}-${index}`}></div> */}
                                    </div>
                                )}
                            </>
                        ))}
                    <div ref={messagesEndRef} />
                </div>
                <div className="w-full md:w-3/4">
                    <form
                        onSubmit={sendMessage}
                        className="flex items-center justify-center"
                    >
                        <input
                            id="inputText"
                            type="text"
                            placeholder="Input"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            autoComplete="off"
                            className="w-full h-16 px-3 py-2 focus:outline-none focus:border-blue-500"
                        />
                        <button className="py-2 px-4 h-16 bg-blue-500 text-white hover:bg-blue-600">
                            Send
                        </button>
                    </form>
                </div>
                {/* Signed in as {session?.user?.email} <br />
                <button
                    onClick={() => {
                        signOut();
                    }}
                >
                    Sign out
                </button> */}
            </div>
        </div>
    );
}
