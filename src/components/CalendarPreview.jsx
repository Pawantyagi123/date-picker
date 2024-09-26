import React from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDateContext } from '../context/DateContext';

export default function CalendarPreview() {
  const { startDate } = useDateContext();
  return (
    <div className="my-4">
      <label className="block text-sm font-medium text-gray-700">Preview Recurring Dates:</label>
      <div className="mt-2 p-4 border border-gray-300 rounded-md shadow-sm">
        <Calendar value={startDate ? new Date(startDate) : new Date()} />
      </div>
    </div>
  )
}
