"use client";

import XIcon from "public/social-icons/x.svg";
import LinkedinIcon from "public/social-icons/linkedin.svg";
import GitHubIcon from "public/social-icons/github.svg";
import SendIcon from "public/icons/send.svg";
import { FormEvent } from "react";

const ContactFormCard = () => {
	function onSubmit(e: FormEvent) {
		e.preventDefault();
		console.log(e);
	}

	return (
		<div className="w-full p-12">
			<div className="prose mb-4">
				<h1 className="text-neutral-100">Contact Me</h1>
				<p className="text-neutral-200">
					If you want want to see what I'm up to, click one of my links below.
					Otherwise, please fill out this form and I will get back to you as
					soon as I can!
				</p>
			</div>
			<ul className="flex gap-5 mb-8">
				<li>
					<a className="link" href="#">
						<GitHubIcon height={30} />
					</a>
				</li>
				<li>
					<a className="link" href="#">
						<LinkedinIcon height={30} />
					</a>
				</li>
				<li>
					<a className="link" href="#">
						<XIcon height={30} />
					</a>
				</li>
			</ul>
			<form onSubmit={onSubmit}>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 mb-2">
					<div className="form-control">
						<label className="label" htmlFor="name-field">
							<span className="label-text text-neutral-300">Name</span>
						</label>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full max-w-xs"
							id="name-field"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label" htmlFor="email-field">
							<span className="label-text text-neutral-300">Email</span>
						</label>
						<input
							type="email"
							placeholder="Type here"
							className="input input-bordered w-full max-w-xs"
							id="email-field"
							required
						/>
					</div>
				</div>
				<div className="form-control mb-2">
					<label className="label" htmlFor="subject-field">
						<span className="label-text text-neutral-300">Subject</span>
					</label>
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered w-full max-w-xs"
						id="subject-field"
						required
					/>
				</div>
				<div className="form-control mb-10">
					<label className="label" htmlFor="bio-field">
						<span className="label-text text-neutral-300">Message</span>
					</label>
					<textarea
						className="textarea textarea-bordered h-24"
						placeholder="Bio"
						id="bio-field"
						required
					></textarea>
				</div>
				<button className="btn btn-primary flex justify-between">
					Send Message
					<SendIcon width={20} />
				</button>
			</form>
		</div>
	);
};

export default ContactFormCard;
