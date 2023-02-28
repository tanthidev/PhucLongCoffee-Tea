import React, {useContext} from "react";
import Button from "~/components/Button";
import { CartContext } from "~/components/Cart/Cart";
import ItemCart from "./ItemCart";


function ProductsCart() {
    const {cart} = useContext(CartContext);
    // const [products, setProducts] = useState();
    let total = '0';
    let costProduct = 0;

    cart.map((product)=> {
        const price = parseInt(product.price.replace('.', ''));
        const quantity = parseInt(product.quantity);
        costProduct = (price*quantity);
        total = (costProduct+parseInt(total.replace('.', ''))).toLocaleString('vi-VN')
        // const total = (price*quantity + cost).toLocaleString('vi-VN');

        return ""
    })

    return ( 
        <div className="w-96 py-10 px-5 bg-white shadow-xl rounded sha">
            <div className="flex justify-between items-center px-5">
                <span className="text-black text-3xl">Giỏ hàng của bạn</span>
                <Button content={"Xem chi tiết"} styles={"text-2xl"}/>
            </div>

            {/* Item */}
            <div className="max-h-96 pr-2 overflow-scroll">
                {
                    cart.map((item, index) => (
                        <ItemCart key={index} data={item}/>
                    )) 
                }                
            </div>

            {/*  */}
            <div className="text-center mt-12">
                <span className="text-2xl font-bold text-black">Tổng tiền: </span>
                <span className="text-red-700 text-4xl"> {total} đ</span>
            </div>
            <div className="flex justify-center mt-3">
                <Button className="w-full" content={"Thanh Toán"} styles={"px-10 text-4xl"}/>
            </div>
        </div>
     );
}

export default ProductsCart;