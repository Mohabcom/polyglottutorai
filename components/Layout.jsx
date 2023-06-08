import { useSession, signIn, signOut } from 'next-auth/react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import ScrollTop from './Common/ScrollTop';

export default function Layout({ disableNav, disableFooter, className, children }) {
    const { data: session } = useSession();
    // const logout = async () => {
    //     await router.push('/');
    //     await signOut();
    // };
    let classes =
        'relative flex flex-col gap-10 md:gap-16 bg-background text-text';
    if (className) {
        classes = classes.concat(` ${className}`);
    }
    return (
        <div className={classes} >
            {!disableNav && <Navbar />}
            {children}
            <ScrollTop />
            {!disableFooter && <Footer />}
            {/* {session ? (
                <div>
                    <p>Signed in as {session?.user?.email}</p>
                    <button
                        onClick={() => {
                            signOut();
                            // redirect('/');
                        }}
                    >
                        Sign out
                    </button>
                </div>
            ) : (
                <div>
                    <p>Not signed in</p>
                    <button className="btn" onClick={() => signIn('google')}>
                        Sign in with google
                    </button>
                </div>
            )} */}
        </div>
    );
}
