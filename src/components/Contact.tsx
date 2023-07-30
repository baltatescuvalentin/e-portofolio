import contact, { IContact } from "../utils/contact";
import { ElemAsRef } from '../utils/auxInterfaces';
function Contact({myref}: any) {

    let contactMap: JSX.Element[] = contact.map((c, index) => {
        return <ContactElement key={index} {...c} />
    })

    return (
        <div ref={myref} className="mt-[32px] mb-[20px]">
            <p className="text-[32px] sm:text-[24px] font-semibold">Contacts</p>
            <div className="ml-4">    
                <p className="text-[28px] sm:text-base font-medium">Feel free to contact me using any of these platforms.</p>
                <div className="space-y-2">
                    {contactMap}
                </div>
            </div>
        </div>
    )
}

function ContactElement({email, emailIcon}: IContact) {
    return (
        <div className="flex flex-row items-center space-x-4">
            <img className="w-12 h-12 sm:w-8 sm:h-8" src={emailIcon} alt={email} />
            <p className="text-2xl sm:text-base">{email}</p>
        </div>
    )
}

export default Contact;