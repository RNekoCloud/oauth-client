import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.tsx'
import './index.css'
import Verify from "./routes/Verify"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/verify/:token",
		element: <Verify />
	}
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   	<RouterProvider router={router} /> 
  </React.StrictMode>
)
