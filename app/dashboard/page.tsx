import Image from 'next/image'
import Link from 'next/link'
import { MoviesNow } from '../ui/dashboard/MoviesNow'
import { Suspense } from 'react'

export default function Dashboard() {
  return (
    <main className="flex flex-col items-center justify-start flex-1">

      <div className="flex justify-center items-center h-[80px] w-full bg-yellow-300">
          <h1>Dashboard</h1>
          <Link href="/" className='bg-red-200 rounded-md p-1 border-2 border-solid border-blue-200 hover:bg-yellow-200 hover:border-dashed hover:border-red-200'>Home</Link>
      </div>

      <Suspense fallback={<div>Cargando....</div>}>
        <MoviesNow></MoviesNow>
      </Suspense>
      
    </main>
  )
}