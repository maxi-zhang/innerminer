import React, {Component} from "react";
import {Input, Space, Button} from 'antd';
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import intl from "react-intl-universal";

export default class Index extends Component {
    render() {
        return (
            <div className={"login-area"}>
                <Space direction="vertical">
                    <Input placeholder={intl.get("USER_NAME")} maxLength={11}/>
                    <Input.Password
                        placeholder={intl.get("PASSWORD")}
                        iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                    />
                    <Button style={{width:"100%"}} type="primary">{intl.get("CONFIRM")}</Button>
                </Space>
            </div>
        )
    }
}