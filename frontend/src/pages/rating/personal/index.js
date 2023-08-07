// import React, { useState, useEffect } from "react"
// import Table from "@mui/material/Table"
// import TableBody from "@mui/material/TableBody"
// import TableCell from "@mui/material/TableCell"
// import TableContainer from "@mui/material/TableContainer"
// import TableHead from "@mui/material/TableHead"
// import TableRow from "@mui/material/TableRow"
// import Paper from "@mui/material/Paper"

// export const Rating = () => {
// 	const [users, setUsers] = useState([])

// 	useEffect(() => {
// 		fetch("/api/users") // Используйте URL-адрес вашего сервера API
// 			.then((response) => response.json())
// 			.then((data) => setUsers(data))
// 			.catch((error) => console.log(error))
// 	}, [])

// 	return (
// 		<TableContainer component={Paper}>
// 			<Table>
// 				<TableHead>
// 					<TableRow>
// 						<TableCell>ID</TableCell>
// 						<TableCell>Name</TableCell>
// 						<TableCell>Email</TableCell>
// 						{/* Добавьте другие столбцы таблицы */}
// 					</TableRow>
// 				</TableHead>
// 				<TableBody>
// 					{users.map((user) => (
// 						<TableRow key={user.id}>
// 							<TableCell>{user.id}</TableCell>
// 							<TableCell>{user.name}</TableCell>
// 						</TableRow>
// 					))}
// 				</TableBody>
// 			</Table>
// 		</TableContainer>
// 	)
// }

// export default UserTable