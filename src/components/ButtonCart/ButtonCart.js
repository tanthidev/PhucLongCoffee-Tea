import { memo, useContext, useState, useEffect } from 'react';
import Tippy from '@tippyjs/react';
import Button from "~/components/Button";
import ProducstCart from "~/components/ProducstCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from '~/components/Cart/Cart';

function ButtonCart() {
    const cart = useContext(CartContext).cart
    let numberProducts = 0;
    const [prevNumber, setPrevNumber] = useState(numberProducts);
    
    cart.map((product)=>{
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return numberProducts = numberProducts + product.quantity
    })

    useEffect(() => {
        if (numberProducts !== prevNumber) {
            setPrevNumber(numberProducts);
            const numberEl = document.querySelector('.number');
            numberEl.classList.add('changed');
            setTimeout(() => {
                numberEl.classList.remove('changed');
            }, 500);
        }
    }, [numberProducts, prevNumber]);

    return (
        <div className='relative'>
            <Tippy 
                content={<ProducstCart/>}
                placement= 'bottom-end'
                arrow={false}
                delay= {[0,0]}
                interactive={true}
            >
                <div>
                    <span className='absolute -right-3 -top-1 text-white bg-green-primary px-2 rounded-full number'>{numberProducts}</span>
                    <Button content={"Giỏ hàng"} icon={<FontAwesomeIcon icon={faCartShopping}/>}/>
                </div>
            </Tippy>
        </div>
     );
}

export default memo(ButtonCart);
