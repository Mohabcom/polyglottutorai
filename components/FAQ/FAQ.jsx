import React from 'react';
import PaddedContainer from '../Common/PaddedContainer';
import Question from './Question';

const questions = [
    {
        id: 1,
        q: 'Is PolyglotTutor AI suitable for beginners?',
        a: 'Absolutely! PolyglotTutor AI is designed for learners of all levels, including beginners. The AI provides real-time corrections and guidance, making it an ideal tool for language learners at any stage of their language journey.',
    },
    {
        id: 2,
        q: 'Can I practice multiple languages on PolyglotTutor AI?',
        a: 'Yes, you can practice multiple languages on PolyglotTutor AI. The app currently supports English, French, German, Spanish, Italian, and Arabic. You can switch between these languages and explore different language learning experiences.',
    },
    {
        id: 3,
        q: 'How accurate are the word translations provided by the app?',
        a: "The word translations provided by PolyglotTutor AI are based on reliable translation algorithms. While they offer a quick understanding of unfamiliar words, it's important to note that translations may vary in accuracy based on context. It's always recommended to further validate translations for precise usage.",
    },
    {
        id: 4,
        q: 'Can I use PolyglotTutor AI offline?',
        a: 'PolyglotTutor AI requires an internet connection to function as it leverages the powerful OpenAI API for language processing. An active internet connection ensures real-time corrections, translations, and accurate language assessments.',
    },
    {
        id: 5,
        q: 'How is user data handled on PolyglotTutor AI?',
        a: 'At PolyglotTutor AI, user privacy and data security are paramount. We adhere to strict data protection guidelines. User conversations and data are encrypted and anonymized. We do not share or sell personal data to third parties. For more information, please refer to our Privacy Policy.',
    },
];

export default function FAQ() {
    return (
        <PaddedContainer biggerPadding>
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-4">
                FAQ
            </h2>
            <h3 className="text-center text-lg md:text-xl mb-8">
                Answers to some questions you might have.
            </h3>
            <div className="flex flex-col gap-4 max-w-7xl mx-auto">
                {questions.map((question) => (
                    <Question
                        key={question.id}
                        question={question.q}
                        answer={question.a}
                    />
                ))}
            </div>
        </PaddedContainer>
    );
}
