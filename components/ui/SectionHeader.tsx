type Props = {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionHeader({
  badge,
  title,
  description,
  center = true,
}: Props) {
  return (
    <div className={center ? "mb-16 text-center" : "mb-16"}>
      {badge && (
        <span className="text-sm font-semibold uppercase tracking-[0.4em] text-red-500">
          {badge}
        </span>
      )}

      <h2 className="mt-4 text-5xl font-black text-white">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}