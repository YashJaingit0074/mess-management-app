import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

interface Student {
  id: number;
  name: string;
  rollNumber: string;
}

const initialStudents: Student[] = [
  { id: 1, name: 'John Doe', rollNumber: '001' },
  { id: 2, name: 'Jane Smith', rollNumber: '002' },
];

function StudentList() {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [newStudent, setNewStudent] = useState<Omit<Student, 'id'>>({ name: '', rollNumber: '' });

  const addStudent = () => {
    if (newStudent.name && newStudent.rollNumber) {
      setStudents([...students, { ...newStudent, id: students.length + 1 }]);
      setNewStudent({ name: '', rollNumber: '' });
    }
  };

  const removeStudent = (id: number) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div className="card-3d">
      <h2 className="text-2xl font-bold mb-4 text-green-600">Student List</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-green-100">
            <tr>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Roll Number</th>
              <th className="p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-50 transition-colors duration-200">
                <td className="p-2">{student.name}</td>
                <td className="p-2">{student.rollNumber}</td>
                <td className="p-2">
                  <button
                    className="text-red-500 hover:text-red-700 transition-colors duration-200"
                    onClick={() => removeStudent(student.id)}
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2 text-green-500">Add New Student</h3>
        <div className="flex flex-wrap gap-2">
          <input
            type="text"
            placeholder="Name"
            className="input-3d"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Roll Number"
            className="input-3d"
            value={newStudent.rollNumber}
            onChange={(e) => setNewStudent({ ...newStudent, rollNumber: e.target.value })}
          />
          <button
            className="btn-3d bg-green-500 text-white"
            onClick={addStudent}
          >
            <Plus size={18} className="mr-1 inline" /> Add Student
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentList;