import React, { useState, memo, useCallback } from 'react';
import { useWhyDidYouUpdate } from 'ahooks';

interface ChildProps {
  count: number;
  object: { value: string };
  onClick: () => void;
}

const Child: React.FC<ChildProps> = memo((props) => {
  useWhyDidYouUpdate('Child', props);
  
  return (
    <div style={{ padding: '16px', border: '1px solid var(--border-color)', marginTop: '16px' }}>
      <p>子组件</p>
      <p>Count: {props.count}</p>
      <p>Object value: {props.object.value}</p>
      <button onClick={props.onClick}>点击</button>
    </div>
  );
});

const UseWhyDidYouUpdate: React.FC = () => {
  const [count, setCount] = useState(0);
  const [object, setObject] = useState({ value: 'hello' });

  // 使用 useCallback 包裹点击处理函数
  const handleClick = useCallback(() => {
    console.log('clicked');
  }, []); // 空依赖数组，因为函数不依赖任何状态

  return (
    <div>
      <h2>useWhyDidYouUpdate 示例</h2>
      <p>这个 Hook 帮助开发者了解组件为什么会重新渲染。请打开控制台查看更新原因。</p>
      
      <div style={{ marginTop: '16px' }}>
        <button onClick={() => setCount(c => c + 1)}>
          更新数字 (当前: {count})
        </button>
        
        <button
          onClick={() => setObject({ value: 'hello' })}
          style={{ marginLeft: '8px' }}
        >
          更新对象 (相同值)
        </button>
        
        <button
          onClick={() => setObject({ value: Date.now().toString() })}
          style={{ marginLeft: '8px' }}
        >
          更新对象 (新值)
        </button>
      </div>

      <Child
        count={count}
        object={object}
        onClick={handleClick}
      />

      <div style={{ marginTop: '16px', padding: '16px', border: '1px solid var(--border-color)', borderRadius: '4px' }}>
        <h3>说明：</h3>
        <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
          <li>点击"更新数字"按钮：count 属性会改变，导致重渲染</li>
          <li>点击"更新对象 (相同值)"：虽然值相同，但是对象引用改变，导致重渲染</li>
          <li>点击"更新对象 (新值)"：值和引用都改变，导致重渲染</li>
          <li>onClick 函数使用 useCallback 包裹，不会在重渲染时改变引用</li>
        </ul>
      </div>
    </div>
  );
};

export default UseWhyDidYouUpdate; 