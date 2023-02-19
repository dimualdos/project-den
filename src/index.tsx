import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './servises/store';
import {
  BrowserRouter, Routes, Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import { AndSometingElse, CompletedTasks, ErrorPage, NewTasks, OtherTasks, SomethingElse } from './pages/index';

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
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>

            <Route path="new-tasks" element={<NewTasks />} />
            <Route path="completed-tasks" element={<CompletedTasks />} />
            <Route path="other-tasks" element={<OtherTasks />} />
            <Route path="something-else" element={<SomethingElse />} />
            <Route path="and-something-else" element={<AndSometingElse />} />

          </Route>
        </Routes>
      </BrowserRouter> */}
    </React.StrictMode>
  </Provider>
);

