import {
  HomeIcon,
  LucideIcon,
  MessageSquareIcon,
  User2Icon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
type MenuItemType = {
  icon: LucideIcon;
  text: string;
  link: string;
};

const MenuDesktop = () => {
  const MenuItem = [
    { icon: HomeIcon, text: "Home", link: "/" },
    { icon: MessageSquareIcon, text: "Chat", link: "/" },
    { icon: User2Icon, text: "Profile", link: "/" },
  ] as MenuItemType[];
  return (
    <>
      <div className="">
        {MenuItem.map((item, index) => {
          return (
            <li className="list-none" key={index}>
              <Link
                className="flex items-center hover:bg-accent px-3 py-2 rounded"
                href={item?.link}
              >
                {<item.icon className="w-5 h-5 mr-2" />} {item?.text}
              </Link>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default MenuDesktop;
