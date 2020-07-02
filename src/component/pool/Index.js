import React, {Component} from "react";
import intl from "react-intl-universal";
import Banner from "../common/Banner";
import {Button, Select, Input, Table} from 'antd';

const {Search} = Input;

const {Option} = Select;

class AboveInfo extends Component {
    render() {
        return (
            <div className={"common-div"}>
                <div className={"title-common"}>
                    矿池信息
                </div>
                <div className={"title-common"} style={{height: "150px", position: "relative"}}>
                    <div className={"piece"}>
                        <p>当前矿场</p>

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

// 矿池表格区域整体
class TableDetail extends Component {
    render() {
        const columns = [
            {
                title: 213132,
                dataIndex: 'order',
                key: 'order',
            }
        ];
        const dataSource = []
        return (
            <div className={"title-common"} style={{height: "500px", paddingLeft: "0px"}}>
                <Table bordered pagination={false} dataSource={dataSource} columns={columns}/>
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