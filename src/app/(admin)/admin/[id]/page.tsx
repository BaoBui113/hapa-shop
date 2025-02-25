import avatar from "@/assets/avatar.png";
import ic_add from "@/assets/icons/ic_add.svg";
import ic_arrow_down from "@/assets/icons/ic_arrow_down.svg";
import ic_filter from "@/assets/icons/ic_filter.svg";
import icon_search from "@/assets/icons/ic_search.svg";
import Avatar from "@/components/Avatar";
import BreadCrumb from "@/components/BreadCumbs";
import Input from "@/components/Input";
import ExpandableTable from "@/components/TableProducts";
import Image from "next/image";
export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const slug = (await params).id;
  const data = [
    {
      title: "Trang chủ",
      link: "/admin",
    },
    {
      title: `Sản phẩm ${slug}`,
    },
  ];
  return (
    <div className="flex flex-col gap-y-4">
      <div className="bg-white px-[30px] py-4">
        <div className="flex justify-between">
          <BreadCrumb data={data} />
          <div className="flex gap-3 items-center">
            <Avatar src={avatar} />
            <span>Nguyễn Chí Toàn</span>
            <div className="relative w-6 h-6 cursor-pointer">
              <Image src={ic_arrow_down} alt="arrow down" fill />
            </div>
          </div>
        </div>
      </div>
      <div className="px-[30px] flex justify-between items-center">
        <span className="text-[#333333] font-semibold text-2xl">Sản phẩm</span>
        <div className="flex gap-1 items-center bg-[#0076DC] rounded w-[114px] h-9 justify-center text-white cursor-pointer">
          <div className="relative w-6 h-6">
            <Image src={ic_add} alt="ic_add" fill />
          </div>
          <span>Tạo mới </span>
        </div>
      </div>
      <div className="px-[30px]">
        <div className="bg-white w-full py-4">
          <div className="text-[#0076DC] font-bold text-sm border-b-2 border-[#E8EAEB] mb-4 pb-4 relative">
            <span>Tất cả</span>
            <div className="absolute bottom-0 bg-[#0076DC] h-[3px] w-[72px]"></div>
          </div>
          <div className="flex pl-5 mb-4 max-w-[730px] w-full">
            <div className="w-[55%]">
              <Input
                placeholder="Tìm theo tên Sản phẩm gốc, Mã SKU sản phẩm"
                className="pl-10 pr-4"
                icon={
                  <>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6">
                      <Image src={icon_search} alt="search" fill />
                    </div>
                  </>
                }
              />
            </div>
            <div className="flex-1">
              <select className="border border-[#E8EAEB] w-full h-9 px-2 outline-none">
                <option value="">Thương hiệu</option>
              </select>
            </div>
            <div className="w-[18%]">
              <Input
                placeholder="Bộ lọc khác"
                className="pl-2 pr-8"
                icon={
                  <>
                    <div className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6">
                      <Image src={ic_filter} alt="filter" fill />
                    </div>
                  </>
                }
              />
            </div>
          </div>
          <ExpandableTable />
        </div>
      </div>
    </div>
  );
}
