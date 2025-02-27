import React, { useState, memo } from 'react';
import { useWhyDidYouUpdate } from 'ahooks';

interface ChildProps {
  count: number;
  object: { value: string };
  onClick: () => void;
}

const Child: React.FC<ChildProps> = memo((props) => {
  useWhyDidYouUpdate('Child', props);
  
  return (
    <div style={{ padding: '16px', border: '1px solid #e8e8e8', marginTop: '16px' }}>
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
        onClick={() => console.log('clicked')}
      />
    </div>
  );
};

export default UseWhyDidYouUpdate; 