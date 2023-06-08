import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import Headroom from 'react-headroom';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from '../Common/Button';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import germanPNG from '../../public/flags/german.png';
import frenchPNG from '../../public/flags/french.png';
import arabicPNG from '../../public/flags/arabic.png';
import englishPNG from '../../public/flags/english.png';
import spanishPNG from '../../public/flags/spanish.png';
import italianPNG from '../../public/flags/italian.png';
import { AiOutlineClose, AiOutlineDown, AiOutlineMenu } from 'react-icons/ai';
import PaddedContainer from '../Common/PaddedContainer';

const locales = {
    en: { title: 'English' },
    es: { title: 'Español' },
    fr: { title: 'Francais' },
    de: { title: 'Deutsch' },
    ar: { title: 'العربية' },
    it: { title: 'Italiano' },
};

export default function Navbar() {
    const { data: session } = useSession({
        // required: true,
        // onUnauthenticated() {
        //     redirect('/signin?callbackUrl=chat');
        // },
    });
    const [languageDropdown, setLanguageDropdown] = useState(false);

    const handleLanguageDropdown = () => {
        setLanguageDropdown(!languageDropdown);
    };
    const inactiveLink = 'hover:text-accent transition-all';
    const activeLink =
        inactiveLink + ' font-bold text-primary hover:text-primary';
    const router = useRouter();
    const { pathname } = router;
    const [headroomDisabled, setHeadroomDisabled] = useState(false);
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    useEffect(() => {
        if (isMobile) {
            setHeadroomDisabled(true);
        } else {
            setHeadroomDisabled(false);
        }
    }, [isMobile]);

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
    const currentLang = router.locale;
    console.log();
    const [langImg, setLangImg] = useState(englishPNG);
    useEffect(() => {
        if (currentLang === 'en') {
            setLangImg(englishPNG);
        } else if (currentLang === 'es') {
            setLangImg(spanishPNG);
        } else if (currentLang === 'ar') {
            setLangImg(arabicPNG);
        } else if (currentLang === 'de') {
            setLangImg(germanPNG);
        } else if (currentLang === 'fr') {
            setLangImg(frenchPNG);
        } else if (currentLang === 'it') {
            setLangImg(italianPNG);
        }
    }, [currentLang]);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <PaddedContainer>
            <Headroom disableInlineStyles>
                <nav className="flex items-center justify-between rounded-full px-6 py-4 w-full gap-16 ">
                    <div className="grow">
                        <h1 className="font-bold text-lg">PolyglotTutorAI</h1>
                    </div>
                    <div className="hidden lg:block">
                        <ul className="hidden lg:flex gap-8">
                            <li
                                className={
                                    !pathname || pathname === '/'
                                        ? activeLink
                                        : inactiveLink
                                }
                            >
                                <Link href={'/'}>{t('common:home')}</Link>
                            </li>
                            <li
                                className={
                                    pathname === '/features'
                                        ? activeLink
                                        : inactiveLink
                                }
                            >
                                <Link href={'/'}>{t('common:features')}</Link>
                            </li>
                            <li
                                className={
                                    pathname === '/about'
                                        ? activeLink
                                        : inactiveLink
                                }
                            >
                                <Link href={'/'}>{t('common:about')}</Link>
                            </li>
                            <li
                                className={
                                    pathname === '/contact'
                                        ? activeLink
                                        : inactiveLink
                                }
                            >
                                <Link href={'/'}>{t('common:contact')}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden lg:flex items-center justify-center gap-8 ">
                        <div className="relative">
                            <button
                                className="relative flex items-center gap-2 text-md font-bold hover:text-accent transition-all"
                                onClick={handleLanguageDropdown}
                            >
                                <Image
                                    src={langImg}
                                    alt="English"
                                    className="w-5 h-5x"
                                />
                                <p className="flex gap-2 items-center">
                                    {currentLang.toUpperCase()}{' '}
                                    <AiOutlineDown />
                                </p>
                            </button>
                            {languageDropdown ? (
                                <ul className="absolute flex flex-col gap-2 p-4 border-2 bg-white text-background top-[110%] left-0">
                                    {Object.keys(locales).map((locale) => (
                                        <li
                                            key={locale}
                                            className=" hover:text-accent transition-all"
                                        >
                                            <button
                                                style={{
                                                    fontWeight:
                                                        i18n.resolvedLanguage ===
                                                        locale
                                                            ? 'bold'
                                                            : 'normal',
                                                }}
                                                onClick={() => {
                                                    changeLocale(locale);
                                                    setLanguageDropdown(false);
                                                }}
                                            >
                                                {locales[locale].title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : null}
                        </div>
                        <div>
                            <Button color="primary" rounded={true} cta>
                                Get Started
                            </Button>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                        >
                            <AiOutlineMenu />
                        </button>
                    </div>
                </nav>
                {/*  BG FOR RADIAL BLUR HEADROOM  */}
                <div className="headroom-background"></div>
            </Headroom>
            {isOpen && (
                <div className="lg:hidden fixed top-0 left-0 w-screen h-screen bg-gray-900 z-[999999] px-8 py-8 md:px-12">
                    <div className="flex justify-end">
                        <button
                            onClick={toggleMenu}
                            className="p-8 text-gray-400 hover:text-white focus:outline-none transition duration-150 ease-in-out text-2xl"
                        >
                            <AiOutlineClose />
                        </button>
                    </div>
                    <div className="flex flex-col justify-between gap-20">
                        <ul className="flex flex-col gap-8">
                            <li
                                className={
                                    !pathname || pathname === '/'
                                        ? activeLink
                                        : inactiveLink
                                }
                            >
                                <Link href={'/'}>{t('common:home')}</Link>
                            </li>
                            <li
                                className={
                                    pathname === '/features'
                                        ? activeLink
                                        : inactiveLink
                                }
                            >
                                <Link href={'/features'}>
                                    {t('common:features')}
                                </Link>
                            </li>
                            <li
                                className={
                                    pathname === '/about'
                                        ? activeLink
                                        : inactiveLink
                                }
                            >
                                <Link href={'/about'}>{t('common:about')}</Link>
                            </li>
                            <li
                                className={
                                    pathname === '/contact'
                                        ? activeLink
                                        : inactiveLink
                                }
                            >
                                <Link href={'/contact'}>
                                    {t('common:contact')}
                                </Link>
                            </li>
                        </ul>
                        <div className="flex items-center justify-center gap-8 ">
                            <div className="relative">
                                <button
                                    className="relative flex items-center gap-2 text-md font-bold hover:text-accent transition-all"
                                    onClick={handleLanguageDropdown}
                                >
                                    <Image
                                        src={langImg}
                                        alt="English"
                                        className="w-5 h-5x"
                                    />
                                    <p className="flex gap-2 items-center">
                                        {currentLang.toUpperCase()}{' '}
                                        <AiOutlineDown />
                                    </p>
                                </button>
                                {languageDropdown ? (
                                    <ul className="absolute flex flex-col gap-2 p-4 border-2 bg-white text-background bottom-[110%] left-0">
                                        {Object.keys(locales).map((locale) => (
                                            <li
                                                key={locale}
                                                className=" hover:text-accent transition-all"
                                            >
                                                <button
                                                    style={{
                                                        fontWeight:
                                                            i18n.resolvedLanguage ===
                                                            locale
                                                                ? 'bold'
                                                                : 'normal',
                                                    }}
                                                    onClick={() => {
                                                        changeLocale(locale);
                                                        setLanguageDropdown(
                                                            false,
                                                        );
                                                        setIsOpen(false);
                                                    }}
                                                >
                                                    {locales[locale].title}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                ) : null}
                            </div>
                            <div>
                                <Button color="primary" moves cta>
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </PaddedContainer>
        //   <div className="flex absolute w-full top-0 left-0">
        //       <div className="flex w-full justify-between items-center p-4 md:px-12">
        //           <Link href="/chat" className="md:text-xl">
        //               Chats
        //           </Link>
        //           <h3 className="text-xl font-bold my-4 text-center">
        //               {/* {language} */}
        //           </h3>
        //           <img
        //               src={session?.user?.image}
        //               alt=""
        //               className="w-10 h-10 rounded-full"
        //           />
        //       </div>
        //   </div>
    );
}
