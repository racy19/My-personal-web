import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";

const navLinkClass = 'nav-link text-white'

const Page = () => {
    return (
        <>
            <header className="bg-success text-white p-2">
                <nav className="container navbar navbar-expand-md">
                    <div className="container-fluid">
                        <span className="fs-3 navbar-brand text-white">Anna Raichlová</span>
                        <button className="navbar-toggler bg-light text-white" type="button" data-bs-toggle="collapse" data-bs-target="#nav-main" aria-controls="nav-main" aria-expanded="false" aria-label="toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="nav-main">
                            <ul className="navbar text-uppercase fw-bold list-unstyled flex-column flex-md-row align-items-baseline mb-0 gap-4 ms-auto">
                                <li className="nav-item ms-auto">
                                    <NavLink to={"/"} className={navLinkClass} activeClassName="active" name="home" >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item ms-auto">
                                    <NavLink to={"/abilities"} className={navLinkClass} activeClassName="active" name="abilities">
                                        Dovednosti
                                    </NavLink>
                                </li>
                                <li className="nav-item ms-auto">
                                    <NavLink to={"/contact"} className={navLinkClass} activeClassName="active" name="contact">
                                        Kontakt
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="container mt-5">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Page;