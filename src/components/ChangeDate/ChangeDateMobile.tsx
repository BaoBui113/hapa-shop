"use client";
import address1 from "@/assets/icons/ic_address.svg";
import icon_product from "@/assets/icons/ic_product.svg";
import Image from "next/image";

export default function ChangeDateMobile({
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
      className="w-full p-8 bg-white md:hidden block"
    >
      {addressesData.map((address) => (
        <div key={address.id} className="border-b-2 last:border-b-0">
          <button
            onClick={() => toggleAddress(address.id)}
            className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50"
          >
            <div className="flex gap-4">
              <div className="relative w-[38px] h-[48px] flex-shrink-0">
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
              className={`w-5 h-5 flex-shrink-0 transition-transform ${
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

                <div className="space-y-2 ml-0 sm:ml-16">
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
                      <div className="md:hidden space-y-3">
                        <div className="flex gap-2 items-center">
                          <Image
                            src={icon_product || "/placeholder.svg"}
                            alt="Filter"
                            width={40}
                            height={40}
                            className="object-contain flex-shrink-0"
                          />
                          <span className="text-sm font-medium">
                            {item.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="7.5"
                              stroke="currentColor"
                            />
                            <path
                              d="M12 8v4l2.5 2.5"
                              stroke="currentColor"
                              strokeLinecap="round"
                            />
                          </svg>
                          <span>{item.lastChangeDate}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 8v4l2.5 2.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              stroke="currentColor"
                              strokeLinecap="round"
                            />
                          </svg>
                          <span>{item.replacementCycle}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              stroke="currentColor"
                              strokeLinecap="round"
                            />
                          </svg>
                          <span>{item.nextReplacementDate}</span>
                          {item.isLeft && (
                            <span className="text-green-600 text-xs">
                              Còn 30 ngày
                            </span>
                          )}
                          {item.isLate && (
                            <span className="text-red-600 text-xs">
                              Trễ 12 ngày
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium">
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 8v1M12 7H7.5a2.5 2.5 0 100 5M12 15v1c0 1.657-1.343 3-3 3"
                              stroke="currentColor"
                              strokeLinecap="round"
                            />
                          </svg>
                          <span>{item.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
