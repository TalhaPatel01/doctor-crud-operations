import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom'
// import MyComponent from './components/MyComponent'

createRoot(document.getElementById('root')).render(
        <App />
)

// createRoot(document.getElementById('my-component')).render(
//     <StrictMode>
//         <MyComponent />
//     </StrictMode>,
// );