import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/home"
import { Header } from "./components/header"
import { SchedulePage } from "./pages/schedule"
import { Footer } from "./components/footer"
import { SupportPage } from "./pages/support"

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
					<Route 
						path="/schedule" 
						element={<SchedulePage/>} 
					/>

					<Route 
						path="/support" 
						element={<SupportPage/>} 
					/>

				</Routes>
				<Footer />
			</BrowserRouter>
			
		</>
	)
}