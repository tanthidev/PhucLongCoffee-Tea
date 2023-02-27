import Button from "~/components/Button";

function ItemProduct({data}) {
    return ( 
        <div className=" relative py-6 px-5 rounded-2xl hover:shadow-2xl">
            {
                data.new && (
                    <span className="absolute right-0 mr-10 bg-green-primary text-white font-extrabold px-2 py-1 rounded-lg text-xl">
                        Món mới
                    </span>
                )
            }
            {/* Image */}
            <div className="px-8 pb-7">
                <img src={data.image} alt={data.nameProduct}/>
            </div>
            {/* Info */}
            <div>
                <p className="text-center font-bold text-3xl mb-3">{data.nameProduct}</p>
                {!!data.englishName && 
                    <p className="text-center mb-3">{data.englishName}</p>
                }
                <p className="text-center font-extrabold text-4xl text-green-primary mb-3">{data.price} đ</p>
                <div className="flex justify-center">
                    <Button content={"Đặt hàng"} styles="px-5"/>
                </div>
            </div>
        </div>
    );
}

export default ItemProduct;