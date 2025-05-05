import { FiEdit, FiTrash2, FiChevronUp, FiChevronDown } from 'react-icons/fi'

const StudentTable = ({ students, onEditStudent, onDeleteStudent, sortConfig, onSort }) => {
  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return null
    return sortConfig.direction === 'ascending' ? <FiChevronUp className="inline" /> : <FiChevronDown className="inline" />
  }

  if (students.length === 0) {
    return (
      <div className="text-center py-8">
        <h3 className="text-lg font-medium text-gray-500">No students found</h3>
        <p className="text-gray-400 mt-2">Add a new student to get started</p>
      </div>
    )
  }

  const handleSort = (key) => {
    onSort(key)
  }

  const headerClasses = "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-gray-700"

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th 
              className={headerClasses} 
              onClick={() => handleSort('name')}
            >
              Name {getSortIcon('name')}
            </th>
            <th 
              className={headerClasses}
              onClick={() => handleSort('email')}
            >
              Email {getSortIcon('email')}
            </th>
            <th 
              className={headerClasses}
              onClick={() => handleSort('age')}
            >
              Age {getSortIcon('age')}
            </th>
            <th 
              className={headerClasses}
              onClick={() => handleSort('grade')}
            >
              Grade {getSortIcon('grade')}
            </th>
            <th 
              className={headerClasses}
              onClick={() => handleSort('course')}
            >
              Course {getSortIcon('course')}
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {students.map((student) => (
            <tr key={student.id} className="animate-fade-in hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{student.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{student.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{student.age}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getGradeColor(student.grade)}`}>
                  {student.grade}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {student.course}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => onEditStudent(student)}
                  className="text-secondary-600 hover:text-secondary-900 mr-4 transition-colors"
                >
                  <FiEdit className="inline h-5 w-5" />
                </button>
                <button
                  onClick={() => onDeleteStudent(student.id)}
                  className="text-error-500 hover:text-error-700 transition-colors"
                >
                  <FiTrash2 className="inline h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Helper function to determine badge color based on grade
const getGradeColor = (grade) => {
  switch (grade) {
    case 'A':
      return 'bg-green-100 text-green-800'
    case 'B':
      return 'bg-blue-100 text-blue-800'
    case 'C':
      return 'bg-yellow-100 text-yellow-800'
    case 'D':
      return 'bg-orange-100 text-orange-800'
    case 'F':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export default StudentTable