import React, {useContext} from 'react';

import {LayoutContext} from '~/Layout/Layout'
import ItemSideBarMobile from './ItemSideBarMobile';

function SideBarMobile() {
    const categories = useContext(LayoutContext).categories;

    return ( 
        <div className='w-full bg-white absolute right-0 px-2 overflow-scroll'>
            {categories.map((item, index)=> (
                <ItemSideBarMobile data={item} key={index}/>
            ))}
        </div>
     );
}

export default SideBarMobile;