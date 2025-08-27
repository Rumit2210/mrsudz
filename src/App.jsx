import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import BubbleBackground from "./components/BubbleBackground";
import ScrollToTop from "./components/ScrollToTop"; // ⬅️ add this

export default function App() {
  return (
    <div className="min-h-dvh relative">
      <BubbleBackground />
      <ScrollToTop behavior="smooth" />  {/* ⬅️ mount once inside router */}
      <Nav />
      <main >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
