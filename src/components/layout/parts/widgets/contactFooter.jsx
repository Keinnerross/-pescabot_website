import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';



const ContactFooter = () => {
    return (
        <div className='md:block flex justify-center flex-col items-center'>
            <h3 className="md:pb-4 text-lg font-medium">Contácto</h3>
            <ul className=" flex flex-col items-center md:items-start gap-2 pt-2">
                {/* <a href='#' className='flex gap-2 items-center'><FaMapMarkerAlt /><li >Calle Los Perales 678B, La Serena, Chile.</li></a> */}
                <a href='#' className='flex gap-2 items-center'><FaEnvelope /><li >ventas@tecnich.cl
                </li></a>
                {/* <a href='#' className='flex gap-2 items-center'><FaPhone /><li >+56 512 498474</li></a>
                <a href='#' className='flex gap-2 items-center'><FaWhatsapp size={20} /><li >+56 9 1234 5678 </li></a> */}




            </ul>
        </div>
    )
}

export default ContactFooter;