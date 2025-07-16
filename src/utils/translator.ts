import fs from 'fs';
import path from 'path';

const loadI18nDict = (): Record<string, string> => {
    try {
        const dictPath = path.join(__dirname, '../../data/i18n.json');
        const data = fs.readFileSync(dictPath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('加载翻译字典失败:', error);
        return {};
    }
};

const loadSolNodes = (): Record<string, any> => {
    try {
        const nodesPath = path.join(__dirname, '../../data/solNodes.json');
        const data = fs.readFileSync(nodesPath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('加载节点数据失败:', error);
        return {};
    }
};

const i18nDict = loadI18nDict();
const solNodes = loadSolNodes();

export const translate = (text: string): string => {
    return i18nDict[text] || text;
};

export const translateNode = (nodeKey: string): string => {
    const node = solNodes[nodeKey];
    return node?.value || translate(nodeKey) || nodeKey;
};

