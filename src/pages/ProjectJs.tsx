import React from 'react'
import PasswordGenerate from '../components/projectsJs/PasswordGenerate'
import Сalculator from '../components/projectsJs/Сalculator'
import Todo from '../components/projectsJs/Todo'
import Slider from '../components/projectsJs/Slider'

const ProjectJs = () => {
  return (
    <>
    <div className="container">
      <PasswordGenerate />
      <Сalculator />
      <Todo />
      <Slider />
    </div>
    </>
  )
}

export default ProjectJs