"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import { FaRobot } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import ProductModal from "./ProductModal";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: "user" | "bot"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [suggested, setSuggested] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { from: "user", text: userMsg }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyword: userMsg }),
      });

      const data: Product[] = await res.json();
      if (data.length > 0) {
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: `Tôi đã tìm thấy ${data.length} khóa học phù hợp cho bạn.` },
        ]);
        setSuggested(data);
      } else {
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: "Xin lỗi, tôi chưa tìm được khóa học nào phù hợp." },
        ]);
        setSuggested([]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Có lỗi xảy ra khi kết nối với máy chủ." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // components/ChatBot.tsx  (phần ... giữ nguyên, chỉ thay JSX return)
return (
    <>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
  
      {/* FAB / Chatbox */}
      <div className="fixed bottom-4 right-4 z-50">
        {/* ➕ FAB */}
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="w-14 h-14 bg-blue-600  dark:text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition sm:w-16 sm:h-16"
            aria-label="Mở chatbot"
          >
            <FaRobot size={24} />
          </button>
        )}
  
        {/* 📥 Chat box */}
        {open && (
          <div
            className="
              w-[90vw] sm:w-80            /* full-width mobile, 20rem desktop */
              max-h-[80vh]                /* cao 80% view-height */
              bg-white dark:bg-neutral-900
              rounded-t-lg sm:rounded-lg  /* mobile bo góc trên, desktop bo full */
              shadow-xl flex flex-col overflow-hidden
            "
          >
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-2 bg-blue-600 text-white font-semibold">
              <span>🤖 Chatbot tư vấn</span>
              <button onClick={() => setOpen(false)} className="text-xl">
                <IoClose />
              </button>
            </div>
  
            {/* Messages */}
            <div className="flex-1 p-3 overflow-y-auto bg-gray-50 dark:bg-neutral-800 space-y-1 text-sm">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`px-3 py-2 rounded-lg max-w-[80%] ${
                    msg.from === "user"
                      ? "bg-blue-600 dark:text-white ml-auto"
                      : "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {loading && <p className="animate-pulse text-gray-500">Đang tìm kiếm khóa học...</p>}
            </div>
  
            {/* Input */}
            <div className="p-2 border-t dark:border-neutral-700 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 px-3 py-2 rounded-md text-sm border dark:bg-neutral-800 text-gray-800 dark:text-white"
                placeholder="Bạn muốn học gì?"
              />
              <button
                onClick={handleSend}
                className="px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm flex-shrink-0"
              >
                Gửi
              </button>
            </div>
  
            {/* Gợi ý – thu gọn */}
            {suggested.length > 0 && (
              <div className="p-3 bg-white dark:bg-neutral-900 border-t dark:border-neutral-800">
                <p className="font-medium text-gray-800 dark:text-white mb-2 text-sm">🎯 Gợi ý khóa học:</p>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {suggested.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => setSelectedProduct(p)}
                      className="cursor-pointer flex items-center gap-3 p-2 border rounded hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
                    >
                      <img src={p.image} alt={p.name} className="w-10 h-10 object-cover rounded" />
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-gray-800 dark:text-white line-clamp-1">
                          {p.name}
                        </span>
                        <span className="text-xs text-blue-600">{p.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
  
}
