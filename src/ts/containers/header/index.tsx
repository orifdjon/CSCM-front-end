import * as React from "react";
import HeaderBtns from "./silly/Btns"
import {Container} from "reactstrap";

class Header extends React.Component<{}, {}> {
    render() { //TODO implement CurrentTime
        return (
            <Container className={"header bg-primary"} fluid={true}>
                <HeaderBtns/>
            </Container>
        );
    }
}

export default Header;
