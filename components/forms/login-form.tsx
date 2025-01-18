"use client";

import { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import CardWrapper from "../auth-shared/card-wrapper";
import { useRouter } from "next/navigation";
import { loginFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { useMutation } from "@tanstack/react-query";

import { loginUser } from "@/config/api";
import AlertSuccess from "../auth-shared/alert-success";
import AlertError from "../auth-shared/alert-error";

const LoginForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const {
    mutate: signIn,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      router.push("/dashboard");
    },
  });

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const {
    handleSubmit,
    control,
    reset,
    // formState: { isDirty,  isValid  },
  } = form;

  const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
    const { email, password } = values;
    signIn({ email, password });
    reset();
  };

  useEffect(() => {
    if (isError) {
      setErrorMessage("Invalid email or password WDB");
    }
    if (isSuccess) {
      setSuccessMessage("Login successful");
    }
  }, [isError, isSuccess]);

  return (
    <CardWrapper
      headerLabel="Welcome back!"
      backButtonLabel="Don't have an account yet? Register..."
      backButtonHref="/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* EMAIL */}
          <FormField
            control={control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Enter your email"
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          {/* PASSWORD */}
          <FormField
            control={control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Enter your password"
                      type="password"
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage />
                  <div className="flex justify-end !m-0 !p-0">
                    <Button
                      asChild
                      variant="link"
                      size="sm"
                      className="!m-0 !p-0"
                    >
                      <Link href="/auth/reset">Forgot password</Link>
                    </Button>
                  </div>
                </FormItem>
              );
            }}
          />
          <AlertSuccess message={successMessage} />
          <AlertError message={errorMessage} />
          <div className="flex items-center justify-between gap-3 !mt-4">
            <Button
              type="reset"
              variant="secondary"
              className="w-full"
              disabled={isPending}
              onClick={() => {
                reset();
                setErrorMessage("");
                setSuccessMessage("");
              }}
            >
              Reset form
            </Button>
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? <LoaderCircle className="animate-spin" /> : null}
              <span>Login</span>
            </Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};
export default LoginForm;
