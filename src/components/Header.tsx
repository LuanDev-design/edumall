"use client";

import { FiSearch } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export default function Header({ searchTerm, setSearchTerm }: HeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-6 bg-white dark:bg-neutral-800 shadow-md">
      {/* Logo */}
      <Link href="/">
        <div className="text-xl sm:text-2xl font-bold text-blue-700 dark:text-white cursor-pointer hover:opacity-80 transition">
          🎓 EduMall
        </div>
      </Link>

      {/* Search input */}
      <div className="flex items-center w-full sm:w-1/2 relative">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Tìm khoá học..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Menu items */}
      <div className="flex items-center gap-4 text-sm">
        <ThemeToggle />
        <Link href="/favorites">
          <div className="font-medium cursor-pointer text-gray-700 dark:text-white hover:text-blue-600 transition">
            ❤️ Yêu thích
          </div>
        </Link>
        <Link href="/history">
          <div className="font-medium cursor-pointer text-gray-700 dark:text-white hover:text-blue-600 transition">
            🕘 Lịch sử xem
          </div>
        </Link>
      </div>
    </header>
  );
}
