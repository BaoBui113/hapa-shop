"use client";
import { ChevronDown, ChevronRight } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
const MenuItemProduct = ({
  item,
}: {
  item: {
    title: string;
    icon?: StaticImport;
    link?: string;
    subMenu?: {
      title: string;
      link: string;
    }[];
  };
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggleSubmenu = () => {
    if (item.subMenu) {
      setIsOpen(!isOpen);
    }
    if (!item.link) return;
    router.push(item.link);
  };
  return (
    <>
      <div
        onClick={toggleSubmenu}
        className="flex justify-between items-center hover:bg-[#F0F9FE] hover:text-[#0076DC] hover:rounded-xl "
      >
        <div className="flex items-center group gap-[6px] h-10 cursor-pointer px-3">
          <div className="relative w-5 h-5">
            {item.icon && <Image src={item.icon} alt="icon" fill />}
          </div>
          <span>{item.title}</span>
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

      {item.subMenu &&
        isOpen &&
        item.subMenu.map((sub, index) => {
          return <MenuItemProduct item={sub} key={index} />;
        })}
    </>
  );
};
export default function MenuProduct({
  menuProduct,
}: {
  menuProduct: {
    title: string;
    icon: StaticImport;
    link?: string;
    subMenu?: {
      title: string;
      link: string;
    }[];
  }[];
}) {
  return (
    <div className="flex flex-col">
      {menuProduct.map((item, index) => {
        return <MenuItemProduct item={item} key={index} />;
      })}
    </div>
  );
}
