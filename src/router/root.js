import { createBrowserRouter } from"react-router-dom";

import AdminPage from "../pages/admin/AdminPage";
import SupportListPage from "../pages/support/SupportListPage";
import FarmerListPage from "../pages/farmer/FarmerListPage";
import ConsumerListPage from "../pages/consumer/ConsumerListPage";
import SupportReadPage from "../pages/support/SupportReadPage";
import FarmerReadPage from "../pages/farmer/FarmerReadPage";


const router = createBrowserRouter([
    {
        path: "",
        element: <AdminPage></AdminPage>
        
    },
    {
        path: "/farmer/list",
        element: <FarmerListPage></FarmerListPage>
    },
    {
        path: "/member/read/:mno",
        element: <FarmerReadPage></FarmerReadPage>
    },
    {
        path: "/consumer/list",
        element: <ConsumerListPage></ConsumerListPage>
    },
    {
        path: "/support/list",
        element: <SupportListPage></SupportListPage>
    },
    {
        path: "/support/read/:bno",
        element: <SupportReadPage></SupportReadPage>
    }
]);

export default router;