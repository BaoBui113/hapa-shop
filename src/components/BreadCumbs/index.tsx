"use client";
import icon_next from "@/assets/icons/ic_next.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface BreadcrumbItem {
  title: string;
  link?: string;
}

export default function BreadCrumb({ data }: { data: BreadcrumbItem[] }) {
  const router = useRouter();
  return (
    <div className="flex gap-[5px] items-center">
      {data.map((item: BreadcrumbItem, index: number) => (
        <div className="flex gap-[5px] items-center" key={index}>
          <span
            onClick={() => {
              if (!item.link) return;
              router.push(item.link);
            }}
            className={`${
              index < data.length - 1 ? "text-[#999999]" : "text-[#333333]"
            } cursor-pointer`}
          >
            {item.title}
          </span>
          {index < data.length - 1 && (
            <div className="relative w-6 h-6">
              <Image src={icon_next} alt="icon_next" fill />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
