import { students } from '../data/dummyData'

export default function Dashboard() {
  const totalStudents = students.length
  const activePrograms = new Set(students.map(s => s.program)).size

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Total Students</h3>
          <p className="text-4xl font-bold text-gray-900 mt-2">{totalStudents}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Active Programs</h3>
          <p className="text-4xl font-bold text-gray-900 mt-2">{activePrograms}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm font-medium">Completion Rate</h3>
          <p className="text-4xl font-bold text-gray-900 mt-2">85%</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
        <p className="text-gray-600">No recent activity</p>
      </div>
    </div>
  )
}
