import React from 'react';
import { useReactive } from 'ahooks';

const UseReactive: React.FC = () => {
  const state = useReactive({
    count: 0,
    user: {
      name: '访客',
      age: 25,
    },
    todos: ['学习 React', '学习 ahooks'],
  });

  return (
    <div>
      <h2>useReactive 示例</h2>
      <p>这个 Hook 提供了一种响应式的数据管理方案。</p>
      
      <div style={{ marginTop: '16px' }}>
        <h3>计数器</h3>
        <p>当前计数：{state.count}</p>
        <button onClick={() => { state.count += 1 }}>增加</button>
        <button onClick={() => { state.count -= 1 }} style={{ marginLeft: '8px' }}>减少</button>
      </div>
      
      <div style={{ marginTop: '16px' }}>
        <h3>用户信息</h3>
        <p>姓名：{state.user.name}</p>
        <p>年龄：{state.user.age}</p>
        <input
          value={state.user.name}
          onChange={(e) => { state.user.name = e.target.value }}
          placeholder="输入姓名"
        />
        <button
          onClick={() => { state.user.age += 1 }}
          style={{ marginLeft: '8px' }}
        >
          增加年龄
        </button>
      </div>
      
      <div style={{ marginTop: '16px' }}>
        <h3>待办事项</h3>
        <ul>
          {state.todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <button
          onClick={() => {
            state.todos.push(`新任务 ${state.todos.length + 1}`);
          }}
        >
          添加任务
        </button>
      </div>
    </div>
  );
};

export default UseReactive; 