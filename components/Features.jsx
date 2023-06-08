import React from 'react';
import PaddedContainer from './Common/PaddedContainer';
import { BsTranslate } from 'react-icons/bs';
import { Gi3DStairs } from 'react-icons/gi';
import { IoIosChatboxes } from 'react-icons/io';

export default function Features() {
    return (
        <PaddedContainer
            biggerPadding
            className="flex items-center justify-center"
        >
            <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Empowering Language Mastery Through Innovative Tools
                </h2>
                <h3 className="text-lg md:text-xl mb-8">
                    Discover a range of powerful features designed to enhance
                    your language skills and provide a personalized learning
                    experience.
                </h3>
                <div className="flex flex-col md:flex-row justify-between flex-wrap w-full gap-4 max-w-7xl">
                    <div className="flex flex-col-reverse justify-around items-center rounded-lg p-4 sm:p-8 shadow-md relative md:w-1/3 lg:w-1/6 grow">
                        <div className="flex flex-col items-center justify-around">
                            <h4 className="text-lg md:text-xl xl:text-3xl mb-4 font-bold z-10">
                                Tailor Your Language Journey to Your Preferences
                            </h4>
                            <p className="z-10 text-sm md:text-lg xl:text-2xl">
                                Customize your learning experience by selecting
                                preferred accents or dialects for conversation
                                practice. Adapt the app to suit your unique
                                language goals and preferences.
                            </p>
                        </div>
                        <Gi3DStairs className="w-20 md:w-28 h-20 md:h-28 z-10" />
                        <div className="bg-primary absolute w-full h-full top-0 left-0 opacity-50 rounded-lg"></div>
                    </div>
                    <div className="flex flex-col md:w-1/2 grow gap-4">
                        <div className="rounded-lg p-4 sm:p-8 shadow-md relative">
                            <div className="flex flex-col-reverse gap-2 md:flex-row items-center justify-around">
                                <div className="md:text-left grow md:max-w-[66%] z-10">
                                    <h4 className="text-lg md:text-xl xl:text-3xl mb-4 font-bold z-10">
                                        Enhance Your Language Skills Through
                                        Realistic Conversations
                                    </h4>
                                    <p className="z-10 text-sm md:text-lg xl:text-2xl">
                                        Engage in realistic conversations with
                                        ChatGPT AI to improve your language
                                        skills. Receive instant corrections for
                                        grammar and spelling errors, helping you
                                        refine your speaking and writing
                                        abilities.
                                    </p>
                                </div>
                                <BsTranslate className="w-20 md:w-28 h-20 md:h-28 z-10 grow" />
                            </div>
                            <div className="bg-primary absolute w-full h-full top-0 left-0 opacity-50 rounded-lg"></div>
                        </div>
                        <div className="rounded-lg p-4 sm:p-8 shadow-md relative">
                            <div className="flex flex-col gap-2 md:flex-row items-center justify-around">
                                <IoIosChatboxes className="w-20 md:w-28 h-20 md:h-28 z-10 grow" />
                                <div className="md:text-left grow md:max-w-[66%] z-10">
                                    <h4 className="text-lg md:text-xl xl:text-3xl mb-4 font-bold z-10">
                                        Expand Your Vocabulary with Quick Word
                                        Translations
                                    </h4>
                                    <p className="z-10 text-sm md:text-lg xl:text-2xl">
                                        Easily understand unfamiliar words by
                                        hovering over them to view instant
                                        translations in your native language.
                                        Build your vocabulary and confidently
                                        communicate in any language.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-primary absolute w-full h-full top-0 left-0 opacity-50 rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </PaddedContainer>
    );
}
