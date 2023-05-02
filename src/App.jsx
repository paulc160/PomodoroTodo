import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import ToDo from './components/ToDo'

function App() {

  return (
      <div className="h-full w-screen bg-primary flex flex-col">
        <div className="mx-auto">
          <Header /> 
        </div>
        <div className="mx-auto flex flex-col p-20">
          <div className="flex-none pt-20">
            <Card />
          </div>
          <div className="pt-10">
            <ToDo />
          </div>
        </div>
      </div>
  )
}

export default App
