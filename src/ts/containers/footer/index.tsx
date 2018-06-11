import * as React from "react";
import {Container} from "reactstrap";
import FooterForm from "./smart/FooterForm";



class Footer extends React.Component<{}, {}> {

    render() {
        return(
            <div>
                <FooterForm/>
            </div>
        );
    }
}

export default Footer;
