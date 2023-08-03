import { createBrowserRouter } from"react-router-dom";

import AdminPage from "../pages/admin/AdminPage";
import SupportListPage from "../pages/support/SupportListPage";
import FarmerListPage from "../pages/farmer/FarmerListPage";
import ConsumerListPage from "../pages/consumer/ConsumerListPage";


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
        element: <FarmerListPage></FarmerListPage>
    },
    {
        path: "/consumer/list",
        element: <ConsumerListPage></ConsumerListPage>
    }
]);

export default router;