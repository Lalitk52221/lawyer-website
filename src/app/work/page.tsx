import { connectDB } from "@/lib/mongodb";
import CaseStudy from "@/models/CaseStudy";

export const dynamic = "force-dynamic";

export default async function Work() {
  await connectDB();
  const cases = await CaseStudy.find().sort({ createdAt: -1 }).lean();

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4 text-center">Our Work</h1>
      <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        A selection of cases we've successfully handled for our clients.
      </p>

      {cases.length === 0 ? (
        <p className="text-center text-gray-500">Case studies coming soon.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c: any) => (
            <div key={c._id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-100 h-48 flex items-center justify-center text-gray-400">
                {c.image ? <img src={c.image} alt={c.title} className="w-full h-full object-cover" /> : "Image"}
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-amber-600 uppercase">{c.category}</span>
                <h3 className="text-lg font-bold mt-2 mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{c.summary}</p>
                <p className="text-sm font-medium text-slate-900">Outcome: {c.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}