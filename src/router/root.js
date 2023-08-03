import { createBrowserRouter } from"react-router-dom";

import AdminPage from "../pages/admin/AdminPage";
import SupportListPage from "../pages/support/SupportListPage";


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
    }
]);

export default router;