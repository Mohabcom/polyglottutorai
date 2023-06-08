import Navbar from '@/components/Navbar/Navbar';
import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
// import '../i18n';
import { Suspense } from 'react';
import { appWithTranslation } from 'next-i18next';

function App({
    Component,
    pageProps: { session, ...pageProps },
}) {
    return (
        <Suspense fallback="...loading">
            <SessionProvider session={session}>
                <Component {...pageProps} />
            </SessionProvider>
        </Suspense>
    );
}

export default appWithTranslation(App)