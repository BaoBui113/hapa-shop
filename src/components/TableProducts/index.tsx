"use client";
import ic_close from "@/assets/icons/ic_close.svg";
import ic_open from "@/assets/icons/ic_open.svg";
import product1 from "@/assets/product-1.png";
import Image from "next/image";
import React, { useState } from "react";
const products = [
  {
    id: 1,
    name: "Máy Lọc Nước RYO Hyundai RP901",
    brand: "3M",
    sku: "RP901",
    usage: 110,
    img: product1,
    details: [
      {
        img: product1,
        name: "Lõi lọc RYO Sediment Filter",
        sku: "RYO Sediment",
        cycle: "6 tháng",
        price: "280,000đ",
      },
      {
        img: product1,
        name: "Lõi lọc RYO Pre-Carbon Filter",
        sku: "RYO Pre-Carbon",
        cycle: "9 tháng",
        price: "300,000đ",
      },
      {
        img: product1,
        name: "Lõi lọc RYO UF Membrane Filter",
        sku: "RYO UF",
        cycle: "24 tháng",
        price: "680,000đ",
      },
      {
        img: product1,
        name: "Lõi lọc RYO Post Carbon Filter",
        sku: "RYO Post Carbon",
        cycle: "12 tháng",
        price: "320,000đ",
      },
      {
        img: product1,
        name: "Lõi lọc RYO TCR Filter",
        sku: "RYO TCR",
        cycle: "12 tháng",
        price: "360,000đ",
      },
    ],
  },
  {
    id: 2,
    name: "Combo Máy Lọc Nước Đầu Nguồn 3M AP904...",
    brand: "3M",
    sku: "RP901",
    usage: 110,
    img: product1,
    details: [
      {
        img: product1,
        name: "Lõi lọc RYO Sediment Filter",
        sku: "RYO Sediment",
        cycle: "6 tháng",
        price: "280,000đ",
      },
      {
        img: product1,
        name: "Lõi lọc RYO Pre-Carbon Filter",
        sku: "RYO Pre-Carbon",
        cycle: "9 tháng",
        price: "300,000đ",
      },
      {
        img: product1,
        name: "Lõi lọc RYO UF Membrane Filter",
        sku: "RYO UF",
        cycle: "24 tháng",
        price: "680,000đ",
      },
      {
        img: product1,
        name: "Lõi lọc RYO Post Carbon Filter",
        sku: "RYO Post Carbon",
        cycle: "12 tháng",
        price: "320,000đ",
      },
      {
        img: product1,
        name: "Lõi lọc RYO TCR Filter",
        sku: "RYO TCR",
        cycle: "12 tháng",
        price: "360,000đ",
      },
    ],
  },
  {
    id: 3,
    name: "Máy Lọc Nước 3M BREW120-MS",
    brand: "3M",
    sku: "RP901",
    usage: 110,
    img: product1,
    details: [
      {
        img: product1,
        name: "Lõi lọc RYO Sediment Filter",
        sku: "RYO Sediment",
        cycle: "6 tháng",
        price: "280,000đ",
      },
      {
        img: product1,
        name: "Lõi lọc RYO Pre-Carbon Filter",
        sku: "RYO Pre-Carbon",
        cycle: "9 tháng",
        price: "300,000đ",
      },
      {
        img: product1,
        name: "Lõi lọc RYO UF Membrane Filter",
        sku: "RYO UF",
        cycle: "24 tháng",
        price: "680,000đ",
      },
      {
        img: product1,
        name: "Lõi lọc RYO Post Carbon Filter",
        sku: "RYO Post Carbon",
        cycle: "12 tháng",
        price: "320,000đ",
      },
      {
        img: product1,
        name: "Lõi lọc RYO TCR Filter",
        sku: "RYO TCR",
        cycle: "12 tháng",
        price: "360,000đ",
      },
    ],
  },
  {
    id: 4,
    name: "Máy Lọc Nước RYO Hyundai RP901",
    brand: "3M",
    sku: "RP901",
    usage: 110,
    img: product1,
    details: [
      {
        img: product1,
        name: "Lõi lọc RYO Sediment Filter",
        sku: "RYO Sediment",
        cycle: "6 tháng",
        price: "280,000đ",
      },
      {
        img: product1,
        name: "Lõi lọc RYO Pre-Carbon Filter",
        sku: "RYO Pre-Carbon",
        cycle: "9 tháng",
        price: "300,000đ",
      },
      {
        img: product1,
        name: "Lõi lọc RYO UF Membrane Filter",
        sku: "RYO UF",
        cycle: "24 tháng",
        price: "680,000đ",
      },
      {
        img: product1,
        name: "Lõi lọc RYO Post Carbon Filter",
        sku: "RYO Post Carbon",
        cycle: "12 tháng",
        price: "320,000đ",
      },
      {
        img: product1,
        name: "Lõi lọc RYO TCR Filter",
        sku: "RYO TCR",
        cycle: "12 tháng",
        price: "360,000đ",
      },
    ],
  },
];

export default function ExpandableTable() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(products.map((product) => product.id));
    }
    setSelectAll(!selectAll);
  };

  const toggleSelectProduct = (id: number) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };
  return (
    <div>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-[#E8EAEB] text-left h-14">
            <th className="p-2 "></th>
            <th className="p-2">
              <input
                className="w-4 h-4"
                type="checkbox"
                checked={selectAll}
                onChange={toggleSelectAll}
              />
            </th>
            <th className="p-2 ">Ảnh</th>
            <th className="p-2">Sản phẩm gốc</th>
            <th className="p-2">Thương hiệu</th>
            <th className="p-2">Mã SKU</th>
            <th className="p-2">Tổng lượt sử dụng</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <React.Fragment key={product.id}>
              <tr
                key={product.id}
                className={`border-b cursor-pointer hover:bg-gray-50 ${
                  expanded === product.id ? "bg-[#F0F9FE]" : ""
                }`}
                onClick={() =>
                  setExpanded(expanded === product.id ? null : product.id)
                }
              >
                <td className="p-2">
                  {expanded === product.id ? (
                    <div className="relative w-6 h-6">
                      <Image src={ic_open} alt="ic_close" fill />
                    </div>
                  ) : (
                    <div className="relative w-6 h-6">
                      <Image src={ic_close} alt="ic_close" fill />
                    </div>
                  )}
                </td>
                <td className="p-2">
                  <input
                    className="w-4 h-4"
                    type="checkbox"
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => toggleSelectProduct(product.id)}
                  />
                </td>
                <td className="p-2">
                  <Image
                    src={product.img}
                    width={36}
                    height={36}
                    alt="product"
                  />
                </td>

                <td className="p-2">{product.name}</td>
                <td className="p-2">{product.brand}</td>
                <td className="p-2">{product.sku}</td>
                <td className="p-2">{product.usage}</td>
              </tr>
              {expanded === product.id && (
                <tr className="w-full ">
                  <td colSpan={8} className="pl-[60px] pt-5 pb-7 bg-[#F0F9FE]">
                    <table className="w-full border border-gray-300 bg-gray-50 pl-16">
                      <thead>
                        <tr className="bg-gray-200 text-left">
                          <th className="p-2 ">Ảnh</th>
                          <th className="p-2">Sản phẩm</th>
                          <th className="p-2">Mã SKU</th>
                          <th className="p-2">Chu kỳ chăm sóc</th>
                          <th className="p-2">Giá bán</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.details.map((detail, index) => (
                          <tr key={index} className="border-b">
                            <td className="p-2">
                              <Image
                                src={product.img}
                                width={36}
                                height={36}
                                alt="product"
                              />
                            </td>
                            <td className="p-2">{detail.name}</td>
                            <td className="p-2">{detail.sku}</td>
                            <td className="p-2">{detail.cycle}</td>
                            <td className="p-2">{detail.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
