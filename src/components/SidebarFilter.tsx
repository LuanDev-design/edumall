import { FaHeart, FaFilter } from "react-icons/fa";

interface Props {
    priceFilter: string;
    setPriceFilter: (val: string) => void;
}

export default function SidebarFilter({ priceFilter, setPriceFilter }: Props) {
    return (
        <aside className="md:col-span-1">
            <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow space-y-4">
                <h2 className="flex items-center gap-2 font-semibold text-gray-700 dark:text-white ">
                    <FaFilter className="text-primary" /> Bộ lọc
                </h2>

                <div className="space-y-2 text-sm">
                    <h3 className="font-medium text-gray-700 dark:text-gray-300">Theo giá</h3>
                    {[
                        { label: "< 200K", value: "<200" },
                        { label: "300K - 500K", value: "300-500" },
                        { label: "> 500K", value: ">500" },
                    ].map(({ label, value }) => (
                        <label key={value} className="flex items-center gap-2  text-gray-800 dark:text-white">
                            <input
                                type="radio"
                                value={value}
                                checked={priceFilter === value}
                                onChange={(e) => setPriceFilter(e.target.value)}
                            />
                            {label}
                        </label>
                    ))}

                    <button
                        onClick={() => setPriceFilter("all")}
                        className="mt-4 w-full px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-white bg-white dark:bg-neutral-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm hover:bg-gray-100 dark:hover:bg-neutral-700 transition"
                    >
                        Xoá bộ lọc
                    </button>
                </div>
            </div>
        </aside>
    );
}
