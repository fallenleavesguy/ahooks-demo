import React, { useRef, useState } from 'react';
import { useClickAway } from 'ahooks';

const UseClickAway: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useClickAway(() => {
    setCounter((c) => c + 1);
  }, ref);

  return (
    <div>
      <h2>useClickAway 示例</h2>
      <p>这个 Hook 用于监听目标元素外的点击事件。</p>
      
      <div
        ref={ref}
        style={{
          width: '200px',
          height: '100px',
          background: '#1890ff',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '16px',
        }}
      >
        目标区域
      </div>
      
      <p style={{ marginTop: '16px' }}>
        点击外部区域的次数：{counter}
      </p>
    </div>
  );
};

export default UseClickAway; 