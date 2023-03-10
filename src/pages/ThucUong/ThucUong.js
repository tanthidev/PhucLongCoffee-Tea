import { dataProduct } from "~/Data/data";
import ListProducts from "~/components/ListProducts";
import { useEffect } from "react";

function ThucUong() {
    useEffect(()=> {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    },[])
    return ( 
        <ListProducts data={dataProduct.thucuong}/>
     );
}

export default ThucUong;