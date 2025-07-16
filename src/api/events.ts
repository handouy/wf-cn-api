import { Event } from "../types/events";
import xjzjClient from "../Service/xjzj-client";
import { formatEvent } from "../Service/events-service";
import { translate, translateNode } from "../utils/translator";

const translateReward = (reward: any) => ({
    ...reward,
    items: reward.items?.map(translate) || [],
    countedItems: reward.countedItems?.map((item: any) => ({
        ...item,
        type: translate(item.type)
    })) || [],
    asString: reward.asString ? translateText(reward.asString) : reward.asString,
    itemString: reward.itemString ? translateText(reward.itemString) : reward.itemString
});

const translateEvent = (event: any): Event => ({
    id: event.id,
    activation: event.activation,
    expiry: event.expiry,
    active: event.active,
    description: translate(event.description),
    tooltip: translate(event.tooltip),
    node: translateNode(event.node),
    rewards: event.rewards?.map(translateReward) || [],
    health: event.health
});

const getEvents = async (): Promise<Event[]> => {
    try {
        const response = await xjzjClient.getWorldState();
        const rawEvents = response?.data?.events;
        if (!Array.isArray(rawEvents)) {
            console.error("API响应格式不正确，无法提取事件数据。");
            return [];
        }

        const events = rawEvents.map(translateEvent);
        return events;
    } catch (error) {
        console.error("获取事件出错:", error);
        return [];
    }
};

const getFormattedEvents = async () => {
    const events = await getEvents();
    return events
        .filter(event => event.active === "1")
        .map(formatEvent);
};

const translateText = (text: string): string => {
    return text.replace(/\b\w+(?:\s+\w+)*\b/g, match => translate(match));
};

export default {
    getEvents,
    format: {
        events: getFormattedEvents
    }
};
