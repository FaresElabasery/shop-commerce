import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import type { ILogin } from "@/Interfaces/Auth";
import { loginUser } from "@/Store/authSlice";
import type { AppDispatch, RootState } from "@/Store/store";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from 'zod';

export default function Login() {
    const dispatch = useDispatch<AppDispatch>();
    const { loading, error, token } = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate();
    const schema = z.object({
        email: z.string().email("Invalid email address"),
        password: z.string()
            .min(6, "Password must be at least 6 characters")
            .refine((value) => /[a-zA-Z]/.test(value), " Password must contain at least one letter")
            .refine((value) => /[0-9]/.test(value), " Password must contain at least one number")
            .refine((value) => /[^a-zA-Z0-9]/.test(value), " Password must contain at least one special character"),
    });
    const handleSubmit = (values: ILogin) => {
        dispatch(loginUser(values));
    }
    useEffect(() => {
        if (token) {
            navigate('/');
            toast.success('Login Successfully');
        }
    }, [token, navigate])
    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error, navigate])

    return (
        <div className="Login sm:mb-50">
            <div className="container mx-auto flex justify-center gap-5 ">
                <Formik
                    initialValues={{ email: "", password: "" }}
                    validate={(values) => {
                        const result = schema.safeParse(values);
                        if (!result.success) {
                            return result.error.flatten().fieldErrors
                        }
                        return {};
                    }}
                    onSubmit={handleSubmit}
                >
                    <Form className="flex flex-col p-10 md:p-15 border rounded-2xl shadow-lg w-full md:w-1/3">
                        <h2 className="text-3xl font-bold mb-4 ">Shop.co</h2>
                        <p className="text-black/60 text-sm">Wellcome back !!</p>
                        <h1 className="my-5 text-5xl font-bold">Login</h1>
                        <div className="flex flex-col gap-4">

                            <div className=" flex flex-col gap-2 email">
                                <label >Email</label>
                                <Field as={Input} name='email' placeholder="Enter your email" />
                                <ErrorMessage className="px-4 py-2 mt-1 bg-red-200 text-red-500 font-medium text-xs rounded-4xl" name="email" component="div" />
                            </div>
                            <div className=" flex flex-col gap-2 password">
                                <label >Password</label>
                                <Field as={Input} name='password' type="password" placeholder="Enter your password" />
                                <ErrorMessage className="px-4 py-2 mt-1 bg-red-200 text-red-500 font-medium text-xs rounded-4xl" name="password" component="div" />
                            </div>
                        </div>
                        <Button disabled={loading} className="mt-8 rounded-full cursor-pointer" type="submit">{loading? 'logining in':"login in"}</Button>
                    </Form>
                </Formik>
                <div className="image-container hidden md:block ">
                    <img src="/auth.jpg" className="rounded-2xl sm:h-150 object-cover" alt="Cloth photo" />
                </div>
            </div>
        </div>
    )
}
