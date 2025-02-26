import icon_home from "@/assets/icons/ic_home_mobile.svg";
import Image from "next/image";
const listFooter = [
  {
    name: "Trang chủ",
    icon: icon_home,
  },
  {
    name: "Lịch thay",
    icon: icon_home,
  },
  {
    name: "Điểm thưởng",
    icon: icon_home,
  },
  {
    name: "Đơn hàng",
    icon: icon_home,
  },
  {
    name: "Cá nhân",
    icon: icon_home,
  },
];
export default function FooterMobile() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white p-4 flex justify-evenly items-center z-40">
      {listFooter.map((item, index) => {
        return (
          <div key={index} className="flex flex-col gap-1 items-center">
            <div className="w-[24px] h-[24px] relative">
              <Image src={item.icon} alt="icon" fill />
            </div>
            <p className="text-xs text-gray-500">{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}
