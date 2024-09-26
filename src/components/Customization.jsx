import React from 'react'
import { useDateContext } from '../context/DateContext.jsx';
export default function Customization() {
  const { recurrence, customization, setCustomization } = useDateContext();

  const handleChange = (e) => {
    setCustomization({ ...customization, [e.target.name]: e.target.value });
  };
  return (
    <div className="my-4">
    <label className="block text-sm font-medium text-gray-700">Customize Recurrence:</label>
    {recurrence === 'weekly' && (
      <div className='mt-2'>
        <label className="text-sm font-medium text-gray-700">Specific Days:</label>
        <input
          type="text"
          name="days"
          value={customization.days || ''}
          onChange={handleChange}
          placeholder="e.g., Monday, Wednesday"
          className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    )}
    {recurrence === 'monthly' && (
      <div className="mt-2">
        <label className="text-sm font-medium text-gray-700">The nth day of the month:</label>
        <input
          type="number"
          name="nth"
          value={customization.nth || ''}
          onChange={handleChange}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    )}
  </div>
  )
}
