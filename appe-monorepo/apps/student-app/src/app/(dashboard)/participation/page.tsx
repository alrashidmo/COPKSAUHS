'use client';

export default function ParticipationPage() {
  return (
    <div>
      <div className="bg-gradient-to-br from-primary to-primary-light text-white p-6 rounded-b-3xl">
        <h1 className="text-2xl font-bold">Participation & Awards</h1>
        <p className="text-white/90 mt-1">Track your achievements</p>
      </div>

      <div className="p-4 space-y-4">
        <div className="bg-white rounded-xl p-4 shadow">
          <h3 className="font-semibold mb-2">Participation Records</h3>
          <p className="text-sm text-gray-600 mb-3">Conferences, workshops, and community service</p>
          <button className="w-full bg-primary-light text-white py-2 rounded-lg font-medium">
            + Add Record
          </button>
        </div>

        <div className="bg-white rounded-xl p-4 shadow">
          <h3 className="font-semibold mb-2">Student Awards</h3>
          <p className="text-sm text-gray-600 mb-3">Academic and professional achievements</p>
          <button className="w-full bg-primary-light text-white py-2 rounded-lg font-medium">
            + Add Award
          </button>
        </div>
      </div>
    </div>
  );
}
