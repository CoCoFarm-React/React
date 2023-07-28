import { createBrowserRouter } from"react-router-dom";

import AdminPage from "../page/admin/AdminPage";
import FarmerList from "../components/adminComponents/farmer/FarmerListComponent";
import FarmerListPage from "../page/farmer/FarmerListPage";

const router = createBrowserRouter([
    {
        path: "",
        element: <AdminPage></AdminPage>
    },
    {
        path: "/farmer/list",
        element: <FarmerListPage></FarmerListPage>
    }
]);

export default router;