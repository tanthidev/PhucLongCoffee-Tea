import React, {useContext, useState} from "react";
import Button from "~/components/Button";
import { CartContext } from "~/components/Cart/Cart";

function ItemProduct({data}) {
    const {addToCart} = useContext(CartContext);
    const [isHovering, setIsHovering] = useState(false);
    const [quantity, setQuantity] = useState(1);
    return (
        <div 
            className="relative py-6 px-5 rounded-2xl hover:shadow-2xl" 
            id={data.idProduct}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)} 
        >
            {
                data.new && (
                    <span className="absolute right-0 mr-7 bg-green-primary text-white font-extrabold px-2 py-1 rounded-lg text-xl">
                        Món mới
                    </span>
                )
            }
            {/* Image */}
            <div className="px-8 pb-7">
                <img src={data.image} alt={data.nameProduct}/>
            </div>
            {/* Info */}
            <div>
                <p className="text-center font-bold text-3xl mb-3">{data.nameProduct}</p>
                {!!data.englishName && 
                    <p className="text-center mb-3">{data.englishName}</p>
                }
                <p className="text-center font-extrabold text-4xl text-green-primary mb-3">{data.price} đ</p>

                    <div className="flex justify-center items-center relative h-10">
                        <div className={`${isHovering && "move-left"} button-add`}>
                            <Button
                                onClick={()=>addToCart(data, quantity)}
                                content={"Đặt hàng"}
                                styles={`px-5 rounded-r-lg`}
                            />
                        </div>
                        <div className={`${isHovering && 'move-right'} input-quatity`}>
                            {isHovering && (
                                    <input
                                        type="number"
                                        min="1"
                                        className={`border rounded-lg px-2 py-1 w-16  h-8 my-2`}
                                        value={quantity}
                                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                                    />
                                )
                            }
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default ItemProduct;