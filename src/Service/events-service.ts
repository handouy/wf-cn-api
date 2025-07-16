import { Event, Reward } from "../types/events";
import { getTimeRemaining } from "../utils/timeUtils";
import { translate } from "../utils/translator";

export const formatRewards = (rewards: Reward[]): string => {
    if (!rewards.length) return '无奖励';

    return rewards.map(reward => {
        const parts = [];
        if (reward.items?.length) parts.push(reward.items.join(', '));
        if (reward.countedItems?.length) {
            parts.push(reward.countedItems.map(item =>
                `${item.count}x ${item.type}`).join(', '));
        }
        if (reward.credits && reward.credits !== "0") parts.push(`${reward.credits}现金`);
        return parts.join(' + ') || reward.asString || reward.itemString || '';
    }).filter(Boolean).join(' | ');
};

export const formatEvent = (event: Event, index: number): string => {
    return `${index + 1}. ${event.description}
地点: ${event.node}
奖励: ${formatRewards(event.rewards)}
生命值: ${event.health}%
距结束: ${getTimeRemaining(event.expiry)}
状态: ${event.active === "1" ? "进行中" : "已结束"}`;
};


