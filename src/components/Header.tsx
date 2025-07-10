"use client";

import { FiSearch, FiHeart } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export default function Header({ searchTerm, setSearchTerm }: HeaderProps) {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-white dark:bg-neutral-800 shadow-md">
      <div className="text-xl font-bold text-blue-700 dark:text-white">🎓 EduMall</div>

      <div className="flex items-center w-full md:w-1/2 relative">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 " />
        <input
          type="text"
          placeholder="Tìm khoá học..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 text-sm text-gray-700 dark:text-white"
        />
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <div className="flex items-center gap-1 cursor-pointer text-sm text-gray-600 hover:text-red-500">
          <FiHeart className="text-lg" />
          Favorites
        </div>
      </div>
    </header>
  );
}
