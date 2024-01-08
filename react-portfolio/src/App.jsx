import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import projects from './projects.json'
import Project from './components/Projects/Projects'


function App() {
  return (

<div className="container-for-cards">
    <Header />
    {projects.map((project) => (
          <Project key={project.id}
          name={project.name}
          image={project.image}
description ={project.description}/>
        ))}

    </div>
  )
}

export default App
