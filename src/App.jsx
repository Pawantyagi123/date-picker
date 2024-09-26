import DatePicker from './components/DatePicker';
import  DateProvider  from './context/DateContext';
import './App.css'

function App() {

  return (
    <>
     <DateProvider>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div>
          <h1 className="text-3xl font-bold text-center mb-8">Recurring Date Picker</h1>
          <DatePicker />
        </div>
      </div>
    </DateProvider>
    </>
  )
}

export default App
