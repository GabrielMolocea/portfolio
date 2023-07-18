"use client"
import { useRouter } from "next/navigation";
import ProgressBar from "../Components/ProgressBar";
import Image from "next/image";

export default function Info({ isDarkMode }: { isDarkMode: boolean }) {
    const router = useRouter();

    const redirectToPage = (id: string) => {
        if (id === "github") {
            window.open("https://github.com/GabrielMolocea", "_blank");
        } else if (id === "linkedin") {
            window.open("https://www.linkedin.com/in/gabriel-molocea", "_blank");
        }
    };

    const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
        const id = event.currentTarget.id;
        redirectToPage(id);
    };

    return (
        <div
            className={`block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mr-4 drop-shadow-lg ${isDarkMode ? "dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" : ""}`}
        >
            <img className="rounded-full mb-3" src="images/Profile.jpeg" alt="Profile image" />
            <h5 className={`mb-2 text-2xl font-bold tracking-tight text-gray-900 ${isDarkMode ? 'dark:text-white' : ''}`}>Gabriel Molocea</h5>
            <div className="flex flex-row justify-center">
                <img
                    className="w-8 h-8 m-3"
                    id="github"
                    src="/images/github.png"
                    alt="github"
                    onClick={handleClick}
                />
                <img
                    className="w-8 h-8 m-3"
                    id="linkedin"
                    src="/images/linkedin.png"
                    alt="linkedin"
                    onClick={handleClick}
                />
            </div>
            <h5 className={`mb-2 text-xl font-bold tracking-tight text-gray-900 ${isDarkMode ? 'dark:text-white pt-5' : ''}`}>Languages</h5>
            <ProgressBar title={"Romanian"} percentage={100} isDarkMode={isDarkMode} />
            <ProgressBar title={"English"} percentage={85} isDarkMode={isDarkMode} />
        </div>
    );
}

