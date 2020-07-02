import React, {Component} from "react";
import intl from "react-intl-universal";
import Banner from "../common/Banner";


class PoolMain extends Component{
    render() {
        return (
            <div className={"main-text"}>
                23123123
            </div>
        )
    }
}

export default class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Banner/>
                <PoolMain/>
            </React.Fragment>
        )
    }
}