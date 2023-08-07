import { Outlet } from "react-router-dom";
import AdminHeaderComponent from "../components/adminComponents/AdminHeaderComponent";
import Footer from "../components/commonComponents/Footer";
import BasicLayout from "../layouts/BasicLayout";

const MainPage = () => {
    return ( 
        <div>
            <div>
                <AdminHeaderComponent></AdminHeaderComponent>
            </div>

            <div className="m-auto">
                <BasicLayout>

                    <div className="bg-white w-full border-2">
                        <Outlet></Outlet>
                    </div>
                </BasicLayout>
            </div>

            <div>
                <Footer></Footer>
            </div>            
        </div>
    );
}
 
export default MainPage;