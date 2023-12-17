import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import AuthProvider from '@/components/authProvider/AuthProvider'
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/context/ThemeContext"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lumine Software House',
  description: 'Software House yang akan menciptakan berbagai macam jenis aplikasi yang kamu inginkan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className='container'>
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
