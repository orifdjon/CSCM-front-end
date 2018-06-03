import * as React from "react";
import BtnMsg from "../../components/header/BtnMsg";
import BtnQuery from "../../components/header/BtnQuery"
import BtnLogout from "../../components/header/BtnLogout";


class Btns extends React.Component {
    render() {
        return (
            <div className="btns">
                <p>Logged as Default administrator</p>
                <BtnMsg/>
                <BtnQuery/>
                <BtnLogout/>
            </div>
        );
    }
}

export default Btns;
