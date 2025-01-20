"use client";

import { useEffect, useState } from "react";
import AlertError from "@/components/auth-shared/alert-error";
import AlertSuccess from "@/components/auth-shared/alert-success";
import CardWrapper from "@/components/auth-shared/card-wrapper";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { forgotPasswordSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { sendPasswordResetEmail } from "@/config/api";

const ForgotPassword = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const {
    mutate: sendPasswordReset,
    isPending,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: sendPasswordResetEmail,
  });

  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const { handleSubmit, control, reset } = form;

  const onSubmit = (values: z.infer<typeof forgotPasswordSchema>) => {
    const { email } = values;
    sendPasswordReset(email);
  };

  useEffect(() => {
    setErrorMessage(`${error?.message || "Something went wrong, try again"}`);
  }, [error, isError]);

  return (
    <CardWrapper
      headerLabel="Request password reset"
      backButtonLabel=""
      backButtonHref=""
    >
      {isSuccess ? (
        <AlertSuccess message="Email sent! check your inbox." />
      ) : (
        <>
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
                          type="text"
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              {isError && <AlertError message={errorMessage} />}
              <div className="flex items-center justify-between gap-3 !mt-6">
                <Button
                  type="reset"
                  variant="secondary"
                  className="w-full"
                  disabled={isPending}
                  onClick={() => {
                    reset();
                    setErrorMessage("");
                  }}
                >
                  Reset form
                </Button>
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? <LoaderCircle className="animate-spin" /> : null}
                  <span>Request password reset</span>
                </Button>
              </div>
            </form>
          </Form>
          <Separator className="my-6" />
        </>
      )}

      <div
        className={`flex flex-row justify-between gap-4 ${isSuccess && "mt-6"}`}
      >
        <Button asChild variant="outline" size="sm" className="flex-1 w-full">
          <Link href="/login" className="text-sm !text-blue-400">
            Sign in
          </Link>
        </Button>
        <Button asChild variant="outline" size="sm" className="flex-1 w-full">
          <Link href="/register" className="text-sm !text-blue-400">
            Register
          </Link>
        </Button>
      </div>
    </CardWrapper>
  );
};
export default ForgotPassword;
