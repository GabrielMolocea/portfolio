import "./timeLine.css";

const jobHistory: Job[] = [
	{
		title: "Frontend Developer",
		company: "Alten",
		timeframe: "2023 - 2025",
		description: [
			"Migrated a large legacy front-end application to React/TypeScript, improving performance by 30% and reducing bundle size.",
			"Developed reusable UI components, cutting development time for new features by 25%.",
			"Integrated REST and GraphQL APIs into scalable front-end modules.",
			"Increased test coverage by 40% through Jest and React Testing Library.",
			"Collaborated closely with designers and product managers to deliver user-focused features."
		],
		id: 1,
	},
	{
		title: "Frontend Developer",
		company: "Neho",
		timeframe: "2022 - 2023",
		description: [
			"Designed and developed responsive interfaces in React + TypeScript, improving Lighthouse scores from 70 → 95",
			"Implemented API integrations, optimizing data rendering and reducing API call overhead by 20%.",
			"Wrote unit tests with Jest and Enzyme, ensuring high code quality and reducing bugs in production.",
			"Actively participated in Agile ceremonies and cross-functional collaboration, ensuring on-time delivery."
		],
		id: 2,
	},
	{
		id: 3,
		title: "Junior Frontend Developer",
		company: "Aquasoft",
		timeframe: "2020 – 2022",
		description: [
			"Delivered cross-browser compatible features, supporting 1M+ users across multiple platforms.",
			"Contributed to API workflows and CMS-driven content updates, reducing manual work by 50%.",
			"Collaborated with QA and backend teams, shortening release cycles and improving efficiency.",
			"Introduced modern front-end practices, including TypeScript, into existing projects."
		],
	},
];

type Job = {
	id: number;
	title: string;
	company: string;
	timeframe: string;
	description: Array<string>;
};

const TimelineItem = ({ job }: { job: Job }) => (
	<div className="timeline-item">
		<div className="timeline-item-content">
			<span className="tag">{job.company}</span>
			<h2>{job.title}</h2>
			{<time>{job.timeframe}</time>}
			<ul>
				{job.description.map((desc, index) => (
					<li key={index}>{desc}</li>
				))}
			</ul>

			<span className="circle" />
		</div>
	</div>
);

export default function TimeLine() {
	return (
		<div className="timeline-container">
			{jobHistory.map((job) => (
				<TimelineItem key={job.id} job={job} />
			))}
		</div>
	);
}
