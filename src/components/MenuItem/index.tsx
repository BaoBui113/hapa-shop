"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

interface MenuItemProps {
  title: string;
  icon?: StaticImport;
  link?: string;
  subMenu?: MenuItemProps[];
}

export function MenuItem({ item }: { item: MenuItemProps }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();

  const toggleSubmenu = () => {
    if (item.subMenu) {
      setIsOpen(!isOpen);
    }
    if (!item.link) return;
    router.push(item.link);
  };

  return (
    <li className="mb-4 text-white">
      <div
        className={`flex items-center justify-between py-2 rounded hover:bg-gray-700 cursor-pointer ${
          isOpen ? "bg-gray-700" : ""
        }`}
        onClick={toggleSubmenu}
      >
        <div className="flex items-center gap-4">
          <div className="relative w-6 h-6">
            {item.icon && <Image src={item.icon} alt="icon" fill />}
          </div>

          <span
            className={
              !!params.id && params.id === item.link?.split("/").pop()
                ? "text-[#0076DC]"
                : "text-white"
            }
          >
            {item.title}
          </span>
        </div>
        {item.subMenu && (
          <span>
            {isOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </span>
        )}
      </div>
      {item.subMenu && isOpen && (
        <ul>
          {item.subMenu.map((subItem, index) => (
            <MenuItem key={index} item={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
}
