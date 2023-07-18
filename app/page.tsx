import { Fragment } from "react";
import { metadata } from "./layout";
import "./page.css";
import data from "./page.json";

export default function Home() {
	const statusEmoji = new Map([
		["Unsupported", "🚫"],
		["Planned", "💬"],
		["Canary", "🦜"],
		["In development", "💻"],
		["Stable", "✅"],
	]);

	return (
		<>
			<h1>{metadata.title}</h1>
			{data.map(({ category, entries }) => (
				<Fragment key={category}>
					<h2>{category}</h2>
					{entries.map(({ name, status, url }) => (
						<Fragment key={name}>
							<h3>
								<a href={url}>{name}</a>
							</h3>
							<p>
								<span aria-hidden>{statusEmoji.get(status)}</span> {status}
							</p>
						</Fragment>
					))}
				</Fragment>
			))}
		</>
	);
}
