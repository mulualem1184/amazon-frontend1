
import { IoIosMenu } from "react-icons/io";
import classes from './Header.module.css'

function LowerHeader() {
  return (
    <div class= {`${classes.lower_container} ${classes.lower_background}`} >
      <ul > 
        <li>
        <IoIosMenu /> All
        </li>
        <li>
            Today's Deals
        </li>
        <li>
            Costumer Service
        </li>
        <li>
            Registery
        </li>
        <li>Gift Cards</li>
        <li>Sell</li>
      
      </ul>
    </div>
    
  )
}

export default LowerHeader
