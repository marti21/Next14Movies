import IncomingMovies from '@/app/ui/dashboard/incoming/incomingMovies'
import { Suspense } from 'react'

export default function Incoming() {
  return (
    <main className="flex flex-1 flex-col">
        <div className="flex justify-center items-center h-[80px] w-full bg-yellow-300">
            <h1>Incoming</h1>
        </div>

        <Suspense fallback={<div>Cargando...</div>}>
            <IncomingMovies></IncomingMovies>
        </Suspense>
    </main>
  )
}