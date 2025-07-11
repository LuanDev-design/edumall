import { Product } from "@/types/product";

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Khóa học React cơ bản",
    description: "Học React từ con số 0 đến làm được dự án.",
    longDescription:
      "Khóa học React cơ bản sẽ giúp bạn nắm vững kiến thức nền tảng về React, bao gồm component, props, state, useEffect và JSX. Bạn sẽ thực hành thông qua các bài tập thực tế và xây dựng một dự án web đơn giản hoàn chỉnh.",
    price: "199.000₫",
    image: "/images/khoa-hoc-react.png",
    rating: 4.8,
  },
  {
    id: 2,
    name: "TypeScript chuyên sâu",
    description: "Hiểu rõ TS để viết code an toàn hơn.",
    longDescription:
      "Khóa học TypeScript chuyên sâu giúp bạn sử dụng TypeScript thành thạo trong các dự án thực tế. Bạn sẽ học về type inference, generics, enums, utility types và tích hợp TypeScript với React để nâng cao chất lượng mã nguồn.",
    price: "599.000₫",
    image: "/images/Typescript.png",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Thiết kế UI với Figma",
    description: "Học thiết kế UI/UX cho web hiện đại.",
    longDescription:
      "Khóa học giúp bạn làm quen với giao diện và công cụ của Figma, thiết kế layout hiện đại, tạo prototype, xây dựng hệ thống lưới, style guide và chuyển file thiết kế sang code một cách dễ dàng.",
    price: "399.000₫",
    image: "/images/Figma.png",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Tiếng Anh Giao Tiếp Cho Người Mới Bắt Đầu",
    description: "Học từ vựng, ngữ pháp và kỹ năng giao tiếp cơ bản.",
    longDescription:
      "Khóa học này phù hợp cho người mới bắt đầu học tiếng Anh. Bạn sẽ được học từ vựng thông dụng, ngữ pháp căn bản, cách phát âm chuẩn và luyện tập giao tiếp qua các tình huống thực tế như chào hỏi, mua sắm, hỏi đường,...",
    price: "499.000₫",
    image: "/images/Englishonl.png",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Phát Âm Tiếng Anh Chuẩn Mỹ",
    description: "Luyện phát âm từ người bản xứ, cải thiện speaking.",
    longDescription:
      "Khóa học tập trung vào kỹ thuật phát âm chuẩn theo giọng Mỹ, luyện ngữ điệu, trọng âm và nối âm trong giao tiếp. Bài học được xây dựng với các đoạn hội thoại, bài tập nghe-nói giúp bạn tiến bộ nhanh chóng.",
    price: "699.000₫",
    image: "/images/Englishonl1.png",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Tiếng Anh Qua Phim Ảnh",
    description: "Vừa học vừa giải trí giúp bạn nhớ lâu, dùng tự nhiên.",
    longDescription:
      "Bạn sẽ học từ vựng, cấu trúc câu và cách sử dụng tiếng Anh qua các đoạn phim nổi tiếng. Phương pháp này giúp tăng khả năng nghe hiểu, phản xạ tự nhiên và cảm nhận ngữ cảnh sử dụng ngôn ngữ thực tế.",
    price: "599.000₫",
    image: "/images/Englishonl2.png",
    rating: 4.3,
  },
  {
    id: 7,
    name: "IELTS Writing Task 1 & 2",
    description: "Chiến thuật viết bài thi IELTS đạt điểm cao.",
    longDescription:
      "Khóa học cung cấp chiến lược viết hiệu quả cho cả Task 1 và Task 2, bao gồm cách phân tích đề, lập dàn ý, mở rộng ý tưởng và sử dụng từ vựng học thuật. Phù hợp với học viên đang luyện thi IELTS từ 5.5 trở lên.",
    price: "899.000₫",
    image: "/images/Englishonl3.png",
    rating: 4.4,
  },
  {
    id: 8,
    name: "Khóa Học Ngữ Pháp Tổng Hợp",
    description: "Ôn tập toàn bộ kiến thức ngữ pháp nền tảng.",
    longDescription:
      "Khóa học ngữ pháp tổng hợp giúp bạn hệ thống lại tất cả các điểm ngữ pháp quan trọng như thì, câu điều kiện, mệnh đề quan hệ, so sánh, câu bị động,... Bài giảng ngắn gọn, dễ hiểu, kèm theo bài tập thực hành.",
    price: "399.000₫",
    image: "/images/Englishonl4.png",
    rating: 4.2,
  },
  {
  id: 9,
  name: "Lập Trình Web Fullstack Với MERN",
  description: "Học từ frontend đến backend với MongoDB, Express, React và Node.js.",
  longDescription:
    "Khóa học Fullstack MERN giúp bạn trở thành lập trình viên toàn diện. Bạn sẽ được học cách xây dựng ứng dụng web hoàn chỉnh từ frontend (React) đến backend (Node.js, Express) và cơ sở dữ liệu MongoDB. Bao gồm triển khai thực tế, xác thực người dùng, REST API, JWT và deploy lên Vercel/Render.",
  price: "999.000₫",
  image: "/images/mern-fullstack.png",
  rating: 4.9,
},
{
  id: 10,
  name: "Khóa Học Next.js 14 Toàn Tập",
  description: "Tạo ứng dụng web hiện đại với App Router & Server Actions.",
  longDescription:
    "Khóa học giúp bạn nắm vững kiến thức mới nhất về Next.js 14, bao gồm App Router, Server Actions, Routing động, SSR, ISR và tối ưu hiệu suất. Bạn sẽ xây dựng một project thực tế tích hợp API và CMS.",
  price: "799.000₫",
  image: "/images/nextjs14.png",
  rating: 4.8,
},
{
  id: 11,
  name: "Kỹ Năng Thuyết Trình Tự Tin",
  description: "Chinh phục sân khấu, truyền tải ý tưởng hiệu quả.",
  longDescription:
    "Khóa học rèn luyện kỹ năng trình bày, kiểm soát giọng nói, ngôn ngữ cơ thể và quản lý sự lo lắng. Phù hợp cho học sinh, sinh viên và người đi làm muốn cải thiện khả năng giao tiếp trước đám đông.",
  price: "349.000₫",
  image: "/images/thuyettrinh.png",
  rating: 4.5,
},
{
  id: 12,
  name: "Thiết Kế Portfolio Cá Nhân Bằng HTML/CSS",
  description: "Xây dựng trang cá nhân ấn tượng cho CV hoặc showcase.",
  longDescription:
    "Khóa học giúp bạn tự thiết kế và code một trang portfolio hiện đại bằng HTML5 và CSS3 (có thêm responsive). Bao gồm cả hiệu ứng cuộn mượt, animation cơ bản và best practice về UI/UX dành cho developer.",
  price: "199.000₫",
  image: "/images/portfolio-html-css.png",
  rating: 4.6,
}

];

