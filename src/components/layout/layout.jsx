import Header from "./header";
import Footer from "./footer";
import { Fragment } from "react";


const Layout = ({ children }) => {
    return (
        <Fragment>
            <Header />
            {children}

            <Footer />
        </Fragment>

    )
}

export default Layout;