// App.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatsBroken from "./components/WhatsBroken.tsx";
import TheSolution from "./components/TheSolution.tsx";
import UserCases from "./components/UserCases.tsx";
import TheUserSide from "./components/TheUserSide.tsx";
import HowItWorks from "./components/HowItWorks.tsx";
import CTA from "./components/CTA.tsx";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App" style={{ fontFamily: "sans-serif", color: "#fff", background: "#111" }}>
            <Navbar />
            <Hero />

            <WhatsBroken />
            <TheSolution />
            <HowItWorks />
            {/*<UserCases />*/}
            <TheUserSide />
            <CTA />

            <Footer />
        </div>
    );
}

export default App;
