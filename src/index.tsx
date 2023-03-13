import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './servises/store';
import {
  BrowserRouter, Routes, Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { AndSometingElse, CompletedTasks, ErrorPage, NewTasks, OtherTasks, SomethingElse } from './pages/index';
import { TasksDetail } from './components/tasks-detail/tasks-detail';
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'new-tasks',
        element: <NewTasks />,

      },
      {
        path: 'completed-tasks',
        element: <CompletedTasks />,
      },
      {
        path: 'other-tasks',
        element: <OtherTasks />,
      },
      {
        path: 'something-else',
        element: <SomethingElse />,
      },
      {
        path: 'and-something-else',
        element: <AndSometingElse />,
      },
      {
        path: '/new-tasks/:id',
        element: <TasksDetail />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />


      {/* <HashRouter>

        <Routes>
          <Route path="/" element={<App />}>

            <Route path="new-tasks" element={<NewTasks />} />
            <Route path="completed-tasks" element={<CompletedTasks />} />
            <Route path="other-tasks" element={<OtherTasks />} />
            <Route path="something-else" element={<SomethingElse />} />
            <Route path="and-something-else" element={<AndSometingElse />} />

          </Route>
        </Routes>
      </HashRouter> */}
    </React.StrictMode>
  </Provider>
);

