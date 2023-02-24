import Button from "~/components/Button";
import images from "~/images";

function Story() {
    const {teaBanner, recruitment} = images.banner.home;


    return ( 
        <div className="pb-8 w-full">
            {/* Top */}
            <div className="grid grid-cols-1 px-4 lg:px-0 lg:grid-cols-2 lg:h-4/5-screen">
                {/* Image */}
                <div className="w-full mx-auto flex items-center">
                    <img src={teaBanner} alt="img" className="w-full lg:w-4/5"/>
                </div>

                {/* Content */}
                <div className="flex items-center mt-5 lg:mt-0 lg:pl-10">
                    <div>
                        <h3 className="font-bold text-4xl lg:text-5xl text-green-primary mb-16">
                            TỪ NHỮNG MẦM TRÀ, CHÚNG TÔI TẠO RA NIỀM ĐAM MÊ
                        </h3>
                        <p className="mb-5">
                            Trải qua hơn 50 năm chắt chiu tinh hoa từ những búp trà xanh và hạt cà phê thượng hạng cùng 
                            mong muốn mang lại cho khách hàng những trải nghiệm giá trị nhất khi thưởng thức, Phúc Long 
                            liên tục là thương hiệu tiên phong với nhiều ý tưởng sáng tạo đi đầu trong ngành trà và cà phê. 
                            <br/>
                            <br/>
                            Chúng tôi tin rằng từng sản phẩm trà và cà phê sẽ càng thêm hảo hạng khi được tạo ra từ sự phấn 
                            đấu không ngừng cùng niềm đam mê. Và chính kết nối dựa trên niềm tin, sự trung thực và tin yêu 
                            sẽ góp phần mang đến những nét đẹp trong văn hóa thưởng trà và cà phê ngày càng bay cao, vươn xa.
                        </p>
                        <Button content={"Xem thêm"} styles="px-2"/>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="grid  px-4 mt-10 lg:px-0 lg:grid-cols-2 lg:h-4/5-screen">
                {/* Content */}
                <div className="flex items-center lg:pr-10">
                    <div>
                        <h3 className="font-bold text-5xl text-green-primary mb-16">
                            ĐỘI NGŨ NHÂN VIÊN TRÀN ĐẦY NHIỆT HUYẾT
                        </h3>
                        <p className="mb-5">
                            Trong suốt quá trình hoạt động và phát triển, đội ngũ quản lý và nhân viên của 
                            Phúc Long Coffee & Tea, qua bao thế hệ, đã cùng nhau xây dựng, nuôi dưỡng niềm 
                            đam mê dành cho trà và cà phê với mong muốn được thử thách bản thân trong ngành 
                            dịch vụ năng động và sáng tạo.
                        </p>
                        <Button content={"Xem thêm"} styles="px-2"/>
                    </div>
                </div>

                {/* Image */}
                <div className="home_story_bottom flex items-center mt-5">
                    <div className="border-4 border-white ư-full lg:w-1/2 lg:ml-3">
                        <img src={recruitment} alt="img" className=""/>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Story;