import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import ThemeSwitcher from "../components/ThemeSwitcher";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useLanguage, LanguageProvider } from "../components/LanguageContext";

const navLinkClass = 'nav-link text-white';

const PageContent = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // get the theme mode from the local storage once the component mounts
    useEffect(() => {
        const savedThemeMode = localStorage.getItem('darkMode');
        if (savedThemeMode) {
            setIsDarkMode(savedThemeMode === 'true');
        }
    }, []);

    // save the theme mode to the local storage when it changes
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('darkMode', !isDarkMode.toString());
    };

    // get the content based on the selected language
    const { content } = useLanguage();

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
                            <ul className="navbar text-uppercase fw-bold list-unstyled flex-column flex-md-row align-items-baseline mb-0 me-2 gap-4 ms-auto">
                                <li className="nav-item ms-auto">
                                    <NavLink to={"/"} className={navLinkClass} activeClassName="active" name="home" >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item ms-auto">
                                    <NavLink to={"/abilities"} className={navLinkClass} activeClassName="active" name="abilities">
                                        {content.abilities}
                                    </NavLink>
                                </li>
                                <li className="nav-item ms-auto">
                                    <NavLink to={"/contact"} className={navLinkClass} activeClassName="active" name="contact">
                                        {content.contact}
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <ThemeSwitcher isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                        <LanguageSwitcher />
                    </div>
                </nav>
            </header>
            <div className={isDarkMode ? 'pt-5 pb-5 bg-dark text-white' : 'pt-5 pb-5 bg-light'}>
                <div className="container">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    )
}

const Page = () => {
    return (
        <LanguageProvider>
            <PageContent />
        </LanguageProvider>
    );
}

export default Page;