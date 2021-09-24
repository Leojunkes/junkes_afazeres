import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        colors: {
            "900": "#181B23",
            "800": "#1F2029",
            "700": "#353646",
            "600": "#4B4D63",
            "500": "#616480",
            "400": "#797D9A",
            "300": "#9699B0",
            "200": "#B3B5C6",
            "100": "#D1D2DC",
            "50": "#EEEEF2",
            "rosa":"#f5e9f7",
            "green":"#74cac9"
        }
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto'
    },
    styles: {
        global: {
            body: {
                bg: 'colors.green',
                color: 'colors.500'
            }
        }
    }
})