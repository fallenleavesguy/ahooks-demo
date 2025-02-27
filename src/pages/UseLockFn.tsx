import React, { useState } from 'react';
import { useLockFn } from 'ahooks';

const UseLockFn: React.FC = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const submit = useLockFn(async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setCount((c) => c + 1);
    } finally {
      setLoading(false);
    }
  });

  return (
    <div>
      <h2>useLockFn 示例</h2>
      <p>这个 Hook 用于给异步函数加锁，防止并发执行。</p>
      
      <div style={{ marginTop: '16px' }}>
        <p>当前计数：{count}</p>
        <button
          onClick={() => submit()}
          disabled={loading}
          style={{ marginTop: '8px', width: '200px' }}
        >
          {loading ? '执行中...' : '点击执行 (等待2秒)'}
        </button>
        
        <div style={{ marginTop: '16px' }}>
          <p>说明：</p>
          <ul>
            <li>点击按钮后，函数将执行 2 秒</li>
            <li>在执行期间，按钮将被禁用</li>
            <li>即使快速点击多次，函数也只会执行一次</li>
            <li>执行完成后，计数会增加 1</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UseLockFn; 