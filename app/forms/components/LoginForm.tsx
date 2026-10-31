"use client";

import { useForm } from "react-hook-form";
import { LoginFormData, loginSchema } from "./libs/validation/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginForm() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = async (value: LoginFormData) => {
    try {
      const res = await login(value);
      console.log(res);
    } catch (errors) {
      console.error(errors);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Login form</h1>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        {errors && <p>{errors.email?.message}</p>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("email")} />
        {errors && <p>{errors.password?.message}</p>}
      </div>
      <button type="submit">{isSubmitting?'Login in':'Login'}</button>
    </form>
  );
}
