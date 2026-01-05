import "./timeLine.css";

const jobHistory = [
	{
		title: "Frontend Developer",
		company: "Alten",
		timeframe: "2023 - 2025",
		description:
			"Migrated a large legacy front-end application to React/TypeScript, improving performance by 30% and reducing bundle size.",
		id: 1,
		image: "/alten-logo.png",
	},
	{
		title: "Frontend Developer",
		company: "Neho",
		timeframe: "2022 - 2023",
		description:
			"Designed and developed responsive interfaces in React + TypeScript, improving Lighthouse scores from 70 → 95",
		id: 2,
		image: "/neho-logo.png",
	},
	{
		title: "Junior Frontend Developer",
		company: "Aquasoft",
		timeframe: "2020 – 2022",
		description:
			"Delivered cross-browser compatible features, supporting 1M+ users across multiple platforms.",
		id: 3,
		image: "/aquasoft-logo.png",
	},
];

function TimeLine() {
	return (
		<div className="timeline">
			{jobHistory.map((job, index) => (
				<div
					key={job.id}
					className={`container ${
						index % 2 === 0 ? "left-container" : "right-container"
					}`}
				>
					<img
						src={job.image}
						alt={`${job.company} logo`}
						className="company-logo"
					/>
					<div className="text-box">
						<h2>{job.title}</h2>
						<small>{job.company}</small>
						<p>{job.description}</p>
            <span className={`${index % 2 === 0 ? "left-container-arrow" : "right-container-arrow"}`}></span>
					</div>
				</div>
			))}
		</div>
	);
}
export default TimeLine;
