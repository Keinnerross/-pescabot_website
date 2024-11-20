'use client' // Asegúrate de que es un Client Component
import Swal from "sweetalert2";
import { usePathname, useSearchParams } from 'next/navigation'; // Usamos hooks de next/navigation
import { useEffect, useState } from 'react';

const SubmitAlert = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        // Verificamos si el parámetro 'submitted' está presente en la URL
        setIsSubmitted(searchParams.get('submitted') === 'true');
    }, [searchParams]);

    useEffect(() => {
        if (isSubmitted) {
            Swal.fire({
                icon: "success",
                title: "¡Enviado!",
                text: "En breve te contáctaremos",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,

            });
        }
    }, [isSubmitted]);

    return <div></div>;
};

export default SubmitAlert;

