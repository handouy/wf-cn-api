export interface Event {
    id: string // 事件ID
    activation: string // 激活时间
    expiry: string // 过期时间
    active: string // 是否激活
    description: string // 描述
    tooltip: string // 任务提示
    node: string // 节点
    rewards: Reward[] // 奖励
    health: string // 健康值
}

export interface Reward {
    items: string[] // 物品列表
    countedItems: any[] // 计数物品
    credits: string // 货币值
    asString: string // 字符串形式
    itemString: string // 物品字符串
    thumbnail: string // 缩略图
    color: string // 颜色
}





