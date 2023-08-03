import { createBrowserRouter } from"react-router-dom";

import AdminPage from "../pages/admin/AdminPage";
import FarmerListPage from "../pages/farmer/FarmerListPage";


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
        path: "/farmer/list/:pno",
        element: <FarmerListPage></FarmerListPage>
    }
]);

export default router;