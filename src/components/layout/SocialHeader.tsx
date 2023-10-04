import DarkModeToggle from "../DarkModeToggle";
import SocialButtons from "../SocialButtons";

const SocialHeader = () => {
	return (
		<div className="m-5 flex justify-between items-center">
			<div className="">
				<DarkModeToggle />
			</div>
			<SocialButtons />
		</div>
	);
};

export default SocialHeader;
