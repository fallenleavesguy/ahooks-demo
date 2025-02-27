import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h2>欢迎来到 ahooks 演示项目</h2>
      <p>这个项目展示了 ahooks 常用 hooks 的使用方法。请从左侧菜单选择要查看的 demo。</p>
      
      <div style={{ marginTop: '24px' }}>
        <h3>包含的示例：</h3>
        <ul>
          <li>useSize - 监听 DOM 元素尺寸变化</li>
          <li>useInViewport - 检测元素是否在视口中</li>
          <li>useClickAway - 监听元素外部点击</li>
          <li>useScroll - 监听滚动位置</li>
          <li>useReactive - 响应式状态管理</li>
          <li>useWhyDidYouUpdate - 组件重渲染原因分析</li>
          <li>useDebounce - 处理防抖值</li>
          <li>useLockFn - 异步函数并发锁</li>
        </ul>
      </div>
    </div>
  );
};

export default Home; 