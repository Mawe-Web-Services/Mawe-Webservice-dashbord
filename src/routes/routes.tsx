import { Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Dashboard from "../screens/Dashboard";
import DashboardLayout from "../layouts/Dashboard";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/clusters" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
