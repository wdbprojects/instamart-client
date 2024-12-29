import React, { ReactNode } from "react";
import Container from "@/components/layout/container";
import Header from "@/components/layout/header";

const StoreLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div>
      <Header />
      <Container className="py-4">{children}</Container>
    </div>
  );
};

export default StoreLayout;
