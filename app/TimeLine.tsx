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

type Job = {
	id: number;
	title: string;
	company: string;
	timeframe?: string;
	description: string;
	image?: string;
};

const TimelineItem = ({
	job,
	sided,
}: {
	job: Job;
	sided: "left" | "right";
}) => (
	<div className="timeline-item">
		<div className="timeline-item-content">
			{/* {job.image && (
			<img src={job.image} alt={`${job.company} logo`} className="company-logo" />
		)} */}
			<span
				className="tag"
				// style={{ background: data.category.color }}
			>
				{job.company}
			</span>
			<h2>{job.title}</h2>
			{<time>{job.timeframe}</time>}
			<p>{job.description}</p>
			<span className="circle" />
		</div>
	</div>
);

export default function TimeLine() {
	return (
		<div className="timeline-container">
			{jobHistory.map((job, index) => (
				<TimelineItem
					key={job.id}
					job={job}
					sided={index % 2 === 0 ? "left" : "right"}
				/>
			))}
		</div>
	);
}
