/* import { createTheme } from "@mui/material";

 export const customTheme = createTheme({
    palette:{
        primary: {
            main: "#d87d4a",
            // secondary: "crimson"
        },
        secondary: {
            main: "#fbaf85"
        }
    }
}) */

import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});