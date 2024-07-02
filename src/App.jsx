import React from 'react'
import "./App.css"
import { TaskForm } from './TaskForm'
import TaskColumn from './TaskColumn'

const App = () => {
  return (
    <div className='app'>
      <TaskForm></TaskForm>
      <main className='app_main'>
       <TaskColumn title= "To Do"/>
       <TaskColumn title= "Doing"/>
       <TaskColumn title= "Done"/>
      </main>
    </div>
  )
}

export default App