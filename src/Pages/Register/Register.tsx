import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import type { IRegister } from "@/Interfaces/Auth";
import { registerUser } from "@/Store/authSlice";
import type { AppDispatch, RootState } from "@/Store/store";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { z } from 'zod';

export default function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { loading, error, token } = useSelector((state: RootState) => state.auth);
    const schema = z.object({
        name: z.string().min(3, "Name is required"),
        email: z.string().email("Invalid email address"),
        phone: z.string().refine((value) => /^[0-9]+$/.test(value), "Phone number must contain only numbers"),
        password: z.string()
            .min(6, "Password must be at least 6 characters")
            .refine((value) => /[a-zA-Z]/.test(value), " Password must contain at least one letter")
            .refine((value) => /[0-9]/.test(value), " Password must contain at least one number")
            .refine((value) => /[^a-zA-Z0-9]/.test(value), " Password must contain at least one special character"),
        rePassword: z.string()
            .min(6, "Confirm password must be at least 6 characters")
            .refine((value) => /[a-zA-Z]/.test(value), " Confirm password must contain at least one letter")
            .refine((value) => /[0-9]/.test(value), " Confirm password must contain at least one number")
            .refine((value) => /[^a-zA-Z0-9]/.test(value), " Confirm password must contain at least one special character"),
    }).refine((data) => data.password === data.rePassword, {
        message: "Passwords don't match",
        path: ["rePassword"],
    });
    const handleSubmit = (values: IRegister) => {
        dispatch(registerUser(values));
    }
    useEffect(() => {
        if (error) toast.error(error);
    }, [error]);

    useEffect(() => {
        if (token) {
            toast.success("Login successful 🎉");
            navigate("/");
        }
    }, [token]);
    return (
        <div className="Register sm:mb-50">
            <div className="container mx-auto flex justify-center gap-5 ">
                <Formik
                    initialValues={{ email: "", password: "", rePassword: "", phone: "", name: '' }}
                    validate={(values) => {
                        const result = schema.safeParse(values);
                        if (!result.success) {
                            return result.error.flatten().fieldErrors;
                        }
                        return {};
                    }}
                    onSubmit={handleSubmit}
                >
                    <Form className="flex flex-col p-10 md:p-15 border rounded-2xl w-full shadow-lg md:w-1/3">
                        <h2 className="text-3xl font-bold mb-4 ">Shop.co</h2>
                        <p className="text-black/60 text-sm">Wellcome back !!</p>
                        <h1 className="my-5 text-5xl font-bold">Sign Up</h1>
                        <div className="flex flex-col gap-4">
                            <div className=" flex flex-col gap-2 email">
                                <label >Name</label>
                                <Field as={Input} name='name' type="text" placeholder="Enter your name" />
                                <ErrorMessage className="px-4 py-2 mt-1 bg-red-200 text-red-500 font-medium text-xs rounded-4xl" name="name" component="div" />
                            </div>
                            <div className=" flex flex-col gap-2 email">
                                <label >Email</label>
                                <Field as={Input} name='email' placeholder="Enter your email" />
                                <ErrorMessage className="px-4 py-2 mt-1 bg-red-200 text-red-500 font-medium text-xs rounded-4xl" name="email" component="div" />
                            </div>
                            <div className=" flex flex-col gap-2 phone">
                                <label >Phone</label>
                                <Field as={Input} name='phone' type="tel" placeholder="Enter your phone" />
                                <ErrorMessage className="px-4 py-2 mt-1 bg-red-200 text-red-500 font-medium text-xs rounded-4xl" name="phone" component="div" />
                            </div>
                            <div className=" flex flex-col gap-2 password">
                                <label >Password</label>
                                <Field as={Input} name='password' type="password" placeholder="Enter your password" />
                                <ErrorMessage className="px-4 py-2 mt-1 bg-red-200 text-red-500 font-medium text-xs rounded-4xl" name="password" component="div" />
                            </div>
                            <div className=" flex flex-col gap-2 password">
                                <label >Confirm Password</label>
                                <Field as={Input} name='rePassword' type="password" placeholder="Enter your password" />
                                <ErrorMessage className="px-4 py-2 mt-1 bg-red-200 text-red-500 font-medium text-xs rounded-4xl" name="rePassword" component="div" />
                            </div>
                        </div>
                        <Button disabled={loading} className="mt-8 rounded-full cursor-pointer" type="submit">{loading ? 'Signing Up' : 'Sign Up'}</Button>
                    </Form>
                </Formik>
                <div className="image-container hidden md:block ">
                    <img src="/auth.jpg" className="rounded-2xl sm:h-250 object-cover" alt="Cloth photo" />
                </div>
            </div>
        </div>
    )
}
