import React, {Component} from "react";
import intl from "react-intl-universal";
import Banner from "../common/Banner";
import {Button, Select, Input, Table, Checkbox} from 'antd';

const {Search} = Input;

const {Option} = Select;

class AboveInfo extends Component {
    render() {
        const arr = [
            ["0", 't01001'],
            ["1", 't01002'],
            ["2", 't01003'],
            ["3", 't01004'],
            ["4", 't01005'],
        ]

        const info = arr.map((value, key) => {
            const [id, miner] = value
            return (
                <Option key={key} value={id}>{miner}</Option>
            )
        })

        return (
            <div className={"common-div"}>
                <div className={"title-common"}>
                    矿池信息
                </div>
                <div className={"title-common"} style={{height: "150px", position: "relative"}}>
                    <div className={"piece"}>
                        <p>矿池列表</p>
                        <Select defaultValue="0" style={{width: "120px", marginRight: "10px"}}
                                onChange={this.handleChange}>
                            {info}
                        </Select>
                    </div>
                    <div className={"piece"}>
                        <p>矿机总数： 30</p>
                        <p>在线数： 17</p>
                        <p>离线数： 13</p>
                    </div>
                    <div className={"piece"}>
                        <p>矿机总数： 30 &nbsp;&nbsp;&nbsp;<a>查看算力</a></p>
                        <p>在线数： 17</p>
                        <p>离线数： 13</p>
                    </div>
                </div>
            </div>
        )
    }
}

class ChangePanel extends Component {
    render() {
        return (
            <div className={"title-common"}>
                <Button style={{marginRight: "30px"}}>矿机视图</Button>
                <Button>扇区试图</Button>
            </div>
        )
    }
}

class OperatePanel extends Component {
    handleChange = (e) => {
        console.log(11111111, e, 3333333333)
    }

    render() {
        return (
            <div className={"title-common"}>
                <Select defaultValue="0" style={{width: "120px", marginRight: "10px"}} onChange={this.handleChange}>
                    <Option value="0">全部</Option>
                    <Option value="1">主矿工</Option>
                    <Option value="2">密封机</Option>
                    <Option value="3">存储机</Option>
                    <Option value="4">证明机</Option>
                    <Option value="5">wpost</Option>
                </Select>
                <Button style={{marginRight: "10px"}}>重启</Button>
                <Button style={{marginRight: "10px"}}>关机</Button>
                <Button style={{marginRight: "10px"}}>批量删除</Button>

                <Search
                    placeholder="矿机名称/IP"
                    onSearch={value => console.log(value)}
                    style={{width: "200px", position: "absolute", right: "30px", top: "8px"}}
                />
            </div>
        )
    }
}

const PPP = () => {
    return (
        <p>当前任务</p>
    )
}

// 矿池表格区域整体
class TableDetail extends Component {
    state = {
        choose: 3,
        checkedList: [],
        indeterminate: true,
        checkAll: false,
        plainOptions: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    };

    onChange = checkedList => {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && checkedList.length < this.state.plainOptions.length,
            checkAll: checkedList.length === this.state.plainOptions.length,
        });
    };

    getCheckList = () => {
        console.log(this.state.checkedList);
    }

    onCheckAllChange = e => {
        this.setState({
            checkedList: e.target.checked ? this.state.plainOptions : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
    };

    render() {
        const columns = [
            {title: "", dataIndex: 'check', key: 'check'},
            {title: "矿机名称", dataIndex: 'name', key: 'name'},
            {title: "角色", dataIndex: 'role', key: 'role'},
            {title: <PPP/>, dataIndex: 'current', key: 'current'},
            {title: "排队任务", dataIndex: 'wait', key: 'wait'},
            {title: "失败任务", dataIndex: 'fail', key: 'fail'},
            {title: "磁盘任务使用率（P1）", dataIndex: 'p1', key: 'p1'},
            {title: "磁盘任务使用率（P2）", dataIndex: 'p2', key: 'p2'},
            {title: "扇区空间", dataIndex: 'room', key: 'room'},
            {title: "IP", dataIndex: 'ip', key: 'ip'},
            {title: "状态", dataIndex: 'status', key: 'status'},
            {title: "详情", dataIndex: 'detail', key: 'detail'}
        ];
        const icon = <svg className="icon svg-icon" aria-hidden="true"
                          style={{width: "20px", height: "20px", marginRight: "10px", marginTop: "6px"}}>
            <use xlinkHref={"#iconlist_icon_arrow_nor"}/>
        </svg>

        const dataSource = [
            {
                check: <Checkbox value="1"/>,
                key: 1,
                name: "ARS-001",
                role: "主矿工",
                current: 12,
                wait: 9,
                fail: 3,
                p1: "10/24",
                p2: "2/4",
                room: "50/100",
                ip: "10.0.0.1",
                status: "在线",
                detail: icon
            },
            {
                check: <Checkbox value="2"/>,
                key: 2,
                name: "ARS-001",
                role: "主矿工",
                current: 12,
                wait: 9,
                fail: 3,
                p1: "10/24",
                p2: "2/4",
                room: "50/100",
                ip: "10.0.0.1",
                status: "在线",
                detail: icon
            },
            {
                check: <Checkbox value="3"/>,
                key: 3,
                name: "ARS-001",
                role: "主矿工",
                current: 12,
                wait: 9,
                fail: 3,
                p1: "10/24",
                p2: "2/4",
                room: "50/100",
                ip: "10.0.0.1",
                status: "在线",
                detail: icon
            },
            {
                check: <Checkbox value="4"/>,
                key: 4,
                name: "ARS-001",
                role: "主矿工",
                current: 12,
                wait: 9,
                fail: 3,
                p1: "10/24",
                p2: "2/4",
                room: "50/100",
                ip: "10.0.0.1",
                status: "在线",
                detail: icon
            },
            {
                check: <Checkbox value="5"/>,
                key: 5,
                name: "ARS-001",
                role: "主矿工",
                current: 12,
                wait: 9,
                fail: 3,
                p1: "10/24",
                p2: "2/4",
                room: "50/100",
                ip: "10.0.0.1",
                status: "在线",
                detail: icon
            },
            {
                check: <Checkbox value="6"/>,
                key: 6,
                name: "ARS-001",
                role: "主矿工",
                current: 12,
                wait: 9,
                fail: 3,
                p1: "10/24",
                p2: "2/4",
                room: "50/100",
                ip: "10.0.0.1",
                status: "在线",
                detail: icon
            },
            {
                check: <Checkbox value="7"/>,
                key: 7,
                name: "ARS-001",
                role: "主矿工",
                current: 12,
                wait: 9,
                fail: 3,
                p1: "10/24",
                p2: "2/4",
                room: "50/100",
                ip: "10.0.0.1",
                status: "在线",
                detail: icon
            },
            {
                check: <Checkbox value="8"/>,
                key: 8,
                name: "ARS-001",
                role: "主矿工",
                current: 12,
                wait: 9,
                fail: 3,
                p1: "10/24",
                p2: "2/4",
                room: "50/100",
                ip: "10.0.0.1",
                status: "在线",
                detail: icon
            },
            {
                check: <Checkbox value="9"/>,
                key: 8,
                name: "ARS-001",
                role: "主矿工",
                current: 12,
                wait: 9,
                fail: 3,
                p1: "10/24",
                p2: "2/4",
                room: "50/100",
                ip: "10.0.0.1",
                status: "在线",
                detail: icon
            },
            {
                check: <Checkbox value="10"/>,
                key: 8,
                name: "ARS-001",
                role: "主矿工",
                current: 12,
                wait: 9,
                fail: 3,
                p1: "10/24",
                p2: "2/4",
                room: "50/100",
                ip: "10.0.0.1",
                status: "在线",
                detail: icon
            },
            {
                check: <Checkbox value="11"/>,
                key: 8,
                name: "ARS-001",
                role: "主矿工",
                current: 12,
                wait: 9,
                fail: 3,
                p1: "10/24",
                p2: "2/4",
                room: "50/100",
                ip: "10.0.0.1",
                status: "在线",
                detail: icon
            },
            {
                check: <Checkbox value="12"/>,
                key: 8,
                name: "ARS-001",
                role: "主矿工",
                current: 12,
                wait: 9,
                fail: 3,
                p1: "10/24",
                p2: "2/4",
                room: "50/100",
                ip: "10.0.0.1",
                status: "在线",
                detail: icon
            },
        ]

        const screen = {
            0: ["key", "name", "role", "current", "wait", "fail", "p1", "p2", "room", "ip", "status", "detail"],
            1: ["key", "name", "role", "current", "wait", "fail", "p1", "p2", "room", "ip", "status", "detail"],
            2: ["key", "name", "role", "current", "wait", "fail", "p1", "p2", "room", "ip", "status", "detail"],
            3: ["key", "name", "role", "current", "wait", "fail", "p1", "p2", "room", "ip", "status", "detail"],
            4: ["key", "name", "role", "current", "wait", "fail", "p1", "p2", "room", "ip", "status", "detail"],
            5: ["key", "name", "role", "current", "wait", "fail", "p1", "p2", "room", "ip", "status", "detail"],
        }

        return (
            <div className={"title-common"} style={{height: "auto", paddingLeft: "0px"}}>
                <Checkbox style={{position: "absolute", zIndex: "5", left: "17px", top: "6px"}}
                          indeterminate={this.state.indeterminate} onChange={this.onCheckAllChange}
                          checked={this.state.checkAll}/>
                <Checkbox.Group style={{width: '100%'}} onChange={this.onChange} value={this.state.checkedList}>
                    <Table bordered pagination={true} dataSource={dataSource} columns={columns}/>
                </Checkbox.Group>
            </div>
        )
    }
}

// 右下方整体
const BelowInfo = () => {
    return (
        <div className={"common-div"} style={{marginTop: "30px"}}>
            <ChangePanel/>
            <OperatePanel/>
            <TableDetail/>
        </div>
    )
}


const PoolMain = () => {
    return (
        <div className={"main-text"} style={{backgroundColor: "white"}}>
            <AboveInfo/>
            <BelowInfo/>
        </div>
    )
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