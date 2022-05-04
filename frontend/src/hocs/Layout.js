import Head from "next/head";
import Navbar from "../components/Navbar";
const Layout = ({ title, content, children }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={content}></meta>
			</Head>
			<Navbar />
			<div className="container">{children}</div>
		</>
	);
};
Layout.defaultProps = {
	title: "HttpOnly Auth",
	content: "HttpOnly cookies",
};
export default Layout;
