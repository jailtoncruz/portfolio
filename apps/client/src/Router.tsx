import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./pages/about/About";
import { Career } from "./pages/career/Career";
import { Projects } from "./pages/projects/Projects";
import { Outlet } from "./components/outlet";
import { CurriculumVitae } from "./pages/curriculum-vitae/CurriculumVitae";
// import { Education } from "./pages/education/Education";

export function Router() {
  return (
    <BrowserRouter>
      <Outlet>
        <Routes>
          <Route path="/" element={<About />} />
          {/* <Route path="/education" element={<Education />} /> */}
          <Route path="/career" element={<Career />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/curriculum-vitae" element={<CurriculumVitae />} />
        </Routes>
      </Outlet>
    </BrowserRouter>
  );
}
