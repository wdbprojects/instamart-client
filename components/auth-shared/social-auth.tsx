"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";

const SocialAuth = () => {
  const [isPending, startTransition] = useTransition();

  const handleOnClick = (provider: "google" | "github") => {
    startTransition(() => {
      console.log(provider);
    });
  };

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="sm"
        className="w-full"
        variant="outline"
        disabled={isPending}
        onClick={() => {
          handleOnClick("google");
        }}
      >
        Google
      </Button>
      <Button
        size="sm"
        className="w-full"
        variant="outline"
        disabled={isPending}
        onClick={() => {
          handleOnClick("github");
        }}
      >
        Github
      </Button>
    </div>
  );
};
export default SocialAuth;
