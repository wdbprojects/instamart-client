import CardWrapper from "@/components/auth-shared/card-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import ResetPasswordForm from "@/components/forms/reset-password-form";
import AlertError from "@/components/auth-shared/alert-error";

const ForgotPassword = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { code, exp } = await searchParams;
  const codeStr = String(code);
  const expDate = Number(exp);
  const now = Date.now();
  const linkIsValid = code && exp && expDate > now;

  return (
    <CardWrapper
      headerLabel="Change your password"
      backButtonLabel=""
      backButtonHref=""
    >
      {linkIsValid ? (
        <ResetPasswordForm code={codeStr} />
      ) : (
        <>
          <div>
            <AlertError message="The link is either invalid or expired" />
          </div>
          <Separator className="my-6" />
          <div className="flex flex-row justify-between gap-4">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex-1 w-full"
            >
              <Link href="/password/forgot" className="text-sm !text-blue-400">
                Request a new password reset link
              </Link>
            </Button>
          </div>
        </>
      )}
    </CardWrapper>
  );
};
export default ForgotPassword;
