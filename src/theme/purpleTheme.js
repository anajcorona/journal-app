import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#093187'
        },
        secondary: {
            main: '#87c9e6'
        },
        next: {
            main: '#24a8e0'
        },
        error: {
            main: red.A400
        }
    }
})