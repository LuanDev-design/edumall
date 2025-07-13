"use client";
import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface Props {
  priceFilter: string;
  setPriceFilter: (val: string) => void;
  categoryFilter: string;
  setCategoryFilter: (val: string) => void;
}

export default function SidebarFilter({
  priceFilter,
  setPriceFilter,
  categoryFilter,
  setCategoryFilter,
}: Props) {
  const [openMobile, setOpenMobile] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const categories = ["All", "IT", "English", "Soft Skills"];

  // 👂 Đóng khi click ra ngoài sidebar (mobile only)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        openMobile &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setOpenMobile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMobile]);

  return (
    <>
      {/* 👉 Nút mở sidebar trên mobile */}
      <div className="md:hidden mb-4 flex justify-end">
        <button
          onClick={() => setOpenMobile(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
        >
          <FaFilter /> Bộ lọc
        </button>
      </div>

      {/* 👉 Sidebar chính */}
      <aside
        className={`${
          openMobile ? "fixed inset-0 z-50 bg-black bg-opacity-50 flex" : "hidden"
        } md:block md:relative md:col-span-1`}
      >
        <div
          ref={sidebarRef}
          className={`
            w-full max-w-xs md:max-w-full md:static md:translate-x-0
            bg-white dark:bg-neutral-800 p-4 rounded-lg shadow space-y-6 border border-indigo-300 dark:border-gray-700
            transform transition-transform duration-300
            ${openMobile ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          {/* ❌ Nút đóng mobile */}
          <div className="md:hidden flex justify-end">
            <button
              onClick={() => setOpenMobile(false)}
              className="text-xl text-gray-700 dark:text-white"
            >
              <IoClose />
            </button>
          </div>

          <h2 className="flex items-center gap-2 font-semibold text-gray-700 dark:text-white">
            <FaFilter className="text-primary" /> Bộ lọc
          </h2>

          {/* 🎯 Dropdown thể loại */}
          <div className="space-y-2 text-sm">
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
              Thể loại
            </label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-800 px-3 py-2 text-gray-800 dark:text-white text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* 💰 Lọc theo giá */}
          <div className="space-y-2 text-sm">
            <h3 className="font-medium text-gray-700 dark:text-gray-300">Theo giá</h3>
            {[
              { label: "< 200K", value: "<200" },
              { label: "300K - 500K", value: "300-500" },
              { label: "> 500K", value: ">500" },
            ].map(({ label, value }) => (
              <label
                key={value}
                className="flex items-center gap-2 text-gray-800 dark:text-white"
              >
                <input
                  type="radio"
                  name="price"
                  value={value}
                  checked={priceFilter === value}
                  onChange={(e) => setPriceFilter(e.target.value)}
                />
                {label}
              </label>
            ))}
          </div>

          {/* ❌ Nút xoá bộ lọc */}
          <button
            onClick={() => {
              setPriceFilter("all");
              setCategoryFilter("All");
              setOpenMobile(false); // tự đóng sidebar mobile
            }}
            className="mt-2 w-full px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-white bg-white dark:bg-neutral-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm hover:bg-gray-100 dark:hover:bg-neutral-700 transition"
          >
            Xoá bộ lọc
          </button>
        </div>
      </aside>
    </>
  );
}
