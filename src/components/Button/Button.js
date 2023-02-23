import { Link } from "react-router-dom";

function Button({content, icon, to, href, styles}) {
    
    let Type = 'button';

    if(href) {
        Type = 'a'
    } else 
        if(to){
            Type = Link
        }

    return ( 
        <Type className="border border-green-primary text-green-primary px-2 py-2 text-2xl rounded-lg hover:bg-green-primary hover:text-white">
            <span className={styles}>
                {content}
            </span>
            {icon && (
                <span className="ml-1">
                    {icon}
                </span>
            )}
        </Type>
     );
}

export default Button;