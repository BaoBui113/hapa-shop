import avatar from "@/assets/avtar_user.svg";
import logo from "@/assets/hapa-logo.png";
import ic_home_product from "@/assets/icons/ic_home_product.svg";
import loyalty from "@/assets/loyalty.png";
import Image from "next/image";
import Avatar from "../Avatar";
import MenuProduct from "../MenuProduct";
const menuProduct = [
  {
    title: "Trang chủ",
    icon: ic_home_product,
    link: "/",
  },
  {
    title: "Thời gian thay lõi",
    icon: ic_home_product,
    link: "/",
  },
  {
    title: "Lịch sử đơn hàng",
    icon: ic_home_product,
    link: "/",
  },
  {
    title: "Điểm tích lũy",
    icon: ic_home_product,
    link: "/",
  },
  {
    title: "Tài khoản",
    icon: ic_home_product,
    link: "/",
  },
  {
    title: "Tính năng khác",
    icon: ic_home_product,
    subMenu: [
      {
        title: "Setting",
        link: "/setting",
      },
    ],
  },
];
export default function SideBarUser() {
  return (
    <div className="px-2">
      <div className="relative w-[112px] h-6 mt-6 mb-8 mx-auto">
        <Image src={logo} alt="logo" fill />
      </div>
      <div className="flex gap-[6px] items-center my-4">
        <Avatar src={avatar} />
        <span className="text-[#333333] font-bold">Nguyễn Huỳnh Như</span>
      </div>
      <MenuProduct menuProduct={menuProduct} />
      <div className="mt-[72px] mb-4 flex flex-col gap-4">
        <div className="relative w-[188px] h-[55px] mx-auto">
          <Image src={loyalty} alt="loyalty" fill />
        </div>
        <span className="text-[#999999] font-light text-xs leading-[14px] text-center">
          Hotline: 0977.190.775
        </span>
      </div>
    </div>
  );
}
