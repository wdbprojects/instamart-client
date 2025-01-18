"use client";

import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import CardWrapper from "../auth-shared/card-wrapper";

import { registerFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { registerUser } from "@/config/api";
import { useRouter } from "next/navigation";
import AlertSuccess from "@/components/auth-shared/alert-success";
import AlertError from "@/components/auth-shared/alert-error";

const RegisterForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const {
    mutate: createAccount,
    isPending,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      router.push("/dashboard");
    },
  });

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    // mode: "onChange",
  });

  const { handleSubmit, control, reset } = form;

  const onSubmit = (values: z.infer<typeof registerFormSchema>) => {
    const { firstName, lastName, email, password, confirmPassword } = values;
    createAccount({ firstName, lastName, email, password, confirmPassword });
    reset();
  };

  useEffect(() => {
    if (isError) {
      setErrorMessage(error?.message || "An error occurred");
    }
    if (isSuccess) {
      setSuccessMessage("Login successful");
    }
  }, [isError, error?.message, isSuccess]);

  return (
    <CardWrapper
      headerLabel="Create an account!"
      backButtonLabel="Already have an account? Login..."
      backButtonHref="/login"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* FIRST NAME */}
          <FormField
            control={control}
            name="firstName"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your first name"
                      autoFocus
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          {/* LAST NAME */}
          <FormField
            control={control}
            name="lastName"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your last name"
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
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
                      type="password"
                      placeholder="********"
                      autoComplete="off"
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          handleSubmit(onSubmit);
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <AlertSuccess message={successMessage} />
          <AlertError message={errorMessage} />
          <div className="flex items-center justify-between gap-3 !mt-8">
            <Button
              type="reset"
              variant="secondary"
              className="w-full"
              disabled={isPending}
              onClick={() => {
                reset();
                setSuccessMessage("");
                setErrorMessage("");
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
export default RegisterForm;
