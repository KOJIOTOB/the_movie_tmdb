import {useLayoutEffect, useState} from "react";

const Theme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('app-theme') || 'light')

    useLayoutEffect(() => {
document.documentElement.setAttribute('data-theme', theme)
    },[theme])
    localStorage.setItem('app-theme', theme)
    return {theme, setTheme}
}

export {Theme}