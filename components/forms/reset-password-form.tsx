"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { passwordResetSchema } from "@/schemas";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import AlertSuccess from "@/components/auth-shared/alert-success";
import AlertError from "@/components/auth-shared/alert-error";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "@/config/api";

const ResetPasswordForm = ({ code }: { code: string }) => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    mutate: resetUserPassword,
    isPending,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: resetPassword,
  });

  const form = useForm<z.infer<typeof passwordResetSchema>>({
    resolver: zodResolver(passwordResetSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const { handleSubmit, control, reset } = form;

  const onSubmit = async (values: z.infer<typeof passwordResetSchema>) => {
    const { password } = values;
    resetUserPassword({ password: password, verificationCode: code });
  };

  return (
    <>
      {isError ? (
        <>
          <AlertError message={`${error.message} || "Something went wrong"`} />
        </>
      ) : isSuccess ? (
        <>
          <div className={`block w-full gap-4 ${isSuccess && "mb-6"}`}>
            <AlertSuccess message="Password updated successfully!" />
          </div>
          <div className="flex flex-row justify-between gap-4">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex-1 w-full"
            >
              <Link href="/login" className="text-sm !text-blue-400">
                Sign in
              </Link>
            </Button>
          </div>
        </>
      ) : (
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                  </FormItem>
                );
              }}
            />
            {/* CONFIRM PASSWORD */}
            <FormField
              control={control}
              name="confirmPassword"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Confirm your password"
                        type="password"
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <AlertSuccess message={successMessage} />
            <AlertError message={errorMessage} />
            <div className="flex items-center justify-between gap-3 !mt-6">
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
                <span>Change Password</span>
              </Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
};
export default ResetPasswordForm;
