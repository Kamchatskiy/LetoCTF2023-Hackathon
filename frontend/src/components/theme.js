import { createTheme } from "@mui/material"

export const MainTheme = createTheme ({
	palette: {
		mode: "dark",
		primary: {
			main: "#75EB9B",
			light: "#5dff91",
			dark: "#369c59",
		},
		secondary: {
			main: "#42D4BA",
		},
		background: {
			default: "#1e1e1e",
			paper: "#121212",
		},
		text: {
			primary: "#75EB9B",
			secondary: "#000000",
		},
	},
})