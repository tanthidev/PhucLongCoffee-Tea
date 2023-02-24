import { faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "~/components/Button";
function Adress() {

    const data = [
        {
            adress: "Phúc Long Lê Văn Sỹ - 350 Lê Văn Sỹ, quận 3, Hồ Chí Minh",
            phone: "(028) 7100 1968 (Ext. 20408)",
        },
        {
            adress: "Phúc Long 188 Trần Hưng Đạo - 188 Trần Hưng Đạo, quận 5, Hồ Chí Minh",
            phone: "(028) 7100 1968 (Ext. 20668)",
        },
        {
            adress: "Phúc Long Lotte Mart Quận 7 - 1F-32, Lotte Mart Quận 7, số 469 Nguyễn Hữu Thọ, quận 7, Hồ Chí Minh",
            phone: "(028) 7100 1968 (Ext. 20188)",
        },        
        {
            adress: "Phúc Long Aeon Mall Bình Tân - G17, Aeon Mall Bình Tân, số 01 Đường số 17A, quận Bình Tân, Hồ Chí Minh",
            phone: "(028) 7100 1968 (Ext. 20188)",
        },
        {
            adress: "Phúc Long Crescent Mall - Crescent Mall, số 101 Tôn Dật Tiên, Phú Mỹ Hưng, quận 7, Hồ Chí Minh",
            phone: "(028) 7100 1968 (Ext. 20648)"
        },    
        {
            adress: "Phúc Long Centre Point - Centre Point, số 106 Nguyễn Văn Trỗi, quận Phú Nhuận, Hồ Chí Minh",
            phone: "(028) 7100 1968 (Ext. 20528)"
        },
        {
            adress: "Phúc Long Cộng Hòa - 1B Cộng Hòa, quận Tân Bình, Hồ Chí Minh",
            phone: "(028) 7100 1968 (Ext. 20238)"
        },
        {
            adress: "Phúc Long RomeA - B-004A, TTTM RomeA, số 117 Nguyễn Đình Chiểu, quận 3, Hồ Chí Minh",
            phone: "(028) 7100 1968 (Ext. 20428)"
        },
        {
            adress: "Phúc Long Golden Plaza - G-001, TTTM Golden Plaza, số 922 Nguyễn Trãi, quận 5, Hồ Chí Minh",
            phone: "(028) 7100 1968 (Ext. 20458)"
        },
        {
            adress: "Phúc Long Nguyễn Thị Minh Khai - L1-01, Tòa nhà Somerset Chancellor Court, số 21-23 Nguyễn Thị Minh Khai, quận 1, Hồ Chí Minh",
            phone: "(028) 7100 1968 (Ext. 20508)"
        },
        {
            adress: "Phúc Long Mạc Thị Bưởi - 63 Mạc Thị Bưởi, quận 1, Hồ Chí Minh",
            phone: "(028) 7100 1968 (Ext. 20418)"
        },
        {
            adress: "Phúc Long 29 Ngô Đức Kế - 29-31 Ngô Đức Kế, quận 1, Hồ Chí Minh",
            phone: "(028) 7100 1968 (Ext. 20438)"
        },
        {
            adress: "Phúc Long 42 Ngô Đức Kế - 42 Ngô Đức Kế, quận 1, Hồ Chí Minh",
            phone: "(028) 7100 1968 (Ext. 20448)"
        },
        {
            adress: "Phúc Long Phạm Hồng Thái - 42 Phạm Hồng Thái, quận 1, Hồ Chí Minh",
            phone: "(028) 7100 1968 (Ext. 20548)"
        },
        {
            adress: "Phúc Long Phạm Hồng Thái - 42 Phạm Hồng Thái, quận 1, Hồ Chí Minh",
            phone: "(028) 7100 1968 (Ext. 20548)"
        },
        {
            adress: "Phúc Long Huỳnh Thúc Kháng - 26 Huỳnh Thúc Kháng, quận 1, Hồ Chí Minh",
            phone: "(028) 7100 1968 (Ext. 20308)"
        },
        {
            adress: "Phúc Long Trần Cao Vân - 42 Trần Cao Vân, quận 3, Hồ Chí Minh",
            phone: "(028) 7100 1968 (Ext. 20638)"
        },
        {
            adress: "Phúc Long Trần Cao Vân - 42 Trần Cao Vân, quận 3, Hồ Chí Minh",
            phone: "(028) 7100 1968 (Ext. 20638)"
        },
        {
            adress: "Phúc Long Trần Cao Vân - 42 Trần Cao Vân, quận 3, Hồ Chí Minh",
            phone: "(028) 7100 1968 (Ext. 20638)"
        },
    ]


    return ( 
        <div className=" relative h-4/5-screen py-10 bg-green-primary text-white grid lg:grid-cols-2 overflow-hidden">
            <div className="px-10">
                <h2 className="h-1/5-screen text-5xl pt-20">
                    HỆ THỐNG CỬA HÀNG
                </h2>
                <div className="h-3/5-screen overflow-y-scroll">
                    <ul className="pb-12 mb-2">
                        {
                            data.map((item, index)=>(
                                <li key={index} className="flex py-3">
                                    <FontAwesomeIcon icon={faStore} className="text-5xl pt-2 mr-3"/>
                                    <div className="w-2/3">
                                        <p className="pr-3">{item.adress}</p>
                                        <p>{item.phone}</p>
                                    </div>
                                    <div>
                                    <Button type="line-green" content={"Chỉ đường"} styles="px-3"/>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default Adress;