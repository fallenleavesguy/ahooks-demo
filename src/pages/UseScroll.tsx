import React, { useRef } from 'react';
import { useScroll } from 'ahooks';

const UseScroll: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = useScroll(ref);

  return (
    <div>
      <h2>useScroll 示例</h2>
      <p>这个 Hook 用于监听元素的滚动位置。</p>
      
      <div
        ref={ref}
        style={{
          height: '300px',
          width: '400px',
          overflow: 'auto',
          border: '1px solid var(--border-color)',
          borderRadius: '4px',
          marginTop: '16px',
          backgroundColor: 'var(--component-bg)',
        }}
      >
        <div style={{ 
          height: '1000px',
          width: '1500px',
          background: 'linear-gradient(to bottom, var(--primary-color), var(--bg-color))',
          backgroundImage: `
            linear-gradient(to bottom, var(--primary-color), var(--bg-color)),
            linear-gradient(to right, var(--primary-color), var(--bg-color))
          `,
          backgroundBlendMode: 'multiply',
          position: 'relative'
        }}>
          <div style={{ 
            position: 'sticky', 
            top: 0,
            left: 0,
            padding: '16px',
            background: 'var(--component-bg)',
            borderBottom: '1px solid var(--border-color)',
            borderRight: '1px solid var(--border-color)',
            borderRadius: '4px 4px 0 0',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            width: 'fit-content',
            zIndex: 1
          }}>
            <h3 style={{ marginBottom: '8px', color: 'var(--text-color)' }}>滚动位置：</h3>
            <p style={{ 
              color: 'var(--primary-color)',
              fontFamily: 'monospace',
              fontSize: '16px',
              margin: '4px 0'
            }}>
              left: {scroll?.left ?? 0}px
            </p>
            <p style={{ 
              color: 'var(--primary-color)',
              fontFamily: 'monospace',
              fontSize: '16px',
              margin: '4px 0'
            }}>
              top: {scroll?.top ?? 0}px
            </p>
          </div>

          <div style={{
            position: 'absolute',
            right: '20px',
            bottom: '20px',
            padding: '16px',
            background: 'var(--component-bg)',
            borderRadius: '4px',
            border: '1px solid var(--border-color)',
          }}>
            👈 向左滚动查看更多内容
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '16px', color: 'var(--text-secondary)' }}>
        <p>👆 试试水平和垂直滚动上面的区域</p>
      </div>
    </div>
  );
};

export default UseScroll; 