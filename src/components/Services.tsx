export default function Services() {
  const services = [
    "Criminal Law",
    "Property Law",
    "Family Law",
    "Corporate Law",
    "Documentation",
    "Legal Advice",
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center">
          Practice Areas
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {services.map((service) => (
            <div
              key={service}
              className="border p-6 rounded-xl shadow"
            >
              {service}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}