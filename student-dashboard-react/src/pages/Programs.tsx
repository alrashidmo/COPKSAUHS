const PROGRAMS = [
  { id: '1', name: 'Doctor of Medicine', degree: 'MD', students: 120 },
  { id: '2', name: 'Doctor of Pharmacy', degree: 'PharmD', students: 80 },
  { id: '3', name: 'Nursing', degree: 'BSN', students: 95 },
  { id: '4', name: 'Public Health', degree: 'MPH', students: 45 },
  { id: '5', name: 'Health Administration', degree: 'MHA', students: 35 },
]

export default function Programs() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Programs</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROGRAMS.map((program) => (
          <div key={program.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{program.name}</h3>
            <p className="text-gray-600 mb-4">Degree: {program.degree}</p>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-blue-600">{program.students}</span>
              <span className="text-gray-600 ml-2">Students</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
