import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

function ScrollRestoration() {
	return <ScrollToTop />;
}

export default ScrollRestoration;
