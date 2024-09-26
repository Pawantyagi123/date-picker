import React from 'react'
import RecurrenceOptions from './RecurrenceOptions';
import Customization from './Customization';
import DateRange from './DateRange';
import CalendarPreview from './CalendarPreview';

export default function DatePicker() {
  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-md max-w-lg mt-10">
    <DateRange />
    <RecurrenceOptions />
    <Customization />
    <CalendarPreview />
  </div>
  )
}
