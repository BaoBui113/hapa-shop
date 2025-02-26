"use client";

import { useState } from "react";
import ChangeDateDesktop from "./ChangeDateDesktop";
import ChangeDateMobile from "./ChangeDateMobile";
// Fake data for multiple addresses
const addressesData = [
  {
    id: "address1",
    title: "Address 1",
    details:
      "***, Tân Hưng, Quận 7, TP. Hồ Chí Minh · L******n · *******975 · Plan ID: ABC12345",
    products: [
      {
        name: "Combo Máy Lọc Nước Đầu Nguồn 3M AP902 + Bộ Lọc Thô 3M",
        items: [
          {
            name: "Lõi lọc RT20RBG20NH 20",
            isLate: true,
            isLeft: false,
            isOnly: false,
            lastChangeDate: "15/05/2024",
            replacementCycle: "6 tháng",
            nextReplacementDate: "15/12/2024",
            price: "850,000đ",
          },
          {
            name: "Lõi lọc AP917HD-S",
            isLeft: true,
            isLate: false,
            isOnly: false,
            lastChangeDate: "20/06/2024",
            replacementCycle: "12 tháng",
            nextReplacementDate: "20/06/2025",
            price: "1,200,000đ",
          },
        ],
      },
      {
        name: "Máy Lọc Nước 3M ICE140-S",
        items: [
          {
            name: "Lõi lọc RT20RBG20NH 20",
            isOnly: true,
            isLate: false,
            isLeft: false,
            lastChangeDate: "15/05/2024",
            replacementCycle: "6 tháng",
            nextReplacementDate: "15/12/2024",
            price: "850,000đ",
          },
        ],
      },
    ],
  },
  {
    id: "address2",
    title: "Address 2",
    details:
      "123, Nguyễn Văn Linh, Quận 4, TP. Hồ Chí Minh · T******g · *******123 · Plan ID: XYZ67890",
    products: [
      {
        name: "Hệ thống Lọc Nước Toàn Nhà",
        items: [
          {
            name: "Bộ lọc thô 3 cấp",
            isLate: true,
            isLeft: false,
            isOnly: false,
            lastChangeDate: "10/04/2024",
            replacementCycle: "3 tháng",
            nextReplacementDate: "10/07/2024",
            price: "450,000đ",
          },
        ],
      },
    ],
  },
];

export default function ChangeDate() {
  const [expandedAddresses, setExpandedAddresses] = useState<string[]>([]);

  const toggleAddress = (addressId: string) => {
    setExpandedAddresses((prev) =>
      prev.includes(addressId)
        ? prev.filter((id) => id !== addressId)
        : [...prev, addressId]
    );
  };

  return (
    <div className="flex flex-col">
      <div className="flex">
        <button className="bg-white rounded-tl-2xl rounded-tr-2xl text-[#0076DC] py-4 px-8 font-bold text-[18px] leading-7">
          Tạo bởi shop
        </button>
        <button className="bg-[#E8EAEB] rounded-tl-2xl rounded-tr-2xl text-[#666666] py-4 px-8 font-bold text-[18px] leading-7">
          Tạo bởi tôi
        </button>
      </div>
      <ChangeDateDesktop
        addressesData={addressesData}
        expandedAddresses={expandedAddresses}
        toggleAddress={toggleAddress}
      />
      <ChangeDateMobile
        addressesData={addressesData}
        expandedAddresses={expandedAddresses}
        toggleAddress={toggleAddress}
      />
    </div>
  );
}
