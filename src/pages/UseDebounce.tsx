import React, { useState } from 'react';
import { useDebounce } from 'ahooks';

const UseDebounce: React.FC = () => {
  const [value1, setValue1] = useState<string>('');
  const [value2, setValue2] = useState<string>('');
  
  // 普通防抖
  const debouncedValue1 = useDebounce(value1, { 
    wait: 500,
    leading: false // 默认值，尾部触发
  });

  // 首次立即执行的防抖
  const debouncedValue2 = useDebounce(value2, {
    wait: 500,
    leading: true // 首次立即执行
  });

  return (
    <div>
      <h2>useDebounce 示例</h2>
      <p>这个 Hook 用于处理防抖值。当值快速变化时，只在最后一次变化后的指定时间更新。</p>
      
      <div style={{ 
        marginTop: '16px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px'
      }}>
        {/* 普通防抖示例 */}
        <div style={{
          padding: '16px',
          border: '1px solid var(--border-color)',
          borderRadius: '4px',
          backgroundColor: 'var(--component-bg)'
        }}>
          <h3 style={{ marginBottom: '16px' }}>普通防抖 (leading: false)</h3>
          <input
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            placeholder="请输入内容"
            style={{ width: '100%' }}
          />
          
          <div style={{ marginTop: '16px' }}>
            <p>实时值: {value1}</p>
            <p>防抖值 (500ms): {debouncedValue1}</p>
          </div>
        </div>

        {/* leading 防抖示例 */}
        <div style={{
          padding: '16px',
          border: '1px solid var(--border-color)',
          borderRadius: '4px',
          backgroundColor: 'var(--component-bg)'
        }}>
          <h3 style={{ marginBottom: '16px' }}>首次执行防抖 (leading: true)</h3>
          <input
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
            placeholder="请输入内容"
            style={{ width: '100%' }}
          />
          
          <div style={{ marginTop: '16px' }}>
            <p>实时值: {value2}</p>
            <p>防抖值 (500ms): {debouncedValue2}</p>
          </div>
        </div>
      </div>
      
      <div style={{ 
        marginTop: '16px',
        padding: '16px',
        border: '1px solid var(--border-color)',
        borderRadius: '4px',
        backgroundColor: 'var(--component-bg)'
      }}>
        <h3>说明：</h3>
        <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
          <li>左侧示例（leading: false）：
            <ul>
              <li>在输入框中快速输入内容</li>
              <li>实时值会立即更新</li>
              <li>防抖值会在停止输入 500ms 后更新</li>
            </ul>
          </li>
          <li style={{ marginTop: '8px' }}>右侧示例（leading: true）：
            <ul>
              <li>在输入框中快速输入内容</li>
              <li>实时值会立即更新</li>
              <li>防抖值会在首次输入时立即更新</li>
              <li>之后的更新会在停止输入 500ms 后进行</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UseDebounce; 