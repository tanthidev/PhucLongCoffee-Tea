import React, {memo} from "react";
import Button from "~/components/Button";

function Content({content}) {
    return ( 
        <div className="mb-20 mt-10">
            {
                content.map((item, index)=>{
                    return(
                        <div key={index} className={`my-20 lg:my-10  lg:h-1/2-screen`}>
                            {/* 
                                if have background => border full, display mobile screen width 50?
                            */}
                            <div className={`lg:float-${index%2===0 ? "right" : "left"} ${item.background ? item.background + " w-1/2"  : "w-full"} mx-auto lg:w-1/2  lg:h-full flex justify-center items-center lg:px-16 lg:py-16`}>
                                    <img src={item.image} alt="img" className={`w-full  ${item.background ? "rounded-full lg:w-2/3" : ""} `}/>
                            </div>

                            <div className={`lg:float-${index%2===0 ? "left" : "right" } lg:w-1/2 lg:h-full lg:px-10 mt-4 lg:mt-0 flex items-center `} >
                                <div>
                                    {
                                        item.title && (
                                            <h3 className="text-5xl text-center lg:text-left uppercase mb-3 lg:mb-8">{item.title}</h3>
                                        )
                                    }
                                    <div className="text-gray-700 text-3xl text-center lg:text-left lg:text-3xl leading-relaxed" dangerouslySetInnerHTML={{__html: item.descript.replace(/\n/g, '<br>')}}/>
                                    {
                                        item.link && (
                                            <div className="mt-7 flex justify-center lg:block">
                                                <Button content={"Xem chi tiết"} to={item.link}/>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
     );
}

export default memo(Content);