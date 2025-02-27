import React, { useRef } from 'react';
import { useInViewport } from 'ahooks';

const UseInViewport: React.FC = () => {
  const ref = useRef(null);
  const [inViewport] = useInViewport(ref);

  return (
    <div>
      <h2>useInViewport 示例</h2>
      <p>这个 Hook 用于观察元素是否在可视范围内。</p>
      
      <div style={{ height: '400px', overflow: 'auto', border: '1px solid #e8e8e8' }}>
        <div style={{ height: '600px', background: '#f5f5f5' }}>
          <p>向下滚动查看目标元素</p>
        </div>
        
        <div
          ref={ref}
          style={{
            border: '1px solid #1890ff',
            height: '100px',
            textAlign: 'center',
            padding: '30px',
          }}
        >
          {inViewport ? (
            <p style={{ color: '#1890ff' }}>目标元素在视口中！</p>
          ) : (
            <p>目标元素不在视口中</p>
          )}
        </div>
        
        <div style={{ height: '600px', background: '#f5f5f5' }}>
          <p>底部填充区域</p>
        </div>
      </div>
    </div>
  );
};

export default UseInViewport; 