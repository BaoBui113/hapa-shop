"use client";
import address1 from "@/assets/icons/ic_address.svg";
import icon_product from "@/assets/icons/ic_product.svg";
import Image from "next/image";
export default function ChangeDateDesktop({
  addressesData,

  expandedAddresses,
  toggleAddress,
}: {
  addressesData: {
    id: string;
    title: string;
    details: string;
    products: {
      name: string;
      items: {
        name: string;
        lastChangeDate: string;
        replacementCycle: string;
        nextReplacementDate: string;
        price: string;
        isLate: boolean;
        isLeft: boolean;
        isOnly: boolean;
      }[];
    }[];
  }[];

  expandedAddresses: string[];
  toggleAddress: (id: string) => void;
}) {
  return (
    <div
      style={{
        boxShadow: "0px 6px 16px 0px #00000029",
      }}
      className="w-full p-8 bg-white md:block hidden"
    >
      {addressesData.map((address) => (
        <div key={address.id} className="border-b-2 last:border-b-0">
          <button
            onClick={() => toggleAddress(address.id)}
            className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50"
          >
            <div className="flex gap-4">
              <div className="relative w-[38px] h-[48px]">
                <Image
                  src={address1 || "/placeholder.svg"}
                  alt="address icon"
                  fill
                />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-xl leading-6 mb-2">
                  {address.title}
                </h3>
                <p className="text-sm text-gray-500">{address.details}</p>
              </div>
            </div>

            <svg
              className={`w-5 h-5 transition-transform ${
                expandedAddresses.includes(address.id) ? "rotate-180" : ""
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

          <div
            className={`px-4 pb-4 ${
              expandedAddresses.includes(address.id) ? "block" : "hidden"
            }`}
          >
            <div className="overflow-x-auto">
              <div className="min-w-[768px]">
                <div className="flex items-center gap-4 text-gray-500 mb-4 ml-[30px] text-center p-4">
                  <div className="w-[30%]">Sản phẩm, dịch vụ</div>
                  <div className="w-[20%]">Ngày mới gần nhất</div>
                  <div className="w-[20%]">Chu kỳ thay thế</div>
                  <div className="w-[20%]">Ngày thay thế tiếp theo</div>
                  <div className="w-[10%]">Đơn giá</div>
                </div>

                {address.products.map((product, productIndex) => (
                  <div
                    key={productIndex}
                    className="border rounded-bl-2xl rounded-br-2xl p-4 bg-[#F6F6F6] mb-4"
                  >
                    <div className="flex gap-4 mb-4 items-center">
                      <Image
                        src={icon_product || "/placeholder.svg"}
                        alt="Product"
                        width={50}
                        height={50}
                        className="object-contain flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-light text-xl leading-6 text-[#999999]">
                          {product.name}
                        </h4>
                      </div>
                    </div>

                    <div className="space-y-2 ml-16">
                      {product.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className={`rounded-lg p-4 ${
                            item.isLate
                              ? "bg-[#FFAEB8]"
                              : item.isLeft
                              ? "bg-[#FFFCE9]"
                              : item.isOnly
                              ? "bg-[#FFFFFF]"
                              : "bg-white border"
                          }`}
                        >
                          <div className="flex gap-4 text-sm items-center text-center">
                            <div className="w-[30%] flex gap-2 items-center">
                              <Image
                                src={icon_product || "/placeholder.svg"}
                                alt="Filter"
                                width={50}
                                height={50}
                                className="object-contain flex-shrink-0"
                              />
                              <span>{item.name}</span>
                            </div>
                            <div className="w-[20%]">{item.lastChangeDate}</div>
                            <div className="w-[20%]">
                              {item.replacementCycle}
                            </div>
                            <div className="w-[20%]">
                              {item.nextReplacementDate}
                            </div>
                            <div className="w-[10%]">{item.price}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
