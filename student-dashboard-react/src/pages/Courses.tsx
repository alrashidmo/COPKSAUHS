const COURSES = [
  { id: '1', code: 'CA101', title: 'Clinical Basics', credits: 3, enrolled: 45 },
  { id: '2', code: 'CA102', title: 'Patient Care', credits: 4, enrolled: 38 },
  { id: '3', code: 'CA103', title: 'Diagnostics', credits: 3, enrolled: 42 },
  { id: '4', code: 'CA104', title: 'Pharmacology', credits: 3, enrolled: 35 },
  { id: '5', code: 'CA201', title: 'Advanced Clinical Practice', credits: 4, enrolled: 28 },
]

export default function Courses() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Courses</h2>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Code</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Title</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Credits</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Enrolled</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {COURSES.map((course) => (
              <tr key={course.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">{course.code}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{course.title}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{course.credits}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{course.enrolled}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
