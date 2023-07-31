import { createBrowserRouter } from"react-router-dom";

import AdminPage from "../page/admin/AdminPage";

const router = createBrowserRouter([
    {
        path: "",
        element: <AdminPage></AdminPage>
    }
]);

export default router;