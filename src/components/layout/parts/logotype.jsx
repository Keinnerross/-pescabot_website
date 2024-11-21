import Image from 'next/image';
import Link from 'next/link';



const Logotype = ({ withLogotype, isScrolled }) => {
    return (
        <Link href="/" className='flex justify-center md:block'>
            <div className="h-20 relative" style={{ width: `${withLogotype}px` }} >
                {isScrolled ?

                    <Image src="/logotype_white.png" alt="Descripción de la imagen"
                        fill
                        style={{ objectFit: 'contain' }}
                    /> : <Image src="/logotype.png" alt="Descripción de la imagen"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                }

            </div>
        </Link>
    )
}

export default Logotype