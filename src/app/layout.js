import { Poppins } from 'next/font/google'
import "./globals.css";


export const metadata = {
  title: "PescaBot - Automatización Inteligente para el Sector Pesquero",
  description: "Software para la Automatización Inteligente en el Sector Pesquero",
  icons: {
    icon: "/favicon.ico", 
  },
};


const poppins = Poppins({
  weight: [
    '100', // Thin
    '200', // Extra Light
    '300', // Light
    '400', // Regular
    '500', // Medium
    '600', // Semi Bold
    '700', // Bold
    '800', // Extra Bold
    '900', // Black
  ],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={poppins.className}>
      <body className='w-full max-w-full'>
        {children}
      </body>
    </html>
  );
}
