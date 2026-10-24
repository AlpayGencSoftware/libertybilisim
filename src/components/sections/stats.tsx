const stats = [
  { value: "150+", label: "Tamamlanan Proje" },
  { value: "50+", label: "Mutlu Müşteri" },
  { value: "8+", label: "Yıllık Deneyim" },
  { value: "7/24", label: "Teknik Destek" },
];

export function Stats() {
  return (
    <section className="border-y bg-blue-600 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-white sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-blue-100">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
