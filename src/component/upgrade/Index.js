import React, {Component} from "react";
import Banner from "../common/Banner";
import { Button,Table } from 'antd';

class  UpgradeTop extends Component{
    render() {
        return (
            <div className={"main-common"}>
                <div className={"top"}>
                    <h3>软件列表</h3>
                    <Button style={{position:"absolute",right:"30px",top:"8px"}} type="primary">新建</Button>
                </div>
            </div>
        )
    }
}

class UpgradeMain extends Component{
    render() {
        const check = <React.Fragment>
            <span>查看</span> |
            <span style={{marginLeft:"10px"}}>编辑</span> |
            <span style={{marginLeft:"10px"}}>删除</span>
        </React.Fragment>

        const dataSource = [
            {key: '1', name: 'ubantu系统补丁', type:'系统软件', sign:'sign', version:'1.1.2', address: '西湖区湖底公园1号', design: '升级描述', time: '2010-10-20 10:20:30', operate: check},
            {key: '1', name: 'ubantu系统补丁', type:'系统软件', sign:'sign', version:'1.1.2', address: '西湖区湖底公园1号', design: '升级描述', time: '2010-10-20 10:20:30', operate: check},
            {key: '1', name: 'ubantu系统补丁', type:'系统软件', sign:'sign', version:'1.1.2', address: '西湖区湖底公园1号', design: '升级描述', time: '2010-10-20 10:20:30', operate: check},
            {key: '1', name: 'ubantu系统补丁', type:'系统软件', sign:'sign', version:'1.1.2', address: '西湖区湖底公园1号', design: '升级描述', time: '2010-10-20 10:20:30', operate: check},
            {key: '1', name: 'ubantu系统补丁', type:'系统软件', sign:'sign', version:'1.1.2', address: '西湖区湖底公园1号', design: '升级描述', time: '2010-10-20 10:20:30', operate: check},
            {key: '1', name: 'ubantu系统补丁', type:'系统软件', sign:'sign', version:'1.1.2', address: '西湖区湖底公园1号', design: '升级描述', time: '2010-10-20 10:20:30', operate: check},
            {key: '1', name: 'ubantu系统补丁', type:'系统软件', sign:'sign', version:'1.1.2', address: '西湖区湖底公园1号', design: '升级描述', time: '2010-10-20 10:20:30', operate: check},
            {key: '1', name: 'ubantu系统补丁', type:'系统软件', sign:'sign', version:'1.1.2', address: '西湖区湖底公园1号', design: '升级描述', time: '2010-10-20 10:20:30', operate: check},
            {key: '1', name: 'ubantu系统补丁', type:'系统软件', sign:'sign', version:'1.1.2', address: '西湖区湖底公园1号', design: '升级描述', time: '2010-10-20 10:20:30', operate: check},
        ];

        const columns = [
            {title: '软件名称', dataIndex: 'name', key: 'name',},
            {title: '分类', dataIndex: 'type', key: 'type',},
            {title: '标识', dataIndex: 'sign', key: 'sign',},
            {title: '版本', dataIndex: 'version', key: 'version',},
            {title: '文件地址', dataIndex: 'address', key: 'address',},
            {title: '升级描述', dataIndex: 'design', key: 'design',},
            {title: '发布时间', dataIndex: 'time', key: 'time',},
            {title: '操作', dataIndex: 'operate', key: 'operate',}
        ];

        return(
            <div className={"main-common"} style={{border:"1px solid #999"}}>
                <Table dataSource={dataSource} columns={columns} />
            </div>
        )
    }
}

export default class Index extends Component{
    render() {
        return (
            <React.Fragment>
                <Banner/>
                <UpgradeTop/>
                <UpgradeMain/>
            </React.Fragment>
        )
    }
}