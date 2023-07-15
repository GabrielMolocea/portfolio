
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-2">
      <nav className="flex justify-between sticky">
        <div>
          <button className="m-2 hover:border-b-2 hover:transition duration-150 ease-in-out border-black ">Home</button>
          <button className="m-2 hover:border-b-2 hover:transition duration-150 ease-in-out border-black">About me</button>
          <button className="m-2 hover:border-b-2 hover:transition duration-150 ease-in-out border-black">Project</button>
        </div>
        <div>
          <button className="m-2 hover:border-b-2 hover:transition duration-150 ease-in-out border-black">Contact me</button>
        </div>
      </nav>
    </main>
  )
}
