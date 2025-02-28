# ahooks Demo 演示项目

这是一个使用 React + TypeScript + Vite 构建的 ahooks 演示项目，展示了 ahooks 常用 hooks 的使用方法和最佳实践。

## 🚀 功能特性

项目包含以下 ahooks API 的演示：

1. **useSize**
   - 监听 DOM 元素尺寸变化
   - 实时获取元素的宽高信息
   - 支持响应式调整

2. **useInViewport**
   - 检测元素是否在视口中
   - 支持滚动检测
   - 实时反馈可见性状态

3. **useClickAway**
   - 监听目标元素外的点击事件
   - 常用于模态框、下拉菜单等场景
   - 支持自定义 DOM 事件

4. **useScroll**
   - 监听元素的滚动位置
   - 支持水平和垂直滚动
   - 实时获取滚动坐标

5. **useReactive**
   - 提供响应式数据管理方案
   - 支持深层对象更新
   - 自动触发组件重渲染

6. **useWhyDidYouUpdate**
   - 帮助开发者理解组件重渲染原因
   - 支持属性变化追踪
   - 优化性能的得力助手

7. **useDebounce**
   - 处理防抖值
   - 支持自定义等待时间
   - 提供 leading 选项
   - 对比展示与 useThrottle 的区别

8. **useLockFn**
   - 给异步函数加锁
   - 防止并发执行
   - 适用于表单提交等场景

## 🛠️ 技术栈

- React 19
- TypeScript
- Vite
- ahooks
- React Router DOM

## 📦 安装和运行

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build
```

## 🎯 项目结构

```
src/
├── components/     # 公共组件
├── pages/         # 示例页面
├── styles/        # 样式文件
├── App.tsx        # 应用入口
└── router.tsx     # 路由配置
```

## 🎨 主题定制

项目使用 CSS 变量实现主题定制，支持深色模式：

```css
:root {
  --primary-color: #1890ff;
  --bg-color: #141414;
  --text-color: #fff;
  --text-secondary: rgba(255, 255, 255, 0.85);
  --border-color: #303030;
  --component-bg: #1f1f1f;
}
```

## 📚 学习资源

- [ahooks 官方文档](https://ahooks.js.org/zh-CN)
- [React 官方文档](https://react.dev)
- [TypeScript 官方文档](https://www.typescriptlang.org)

## 🤝 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件
