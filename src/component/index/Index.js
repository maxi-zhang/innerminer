import React, {Component} from "react";
import Banner from "../common/Banner";


class BillArea extends Component{
    render() {
        return (
            <div className={"common-div"}>
                <h3>我的工单</h3>
                <li>矿机SN000001磁盘故障，请协助排查  2020.07.02 11:08:15</li>
                <li>矿机SN000001磁盘故障，请协助排查  2020.07.02 11:08:15</li>
                <li>矿机SN000001磁盘故障，请协助排查  2020.07.02 11:08:15</li>
                <li>矿机SN000001磁盘故障，请协助排查  2020.07.02 11:08:15</li>
                <li>矿机SN000001磁盘故障，请协助排查  2020.07.02 11:08:15</li>
                <h4 style={{lineHeight:"30px"}}>转至工单列表</h4>
            </div>
        )
    }
}


class WarningArea extends Component{
    render() {
        return (
            <div className={"common-div"} style={{marginTop:"30px"}}>
                <h3>我的消息</h3>
                <li>矿机SN000001磁盘故障，请协助排查  2020.07.02 11:08:15</li>
                <li>矿机SN000001磁盘故障，请协助排查  2020.07.02 11:08:15</li>
                <li>矿机SN000001磁盘故障，请协助排查  2020.07.02 11:08:15</li>
                <li>矿机SN000001磁盘故障，请协助排查  2020.07.02 11:08:15</li>
                <li>矿机SN000001磁盘故障，请协助排查  2020.07.02 11:08:15</li>
                <h4 style={{lineHeight:"30px"}}>转至消息列表</h4>
            </div>
        )
    }
}



class IndexMain extends Component{
    render() {
        return (
            <div className={"main-text common-div"}>
                <BillArea/>
                <WarningArea/>
            </div>
        )
    }
}

export default class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Banner/>
                <IndexMain/>
            </React.Fragment>
        )
    }
}