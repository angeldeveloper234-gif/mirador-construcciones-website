import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Projects } from "./pages/Projects";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Contact } from "./pages/Contact";
import { Gallery } from "./pages/Gallery";
import { Admin } from "./pages/Admin";
import { UserProvider } from "@/context/UserContext";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/sections/CTA";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";



// --- AI AGENT GUIDANCE ---
// Template: Arquitectura Premium
// 1. Branding y servicios: src/config.ts
// 2. Paleta de colores: tailwind.config.ts
// -------------------------



function App() {
    return (
        <UserProvider>
            <Router>
                <div className="relative min-h-screen bg-[#0F1115]">
                    <div className="noise-bg" />
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/projects/:id" element={<ProjectDetail />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/admin" element={<Admin />} />
                    </Routes>
                    <CTA />
                    <Footer />
                    <WhatsAppWidget />
                </div>
            </Router>
        </UserProvider>
    );
}


export default App;
