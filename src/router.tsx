import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import UseSize from './pages/UseSize';
import UseInViewport from './pages/UseInViewport';
import UseClickAway from './pages/UseClickAway';
import UseScroll from './pages/UseScroll';
import UseReactive from './pages/UseReactive';
import UseWhyDidYouUpdate from './pages/UseWhyDidYouUpdate';
import UseDebounce from './pages/UseDebounce';
import UseLockFn from './pages/UseLockFn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'use-size',
        element: <UseSize />,
      },
      {
        path: 'use-in-viewport',
        element: <UseInViewport />,
      },
      {
        path: 'use-click-away',
        element: <UseClickAway />,
      },
      {
        path: 'use-scroll',
        element: <UseScroll />,
      },
      {
        path: 'use-reactive',
        element: <UseReactive />,
      },
      {
        path: 'use-why-did-you-update',
        element: <UseWhyDidYouUpdate />,
      },
      {
        path: 'use-debounce',
        element: <UseDebounce />,
      },
      {
        path: 'use-lock-fn',
        element: <UseLockFn />,
      },
    ],
  },
]);

export default router; 