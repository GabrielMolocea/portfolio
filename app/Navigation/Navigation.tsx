import Image from "next/image";

export default function Navigation() {
    return (
        <nav className="flex flex-col justify-between m-2 sticky top-0 shadow-sm">
            <div className="flex justify-between ">
                <div className="p-2">
                    <button className="p-1 hover:rounded-full hover:transition hover:shadow-xl hover:ring ring-blue-500 duration-150 ease-in-out">Home</button>
                    <button className="p-1 hover:rounded-full hover:transition hover:shadow-xl hover:ring ring-blue-500 duration-150 ease-in-out">About me</button>
                    <button className="p-1 hover:rounded-full hover:transition hover:shadow-xl hover:ring ring-blue-500 duration-150 ease-in-out">Project</button>
                </div>
                <button className="w-8 h-8 bg-sun bg-cover bg-clip-content mt-1" />
                <div>
                    <button className="p-1 hover:rounded-full hover:transition hover:shadow-xl hover:ring ring-blue-500 duration-150 ease-in-out">Contact me</button>
                </div>
            </div>
        </nav>
    )
}