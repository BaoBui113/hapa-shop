import hp_banner from "@/assets/hp-banner.png";
import Image from "next/image";
import ChangeDate from "../ChangeDate";
export default function Banner() {
  return (
    <div
      style={{
        background:
          "linear-gradient(360deg, #F3F5F7 0%, #7AB6EA 25%, #0076DC 50%)",
      }}
      className="w-full h-[368px] relative"
    >
      <h3 className="px-10 pt-20 font-bold text-[40px] text-white">
        Thay lõi lọc định kỳ
      </h3>
      <div className="absolute right-[262px] top-0 w-[252px] h-[316px] z-0">
        <Image src={hp_banner} alt="hp_banner" fill />
      </div>
      <div className="absolute top-[200px] left-4 right-4 z-10">
        <ChangeDate />
      </div>
    </div>
  );
}
