import * as React from 'react'
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import {Container, Row} from "reactstrap";

class App extends React.Component<{}, {}> {
    render() {
        return (
            <div className={"app bg-light"}>
                <Header/>
                <Container fluid={true}>
                    <Row>
                        <Main/>
                        <Footer/>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
