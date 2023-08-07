import { createBrowserRouter } from"react-router-dom";

import MainPage from "../pages/MainPage";
import AdminPage from "../pages/admin/AdminPage";
import SupportListPage from "../pages/support/SupportListPage";
import FarmerListPage from "../pages/farmer/FarmerListPage";
import ConsumerListPage from "../pages/consumer/ConsumerListPage";
import SupportReadPage from "../pages/support/SupportReadPage";
import FarmerReadPage from "../pages/farmer/FarmerReadPage";
import FarmerListComponent from "../components/adminComponents/farmer/FarmerListComponent";


const router = createBrowserRouter([
    {
        path: "",
        element: <MainPage></MainPage>,
        children: [{
            path: "",
            element: <AdminPage></AdminPage>               
        }]
        
    },
    // {
    //     path: "",
    //     element: <AdminPage></AdminPage>
        
    // },
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
    },
    {
        path: "/farmer/list",
        element: <FarmerListComponent></FarmerListComponent>
    },
    {
        // path: "/consumer/list",
        // element: 
    }
]);

export default router;