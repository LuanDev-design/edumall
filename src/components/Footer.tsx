// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-blue-200 dark:bg-neutral-900 text-gray-600 dark:text-gray-300 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Logo hoặc tên thương hiệu */}
          <div className="text-center sm:text-left text-sm font-medium">
            © {new Date().getFullYear()} <span className="font-semibold text-blue-600 dark:text-blue-400">Thành Luân</span>. All rights reserved.
          </div>
  
          {/* Điều hướng nhanh */}
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm">
            <a href="#" className="hover:text-blue-600 transition">Giới thiệu</a>
            <a href="#" className="hover:text-blue-600 transition">Liên hệ</a>
            <a href="#" className="hover:text-blue-600 transition">Chính sách</a>
            <a href="#" className="hover:text-blue-600 transition">Hỗ trợ</a>
          </div>
        </div>
      </footer>
    );
  }
  