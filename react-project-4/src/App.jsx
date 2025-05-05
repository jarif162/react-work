import { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import SearchBar from "./components/SearchBar";
import { getStudentsFromStorage, saveStudentsToStorage } from "./utils/storage";

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "id",
    direction: "ascending",
  });

  useEffect(() => {
    const storedStudents = getStudentsFromStorage();
    if (storedStudents.length) {
      setStudents(storedStudents);
    }
  }, []);

  useEffect(() => {
    saveStudentsToStorage(students);
  }, [students]);

  const handleAddStudent = (student) => {
    if (editingStudent) {
      setStudents(students.map((s) => (s.id === student.id ? student : s)));
      setEditingStudent(null);
    } else {
      const newStudent = {
        ...student,
        id: Date.now().toString(),
      };
      setStudents([...students, newStudent]);
    }
  };

  const handleEditStudent = (student) => {
    setEditingStudent(student);
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
    if (editingStudent && editingStudent.id === id) {
      setEditingStudent(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingStudent(null);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const filteredStudents = students.filter((student) => {
    return (
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.grade.toString().includes(searchTerm) ||
      student.course.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Student Management System
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            Add, edit, and manage your student records
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="card p-6">
              <StudentForm
                onAddStudent={handleAddStudent}
                editingStudent={editingStudent}
                onCancelEdit={handleCancelEdit}
              />
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="card p-6">
              <div className="mb-6">
                <SearchBar onSearch={handleSearch} />
              </div>

              <StudentTable
                students={sortedStudents}
                onEditStudent={handleEditStudent}
                onDeleteStudent={handleDeleteStudent}
                sortConfig={sortConfig}
                onSort={handleSort}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
