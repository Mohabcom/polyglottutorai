import AuthLayout from '@/components/AuthLayout';
import Button from '@/components/Common/Button';
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';
import { login_validate } from '@/lib/validate';
import { getToken } from 'next-auth/jwt';

export default function Login() {
    const { data: session } = useSession();

    const router = useRouter();
    if (session) {
        router.push('/chat');
    }
    const [show, setShow] = useState();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values) => {
            const status = await signIn('credentials', {
                redirect: false,
                email: values.email,
                password: values.password,
                callbackUrl: '/chat',
            });
            // const session = await getSession();
            // console.log(session);
            if (status.ok) router.push(status.url);
        },
        validate: login_validate,
    });
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <AuthLayout>
                <div className="mx-auto flex flex-col gap-4 w-3/4">
                    <div>
                        <h1 className="text-4xl font-bold py-4 text-white sm:text-gray-800">
                            Explore
                        </h1>
                        <p className="mx-auto w-3/4 text-gray-300 sm:text-gray-500">
                            Sign In to your account
                        </p>
                    </div>
                    <form
                        className="flex flex-col gap-4"
                        onSubmit={formik.handleSubmit}
                    >
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            {...formik.getFieldProps('email')}
                            className={`p-4 rounded-md border w-full focus:outline-none ${
                                formik.errors.email &&
                                formik.values.email &&
                                formik.touched.email &&
                                'border-red-500'
                            }`}
                        />
                        <div
                            className={`relative flex border rounded-md  bg-white ${
                                formik.errors.password &&
                                formik.values.password &&
                                formik.touched.password &&
                                'border-red-500'
                            }`}
                        >
                            <input
                                type={`${show ? 'text' : 'password'}`}
                                name="password"
                                placeholder="Password"
                                {...formik.getFieldProps('password')}
                                className="p-4 rounded-md w-full bg-white focus:outline-none"
                            />
                            <button
                                type="button"
                                className="flex items-center px-4 hover:text-primary transition-all"
                                onClick={() => setShow(!show)}
                            >
                                {show ? (
                                    <AiOutlineEyeInvisible size={25} />
                                ) : (
                                    <AiOutlineEye size={25} />
                                )}
                            </button>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Button color="primary">Login</Button>
                        </div>
                    </form>
                    <Button
                        onClick={() => signIn('google')}
                        color="transparent"
                        className="bg-white sm:bg-transparent"
                    >
                        Sign in with Google
                    </Button>
                    <Button
                        onClick={() => signIn('github')}
                        color="transparent"
                        className="bg-white sm:bg-transparent"
                    >
                        Sign in with Github
                    </Button>
                    <p className="text-center text-gray-300 sm:text-gray-500">
                        Don't have an account yet?{' '}
                        <Link href={'/register'} className="text-primary">
                            Sign Up.
                        </Link>
                    </p>
                </div>
            </AuthLayout>
        </>
    );
}

export async function getServerSideProps({ req }) {
    const session = await getSession({ req });

    if (session) {
        return {
            redirect: {
                destination: '/chat',
                permanent: false,
            },
            props: { session },
        };
    }

    return {
        props: { session },
    };
}
