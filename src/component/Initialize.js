import React, {Component} from "react";

export default class Index extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        )
    }
}