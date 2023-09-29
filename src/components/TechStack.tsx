import JSIcon from "public/tech-stack-icons/javascript.svg";
import CSSIcon from "public/tech-stack-icons/css.svg";
import HTMLIcon from "public/tech-stack-icons/html.svg";
import TSIcon from "public/tech-stack-icons/typescript.svg";
import CIcon from "public/tech-stack-icons/c.svg";
import ReactIcon from "public/tech-stack-icons/react.svg";
import NextIcon from "public/tech-stack-icons/next.svg";
import SassIcon from "public/tech-stack-icons/sass.svg";
import NodeIcon from "public/tech-stack-icons/node.svg";
import MuiIcon from "public/tech-stack-icons/mui.svg";
import TailwindIcon from "public/tech-stack-icons/tailwind.svg";
import ReduxIcon from "public/tech-stack-icons/redux.svg";
import NPMIcon from "public/tech-stack-icons/npm.svg";
import GitIcon from "public/tech-stack-icons/git.svg";
import SqlIcon from "public/tech-stack-icons/sql.svg";
import JestIcon from "public/tech-stack-icons/jest.svg";
import MongoIcon from "public/tech-stack-icons/mongo.svg";
import DockerIcon from "public/tech-stack-icons/docker.svg";
import ViteIcon from "public/tech-stack-icons/vite.svg";
import FigmaIcon from "public/tech-stack-icons/figma.svg";
import AIIcon from "public/tech-stack-icons/ai.svg";
import PSIcon from "public/tech-stack-icons/ps.svg";

const TechStack = () => {
	return (
		<div className="flex p-10 flex-col gap-10">
			<div className="prose text-center">
				<h3 className="font-mono inline-flex mb-5 pb-1 text-neutral-200 border-b-4 border-neutral-200 ">
					Languages
				</h3>
				<div className="flex gap-3 justify-center flex-wrap">
					<HTMLIcon height={50} />
					<CSSIcon height={50} />
					<JSIcon height={50} />
					<TSIcon height={50} />
					<CIcon height={50} />
				</div>
			</div>
			<div className="prose text-center">
				<h3 className="font-mono inline-flex mb-5 pb-1 text-neutral-200 border-b-4 border-neutral-200 ">
					Frameworks/Libraries
				</h3>
				<div className="flex gap-3 justify-center flex-wrap">
					<ReactIcon height={50} />
					<NextIcon height={50} />
					<SassIcon height={50} />
					<NodeIcon height={50} />
					<MuiIcon height={50} />
					<TailwindIcon height={50} />
					<ReduxIcon height={50} />
				</div>
			</div>
			<div className="prose text-center">
				<h3 className="font-mono inline-flex mb-5 pb-1 text-neutral-200 border-b-4 border-neutral-200 ">
					Tools
				</h3>
				<div className="flex gap-3 justify-center flex-wrap">
					<NPMIcon height={40} />
					<GitIcon height={40} />
					<JestIcon height={40} />
					<SqlIcon height={40} />
					<MongoIcon height={40} />
					<DockerIcon height={40} />
					<ViteIcon height={40} />
					<FigmaIcon height={40} />
					<AIIcon height={40} />
					<PSIcon height={40} />
				</div>
			</div>
		</div>
	);
};

export default TechStack;
