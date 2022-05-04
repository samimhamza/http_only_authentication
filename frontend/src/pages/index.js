import Layout from "../hocs/Layout";
const homePage = () => (
	<Layout
		title="HttpOnly Auth | Home"
		content="Home Page for HttpOnly cookies with JSON Web Token"
	>
		<div className="p-5 bg-light rounded-3">
			<div className="container-fluid py-3">
				<h1 className="display-5 fw-bold">Home Page</h1>
				<p className="fs-4 mt-3">Welcome to HttpOnly Auth Tutorial</p>
			</div>
		</div>
	</Layout>
);
export default homePage;
