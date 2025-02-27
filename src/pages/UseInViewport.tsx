import React, { useRef } from 'react';
import { useInViewport } from 'ahooks';

const UseInViewport: React.FC = () => {
  const ref = useRef(null);
  const [inViewport] = useInViewport(ref);

  return (
    <div>
      <h2>useInViewport 示例</h2>
      <p>这个 Hook 用于观察元素是否在可视范围内。</p>
      
      <div style={{ 
        height: '400px', 
        overflow: 'auto', 
        border: '1px solid var(--border-color)',
        backgroundColor: 'var(--component-bg)',
        borderRadius: '4px',
        marginTop: '16px'
      }}>
        <div style={{ 
          height: '600px', 
          background: 'var(--bg-color)',
          padding: '20px'
        }}>
          <p>向下滚动查看目标元素</p>
        </div>
        
        <div
          ref={ref}
          style={{
            border: '1px solid var(--primary-color)',
            height: '100px',
            textAlign: 'center',
            padding: '30px',
            backgroundColor: 'var(--component-bg)',
            margin: '0 20px'
          }}
        >
          {inViewport ? (
            <p style={{ color: 'var(--primary-color)' }}>目标元素在视口中！</p>
          ) : (
            <p style={{ color: 'var(--text-secondary)' }}>目标元素不在视口中</p>
          )}
        </div>
        
        <div style={{ 
          height: '600px', 
          background: 'var(--bg-color)',
          padding: '20px'
        }}>
          <p>底部填充区域</p>
        </div>
      </div>
    </div>
  );
};

export default UseInViewport; 