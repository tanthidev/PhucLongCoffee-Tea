import images from "~/images";
import Button from "../Button";

function NotFound() {
    return ( 
        <div className="lg:w-container mx-auto flex justify-center py-20">
            <div>
                <img src={images.common.notFound} alt="Not Found Page" className="w-3/5 mx-auto"/>
                <p className="text-4xl lg:text-5xl font-semibold text-green-primary text-center">Xin lỗi, trang này không tồn tại</p>
                <div className="flex justify-center mt-10">
                    <Button to="/" content="Quay về trang chủ"/>
                </div>
            </div>
        </div>
     );
}

export default NotFound;