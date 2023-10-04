import SkillTags from "./SkillTags";

const BioCard = () => {
	return (
		<div
			id="about"
			className="flex flex-col justify-between align-center w-full p-12 lg:p-20 gap-10"
		>
			<div className="prose-2xl">
				<h1 className="font-black mb-4 text-neutral-800 leading-tight">
					About Me
				</h1>
				<p className="leading-loose">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
					assumenda quisquam numquam nostrum quibusdam fuga voluptatem cum
					explicabo inventore incidunt, facere necessitatibus eveniet
					accusantium consequuntur provident ducimus deserunt expedita eaque.
				</p>
			</div>
			<SkillTags
				skills={[
					"HTML",
					"CSS",
					"JAVASCRIPT",
					"TYPESCRIPT",
					"C",
					"REACT",
					"NEXT.JS",
					"SASS",
					"NODE",
					"MUI",
					"TAILWIND",
					"REDUX",
					"ILLUSTRATOR",
					"PHOTOSHOP",
					"FIGMA",
					"GIT",
					"JEST",
					"DESIGN",
					"AGILE",
					"STRAPI",
					"MEDUSA",
					"EMOTION",
					"AXIOS",
					"SCSS",
				]}
			/>
		</div>
	);
};

export default BioCard;
