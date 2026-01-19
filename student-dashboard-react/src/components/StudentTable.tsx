import { Student } from '../types/student'

interface StudentTableProps {
  students: Student[]
}

export default function StudentTable({ students }: StudentTableProps) {
  if (students.length === 0) {
    return <p className="text-gray-500">No students found.</p>
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">ID</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Email</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Program</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Level</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">GPA</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {students.map((student) => (
            <tr key={student.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-medium text-gray-900">{student.studentId}</td>
              <td className="px-6 py-4 text-sm text-gray-600">{student.name}</td>
              <td className="px-6 py-4 text-sm text-gray-600">{student.email}</td>
              <td className="px-6 py-4 text-sm text-gray-600">{student.program}</td>
              <td className="px-6 py-4 text-sm text-gray-600">{student.level}</td>
              <td className="px-6 py-4 text-sm text-gray-600">{student.gpa}</td>
              <td className="px-6 py-4 text-sm">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {student.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
