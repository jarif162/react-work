// Get students from localStorage
export const getStudentsFromStorage = () => {
  try {
    const storedStudents = localStorage.getItem('students')
    return storedStudents ? JSON.parse(storedStudents) : []
  } catch (error) {
    console.error('Error retrieving students from localStorage:', error)
    return []
  }
}

// Save students to localStorage
export const saveStudentsToStorage = (students) => {
  try {
    localStorage.setItem('students', JSON.stringify(students))
  } catch (error) {
    console.error('Error saving students to localStorage:', error)
  }
}