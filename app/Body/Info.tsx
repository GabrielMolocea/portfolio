import ProgressBar from "../Components/ProgressBar";

export const Info = () => {
    return (
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mr-4 drop-shadow-lg">
            <img className="rounded-full mb-3" src="images/Profile.jpeg" alt="Profile image" />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Gabriel Molocea</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400"></p>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white pt-9">Languages</h5>
            <ProgressBar title={'Romanian'} percentage={100} />
            <ProgressBar title={'English'} percentage={85} />


        </div>
    );
};
