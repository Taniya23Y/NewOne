interface BlogCardProps {
  title: string;
  brief: string;
  slug: string;
  publishedAt: string;
}

export function HashCard({ title, brief, slug, publishedAt }: BlogCardProps) {
  return (
    <a
      href={`https://taniya23y.hashnode.dev/${slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-lg border border-gray-700 bg-gray-900 shadow hover:border-blue-400 hover:shadow-lg transition duration-300"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="p-5 flex flex-col justify-between lg:w-full">
          <div>
            <h3 className="text-lg lg:text-xl font-semibold text-white leading-snug line-clamp-2 group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            <p className="mt-2 text-sm lg:text-base text-gray-300 leading-relaxed line-clamp-4">
              {brief}
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm lg:text-base text-gray-400">
              Published: {new Date(publishedAt).toLocaleDateString()}
            </span>
            <span className="text-sm lg:text-base font-medium text-blue-400 hover:underline">
              Read More →
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
