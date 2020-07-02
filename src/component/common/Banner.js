import React, {Component} from "react";
import intl from "react-intl-universal";

class List extends Component{
    render() {
        return (
            <div className={"list"}>
                <ul>
                    <li>{intl.get("MENU_INDEX")}</li>
                    <li>{intl.get("MENU_POOL")}</li>
                    <li>{intl.get("MENU_UPDATE")}</li>
                    <li>{intl.get("MENU_BILL")}</li>
                </ul>
            </div>
        )
    }
}

export default class Index extends Component {
    render() {
        return (
            <div className={"banner"}>
                <h1>{intl.get("SYSTEM_NAME")}</h1>
                <List/>
            </div>
        )
    }
}