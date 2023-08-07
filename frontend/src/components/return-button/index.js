import React, { useState } from "react"
import Button from "@mui/material/Button"

export const ReturnButton = () => {
	const [open, setOpen] = useState(false)

	const handleClick = () => {
		setOpen(!open)
	}
    
	return (
		<>
			<Button 
				variant="contained" endIcon={<SendIcon 
					onClick={handleClick}
				/>}>
            Send
			</Button>
		</>
	)
}