import Image from 'next/image';




const Logotype = ({ withLogotype }) => {
    return (
        <div className="h-20 relative" style={{ width: `${withLogotype}px` }} >
            <Image src="/logotype.png" alt="Descripción de la imagen"
                fill
                style={{ objectFit: 'contain' }}
            />
        </div>
    )
}

export default Logotype