import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <nav className='flex justify-between'>
        <button >Home</button>
        <button>About me</button>
        <button>Project</button>
        <button>Contact me</button>
     </nav>
    </main>
  )
}
