import {  useState } from "react";
import images from "~/images";
import Content from "./Content";
function Introduction({data}) {
    const [section , setSection] = useState(data.section[0].title);
    const [content, setContent] = useState(data.section[0].content);
    const [showContent, setShowContent] = useState(true);

 

    function handleChangeContent(title) {
        const clickedSection = data.section.find((section) => section.title === title);
        setSection(clickedSection.title);
        setContent(clickedSection.content);
        setShowContent(false);
        setTimeout(() => setShowContent(true), 200);
    }

    /* A string that is used to set the border of the active section. */
    const active = "border-t border-b border-green-primary"
    return ( <div className={`pt-5 lg:w-container mx-auto px-5 lg:px-0`}>
        <h1 className="font-lora uppercase text-center text-green-primary text-6xl">
            {data.title}
        </h1>
        <div className="w-2/3 mx-auto">
            <img src={images.common.icon_tealeaves} alt="img" className="mx-auto"/>
        </div>
        {
            !!data.section && (
                <div className="lg:flex lg:justify-center mt-5 text-green-primary">
                    <ul className="lg:flex w-fit">
                        {data.section.map((item, index)=>(
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
                        ))}
                    </ul>
                </div>
            )
        }

    <div className={`content-container ${showContent ? 'show' : ''} fade-in`}>
        <Content content={content} />
    </div>

    </div> );
}

export default Introduction;