import React, {useContext, useRef} from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';

import {LayoutContext} from '~/Layout/Layout'
import Menu from '~/components/Menu';

function SideBar () {
    const categories = useContext(LayoutContext).categories;
    const tippyRef = useRef(null);
    const handleItemClick = () => {
        tippyRef.current.hide();
      };
    

    return (
        <nav className='mx-auto'>
            <ul className='flex justify-center'>
                {
                    categories.map((item, index)=>(
                        <div key={index}>
                            <Tippy
                            content={<Menu data={item.children || null} onItemClick={handleItemClick} />}
                            placement="bottom"
                            arrow={false}
                            delay= {[0,0]}
                            interactive={true}
                            maxWidth='fit-content'
                            hideOnClick={true}
                            onMount={(instance) => { tippyRef.current = instance; }}
                        >
                            <li  className="">
                                <Link to={item.link} className={`cursor-pointer px-5 py-2 font-extrabold rounded block text-gray-600 hover:bg-green-primary hover:text-white `}>
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