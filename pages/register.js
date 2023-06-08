import AuthLayout from '@/components/AuthLayout';
import Button from '@/components/Common/Button';
import Layout from '@/components/Layout';
import { useSession, signIn, signOut } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { register_validate } from '@/lib/validate';
import axios from 'axios';

export default function Register() {
    const { data: session } = useSession();
    const router = useRouter();
    if (session) {
        router.push('/chat');
    }
    const [show, setShow] = useState({
        password: false,
        confirmpassword: false,
    });
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmpassword: '',
        },
        onSubmit: async (values) => {
            const data = await axios.post('/api/auth/signup', {
                username: values.username,
                email: values.email,
                password: values.password,
            });
            console.log(data);
        },
        validate: register_validate,
    });
    return (
        <>
            <Head>
                <title>Register</title>
            </Head>
            <AuthLayout>
                <div className="mx-auto flex flex-col gap-4 w-3/4">
                    <div>
                        <h1 className="text-4xl font-bold py-4 text-gray-300 sm:text-gray-800">
                            Explore
                        </h1>
                        <p className="mx-auto w-3/4 text-gray-300 sm:text-gray-500">
                            Sign up for an account
                        </p>
                    </div>
                    <form
                        className="flex flex-col gap-4"
                        onSubmit={formik.handleSubmit}
                    >
                        <input
                            type="text"
                            name="text"
                            placeholder="Username"
                            {...formik.getFieldProps('username')}
                            className={`p-4 rounded-md border w-full focus:outline-none ${
                                formik.errors.username &&
                                formik.values.username &&
                                formik.touched.username &&
                                'border-red-500'
                            }`}
                        />
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
                            className={`relative flex border rounded-md bg-white ${
                                formik.errors.password &&
                                formik.values.password &&
                                formik.touched.password &&
                                'border-red-500'
                            }`}
                        >
                            <input
                                type={`${show.password ? 'text' : 'password'}`}
                                name="password"
                                placeholder="Password"
                                {...formik.getFieldProps('password')}
                                className="p-4 rounded-md w-full bg-white focus:outline-none"
                            />
                            <button
                                type="button"
                                className="flex items-center px-4 hover:text-primary transition-all"
                                onClick={() =>
                                    setShow({
                                        ...show,
                                        password: !show.password,
                                    })
                                }
                            >
                                {show.password ? (
                                    <AiOutlineEyeInvisible size={25} />
                                ) : (
                                    <AiOutlineEye size={25} />
                                )}
                            </button>
                        </div>
                        <div
                            className={`relative flex border rounded-md bg-white ${
                                formik.errors.confirmpassword &&
                                formik.values.confirmpassword &&
                                formik.touched.confirmpassword &&
                                'border-red-500'
                            }`}
                        >
                            <input
                                type={`${
                                    show.confirmpassword ? 'text' : 'password'
                                }`}
                                name="password"
                                placeholder="Confirm Password"
                                {...formik.getFieldProps('confirmpassword')}
                                className="p-4 rounded-md w-full bg-white focus:outline-none"
                            />
                            <button
                                type="button"
                                className="flex items-center px-4 hover:text-primary transition-all"
                                onClick={() =>
                                    setShow({
                                        ...show,
                                        confirmpassword: !show.confirmpassword,
                                    })
                                }
                            >
                                {show.confirmpassword ? (
                                    <AiOutlineEyeInvisible size={25} />
                                ) : (
                                    <AiOutlineEye size={25} />
                                )}
                            </button>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Button color="primary" fixed>
                                Login
                            </Button>
                        </div>
                    </form>
                    <p className="text-center text-gray-300 sm:text-gray-500">
                        Already have an account?{' '}
                        <Link href={'/login'} className="text-primary">
                            Sign In.
                        </Link>
                    </p>
                </div>
            </AuthLayout>
        </>
    );
}
