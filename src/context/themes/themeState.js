import React, { useEffect, useState } from 'react'
import ThemeContext from './themeContext'

const ThemeState = (props) => {
  

  let [theme, setTheme] = useState("white");
  let [style, setStyle] = useState({
    body: {
      backgroundColor: "#F1F6F5",
      color: "black"
    },
    textArea: {
      backgroundColor: "#DFDFDE"
    }
  })

  

  const changeTheme = (newTheme) => {
    if(theme !== newTheme){  // adding this condition is very much important, otherwise useEffect (in Notes.jsx) to change the theme goes into infinite loop
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);

      if (newTheme === "white") {
        setStyle({
          body: {
            backgroundColor: "#F1F6F5",
            color: "black"
          },
          textArea: {
            backgroundColor: "#DFDFDE"
          }
        })

      }
      else if (newTheme === "blue") {
        setStyle({
          body: {
            backgroundColor: "#97dece",
            color: "black"
          },
          textArea: {
            backgroundColor: "#EFEFEF"
          }
        })
      }
      else if (newTheme === "green") {
        setStyle({
          body: {
            backgroundColor: "#C3EDC0",
            color: "black"
          },
          textArea: {
            backgroundColor: "#AAC8A7"
          }
        })
      }
      else if (newTheme === "pink") {
        setStyle({
          body: {
            backgroundColor: "#FFC6D3",
            color: "black"
          },
          textArea: {
            backgroundColor: "#F8E8EE"
          }
        })
      }
      else if (newTheme === "yellow") {
        setStyle({
          body: {
            backgroundColor: "#FFE4A7",
            color: "black"
          },
          textArea: {
            backgroundColor: "#FFFAD7"
          }
        })
      }
      else if (newTheme === "black") {
        setStyle({
          body: {
            backgroundColor: "#141E27",
            color: "#EFEFEF"
          },
          textArea: {
            backgroundColor: "#203239",
            color: "#EFEFEF"    
          }
        })
      }
  }
  }

  

  useEffect(()=>{
    document.body.style.backgroundColor = style.body.backgroundColor;
    document.body.style.color = style.body.color;
  },[style.body.backgroundColor, style.body.color])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, style, setStyle, changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )

}

export default ThemeState
