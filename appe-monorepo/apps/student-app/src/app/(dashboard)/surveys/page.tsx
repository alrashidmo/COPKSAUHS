'use client';

export default function SurveysPage() {
  return (
    <div>
      <div className="bg-gradient-to-br from-primary to-primary-light text-white p-6 rounded-b-3xl">
        <h1 className="text-2xl font-bold">Surveys</h1>
        <p className="text-white/90 mt-1">Complete your assigned surveys</p>
      </div>

      <div className="p-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-blue-900 mb-2">📝 How It Works</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Complete assigned surveys before the deadline</li>
            <li>• Some surveys are anonymous</li>
            <li>• Cannot edit after submission</li>
          </ul>
        </div>

        {/* Placeholder - implement survey list */}
        <div className="text-center text-gray-500 py-12">
          Survey list will be displayed here
        </div>
      </div>
    </div>
  );
}
