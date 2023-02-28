import React, {createContext, useState} from "react";
import GototopButton from "~/components/GototopButton";

import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import SideBarMobile from "./SideBar/SideBarMobile";
import Cart from "~/components/Cart";

export const LayoutContext = createContext();

function DefaultLayout({children}){
    const dataSideBar = {
        categories: [
          //TRANG CHỦ
          {
            title: "TRANG CHỦ",
            link: "/",
            children: []
          },
    
          // CÀ PHÊ
          {
            title: "CÀ PHÊ",
            link: '/cafe/hat-ca-phe-phuc-long',
            children: [
              {
                title: "Hành trình tách cà phê đậm",
                link: "/cafe/hanh-trinh-tach-ca-phe-dam-vi"
              },
              {
                title: "Hạt cà phê Phúc Long",
                link: "/cafe/hat-ca-phe-phuc-long"
              },
              {
                title: "Nghệ thuật pha chế",
                link: "/cafe/nghe-thuat-pha-che"
              } 
            ]
          },
    
          // TRÀ
          {
            title: "TRÀ",
            link: '/tra/la-tra-phuc-long',
            children: [
              {
                title: "Hành trình tách trà đậm vị",
                link: "/tra/hanh-trinh-tach-tra-dam-vi"
              },
              {
                title: "Lá trà Phúc Long",
                link: "/tra/la-tra-phuc-long"
              },
              {
                title: "Cold Brew Tea - Trà ủ lạnh - Phong cách mới",
                link: "/tra/cold-brew-tea-phong-cach-moi"
              },
              {
                title: "Nghệ thuật pha chế",
                link: "/tra/nghe-thuat-pha-che"
              } 
            ]
          },
    
          //THỨC UỐNG
          {
            title: "THỨC UỐNG",
            link: "/category/thuc-uong",
            children: [
              {
                title: "Thức uống",
                link: "/category/thuc-uong"
              },
              {
                title: "Bánh trán miệng",
                link: "/category/bakery"
              }
            ]
          },
    
          // SẢN PHẨM
          {
            title: "SẢN PHẨM",
            link: "/category",
            children: [
              //Trà hộp
              {
                title: "TRÀ HỘP", 
                    link: "/category/tra-hop",
                    children: [
                      {
                        title: "Trà túi lọc",
                        link: "/category/tra-tui-loc"
                      },
                      {
                        title: "Trà túi tam giác",
                        link: "/category/tra-tui-tam-giac"
                      },
                      {
                        title: "Trà hộp giấy",
                        link: "/category/tra-hop-giay"
                      },
                      {
                        title: "Lễ hộp",
                        link: "/category/le-hop"
                      },
                      {
                        title: "Trà hộp xám",
                        link: "/category/tra-hop-xam"
                      },
                    ]
              },

              //Trà gói
              {
                title: "TRÀ GÓI", 
                link: "/category/tra-goi",
                children: [
                  {
                    title: "Trà Thái Nguyên",
                    link: "/category/tra-thai-nguyen"
                  },
                  {
                    title: "Trà gói cao cấp",
                    link: "/category/tra-goi-cao-cap"
                  },
                  {
                    title: "Trà vạn lý hương",
                    link: "/category/tra-van-ly-huong"
                  },
                  {
                    title: "Trà đen",
                    link: "/category/tra-den"
                  },
                  {
                    title: "Trà sen",
                    link: "/category/tra-sen"
                  },
                  {
                    title: "Trà xanh",
                    link: "/category/tra-xanh"
                  },
                ]
              },

            //Trà lon
            {
              title: "TRÀ LON", 
              link: "/category/tra-lon",
              children: [
                {
                  title: "Trà lon giấy",
                  link: "/category/tra-lon-giay"
                },
                {
                  title: "Trà lon giấy cao cấo",
                  link: "/category/tra-lon-giay-cao-cap"
                },
                {
                  title: "Trà lon thiếc",
                  link: "/category/tra-lon-thiec"
                },
                {
                  title: "Trà Ô Long Thượng Hạng",
                  link: "/category/tra-o-long-thuong-hang"
                }
              ]
            },
              //CÀ PHÊ
              {
                title: "CÀ PHÊ",
                link: "category/cafe",
                children: [
                  {
                    title: "Cà phê set",
                    link: "/category/ca-phe-set"
                  },
                  {
                    title: "Cà phê phin",
                    link: "/category/ca-phe-phin"
                  },
                  {
                    title: "Cà phê mùi",
                    link: "/category/ca-phe-mui"
                  },
                  {
                    title: "Cà phê hạt",
                    link: "/category/ca-phe-hat"
                  },
                ]
              }
            ]
          },
    
          //KHUYẾN MÃI
          {
            title: "KHUYỄN MÃI",
            link: "/khuyen-mai",
            children: [
    
            ]
          },
    
          //VỀ CHÚNG TÔI
          {
            title: "VỀ CHUNG TÔI",
            link: "/ve-chung-toi",
            children: [
              //Công ty
              {
                title: "Công ty",
                link: "/ve-chung-toi",
                children: [
                  {
                    title: "Tầm nhìn",
                    link: "/ve-chung-toi",
                  },
                  {
                    title: "Sứ mệnh",
                    link: "/ve-chung-toi",
                  },
                  {
                    title: "Giá trị cốt lõi",
                    link: "/ve-chung-toi",
                  },
                  {
                    title: "Lĩnh vực hoạt động",
                    link: "/ve-chung-toi",
                  }
                ]
              },
    
              //Tuyển dụng
              {
                title: "Tuyển dụng",
                link: "/tuyen-dung",
                children: []
              },
    
              //Thư viện
              {
                title: "Thư viện",
                link: "/hinh-anh",
                children: [
                  //Hình ảnh
                  {
                    title: "Hình ảnh",
                    link: "/hinh-anh",
                  },
                  //Video
                  {
                    title: "Video",
                    link: "/video",
                  },
                  //Hồ sơ công bố 
                  {
                    title: "Hồ sơ công bố",
                    link: "/ho-so-cong-bo",
                  },
                  //Công văn
                  {
                    title: "Công văn",
                    link: "/cong-van",
                  },
    
                ]
              }
            ]
          },
        ]
      }

  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

    
    return(
        <LayoutContext.Provider value={dataSideBar}>
            <Cart>
              <div>
                  <div className="fixed right-10 bottom-20 z-20">
                    <GototopButton/>
                  </div>
                  <div className="fixed z-10 bg-white top-0 justify-center w-full">
                    <Header onClick={toggleSidebar}/>
                    {/* SideBar */}
                    <div>
                      {/* destop sidebar */}
                      <div className="hidden lg:block border-b-2 border-gray-200 py-1">
                        <SideBar />
                      </div>
                      {/* Mobile sidebar */}
                      <div className="block lg:hidden">
                        {sidebarVisible && <SideBarMobile onClick={toggleSidebar}/>}
                      </div>
                      {/*  */}
                    </div>
                  </div>
                  <div className="mt-26">
                    {children}  
                  </div>
                  <Footer/>
              </div>
            </Cart>
        </LayoutContext.Provider>
    );
}

export default DefaultLayout;