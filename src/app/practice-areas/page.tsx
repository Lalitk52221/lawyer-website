const areas = [
  { title: "Family Law", desc: "Divorce, custody, support, and mediation services with compassion and clarity." },
  { title: "Real Estate Law", desc: "Residential and commercial property transactions, leases, and disputes." },
  { title: "Civil Litigation", desc: "Representation in contract disputes, personal injury, and torts." },
  { title: "Corporate Law", desc: "Business formation, contracts, mergers, and compliance." },
  { title: "Wills & Estates", desc: "Estate planning, probate, and trust administration." },
  { title: "Immigration Law", desc: "Visa applications, permanent residency, and citizenship matters." },
];

export default function PracticeAreas() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4 text-center">Practice Areas</h1>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        We offer comprehensive legal services tailored to your needs.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {areas.map((area) => (
          <div key={area.title} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">{area.title}</h3>
            <p className="text-gray-600">{area.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}