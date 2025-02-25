"use client";
import { useState } from "react";

export default function ChangeDate() {
  const [expandedAddress, setExpandedAddress] = useState<string | null>(
    "address1"
  );
  const toggleAddress = (addressId: string) => {
    setExpandedAddress(expandedAddress === addressId ? null : addressId);
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
      <div
        style={{
          //   box-shadow: 0px 6px 16px 0px #00000029;
          boxShadow: "0px 6px 16px 0px #00000029",
        }}
        className="w-full p-8 bg-white"
      >
        <div className="border-b-2">
          <button
            onClick={() => toggleAddress("address1")}
            className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50"
          >
            <div className="text-left">
              <h3 className="font-semibold">Address 1</h3>
              <p className="text-sm text-gray-500">182 Đường...</p>
            </div>
            <svg
              className={`w-5 h-5 transition-transform ${
                expandedAddress === "address1" ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Expanded Content */}
          <div
            className={`px-4 pb-4 ${
              expandedAddress === "address1" ? "block" : "hidden"
            }`}
          >
            <div className="text-sm grid grid-cols-5 gap-4 text-gray-500 mb-4">
              <div>Sản phẩm, dịch vụ</div>
              <div>Ngày mới gần nhất</div>
              <div>Chu kỳ thay thế</div>
              <div>Ngày thay thế tiếp theo</div>
              <div>Đơn giá</div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex gap-4 mb-4">
                {/* <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vu2BBxE6UKG1yDhTCZV2ednu5vv8kQ.png"
                  alt="Filter"
                  width={40}
                  height={40}
                  className="object-contain"
                /> */}
                <div>
                  <h4 className="font-medium">
                    Combo Máy Lọc Nước Đầu Nguồn 3M AP902 + Bộ Lọc Thô 3M
                  </h4>
                </div>
              </div>

              {/* Filter Items */}
              <div className="space-y-2">
                {/* Expired Filter */}
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="grid grid-cols-5 gap-4 text-sm">
                    <div>Lõi lọc RT20RBG20NH 20</div>
                    <div>15/05/2024</div>
                    <div>6 tháng</div>
                    <div>15/12/2024</div>
                    <div>850,000đ</div>
                  </div>
                </div>

                {/* Active Filter */}
                <div className="bg-white border rounded-lg p-4">
                  <div className="grid grid-cols-5 gap-4 text-sm">
                    <div>Lõi lọc 3M AP917HD-S</div>
                    <div>15/05/2024</div>
                    <div>12 tháng</div>
                    <div className="flex items-center gap-2">
                      15/05/2025
                      <span className="px-2 py-0.5 text-xs font-medium text-green-500 border border-green-500 rounded">
                        Còn 10 ngày
                      </span>
                    </div>
                    <div>8,500,000đ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
