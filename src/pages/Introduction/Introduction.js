import {  useEffect, useState } from "react";
import images from "~/images";
import Content from "./Content";
function Introduction({data}) {
    const [section , setSection] = useState(data.section[0].title || null);
    const [content, setContent] = useState(data.section[0].content || null);
    const [showContent, setShowContent] = useState(true);
    const [typeRender, setTypeRender] = useState(data.section[0].type || null)
    const [currentUrl, setCurrentUrl] = useState(window.location.href);
 

    function handleChangeContent(title) {
        const clickedSection = data.section.find((section) => section.title === title);
        setSection(clickedSection.title);
        setContent(clickedSection.content);
        setTypeRender(clickedSection.type)
        setShowContent(false);
        setTimeout(() => setShowContent(true), 200);
        window.scrollTo({
            top: 350,
            behavior: "smooth"
        });
    }

    //Re mount if change page
    useEffect(()=>{
        setContent(data.section[0].content);
        setCurrentUrl(window.location.href);
        document.title = data.title + " - Phúc Long";
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    },[currentUrl, data.section, data.title])


    // console.log(data);
    /* A string that is used to set the border of the active section. */
    const active = "border-t border-b border-green-primary"
    return ( 
    <div >

        {/* Banner */}
        <div className="flex justify-center">
            <img src={data.banner} alt="banner"/>
        </div>

        {/* Container */}
        <div className={`pt-5 lg:w-container mx-auto px-5 lg:px-0`}>
            <h1 className="font-lora uppercase text-center text-green-primary text-6xl">
                {data.title}
            </h1>

            
            <div className="w-2/3 mx-auto">
                <img src={images.common.icon_tealeaves} alt="img" className="mx-auto"/>
            </div>

           {/* If have header intro then render */}
            {
                !!data.header && (
                    <div className="mt-10">
                        <p>{data.header.content}</p>
                        {
                            !!data.header.image && (
                                <img src={data.header.image} alt="img" className="w-full"/>
                            )
                        }
                    </div>
                )
            }


           {/* If have section then render */}
            {
                (!!data.section) && (
                    <div className="lg:flex lg:justify-center mt-5 text-green-primary">
                        <ul className="lg:flex w-fit">
                            {data.section.map((item, index)=>{
                                if(!!item.title){
                                    return (
                                        <div  
                                            className=""
                                            key={index} 
                                            onClick={() => handleChangeContent(item.title)}
                                            >
                                            {/* A ternary operator.  */}
                                            <li className={`${item.title===section ? active : "text-gray-500"} text-center lg:mx-1 px-6 py-2 font-lora uppercase text-4xl cursor-pointer hover:bg-gray-200 hover:text-green-primary`}>
                                                {item.title}
                                            </li>
                                        </div>
                                    )
                                } else {
                                    return ""
                                }
                            })}
                        </ul>
                    </div>
                )
            }

            <div className={`content-container ${showContent ? 'show' : ''} fade-in`}>
                <Content key={content} content={content} type={typeRender}/>
            </div>
        </div>

    </div> );
}

export default Introduction;