import React, {useContext} from 'react';

import {LayoutContext} from '~/Layout/Layout'
import ItemSideBarMobile from './ItemSideBarMobile';

function SideBarMobile(onClick) {
    const categories = useContext(LayoutContext).categories;

    return ( 
        <div className='w-full z-10 bg-white absolute right-0 px-2 overflow-y-scroll'>
            {categories.map((item, index)=> (
                <ItemSideBarMobile onClick={onClick}  data={item} key={index}/>
            ))}
        </div>
     );
}

export default SideBarMobile;