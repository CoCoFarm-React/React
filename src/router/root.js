import { createBrowserRouter } from"react-router-dom";

import AdminPage from "../pages/admin/AdminPage";
import SupportListPage from "../pages/support/SupportListPage";
import FarmerListComponent from "../components/adminComponents/farmer/FarmerListComponent";


const router = createBrowserRouter([
    {
        path: "",
        element: <AdminPage></AdminPage>
    },
    {
        path: "/support/list",
        element: <SupportListPage></SupportListPage>
    },
    {
        path: "/support/list/:bno",
        element: <SupportListPage></SupportListPage>
    },
    {
        path: "/farmer/list",
        element: <FarmerListComponent></FarmerListComponent>
    },
    {
        path: "/consumer/list",
        element: 
    }
]);

export default router;