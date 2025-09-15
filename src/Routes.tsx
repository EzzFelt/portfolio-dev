import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import Abilities from "./pages/Abilities";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { RootLayout } from "./pages/RootLayout";
import Experience from "./pages/Experience";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About />},
            { path: "abilities", element: <Abilities /> },
            { path: "projects", element: <Projects /> },
            { path: "experience", element: <Experience/> },
            { path: "contact", element: <Contact /> },
        ]
    }
])

export default router;