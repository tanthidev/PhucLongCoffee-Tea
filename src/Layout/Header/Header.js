import { Link } from "react-router-dom";
import React, {useLayoutEffect, useState} from "react";
import Tippy from '@tippyjs/react';
import "tippy.js/dist/tippy.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "~/components/Button";
import images from "~/images";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import ProducstCart from "~/components/ProducstCart";

function Header () {

    const {logo :logo1, logo1 :logo2, logo2:logo3} = images.common;
    const listLogo = [logo1, logo2, logo3];

    const [currentLogo, setCurrentLogo] = useState(listLogo[0]);
    const [indexLogo, setIndexLogo] = useState(0)

    useLayoutEffect(()=>{
        setTimeout(()=>{
            setCurrentLogo(listLogo[indexLogo]);
            setIndexLogo(()=>{
                if(indexLogo===2){
                    return 0
                } else {
                    return indexLogo+1;
                } 
            })
        },3000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[currentLogo, indexLogo])

    return (
        <div className="border-b-2 border-gray-100 w-full">
            <div className="container grid grid-cols-3 items-center mx-auto h-16 ">
                <div>
                    <Link to="/delivery" className="animate-shake pt-2">
                        <img src={images.common.delivery} alt="delivery"/>
                    </Link>
                </div>

                <div>
                    <Link to="/delivery" className="pt-2">
                        <img src={currentLogo} alt="logo" className="w-16 mx-auto"/>
                    </Link>
                </div>

                <div className="flex justify-end items-center">
                    <div className="mt-1">
                        <Link to="/" className="font-bold text-2xl px-2">
                            Đăng nhập
                        </Link>
                    </div>
                    <div className="mt-2 mr-2 text-xl">
                        <span className="mr-1 text-green-primary font-semibold cursor-pointer">VN</span>
                        |
                        <span className="ml-1 cursor-pointer">EN</span>
                    </div>

                    <Tippy 
                        content={<ProducstCart/>}
                        placement= 'top-end'
                        arrow={false}
                        delay= {[0,0]}
                        interactive={true}
                        >
                        <div>
                            <Button content={"Giỏ hàng"} icon={<FontAwesomeIcon icon={faCartShopping}/>}/>
                        </div>
                    </Tippy>
                    

                </div>
            </div>
        </div>
    );
}

export default Header;