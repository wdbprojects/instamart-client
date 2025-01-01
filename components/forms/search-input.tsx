"use client";

import { Search, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = ["men", "women", "kids", "accessories"];

const SearchInput = () => {
  return (
    <form action="/search" method="GET" className="w-full items-strech flex">
      <div className="border-none bg-secondary ring-muted-foreground rounded-md group [&:has(:focus-visible)]:ring-1 [&:has(:focus-visible)]:ring-primary [&:has(:focus-visible)]:shadow-lg [&:has(:focus-visible)]:border-transparent w-full items-strech flex">
        <Select name="category">
          <SelectTrigger className="w-auto h-9 border-0 rounded-md rounded-r-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-xs capitalize text-muted-foreground pr-0 mr-2">
            <SelectValue
              placeholder="All"
              className="text-sm text-muted-foreground"
            />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem
              value="all"
              className="cursor-pointer text-xs capitalize text-muted-foreground"
            >
              All
            </SelectItem>
            {categories.map((category) => {
              return (
                <SelectItem
                  key={category}
                  value={category}
                  className="cursor-pointer text-xs capitalize text-muted-foreground"
                >
                  {category}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
        <Input
          type="search"
          placeholder="Search products"
          className="text-foreground w-full appearance-none bg-transparent shadow-none rounded-md border-0 rounded-l-none border-transparent focus-visible:ring-0 focus-visible:ring-offset-0 pl-0"
          //value={search}
          onChange={(event) => {
            event.preventDefault();
          }}
        />
        <button
          type="submit"
          className="bg-primary border-transparent outline-none rounded-r-md px-3"
        >
          <SearchIcon className="w-4 h-4 text-secundary" />
        </button>
      </div>
      {/* <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      </div> */}
    </form>
  );
};

export default SearchInput;
