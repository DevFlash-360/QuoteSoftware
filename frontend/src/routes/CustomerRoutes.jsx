import { lazy } from "react";
import DashboardLayout from "../Layouts/Dashboard";
import Upload from "../pages/customer/JobCreate/Upload";
import JobSetting from "../pages/customer/JobCreate/JobSetting";

const CustomerRoutes = {
  path: '/',
  element: <DashboardLayout />,
  children: [
    {
      path: 'create-job',
      children: [
        {
          path: 'upload',
          element: <Upload />
        },
        {
          path: 'settings',
          element: <JobSetting />
        }
      ]
    }
  ]
}

export default CustomerRoutes