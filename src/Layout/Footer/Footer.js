import { Link } from "react-router-dom";
import Button from "~/components/Button";
import images from "~/images";

function Footer() {
    return ( 
        <footer className="  bg-white ">
            <div className="lg:w-container py-9 px-3 mx-auto lg:grid lg:grid-cols-2 text-2xl">
                <div>
                    <p className="text-xl  lg:text-2xl leading-9">
                        <b>Trụ sở chính: </b>
                        Công ty Cổ Phần Phúc Long Heritage - ĐKKD: 0316 871719 do sở KHĐT TPHCM cấp lần đầu ngày 21/05/2021
                        <br/>

                        <b>Nhà máy: </b>
                        D_8D_CN Đường XE 1, Khu Công Nghiệp Mỹ Phước III, phường Mỹ Phước, thị xã Bến Cát, tỉnh Bình Dương, Việt Nam
                        <br/>
                        
                        <b>Địa chỉ: </b>
                        Phòng 702, Tầng 7, Tòa nhà Central Plaza, số 17 Lê Duẩn, phường Bến Nghé, quận 1, Hồ Chí Minh
                        <br/>
                        
                        <b>Điện thoại: </b>
                        1900 234 518 (Ext.9100/ 9102)
                        <br/>

                        <b>Fax: </b>
                        (028) 6263 0379
                        <br/>

                        <b>Email: </b>
                        sales@phuclong.masangroup.com
                    </p>
                </div>
                <div className="lg:grid lg:grid-cols-2 lg:px-5">
                    {/* Form */}
                    <div>
                        <b>Đăng ký nhận tin khuyến mãi</b>
                        <form className="flex mt-2 mb-5">
                            <input type={"text"} className="border border-green-primary rounded-lg mr-2 px-2" placeholder="Nhập địa chỉ email"/>
                            <Button content={"Gửi"}/>
                        </form>
                        <p className="cursor-pointer">Chính sách đặt hàng</p>
                        <p className="cursor-pointer">Chính sách bảo mật thông tin</p>
                    </div>

                    {/* Image */}
                    <div>
                        <img src={images.common.dathongbao} alt="img"/>
                        <div className="flex justify-center">
                            <a className="mx-2" href="https://www.facebook.com/phuclongcoffeeandtea" target={"_blank"} rel="noreferrer">
                                <img src={images.social.facebook} alt="img" className="w-8"/>
                            </a>
                            <Link className="mx-2" to="/">
                                <img src={images.social.twitter} alt="img" className="w-8"/>
                            </Link>
                            <a className="mx-2" href="https://www.instagram.com/phuclongcoffeeandtea/"  target={"_blank"} rel="noreferrer">
                                <img src={images.social.instagram} alt="img" className="w-8"/>
                            </a>
                            <a className="mx-2" href="https://www.youtube.com/channel/UCq6WR0wWNUuz53c4zeWSa8g"  target={"_blank"} rel="noreferrer">
                                <img src={images.social.instagram} alt="img" className="w-8"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-1 text-sm text-white bg-black text-center">
                © 2017 Bản quyền Phuc Long Co., Ltd
            </div>
        </footer>
     );
}

export default Footer;