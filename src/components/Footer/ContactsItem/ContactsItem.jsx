import footerContacts from "../../../data/footerContacts";

export default function ContactsItem() {
    return(
        <>
            {footerContacts.map((item, index) => (
                <li className="contacts__item" key={index}>
                <div className="contacts__info">
                    <img src={item.icon} className="contacts__img" alt='icon'/>
                    <p className="contacts__title">{item.title}</p>
                </div>
            </li>
            ))}   
        </>
    )
}
