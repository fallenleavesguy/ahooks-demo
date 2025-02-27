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
          width: '100%',
          overflow: 'auto',
          border: '1px solid #e8e8e8',
          marginTop: '16px',
        }}
      >
        <div style={{ height: '1000px', background: 'linear-gradient(to bottom, #1890ff, #f5f5f5)' }}>
          <div style={{ position: 'sticky', top: 0, padding: '10px', background: 'rgba(255,255,255,0.8)' }}>
            滚动位置：
            <br />
            left: {scroll?.left}px
            <br />
            top: {scroll?.top}px
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseScroll; 