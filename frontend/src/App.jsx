import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routes'
import ThemeCustomization from './themes'

const App = () => {
  return (
    <ThemeCustomization>
      <RouterProvider router={Router} />
    </ThemeCustomization>
  )
}

export default App
