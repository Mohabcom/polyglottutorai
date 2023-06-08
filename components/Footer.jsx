import Link from 'next/link';
import React from 'react';
import PaddedContainer from './Common/PaddedContainer';
import germanPNG from '../public/flags/german.png';
import frenchPNG from '../public/flags/french.png';
import arabicPNG from '../public/flags/arabic.png';
import englishPNG from '../public/flags/english.png';
import spanishPNG from '../public/flags/spanish.png';
import italianPNG from '../public/flags/italian.png';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const locales = {
    en: { title: 'English', img: englishPNG },
    es: { title: 'Español', img: spanishPNG },
    fr: { title: 'Francais', img: frenchPNG },
    de: { title: 'Deutsch', img: germanPNG },
    ar: { title: 'العربية', img: arabicPNG },
    it: { title: 'Italiano', img: italianPNG },
};

export default function Footer() {
    const router = useRouter();
    const { t, i18n } = useTranslation();
    const changeLocale = (locale) => {
        router.push(
            {
                route: router.pathname,
                query: router.query,
            },
            router.asPath,
            { locale },
        );
    };
    return (
        <PaddedContainer className="bg-secondary" biggerPadding={true}>
            <footer className="py-10 max-w-7xl mx-auto">
                <div className="">
                    <div className="flex justify-between flex-wrap">
                        <div className="lg:w-1/2 md:w-1/2 sm:w-full">
                            <h4 className="text-lg capitalize text-primary">
                                Contact
                            </h4>
                            <Link href="/" className="block mb-2">
                                Tell us everything
                            </Link>
                            <p className="text-accent">
                                Do you have any question? Feel free to reach
                                out.
                            </p>
                            <a href="mailhref:muhabme@gmail.com">
                                <p className="text-primary border-b border-blue-800 inline-block mt-4 hover:border-blue-500 hover:transition-all">
                                    Let's Chat
                                </p>
                            </a>
                        </div>
                        <div className="lg:w-1/3 md:w-1/3 sm:w-full mt-8 md:mt-0">
                            <h4 className="text-lg capitalize text-primary">
                                Policy
                            </h4>
                            <Link href="/" className="block mb-2" left="true">
                                Application Security
                            </Link>
                            <Link href="/" className="block mb-2" left="true">
                                Software Principles
                            </Link>
                        </div>
                        <div className="lg:w-1/6 md:w-1/6 sm:w-full">
                            <Link href="/" className="block mb-2" left="true">
                                Support Center
                            </Link>
                            <Link href="/" className="block mb-2" left="true">
                                Customer Support
                            </Link>
                        </div>
                        <div className="lg:w-1/2 md:w-1/2 sm:w-full mt-4">
                            <h4 className="text-lg capitalize text-primary">
                                Address
                            </h4>
                            <p>Rancho Santa Margarita</p>
                            <p>2131 Elk Street</p>
                            <p>California</p>
                        </div>
                        <div className="lg:w-1/3 md:w-1/3 sm:w-full mt-8 md:mt-0">
                            <h4 className="text-lg capitalize text-primary">
                                Company
                            </h4>
                            <Link href="/" className="block mb-2" left="true">
                                About
                            </Link>
                            <Link href="/" className="block mb-2" left="true">
                                Blog
                            </Link>
                            <Link href="/" className="block mb-2" left="true">
                                Press
                            </Link>
                            <Link href="/" className="block mb-2" left="true">
                                Careers & Culture
                            </Link>
                        </div>
                        <div className="lg:w-1/6 md:w-1/6 sm:w-full">
                            <label className="text-lg capitalize">
                                Language
                            </label>
                            <div className="flex justify-between flex-wrap mt-2 gap-2">
                                {Object.keys(locales).map((locale) => (
                                    <div key={locale}>
                                        <button
                                            style={{
                                                fontWeight:
                                                    i18n.resolvedLanguage ===
                                                    locale
                                                        ? 'bold'
                                                        : 'normal',
                                            }}
                                            type="submit"
                                            onClick={() => {
                                                changeLocale(locale);
                                            }}
                                        >
                                            <Image
                                                src={locales[locale].img}
                                                alt={locales[locale].title}
                                                className="w-8 h-8 rounded-full"
                                            />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="flex items-center justify-center pt-4 pb-6 border-t-[1px] border-text">
                © {new Date().getFullYear()} Muhab Gamal. All rights reserved.
            </div>
        </PaddedContainer>
    );
}
