import { useState } from 'react'
import WorkerList from './components/worker/WorkerList'
import AddWorker from './components/worker/AddWorker'
function App() {
    const [workers,setWorkers]=useState([])
  return (
    <>
    <h1 className='text-white text-5xl font-extrabold  pt-14 text-center '>Salary Automation</h1>
        <AddWorker setWorkers={setWorkers}/>
      <WorkerList setWorkers={setWorkers} workers={workers}/>
    </>
  )
}

export default App
