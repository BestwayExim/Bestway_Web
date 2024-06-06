import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./Component/Layout/Layout";
import { Landing } from "./Pages/Landing";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} path={""}>
            <Route path="/" element={<Landing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
