import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/layout.css';

const Layout: React.FC = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>ahooks 演示</h1>
      </header>
      
      <div className="app-content">
        <nav className="app-sidebar">
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/use-size">useSize</Link></li>
            <li><Link to="/use-in-viewport">useInViewport</Link></li>
            <li><Link to="/use-click-away">useClickAway</Link></li>
            <li><Link to="/use-scroll">useScroll</Link></li>
            <li><Link to="/use-reactive">useReactive</Link></li>
            <li><Link to="/use-why-did-you-update">useWhyDidYouUpdate</Link></li>
            <li><Link to="/use-debounce">useDebounce</Link></li>
            <li><Link to="/use-lock-fn">useLockFn</Link></li>
          </ul>
        </nav>
        
        <main className="app-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout; 