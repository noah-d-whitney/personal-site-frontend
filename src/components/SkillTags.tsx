interface SkillTagsProps {
	skills: string[];
}

const SkillTags = (props: SkillTagsProps) => {
	const { skills } = props;
	return (
		<div className="flex gap-2 flex-wrap">
			{skills.map((s) => (
				<div className="prose-sm px-4 py-2 bg-neutral-200 rounded">
					<p>{s}</p>
				</div>
			))}
		</div>
	);
};

export default SkillTags;
