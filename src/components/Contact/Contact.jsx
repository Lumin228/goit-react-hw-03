import css from '../Contact/Contact.module.css'

export const Contact = ({contactInfo, onDelete}) => {
    return(
        <li className={css.box}>
            <div>
            <div className={css.rows}>
            <p>p</p>
            <p>{contactInfo.name}</p>
            </div>
            <div className={css.rows}>
            <p>f</p>
            <p>{contactInfo.number}</p>
            </div>
            </div>
            <button className={css.button} id={contactInfo.id} onClick={onDelete}>Delete</button>
        </li>
    )
}