import { subMenuLinks } from "@/lib/data";
import Link from "next/link";

const SubMenuLinks = () => {
  return (
    <div className="flex items-center flex-nowrap gap-0 sm:gap-3 ml-3 max-h-[42px]">
      {subMenuLinks.map((link) => {
        const { id, name, href } = link;
        return (
          <Link
            href={href}
            key={id}
            className="text-white p-2 text-sm border border-transparent font-medium hover:border hover:border-white rounded-[2px] text-nowrap"
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
};
export default SubMenuLinks;
