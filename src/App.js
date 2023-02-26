import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import publicRoutes  from "./routes";
import DefaultLayout from "./Layout/Layout";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
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
                          <Page data={route.data}/>
                        </Layout>
                      }/>
          })}
        </Routes>
      </div>
    </Router>
    </ErrorBoundary>
  );
}

export default App;
