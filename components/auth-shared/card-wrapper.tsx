"use client";

import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import HeaderAuth from "@/components/auth-shared/header-auth";
import { Separator } from "@/components/ui/separator";
import SocialAuth from "@/components/auth-shared/social-auth";
import BackButton from "@/components/auth-shared/back-button";

interface CardWrapperProps {
  children: ReactNode;
  headerLabel: string;
  backButtonLabel?: string;
  backButtonHref?: string;
  showSocial?: boolean;
}

const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <HeaderAuth label={headerLabel} />
      </CardHeader>
      <CardContent className="pb-2">{children}</CardContent>
      {showSocial && (
        <>
          <div className="px-4">
            <Separator className="mt-5 mb-7" />
          </div>
          <CardFooter>
            <SocialAuth />
          </CardFooter>
        </>
      )}
      <CardFooter>
        <BackButton href={backButtonHref!} label={backButtonLabel!} />
      </CardFooter>
    </Card>
  );
};
export default CardWrapper;
