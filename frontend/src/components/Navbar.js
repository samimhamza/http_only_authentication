import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
	const router = useRouter();

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link href="/">
					<a className="navbar-brand">Navbar</a>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<Link href="/">
							<a
								className={
									router.pathname === "/" ? "nav-link active" : "nav-link"
								}
							>
								Home
							</a>
						</Link>
						<Link href="/register">
							<a
								className={
									router.pathname === "/register"
										? "nav-link active"
										: "nav-link"
								}
							>
								Register
							</a>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
