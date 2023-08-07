import React from "react"
import PropTypes from "prop-types"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Collapse from "@mui/material/Collapse"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import { Container } from "@mui/material"
import { Link } from "react-router-dom"

export const NestedList = ({ name, main_icon, items }) => {
	const [open, setOpen] = React.useState(false)

	const handleClick = () => {
		setOpen(!open)
	}

	return (
		<Container sx={{ width: "100%" }}>
			<ListItemButton onClick={handleClick}>
				{open ? <ExpandLess /> : <ExpandMore />}
				<ListItemIcon>{main_icon}</ListItemIcon>
				<ListItemText primary={name} />
			</ListItemButton>

			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding sx={{ paddingLeft: "30px" }}>
					{items.map(({ label, icon, link }) => (
						<ListItemButton component={Link} to={link} value={link} key={link}>
							<ListItemIcon>{icon}</ListItemIcon>
							<ListItemText primary={label} />
						</ListItemButton>
					))}
				</List>
			</Collapse>
		</Container>
	)
}

NestedList.propTypes = {
	name: PropTypes.string.isRequired,
	main_icon: PropTypes.element.isRequired,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			icon: PropTypes.element.isRequired,
			link: PropTypes.string.isRequired,
		})
	).isRequired,
}