import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const NavBar = () => {
    return (
        <div className="navigation-bar">
            <MobileNavigation></MobileNavigation>
            <Navigation></Navigation>
        </div>
    )

}

export default NavBar;