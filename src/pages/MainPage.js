import { Outlet } from "react-router-dom";
import AdminHeaderComponent from "../components/adminComponents/AdminHeaderComponent";
import Footer from "../components/commonComponents/Footer";
import BasicLayout from "../layouts/BasicLayout";

const MainPage = () => {
    return ( 
        <div>
            <div className="w-[1400px] m-auto">
                <AdminHeaderComponent></AdminHeaderComponent>
            </div>

            <div className="m-auto">
                <BasicLayout>

                    <div className="bg-white w-full border-2">
                        <Outlet></Outlet>
                    </div>
                </BasicLayout>
            </div>

            <div className="w-[1400px] m-auto">
                <Footer></Footer>
            </div>            
        </div>
    );
}
 
export default MainPage;