// components/ProductCardSkeleton.tsx
export default function ProductCardSkeleton() {
    return (
      <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-md p-4 animate-pulse space-y-4">
        <div className="h-32 sm:h-44 md:h-48 xl:h-56 bg-gray-200 dark:bg-neutral-700 rounded-md" />
        <div className="h-4 bg-gray-200 dark:bg-neutral-700 rounded w-3/4" />
        <div className="h-4 bg-gray-200 dark:bg-neutral-700 rounded w-1/2" />
        <div className="h-8 bg-gray-200 dark:bg-neutral-700 rounded w-full" />
      </div>
    );
  }
  