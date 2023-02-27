import { dataProduct } from "~/Data/data";
import ListProducts from "~/components/ListProducts";
import { useEffect } from "react";

function Bakery() {
    useEffect(()=> {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    },[])
    return ( 
        <ListProducts data={dataProduct.bakery}/>
     );
}

export default Bakery;