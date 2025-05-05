import { useState } from 'react'
import { FiSearch, FiX } from 'react-icons/fi'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  const clearSearch = () => {
    setSearchTerm('')
    onSearch('')
  }

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FiSearch className="h-5 w-5 text-gray-400" />
      </div>
      
      <input
        type="text"
        className="form-input block w-full pl-10 pr-10 sm:text-sm border-gray-300"
        placeholder="Search students by name, email, grade or course..."
        value={searchTerm}
        onChange={handleChange}
      />
      
      {searchTerm && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <button
            onClick={clearSearch}
            className="text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  )
}

export default SearchBar