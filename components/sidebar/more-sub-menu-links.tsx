import Link from "next/link";
import { moreSubMenuLinks } from "@/lib/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const MoreSubMenuLinks = () => {
  return (
    <div className="ml-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="link"
            className="focus-visible:ring-0 hover:background-transparent border text-white font-medium hover:no-underline hover:border hover:border-white rounded-[2px] flex flex-row gap-1"
          >
            <span>More</span>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-60" align="start" sideOffset={2}>
          {moreSubMenuLinks.map((link) => {
            const { id, href, name } = link;
            return (
              <DropdownMenuItem
                key={id}
                asChild
                className="cursor-pointer w-full capitalize "
              >
                <Link href={href}>{name}</Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default MoreSubMenuLinks;

{
  /* <div className="flex items-center flex-nowrap gap-3 ml-3 max-h-[42px]">
      {subMenuLinks.map((link) => {
        const { id, name, href } = link;
        return (
          <Link
            href={href}
            key={id}
            className="text-white p-2 text-sm border border-transparent font-medium hover:border hover:border-white rounded-[2px] text-nowrap "
          >
            {name}
          </Link>
        );
      })}
      </div> */
}
