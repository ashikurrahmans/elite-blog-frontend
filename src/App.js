import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";
import NotFound from "./Components/404NotFound/NotFound";
import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import ServiceSingle from "./Components/Services/ServiceSingle";
import Blogs from "./Components/Blog/Blogs";
import SingleBlog from "./Components/Blog/SingleBlog";
import FileUpload from "./Components/FileUpload/FileUpload";
import PrintableForms from "./Components/Printableform/PrintableForms";
import { useContext } from "react";
import { pageContent } from "./ContextApi/PagesContext";
import Loader from "./Components/Shared/Loader";
import BlogCard from "./Components/Blog/BlogCard";

function App() {
  const { dataLoaded } = useContext(pageContent);
  return (
    <>
      {!dataLoaded ? (
        <Loader color="#0EF059"></Loader>
      ) : (
        <>
          <Menu></Menu>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/blogs" element={<Blogs />}></Route>
            <Route path="/blogs/:id" element={<SingleBlog />}></Route>
            <Route
              path="/categories/:categoryslug"
              element={<BlogCard></BlogCard>}
            ></Route>
            <Route path="/services/:id" element={<ServiceSingle />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/fileupload" element={<FileUpload />}></Route>
            <Route path="/printable-forms" element={<PrintableForms />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer></Footer>
        </>
      )}
    </>
  );
}

export default App;
