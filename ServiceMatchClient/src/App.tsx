import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { AddProjectPage } from "./pages/AddProjectPage";

export const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/project/add"
          element={<AddProjectPage addProjectSubmit={null} />}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

{
  /* <Route path="/jobs" element={<JobsPage />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={(args: LoaderFunctionArgs<unknown>) => {
            const { params } = args;
            return jobLoader({ params: { id: params.id || "" } });
          }}
        />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={(args: LoaderFunctionArgs<unknown>) => {
            const { params } = args;
            return jobLoader({ params: { id: params.id || "" } });
          }}
        /> */
}
