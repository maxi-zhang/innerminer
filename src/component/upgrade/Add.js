import React, {Component} from "react";
import Banner from "../common/Banner";
import {Input,Select,Upload, message, Button,Modal } from "antd";
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;


function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

class InfoArea extends Component{
    state = {
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: [

        ],
    };

    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };

    handleChange = ({ fileList }) => this.setState({ fileList });

    render() {
        const { previewVisible, previewImage, fileList, previewTitle } = this.state;
        const uploadButton = (
            <div>
                <PlusOutlined />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div className={"main-common"} >
                <div className={"top"}>
                    <h3>软件上传</h3>
                </div>
                <div className={"bottom"} style={{paddingTop:"40px"}}>
                    <div className={"list-table"}>
                        <p>软件名称</p>
                        <Input/>
                    </div>
                    <div className={"list-table"}>
                        <p>标识</p>
                        <Input/>
                    </div>
                    <div className={"list-table"}>
                        <p>版本</p>
                        <Input/>
                    </div>
                    <div className={"list-table"}>
                        <p>升级内容</p>
                        <Input/>
                    </div>
                    <div className={"list-table"}>
                        <p>分类</p>
                        <Select defaultValue="lucy" style={{  position:"absolute", left:"300px",width:"500px",top:"5px" }} >
                            <Option value="jack">挖矿软件</Option>
                            <Option value="lucy">系统软件</Option>
                        </Select>
                    </div>
                    <div className={"list-table"}>
                        <p>重启方式</p>
                        <Select defaultValue="lucy" style={{  position:"absolute", left:"300px",width:"500px",top:"5px" }} >
                            <Option value="jack">矿池内部按照 从 > 主 > 从 顺序重启</Option>
                            <Option value="lucy">计算、证明服务的单独重启</Option>
                        </Select>
                    </div>
                    <div className={"list-table"}>
                        <p>升级设置</p>
                        <Select defaultValue="lucy" style={{  position:"absolute", left:"300px",width:"500px",top:"5px" }} >
                            <Option value="jack">全部矿机</Option>
                            <Option value="lucy">部分矿机</Option>
                            <Option value="lucy">不包含该部分矿机</Option>
                        </Select>
                    </div>
                    <div className={"list-table"} style={{height:"100px"}}>
                        <p>选择文件</p>
                        <div className="clearfix" style={{position:"absolute",left:"300px",top:"5px"}}>
                            <Upload
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={this.handlePreview}
                                onChange={this.handleChange}
                            >
                                {fileList.length >= 1 ? null : uploadButton}
                            </Upload>
                            <Modal
                                visible={previewVisible}
                                title={previewTitle}
                                footer={null}
                                onCancel={this.handleCancel}
                            >
                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                            </Modal>
                        </div>
                    </div>
                    <div className={"list-table"} style={{height:"100px"}}>
                        <Button style={{position:"absolute",left:"430px",marginTop:"40px"}} type="primary">保存</Button>
                        <Button style={{position:"absolute",left:"630px",marginTop:"40px"}}>取消</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default class Index extends Component{
    render() {
        return (
            <React.Fragment>
                <Banner/>
                <InfoArea/>
            </React.Fragment>
        )
    }
}