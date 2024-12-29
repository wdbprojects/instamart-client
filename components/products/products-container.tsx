import React from "react";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import ProductsSidebar from "@/components/products/products-sidebar";

const ProductsContainer = () => {
  return (
    <SidebarProvider defaultOpen={false}>
      <ProductsSidebar />
      <SidebarInset>
        <div className="absolute -top-3 -left-2">
          <SidebarTrigger variant="ghost" />
        </div>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-2 md:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-cols-2">
            {Array.from({ length: 20 }).map((_, i) => {
              return (
                <div key={i} className="aspect-square rounded-xl bg-muted/50" />
              );
            })}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default ProductsContainer;
