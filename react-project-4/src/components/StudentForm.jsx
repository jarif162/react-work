import { useState, useEffect } from 'react'

const initialFormState = {
  name: '',
  email: '',
  age: '',
  grade: '',
  course: ''
}

const StudentForm = ({ onAddStudent, editingStudent, onCancelEdit }) => {
  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  useEffect(() => {
    if (editingStudent) {
      setFormData(editingStudent)
      // Reset touched state when editing
      setTouched({})
    } else {
      setFormData(initialFormState)
    }
  }, [editingStudent])

  const validate = (data) => {
    const newErrors = {}
    
    if (!data.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!data.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'Invalid email format'
    }
    
    if (!data.age) {
      newErrors.age = 'Age is required'
    } else if (isNaN(data.age) || Number(data.age) < 0) {
      newErrors.age = 'Age must be a positive number'
    }
    
    if (!data.grade) {
      newErrors.grade = 'Grade is required'
    }
    
    if (!data.course.trim()) {
      newErrors.course = 'Course is required'
    }
    
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    
    // Validate on change if field has been touched
    if (touched[name]) {
      const fieldErrors = validate({ ...formData, [name]: value })
      setErrors({ ...errors, [name]: fieldErrors[name] })
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched({ ...touched, [name]: true })
    
    // Validate on blur
    const fieldErrors = validate(formData)
    setErrors({ ...errors, [name]: fieldErrors[name] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate all fields
    const validationErrors = validate(formData)
    setErrors(validationErrors)
    
    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true
      return acc
    }, {})
    setTouched(allTouched)
    
    // Submit if no errors
    if (Object.keys(validationErrors).length === 0) {
      onAddStudent(formData)
      setFormData(initialFormState)
      setTouched({})
    }
  }

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        {editingStudent ? 'Edit Student' : 'Add New Student'}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input ${errors.name && touched.name ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
            placeholder="John Doe"
          />
          {errors.name && touched.name && <p className="form-error">{errors.name}</p>}
        </div>
        
        <div>
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input ${errors.email && touched.email ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
            placeholder="john@example.com"
          />
          {errors.email && touched.email && <p className="form-error">{errors.email}</p>}
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="age" className="form-label">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-input ${errors.age && touched.age ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
              placeholder="18"
            />
            {errors.age && touched.age && <p className="form-error">{errors.age}</p>}
          </div>
          
          <div>
            <label htmlFor="grade" className="form-label">Grade</label>
            <select
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`form-input ${errors.grade && touched.grade ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
            >
              <option value="">Select Grade</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="F">F</option>
            </select>
            {errors.grade && touched.grade && <p className="form-error">{errors.grade}</p>}
          </div>
        </div>
        
        <div>
          <label htmlFor="course" className="form-label">Course</label>
          <input
            type="text"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-input ${errors.course && touched.course ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
            placeholder="Computer Science"
          />
          {errors.course && touched.course && <p className="form-error">{errors.course}</p>}
        </div>
        
        <div className="flex space-x-3 pt-2">
          <button 
            type="submit" 
            className="btn btn-primary"
          >
            {editingStudent ? 'Update Student' : 'Add Student'}
          </button>
          
          {editingStudent && (
            <button 
              type="button" 
              onClick={onCancelEdit}
              className="btn bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default StudentForm