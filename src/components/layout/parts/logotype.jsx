import Image from 'next/image';
import Link from 'next/link'; 



const Logotype = ({ withLogotype }) => {
    return (
        <Link href="/">
            <div className="h-20 relative" style={{ width: `${withLogotype}px` }} >
                <Image src="/logotype.png" alt="Descripción de la imagen"
                    fill
                    style={{ objectFit: 'contain' }}
                />
            </div>
        </Link>
    )
}

export default Logotype