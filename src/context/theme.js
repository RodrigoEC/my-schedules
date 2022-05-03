import React, { createContext, useContext, useState, useCallback } from 'react'
import { ThemeProvider } from 'styled-components'


export const colors = {
    darkBlue: '#465963',
    lightPink: '#FFF9F4',
    lightGreen: '#C3DF89',
    darkGreen: '#8EAD4E',
    darkGrey: '#959595',
    white: '#ffffff',
}

const ThemeContext = createContext()

const themeLight= {
    primary: colors.lightPink,
    secondary: colors.darkBlue,
    third: colors.darkGreen,
    forth: colors.darkGrey,
    font: colors.darkBlue,
}

const themeDark = {
    primary: colors.darkBlue,
    secondary: colors.lightPink,
    third: colors.lightGreen,
    forth: colors.white,
    font: colors.lightPink,
}

const themes = {
    light: themeLight,
    dark: themeDark,
} 

export default function ThemesProvider({ children }) {
    const getTheme = () => {
        let theme = localStorage.getItem('@my-schedules/theme')
        if (!theme) {
            localStorage.setItem('@my-schedules/theme', 'dark')
            theme = 'dark'
        }
        return theme
    }

    const getIsActive = useCallback(() => {
        const isActive = localStorage.getItem('@my-schedules/active')
        if (!isActive) {
            localStorage.setItem('@my-schedules/active', false)
            return false
        }

        return isActive === 'true'
    },[])

    const currentTheme = getTheme()
    const isCurrentlyActive = getIsActive()

    const [isActive, setIsActive] = useState(isCurrentlyActive)
    const [theme, setTheme] = useState(themes[currentTheme])
    
    const handleSwitch = useCallback(() => {
        const currentTheme = getTheme()
        const isCurrentlyActive = getIsActive()

        const nextTheme = currentTheme === 'light' ? 'dark' : 'light'

        localStorage.setItem('@my-schedules/active', !isCurrentlyActive)
        localStorage.setItem('@my-schedules/theme', nextTheme)
        setIsActive(!isCurrentlyActive)
        setTheme(themes[nextTheme])
        
    }, [setTheme, setIsActive, getIsActive])
    
    const value = {
        isActive,
        setIsActive,
        handleSwitch,
        theme,
        colors,
    }

    return theme  && (
        <ThemeContext.Provider value={value}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext);

    return { ...context };
}