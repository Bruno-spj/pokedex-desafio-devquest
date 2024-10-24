import { useContext } from "react"
import { ThemeContext } from "../../context/index"

export const ButtonToggler = (props) => {

  const { theme } = useContext(ThemeContext)
  return(
    <button {...props}
      style={{color: theme.color, background: theme.background}}
    />
  )
}