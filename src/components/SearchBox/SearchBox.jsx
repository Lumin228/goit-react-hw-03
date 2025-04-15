import { useId } from "react"
import css from '../SearchBox/SearchBox.module.css'


export const SearchBox = ({onChange}) => {
    return(
        <div>
        <p>Find contacts by name</p>
        <input onChange={onChange}/>
        </div>
    )
}