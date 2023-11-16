import Image from 'next/image'
import Link from 'next/link'

export default function Dashboard() {
  return (
    <main className="flex flex-col items-center justify-start p-24 flex-1">

      <h1>Dashboard</h1>

      <Link href="/" className='bg-red-200 rounded-md p-1 border-2 border-solid border-blue-200 hover:bg-yellow-200 hover:border-dashed hover:border-red-200'>Home</Link>
      
    </main>
  )
}