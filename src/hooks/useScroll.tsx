import { useEffect, useState } from "react";

const useScroll = (): {
	isScrolled: boolean;
	scrollToTop: () => void;
	scrollTo: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
} => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const [isBottom, setIsBottom] = useState<boolean>(false);

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	const scrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
		console.log("TEST");
		const href = e.currentTarget.href;
		const targetId = href.replace(/.*\#/, "");
		const element = document.getElementById(targetId);
		const offset = 90;

		if (!element) return;

		window.scrollTo({
			behavior: "smooth",
			top:
				element.getBoundingClientRect().top -
				document.body.getBoundingClientRect().top -
				offset,
		});
	};

	useEffect(() => {
		const checkScroll = setInterval(() => {
			if (window.scrollY >= 800) setIsScrolled(true);
			else if (window.scrollY < 800) setIsScrolled(false);
		}, 300);

		return () => clearInterval(checkScroll);
	});

	return { isScrolled, scrollToTop, scrollTo };
};

export default useScroll;

// import React, { useState, useEffect } from 'react';\nfunction StickyHeader() {\n const [isSticky, setSticky] = useState(false);\n const handleScroll = () => {\n const windowScrollTop = window.scrollY;\n if (windowScrollTop > 10) {\n setSticky(true);\n } else {\n setSticky(false);\n }\n };\n useEffect(() => {\n window.addEventListener('scroll', handleScroll);\n return () => {\n window.removeEventListener('scroll', handleScroll);\n };\n }, []);\n const items = [\n {\n name: 'Home',\n link: '/'\n },\n {\n name: 'About',\n link: '/about'\n },\n {\n name: 'Contact',\n link: '/contact'\n }\n ];\n const data = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,\n 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36 ]\n return (\n <div className="App">\n <header style={{ background: isSticky ? '#fff' : '', width: '100%', zIndex: '999',position:isSticky ?'fixed':'absolute' }}>\n {items.map(item => (\n <a href={item.link} key={item.name}>\n {item.name}\n </a>\n ))}\n </header>\n <ul>\n {data.map((x) => {\n return (<li key={x}>{x}</li>)\n })}\n </ul>\n </div>\n );\n}\nexport default StickyHeader;
