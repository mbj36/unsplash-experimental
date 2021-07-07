import React from "react";
import { NavbarDiv, Image } from "./Navbar.styles";

const Navbar = () => {
    return (
        <NavbarDiv>
            <Image
                alt="logo"
                src="https://colearn.id/wp-content/uploads/2019/12/CoLearn-Logo-153x32px.png"
            />
        </NavbarDiv>
    );
};

export default Navbar;
