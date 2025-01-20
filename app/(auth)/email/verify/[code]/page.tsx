"use client";

import { use } from "react";
import { verifyEmail } from "@/config/api";
import { useQuery } from "@tanstack/react-query";
import AlertSuccess from "@/components/auth-shared/alert-success";
import AlertError from "@/components/auth-shared/alert-error";
import BackButton from "@/components/auth-shared/back-button";
import CardWrapper from "@/components/auth-shared/card-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const VerifyEmail = ({ params }: { params: Promise<{ code: string }> }) => {
  const { code } = use(params);

  const { isPending, isSuccess, isError } = useQuery({
    queryKey: ["emailVerification", code],
    queryFn: () => {
      return verifyEmail(code);
    },
  });

  return (
    <CardWrapper
      headerLabel="Verify your email"
      backButtonLabel=""
      backButtonHref=""
    >
      {isPending && (
        <div className="relative flex justify-center items-center">
          <span className="loader"></span>
        </div>
      )}
      {isSuccess && <AlertSuccess message="Email verified!" />}
      {isError && (
        <>
          <AlertError message="Invalid verification code" />
          <div className="flex flex-row justify-center mt-2">
            <BackButton href="/password/reset" label="Get a new link" />
          </div>
        </>
      )}
      <div className="flex flex-row justify-center mt-2">
        <Button asChild variant="link" size="sm">
          <Link href="/dashboard" className="text-sm !text-blue-400">
            Back to home
          </Link>
        </Button>
      </div>
    </CardWrapper>
  );
};
export default VerifyEmail;
