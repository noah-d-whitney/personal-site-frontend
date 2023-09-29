import { ReactElement } from "react";

const HomePageContainer = (props: { children: ReactElement }) => {
	return <div className="m-5">{props.children}</div>;
};

export default HomePageContainer;
