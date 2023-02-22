import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import publicRoutes  from "./routes";
import DefaultLayout from "./Layout/Layout";

function App() {

  const data = {
    categories: [
      //TRANG CHỦ
      {
        title: "TRANG CHỦ",
        link: "/"
      },

      // CÀ PHÊ
      {
        title: "CÀ PHÊ",
        link: '/cafe',
        children: [
          {
            title: "Hành trình tách cà phê vị đậm",
            link: "/cafe/hanh-trinh-tach-ca-phe-vi-dam"
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
        link: '/tra',
        children: [
          {
            title: "Hành trình tách trà vị đậm",
            link: "/tra/hanh-trinh-tach-tra-vi-dam"
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
          },
          {
            title: "Đồ ăn mặn",
            link: "/category/dinning-offers",
          },
        ]
      },

      // SẢN PHẨM
      {
        title: "SẢN PHẨM",
        link: "/category",
        children: [
          //TRÀ
          {
            title: "TRÀ",
            link: "/category/tra",
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

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index)=> {
            // conditions on a case-by-case basis
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
            return <Route 
                      key={index} 
                      path={route.path} 
                      element={
                        <Layout>
                          <Page/>
                        </Layout>
                      }/>
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
