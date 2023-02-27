import images from "~/images";
import ItemProduct from "./ItemProduct";
function ListProducts({data}) {
    return ( 
        <div className="my-20">
            {/* Header */}
           <div>
                <div className="flex justify-center">
                    <img src={data.banner} alt="banner"/>
                </div>

                <h1 className="font-lora mt-10 mb-3 uppercase text-center text-green-primary text-6xl">
                    {data.title}
                </h1>

                <div className="w-2/3 mx-auto">
                    <img src={images.common.icon_tealeaves} alt="img" className="mx-auto"/>
                </div>
           </div>

           {/* Content products */}
            <div className="lg:w-container mx-auto mt-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-2">
                    {data.listProduct.map(item => (
                        <ItemProduct key={item.idProduct} data={item}/>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default ListProducts;