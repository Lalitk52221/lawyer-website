export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">About Our Firm</h1>
      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
        Smith & Associates has been serving the Toronto community for over two decades. Our team of
        dedicated lawyers brings deep expertise in family law, civil litigation, real estate transactions,
        and corporate law to every client we represent.
      </p>
      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
        We believe in personalized service — every client receives direct access to their lawyer,
        transparent pricing, and a commitment to achieving the best possible outcome.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="bg-gray-50 p-8 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Our Mission</h3>
          <p className="text-gray-600">To provide accessible, high-quality legal services to individuals and businesses throughout Ontario.</p>
        </div>
        <div className="bg-gray-50 p-8 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Our Values</h3>
          <p className="text-gray-600">Integrity, transparency, and unwavering advocacy for our clients' best interests.</p>
        </div>
      </div>
    </section>
  );
}