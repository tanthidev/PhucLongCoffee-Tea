import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import publicRoutes  from "./routes";
import DefaultLayout from "./Layout/Layout";

function App() {
  return (
    <Router>
      <div className="App overflow-hidden">
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
