import React, { useRef } from 'react';
import { useSize } from 'ahooks';

const UseSize: React.FC = () => {
  const ref = useRef(null);
  const size = useSize(ref);

  return (
    <div>
      <h2>useSize 示例</h2>
      <p>这个 Hook 用于监听 DOM 节点的尺寸变化。</p>
      
      <div
        ref={ref}
        style={{
          border: '1px solid #d9d9d9',
          borderRadius: '4px',
          padding: '20px',
          width: '100%',
          maxWidth: '400px',
          resize: 'both',
          overflow: 'auto',
          marginTop: '16px',
        }}
      >
        <p>试试调整这个 div 的大小：</p>
        {size ? (
          <p>
            宽度: {size.width}px / 高度: {size.height}px
          </p>
        ) : (
          <p>未能获取尺寸</p>
        )}
      </div>
    </div>
  );
};

export default UseSize; 