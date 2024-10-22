import React, { useState } from 'react';
import { Check, X, Plus } from 'lucide-react';

interface Attendance {
  id: number;
  studentName: string;
  date: string;
  present: boolean;
}

const initialAttendance: Attendance[] = [
  { id: 1, studentName: 'John Doe', date: '2023-04-01', present: true },
  { id: 2, studentName: 'Jane Smith', date: '2023-04-01', present: false },
];

function AttendanceTracker() {
  const [attendance, setAttendance] = useState<Attendance[]>(initialAttendance);
  const [newAttendance, setNewAttendance] = useState<Omit<Attendance, 'id'>>({
    studentName: '',
    date: '',
    present: false,
  });

  const addAttendance = () => {
    if (newAttendance.studentName && newAttendance.date) {
      setAttendance([...attendance, { ...newAttendance, id: attendance.length + 1 }]);
      setNewAttendance({ studentName: '', date: '', present: false });
    }
  };

  const toggleAttendance = (id: number) => {
    setAttendance(
      attendance.map((record) =>
        record.id === id ? { ...record, present: !record.present } : record
      )
    );
  };

  return (
    <div className="card-3d">
      <h2 className="text-2xl font-bold mb-4 text-purple-600">Attendance Tracker</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-purple-100">
            <tr>
              <th className="p-2 text-left">Student Name</th>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Present</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((record) => (
              <tr key={record.id} className="border-b hover:bg-gray-50 transition-colors duration-200">
                <td className="p-2">{record.studentName}</td>
                <td className="p-2">{record.date}</td>
                <td className="p-2">
                  <button
                    className={`p-1 rounded transition-colors duration-200 ${
                      record.present ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                    }`}
                    onClick={() => toggleAttendance(record.id)}
                  >
                    {record.present ? <Check size={18} /> : <X size={18} />}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2 text-purple-500">Add New Attendance Record</h3>
        <div className="flex flex-wrap gap-2">
          <input
            type="text"
            placeholder="Student Name"
            className="input-3d"
            value={newAttendance.studentName}
            onChange={(e) => setNewAttendance({ ...newAttendance, studentName: e.target.value })}
          />
          <input
            type="date"
            className="input-3d"
            value={newAttendance.date}
            onChange={(e) => setNewAttendance({ ...newAttendance, date: e.target.value })}
          />
          <button
            className="btn-3d bg-purple-500 text-white"
            onClick={addAttendance}
          >
            <Plus size={18} className="mr-1 inline" /> Add Record
          </button>
        </div>
      </div>
    </div>
  );
}

export default AttendanceTracker;