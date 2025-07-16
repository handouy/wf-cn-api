import axios from "axios";
import iconv from "iconv-lite";

const XjzjClient = axios.create({
    baseURL: "https://www.wegame.com.cn/api/act/index.php/xjzj/xjzj20220330/index",
    headers: {
        "accept": "application/json, text/javascript, */*; q=0.01",
        "accept-language": "zh-CN,zh;q=0.9",
        "priority": "u=1, i",
        "referer": "https://www.wegame.com.cn/act/xjzj/xjzj20220330/index.html",
        "sec-ch-ua": '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
        "x-requested-with": "XMLHttpRequest",
    },
    responseType: 'arraybuffer', // 关键：设置响应类型为 arraybuffer
});

async function getWorldState() {
    try {
        const response = await XjzjClient.get('/ajax_get_worldState');
        const decodedData = iconv.decode(Buffer.from(response.data), 'gbk');
        const jsonData = JSON.parse(decodedData);
        return jsonData;
    } catch (error) {
        console.error("获取世界状态出错:", error);
        throw error;
    }
}

export default {
    getWorldState
}
