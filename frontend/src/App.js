import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/home"
import { Header } from "./components/header"

export const App = () => {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route 
						path="/" 
						element={<HomePage/>} 
					/>
					{/* <Route 
						path="/" 
						element={</>} 
					/>
					<Route 
						path="/home/" 
						element={</>} 
					/> */}
				</Routes>
			</BrowserRouter>
			
		</>
	)
}