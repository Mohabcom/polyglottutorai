import React from 'react';
import PaddedContainer from './Common/PaddedContainer';

export default function HowItWorks() {
    return (
        <PaddedContainer biggerPadding className="flex justify-center">
            <div className="bg-secondary p-4 sm:p-8 rounded-lg max-w-7xl flex flex-col items-center lg:items-start lg:flex-row flex-wrap lg:flex-nowrap text-xl w-full gap-4">
                <div className="w-full lg:w-1/3 grow text-2xl sm:text-3xl md:text-5xl font-bold text-center lg:text-left">
                    <h2>How Does It Work?</h2>
                </div>
                <div className="flex flex-wrap flex-col w-full lg:w-2/3 grow">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full lg:w-1/3 grow p-4 flex gap-4">
                            <span className="text-2xl sm:text-4xl xl:text-5xl font-bold">
                                1
                            </span>
                            <p className="text-sm sm:text-xl">
                                Engage in Conversations: Chat with our
                                intelligent ChatGPT AI on various topics of
                                interest. The AI engages in realistic
                                conversations, providing valuable language
                                practice.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/3 grow p-4 flex gap-4">
                            <span className="text-2xl sm:text-4xl xl:text-5xl font-bold">
                                2
                            </span>
                            <p className="text-sm sm:text-xl">
                                Receive Real-Time Corrections: As you converse,
                                the AI identifies and corrects any grammatical
                                or spelling errors you make, helping you improve
                                your language accuracy and fluency.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full lg:w-1/3 grow p-4 flex gap-4">
                            <span className="text-2xl sm:text-4xl xl:text-5xl font-bold">
                                3
                            </span>
                            <p className="text-sm sm:text-xl">
                                Instant Word Translations: Encounter unfamiliar
                                words? Simply hover over them to instantly see
                                translations in your native language. Expand
                                your vocabulary and comprehend new words
                                effortlessly.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/3 grow p-4 flex gap-4">
                            <span className="text-2xl sm:text-4xl xl:text-5xl font-bold">
                                4
                            </span>
                            <p className="text-sm sm:text-xl">
                                Track Progress and Level Up: Over time, the app
                                analyzes your conversations and offers insights
                                into your language proficiency level. Gain
                                confidence as you track your progress and notice
                                improvements in your language skills.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </PaddedContainer>
    );
}
