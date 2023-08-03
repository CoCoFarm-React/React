import { createBrowserRouter } from"react-router-dom";

import AdminPage from "../page/admin/AdminPage";
<<<<<<< HEAD
=======
import FarmerListPage from "../page/farmer/FarmerListPage";
>>>>>>> 38923567f14ffdaa6c677b71cac96dcfae823525


const router = createBrowserRouter([ 
    {
        path: "",
        element: <AdminPage></AdminPage>
<<<<<<< HEAD
=======
    },
    {
        path: "/farmer/list",
        element: <FarmerListPage></FarmerListPage>
    },
    {
        path: "/farmer/list/:pno",
        element: <FarmerListPage></FarmerListPage>
>>>>>>> 38923567f14ffdaa6c677b71cac96dcfae823525
    }
]);

export default router;