
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Articles from "./pages/Articles";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout><Home /></PageLayout>} />
          <Route path="/projects" element={<PageLayout><Projects /></PageLayout>} />
          <Route path="/skills" element={<PageLayout><Skills /></PageLayout>} />
          <Route path="/resume" element={<PageLayout><Resume /></PageLayout>} />
          <Route path="/contact" element={<PageLayout><Contact /></PageLayout>} />
          <Route path="/articles" element={<PageLayout><Articles /></PageLayout>} />
          <Route path="*" element={<PageLayout><NotFound /></PageLayout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
