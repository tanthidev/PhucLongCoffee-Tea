import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';

import {LayoutContext} from '~/Layout/Layout'
import Menu from '~/components/Menu';

function SideBar () {
    const categories = useContext(LayoutContext).categories;
    let currentUrl = window.location.href;
    let domain = "http://localhost:3000"
    let regex = new RegExp(domain, "gi");
    let pageActive = currentUrl.replace(regex, "");

    return (
        <nav className='mx-auto'>
            <ul className='flex justify-center'>
                {
                    categories.map((item, index)=>(
                        <div key={index}>
                            <Tippy
                            content={<Menu data={item.children || null}/>}
                            placement="bottom"
                            arrow={false}
                            delay= {[0,0]}
                            interactive={true}
                            maxWidth='fit-content'
                        >
                            <li  className="">
                                <Link to={item.link} className={`cursor-pointer px-5 py-2 font-extrabold rounded block  ${pageActive===item.link ? "bg-green-primary text-white" : "text-gray-600 hover:text-green-primary"}`}>
                                    {item.title}
                                </Link>
                            </li>
                        </Tippy>
                        </div>
                    ))
                }
            </ul>
        </nav>
    );
}

export default SideBar;