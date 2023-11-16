import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 bg-red-500 gap-12">

      <h1>Prueba</h1> 
      
      <div className='bg-blue-300 w-60 h-60'>

      </div>

      <Link href="/dashboard">Dashboard</Link>
      
    </main>
  )
}
