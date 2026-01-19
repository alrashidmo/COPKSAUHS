import { useState } from 'react'
import { students } from '../data/dummyData'
import StudentTable from '../components/StudentTable'

export default function Students() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredStudents = students.filter(s =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.studentId.includes(searchTerm)
  )

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Students</h2>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by name or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <StudentTable students={filteredStudents} />
      </div>
    </div>
  )
}
