import intl from "react-intl-universal";
import copy from 'copy-to-clipboard';
import {message} from "antd";
import qs from 'qs';
import axios from "axios";
import cookie from "react-cookies";
import SparkMD5 from 'spark-md5'

export const axiosPost = (url, parameter, callback, ...other) => {
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.post(url, qs.stringify(
        parameter
        )
    ).then(function (data) {
        callback(data, other)
    });
}

message.config({
    top: "40%",
    maxCount: 5,
    rtl: true,
});

export const getFileMD5 = (file, callback, resolve) => {
    const fileSize = file.size;
    const chunkSize = 1024 * 1024 * 10;
    const chunks = Math.ceil(fileSize / chunkSize);

    const fileReader = new FileReader();
    const spark = new SparkMD5.ArrayBuffer();

    const bolbSlice =
        File.prototype.slice ||
        File.prototype.mozSlice ||
        File.prototype.webkitSlice;
    let currentChunk = 0;

    fileReader.onload = e => {
        const res = e.target.result;
        spark.append(res);
        currentChunk++;
        if (currentChunk < chunks) {
            loadNext();
            console.log(`第${currentChunk}分片解析完成, 开始第${currentChunk + 1}分片解析`);
        } else {
            const md5 = spark.end();
            callback(md5, resolve)
        }
    };

    const loadNext = () => {
        const start = currentChunk * chunkSize;
        const end =
            start + chunkSize > file.size ? file.size : start + chunkSize;
        fileReader.readAsArrayBuffer(bolbSlice.call(file, start, end));
    };
    loadNext();
}


// 检查手机号合法性
export const checkMobileNumber = (phone) => {
    const reg = /(1[3-9]\d{9}$)/;
    return !reg.test(phone);
}

// 检查邮箱的合法性
export const checkEmailFormat = (email) => {
    const reg = /^\w+@[a-z0-9]+\.[a-z]+$/i;
    return !reg.test(email);
}

// 改变告警类型
export const changeWarningType = (key) => {
    const list = {
        13: "CPU温度过高"
    }
    return list[key];
}

// 获取URL参数
export const getQueryVariable = (variable) => {
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        if (pair[0] === variable) {
            return pair[1];
        }
    }
    return false;
}

// 获取告警配置数组
export const getWarningArray = (count, length = 6) => {
    const arr = count.toString(2).split("").reverse();
    for (let i = arr.length; i < length; i++) {
        arr.push("0");
    }
    return arr.map((key) => {
        return key === '1'
    })
}

export const coinExchange = (coin) => {
    return `${coin}FIL`
}

export const offlineChange = (rate) => {
    return `${rate}%`
}

export const powerUnitChange = (pow) => {
    if (pow < 1024) {
        return pow + ' GB';
    } else if (pow < 1024 * 1024) {
        return (pow / 1024).toFixed(2) + ' TB';
    } else {
        return (pow / 1024 / 1024).toFixed(2) + ' PB';
    }
}

export const success = (add) => {
    if (copy(add)) {
        message.success(intl.get('ALREADY_COPY'), 1);
    } else {
        message.error(intl.get('COPY_FAILED'), 1);
    }
};

// 切换对应语言的方法
export const changeName = (info) => {
    let back = [];
    for (const [key, width] of info) {
        back.push([intl.get(key), width])
    }
    return back
}

export const isEmpty = (obj) => {
    return (typeof obj == "undefined" || obj == null || obj == "")
}

// 获取用户登录的系统
export const getClientSystem = () => {
    let sUserAgent = navigator.userAgent;
    let isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
    let isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
    if (isMac) return "Mac";
    let isUnix = (navigator.platform == "X11") && !isWin && !isMac;
    if (isUnix) return "Unix";
    let isLinux = (String(navigator.platform).indexOf("Linux") > -1);
    if (isLinux) return "Linux";
    if (isWin) {
        let isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
        if (isWin2K) return "Win2000";
        let isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
        if (isWinXP) return "WinXP";
        let isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
        if (isWin2003) return "Win2003";
        let isWinVista = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
        if (isWinVista) return "WinVista";
        let isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
        if (isWin7) return "Win7";
        let isWin10 = sUserAgent.indexOf("Windows NT 10") > -1 || sUserAgent.indexOf("Windows 10") > -1;
        if (isWin10) return "Win10";
    }
    return "other";
}


// 获取用户登录的浏览器
export const getClientExplorer = () => {
    let Sys = {};
    let ua = navigator.userAgent.toLowerCase();
    let re = /(msie|firefox|chrome|opera|version).*?([\d.]+)/;
    let m = ua.match(re);
    try {
        Sys.browser = m[1].replace(/version/, "'safari");
        Sys.ver = m[2];
    } catch (e) {
        console.log("getBrowserInfo fail.")
    }
    const {browser, ver} = Sys;
    return `${browser} ${ver}`;
}


// 手机验证码合法性校验
export const checkVerifyValidity = (verify) => {
    if (verify.length !== 4) {
        return false;
    }
    if (isNaN(verify)) {
        return false;
    }
    return true
}

// 新密码校验
export const checkNewPassword = (newPassword, rePassword) => {
    if (newPassword.length < 8) {
        return {status: false, reason: "NEW_PASSWORD_CANNOT_LESS_THAN"}
    }
    if (newPassword !== rePassword) {
        return {status: false, reason: "NEW_PASSWORD_NOT_SAME"}
    }
    return {status: true, reason: "NEW_PASSWORD_NOT_SAME"}
}

// 告警频率修改
export const warningRateChange = (rate) => {
    if (rate === 600) {
        return "TEN_MINUTE";
    }
    if (rate === 3600) {
        return "ONE_HOUR";
    }
    if (rate === 86400) {
        return "ONE_DAY";
    }
    return "UNSET";
}




















