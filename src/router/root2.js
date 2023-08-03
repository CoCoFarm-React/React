import { createBrowserRouter } from"react-router-dom";

import AdminPage from "../pages/admin/AdminPage";
import SupportListPage from "../pages/support/SupportListPage";
import FarmerListComponent from "../components/adminComponents/farmer/FarmerListComponent";


const router2 = createBrowserRouter([
    {
        path: "/support/list",
        element: <SupportListPage></SupportListPage>
    },
    {
        path: "/support/list/:bno",
        element: <SupportListPage></SupportListPage>
    }
]);

export default router2;