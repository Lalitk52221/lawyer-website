export default function BookingSuccess({ searchParams }: { searchParams: { appointment_id?: string } }) {
  return (
    <section className="max-w-2xl mx-auto px-6 py-24 text-center">
      <div className="bg-green-50 border border-green-200 rounded-xl p-10">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Booking Confirmed!</h1>
        <p className="text-gray-700">
          Thank you for your payment. We've received your appointment request and will send a confirmation email shortly.
        </p>
        {searchParams.appointment_id && (
          <p className="text-sm text-gray-500 mt-4">Reference ID: {searchParams.appointment_id}</p>
        )}
      </div>
    </section>
  );
}