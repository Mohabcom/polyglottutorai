import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/Layout';

import Main from '../components/Main';
import LanguagesSwiper from '../components/LanguagesSwiper';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import LastCTA from '../components/LastCTA';
import FAQ from '../components/FAQ/FAQ';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'home'])),
            // Will be passed to the page component as props
        },
    };
}

export default function Home() {
    const router = useRouter();
    const { data: session } = useSession({
        // required: true,
        // onUnauthenticated() {
        //     router.push(`/login`);
        // },
    });

    return (
        <>
            <Head>
                <title>PolyglotTutorAI</title>
            </Head>
            <Layout>
                <Main />
                <LanguagesSwiper />
                <Features />
                <HowItWorks />
                {/* <Pricing /> */}
                <FAQ />
                <LastCTA />
            </Layout>
        </>
    );
}
