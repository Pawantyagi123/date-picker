import React from 'react'
import { useDateContext } from '../context/DateContext';

export default function DateRange() {
  const { startDate, setStartDate, endDate, setEndDate } = useDateContext();
  return (
    <div className="my-4">
      <label className="block text-sm font-medium text-gray-700">Date Range:</label>
      <div className="mt-2 flex space-x-2">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-1/2 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-1/2 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  )
}
