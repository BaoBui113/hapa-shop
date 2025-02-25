"use client";
import ic_cart from "@/assets/icons/ic_cart.svg";
import ic_home from "@/assets/icons/ic_home.svg";
import ic_lound from "@/assets/icons/ic_lound.svg";
import ic_personal from "@/assets/icons/ic_personal.svg";
import ic_setting from "@/assets/icons/ic_setting.svg";
import ic_show_more from "@/assets/icons/ic_show_more.svg";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MenuItem } from "../MenuItem";
const menu = [
  {
    title: "Menu 1",
    icon: ic_home,
    link: "/admin/1",
  },
  {
    title: "Menu 2",
    icon: ic_cart,
    link: "/admin/2",
  },
  {
    title: "Menu 3",
    icon: ic_lound,
    link: "/admin/3",
  },
  {
    title: "Menu 4",
    icon: ic_personal,
    subMenu: [
      {
        title: "Menu 4a",
        link: "/admin/4a",
      },
      {
        title: "Menu 4b",
        link: "/admin/4b",
      },
      {
        title: "Menu 4c",
        link: "/admin/4c",
      },
    ],
  },
  {
    title: "Menu 5",
    icon: ic_setting,
    subMenu: [
      {
        title: "Menu 5a",
        link: "/admin/5a",
      },
      {
        title: "Menu 5b",
        link: "/admin/5b",
      },
      {
        title: "Menu 5c",
        link: "/admin/5c",
      },
    ],
  },
];
export default function Sidebar() {
  const router = useRouter();
  return (
    <div className="bg-[#263A53] h-screen overflow-y-auto w-full">
      <div className="py-[18px] px-[10px] mb-[38px]">
        <div className="flex justify-between items-center">
          <div
            className="relative w-[150px] h-8 cursor-pointer"
            onClick={() => router.push("/admin")}
          >
            <Image src={logo} alt="logo" fill />
          </div>
          <div className="relative w-6 h-6 cursor-pointer">
            <Image src={ic_show_more} alt="ic_show_more" fill />
          </div>
        </div>
      </div>
      <ul className="px-[10px]">
        {menu.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}
