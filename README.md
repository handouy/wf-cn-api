# Warframe API Wrapper

一个用于获取星际战甲（Warframe）游戏数据的 TypeScript API 包装器。

## 功能特性

- ✅ 获取游戏事件数据

## 使用示例

```typescript
import eventsApi from 'my-api-wrapper';

// 获取当前活跃事件
const events = await eventsApi.getEvents();
console.log(events);

// 获取格式化的事件信息
const formattedEvents = await eventsApi.format.events();
console.log(formattedEvents);
```

## API 文档

### Events API

#### `getEvents()`
获取原始事件数据数组。

**返回值**: `Promise<Event[]>`

#### `format.events()`
获取格式化的事件信息。

**返回值**: `Promise<string[]>`

## 开发计划

- [ ] 警报数据 (Alerts)
- [ ] 入侵数据 (Invasions)
- [ ] 虚空商人 (Void Trader)
- [ ] 每日特惠 (Daily Deals)
- [ ] 夜灵平野循环
- [ ] 更多游戏数据...

## 开发

```bash
# 安装依赖
npm install

# 构建
npm run build

# 测试
npm test
```

## 许可证

MIT