import Button from "~/components/Button";

function ProductsCart() {
    return ( 
        <div className="w-96 py-10 px-2 bg-white shadow-xl rounded sha ">
            <div className="flex justify-between items-center px-5">
                <span className="text-black text-3xl">Giỏ hàng của bạn</span>
                <Button content={"Xem chi tiết"} styles={"text-2xl"}/>
            </div>
            <div>
                
            </div>
            <div className="text-center mt-12">
                <span className="text-2xl font-bold text-black">Tổng tiền: </span>
                <span className="text-red-700 text-4xl"> 0 đ</span>
            </div>
            <div className="flex justify-center mt-3">
                <Button className="w-full" content={"Thanh Toán"} styles={"px-10 text-4xl"}/>
            </div>
        </div>
     );
}

export default ProductsCart;