import XIcon from "public/social-icons/x.svg";
import LinkedinIcon from "public/social-icons/linkedin.svg";
import GitHubIcon from "public/social-icons/github.svg";
import EmailIcon from "public/social-icons/email.svg";

const SocialButtons = () => {
	return (
		<ul className="flex gap-5">
			<li>
				<a className="link" href="#">
					<GitHubIcon height={25} />
				</a>
			</li>
			<li>
				<a className="link" href="#">
					<LinkedinIcon height={25} />
				</a>
			</li>
			<li>
				<a className="link" href="#">
					<XIcon height={25} />
				</a>
			</li>
			<li>
				<a className="link" href="#">
					<EmailIcon height={25} />
				</a>
			</li>
		</ul>
	);
};

export default SocialButtons;
