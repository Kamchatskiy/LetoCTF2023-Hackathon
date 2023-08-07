import React from "react"
import Button from "@mui/material/Button"
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"
import { Link } from "react-router-dom"

export const ReturnButton = () => {   
	return (
		<>
			<Button 
				variant="outlined" 
				color="secondary"
				endIcon={<KeyboardReturnIcon color="warning"/>}
				size="large" 
				sx={{ 
					width: "100%",
					position: "absolute",
					bottom: 0
				}}
				component={Link}
				to="/"
				value="/"
			>
Return
			</Button>
		</>
	)
}