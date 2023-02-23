import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React, {useState, Fragment} from "react";

function ItemSideBarMobile({data}) {
    const [showChildren, setShowChildren] = useState(false);
    const [buttonShowChildren, setButtonShowChildren] = useState(true)

    const handleShowChildren = () => {
        setShowChildren(!showChildren);
        setButtonShowChildren(!buttonShowChildren)
    }
    return ( 
        <>
            <div className="grid justify-between border-b border-green-primary pr-5 pl-10 py-2">
                <div>
                    <div className="flex">
                        <Link to={data.link} className="font-bold text-gray-700 py-1">{data.title}</Link>
                        <div className="flex items-center">
                            {data.children.length!==0 && 
                                (buttonShowChildren ? 
                                    (<FontAwesomeIcon icon={faAngleDown} className="text-green-primary pl-3" onClick={handleShowChildren}/>)
                                    : (<FontAwesomeIcon icon={faAngleUp} className="text-green-primary pl-3" onClick={handleShowChildren}/>)    
                                )
                            }                      

                        </div>
                    </div>
                    
                    {showChildren && (
                            data.children.map((item, index)=>{
                                if(item.children===0 || !(!!item.children)){
                                    return (
                                        <div key={index} className="ml-5 py-1">
                                            <Link to={item.link}>{item.title}</Link>
                                        </div>
                                    )
                                } else {
                                    return(
                                        <Fragment key={index}>
                                            <Link className="font-bold ml-2 py-1 text-green-primary" key={index} to={item.link}>{item.title}</Link>
                                            {item.children.map((itemChildren, index1) => (
                                                <div key={index1} className="ml-5 py-1"> 
                                                    <Link to={itemChildren.link}>{itemChildren.title}</Link>
                                                </div>
                                            ))}
                                        </Fragment>
                                    )
                                }

                                
                            })

                        )}
                </div>
                <div>

                </div>
            </div>
        </>
     );
}

export default ItemSideBarMobile;