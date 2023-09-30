import LeftArrow from "public/icons/arrow-left.svg";
import RightArrow from "public/icons/arrow-right.svg";

const PaginationButtons = () => {
	return (
		<div className="flex gap-4 self-center">
			<button className="btn btn-circle btn-disabled">
				<LeftArrow width={30} />
			</button>
			<button className="btn btn-circle">
				<RightArrow width={30} />
			</button>
		</div>
	);
};

export default PaginationButtons;
