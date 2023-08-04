import { useRouter } from "next/navigation";
import ProgressBar from "../Components/ProgressBar";
import { MouseEventHandler } from "react";

export default function Info({ isDarkMode }: { isDarkMode: boolean }) {
    const router = useRouter();

    const redirectToPage = (id: string) => {
        if (id === "github") {
            window.open("https://github.com/GabrielMolocea", "_blank");
        } else if (id === "linkedin") {
            window.open("https://www.linkedin.com/in/gabriel-molocea", "_blank");
        }
    };

    const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        const id = event.currentTarget.id;
        redirectToPage(id);
    };

    return (
        <div
            className={`block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 drop-shadow-lg sm:ml-2 sm:mr-2 lg:mr-4 ${isDarkMode ? "dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" : ""
                }`}
        >
            <img className="rounded-full mb-3" src="images/Profile.jpeg" alt="Profile image" />
            <h5 className={`mb-2 text-2xl font-bold tracking-tight text-gray-900 ${isDarkMode ? 'dark:text-white' : ''}`}>Gabriel Molocea</h5>
            <div className="flex flex-row justify-center">

                <div className="flex flex-col items-center mr-4">
                    <button
                        id="linkedin"
                        className="w-12 h-12 bg-linkedin bg-contain mb-2"
                        onClick={handleClick}
                    />
                    <span className={`${isDarkMode ? 'dark:text-white': ''}`}>LinkedIn</span>
                </div>

                <div className="flex flex-col items-center">
                    <button
                        id="github"
                        className={`w-12 h-12 ${isDarkMode ? 'bg-github-dark' : 'bg-github-light'} bg-contain mb-2`}
                        onClick={handleClick}

                    />
                    <span className={`${isDarkMode ? 'dark:text-white': ''}`}>GitHub</span>
                </div>
            </div>
            <h5 className={`mb-2 text-xl font-bold tracking-tight text-gray-900 ${isDarkMode ? 'dark:text-white pt-5' : ''}`}>Languages</h5>
            <ProgressBar title={"Romanian"} percentage={100} isDarkMode={isDarkMode} />
            <ProgressBar title={"English"} percentage={85} isDarkMode={isDarkMode} />
        </div>
    );
}