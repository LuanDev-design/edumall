# 🎓 EduMall – Nền tảng khóa học trực tuyến

EduMall là một nền tảng học tập nơi người dùng có thể **tìm kiếm, lọc, xem chi tiết, đánh dấu yêu thích** và nhận **gợi ý khóa học**.  
Dự án hiện đang dùng **dữ liệu mock** (TypeScript) và **LocalStorage** để lưu trạng thái (yêu thích, lịch sử, gợi ý).

---

## 🧱 Công nghệ sử dụng

| Layer          | Stack / Thư viện chính |
| -------------- | ---------------------- |
| Front-end SSR  | **Next.js 13+ (App Router)** |
| Ngôn ngữ       | **TypeScript** |
| Styling        | **Tailwind CSS** + Dark/Light mode |
| Icons / UI     | **React-Icons**, `next/image` |
| State (client) | **localStorage** (yêu thích, views, gợi ý) |

---

## 📦 Hướng dẫn cài đặt & chạy

```bash
# 1. Clone hoặc giải nén dự án
git clone https://github.com/your-repo/edumall.git
cd edumall                 # (hoặc unzip edumall.zip && cd edumall)

# 2. Cài dependencies
npm install                # hoặc yarn / pnpm

# 3. Chạy môi trường dev
npm run dev
# Truy cập http://localhost:3000

npm run build   # build tối ưu
npm start       # chạy production (mặc định PORT=3000)

.
├── app/                 # App Router (layout.tsx, page.tsx, ... )
│   ├── favorites/       # Trang yêu thích
│   ├── history/         # Trang lịch sử xem
│   └── api/             # Route API gợi ý (/api/suggestions)
├── components/          # Header, SidebarFilter, ProductCard, ProductModal, Toast, ...
├── libs/                # mockProducts.ts (dữ liệu mẫu)
├── public/              # Ảnh courses + favicon
├── styles/              # globals.css, tailwind.config.js
├── types/               # Định nghĩa Product, ...
└── README.md

