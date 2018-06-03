import * as React from "react";
import HeaderBtns from "./Btns"

class Header extends React.Component<{}, {}> {
    render() {
        return (
            <div className={"header"}>
                <HeaderBtns/>
            </div>
        );
    }
}

export default Header;
