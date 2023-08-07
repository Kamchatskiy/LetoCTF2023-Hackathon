import React, { useState } from "react"
import Button from "@mui/material/Button"
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"
import { Link } from "@mui/material"

export const ReturnButton = () => {
	const [open, setOpen] = useState(false)

	const handleClick = () => {
		setOpen(!open)
	}
    
	return (
		<>
			<Button 
				variant="contained" 
				endIcon={<KeyboardReturnIcon color="warning"/>} 
				onClick={handleClick}
				component={Link}
				to="/"
			>
				Return
			</Button>
		</>
	)
}