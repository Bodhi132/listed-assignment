import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='w-screen h-screen bg-white flex justify-center items-center align-middle '>
    <Link href="/login" className='hover:text-violet-600'>Click to Start 🚀</Link>
    </div>
  )
}
