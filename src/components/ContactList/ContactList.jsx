import { Contact } from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css"


export const ContactList = ({contactsData, onSubmit}) => {
   
    return(
        <ul className={css.list}>
        {contactsData.map((contact) => {
            return(
                <Contact key={contact.id} contactInfo={contact} onDelete={onSubmit}/>
            )
        })}
        </ul>
    )
}