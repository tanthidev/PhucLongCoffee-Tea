import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";

import { CartContext } from "~/components/Cart/Cart";

function ItemCart(data) {
    const product = data.data;

    const {removeFromCart} = useContext(CartContext);
    
    

    return ( 
        <div className="flex justify-between my-5">
            <div>
                <img className="w-20 mr-3" src={product.image} alt="img" />
            </div>

            <div className="flex items-center w-full">
                <div>
                    <p className="text-black font-semibold text-3xl">{product.nameProduct}</p>
                    <p className="text-black">{product.englishName}</p>
                    <p className="text-black text-2xl">{product.quantity} x {product.price} đ</p>
                </div>
            </div>
            <div className="flex items-center mx-2">
                <FontAwesomeIcon 
                    icon={faClose}
                    className="text-gray-500 hover:text-gray-800 text-3xl cursor-pointer"   
                    onClick={()=> removeFromCart(product.idProduct)} 
                />
            </div>
        </div>
     );
}

export default ItemCart;