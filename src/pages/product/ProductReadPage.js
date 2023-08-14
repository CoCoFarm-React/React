import { useEffect, useState } from "react";
import AdminHeader from "../../components/adminComponents/AdminHeaderComponent";
import Footer from "../../components/commonComponents/Footer";
import ProductReadComponent from "../../components/product/ProductReadComponent";
import useQueryObj from "../../hooks/useQueryObj";

const ProductReadPage = () => {

    const {queryObj} = useQueryObj()

    return (  
        <div className="container m-auto">
        <div>
            <AdminHeader></AdminHeader>
            <ProductReadComponent queryObj={queryObj}></ProductReadComponent>
            <Footer></Footer>
        </div>
    </div>
    );
}
 
export default ProductReadPage;