import React from 'react'
import { useDateContext } from '../context/DateContext.jsx';

export default function RecurrenceOptions() {
  const { recurrence, setRecurrence } = useDateContext();
  return (
    <div className="my-4">
       <label className="block text-sm font-medium text-gray-700">Recurrence:</label>
      <select
        value={recurrence}
        onChange={(e) => setRecurrence(e.target.value)}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  )
}
