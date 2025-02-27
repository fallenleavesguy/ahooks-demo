import React, { useState } from 'react';
import { useDebounce } from 'ahooks';

const UseDebounce: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce(value, { wait: 500 });

  return (
    <div>
      <h2>useDebounce 示例</h2>
      <p>这个 Hook 用于处理防抖值。当值快速变化时，只在最后一次变化后的指定时间更新。</p>
      
      <div style={{ marginTop: '16px' }}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="请输入内容"
          style={{ width: '200px' }}
        />
        
        <div style={{ marginTop: '16px' }}>
          <p>实时值: {value}</p>
          <p>防抖值 (500ms): {debouncedValue}</p>
        </div>
      </div>
      
      <div style={{ marginTop: '16px' }}>
        <p>说明：</p>
        <ul>
          <li>在输入框中快速输入内容</li>
          <li>实时值会立即更新</li>
          <li>防抖值会在停止输入 500ms 后更新</li>
        </ul>
      </div>
    </div>
  );
};

export default UseDebounce; 