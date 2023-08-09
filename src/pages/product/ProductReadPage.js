import AdminHeader from "../../components/adminComponents/AdminHeaderComponent";
import Footer from "../../components/commonComponents/Footer";
import ProductReadComponent from "../../components/product/ProductReadComponent";

const ProductReadPage = () => {
    return (  
        <div className="container m-auto">
        <div>
            <AdminHeader></AdminHeader>
            <ProductReadComponent></ProductReadComponent>
            <Footer></Footer>
        </div>
    </div>
    );
}
 
export default ProductReadPage;