import React from "react"
import { Link } from "react-router-dom"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered"
import TaskAltIcon from "@mui/icons-material/TaskAlt"
import SupportAgentIcon from "@mui/icons-material/SupportAgent"
import PersonIcon from "@mui/icons-material/Person"
import GroupsIcon from "@mui/icons-material/Groups"
import BuildIcon from "@mui/icons-material/Build"
import AssignmentIcon from "@mui/icons-material/Assignment"
import StarIcon from "@mui/icons-material/Star"
import { NestedList } from "./components/nestedlist"

export const HomePage = () => {
	return (
		<List component="nav">
			<ListItemButton 
				component={Link} to="/schedule" value="/schedule">
				<ListItemIcon>
					<FormatListNumberedIcon color="success" />
				</ListItemIcon>
				<ListItemText primary="Schedule" />
			</ListItemButton>

			<ListItemButton component={Link} to="/tasks" value="tasks">
				<ListItemIcon>
					<TaskAltIcon color="success"/>
				</ListItemIcon>
				<ListItemText primary="Tasks" />
			</ListItemButton>

			<NestedList
				disablePadding
				name="Rating"
				main_icon={<StarIcon color="success"/>}
				items={[
					{ label: "Personal", icon: <PersonIcon color="success"/>, link: "/rating/personal.js" },
					{ label: "Team", icon: <GroupsIcon color="success"/>, link: "/rating/team.js" }
				]}
			/>

			<NestedList
				name="Support"
				main_icon={<SupportAgentIcon color="success"/>}
				items={[
					{ label: "Administators", icon: <AssignmentIcon color="success"/>, link: "" },
					{ label: "Tech Specs", icon: <BuildIcon color="success"/>, link: "" },
					{ label: "Other", icon: <div />, link: "" }
				]}
			/>
		</List>
	)
}