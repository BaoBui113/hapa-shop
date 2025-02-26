import hp_banner from "@/assets/hp-banner.png";
import icon_logo_mobile from "@/assets/icons/ic_mobile_logo.svg";
import icon_show_mobile from "@/assets/icons/ic_show_mobile.svg";
import FooterMobile from "@/components/Footer";
import SideBarUser from "@/components/SidebarUser";
import Image from "next/image";
export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#F3F5F7] min-h-screen min-w-screen">
      <div className="flex">
        <div
          style={{
            boxShadow: "2px 0px 4px 0px #00000029",
          }}
          className="max-w-[220px] w-full bg-white h-full md:block hidden"
        >
          <SideBarUser />
        </div>
        <div className="flex-1 bg-[#F3F5F7]">
          <div
            style={{
              background:
                "linear-gradient(360deg, #F3F5F7 0%, #7AB6EA 25%, #0076DC 50%)",
            }}
            className="w-full h-[368px] relative"
          >
            <div className="flex justify-between items-center px-4 py-2 md:hidden ">
              <div className="w-[112px] h-6 relative">
                <Image src={icon_logo_mobile} alt="icon_logo_mobile" fill />
              </div>
              <div className="w-6 h-6 relative">
                <Image src={icon_show_mobile} alt="icon_show_mobile" fill />
              </div>
            </div>
            <h3 className="px-10 pt-20 font-bold text-[40px] text-white">
              Thay lõi lọc định kỳ
            </h3>
            <div className="absolute right-[262px] top-0 w-[252px] h-[316px] z-0">
              <Image src={hp_banner} alt="hp_banner" fill />
            </div>
            <div className="absolute top-[200px] left-4 right-4 z-10 pb-[70px]">
              {children}
            </div>
          </div>
        </div>
      </div>
      <FooterMobile />
    </div>
  );
}
