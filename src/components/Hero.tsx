import newLogo from "../assets/images/4ServeLogoStandAlone.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = windowWidth < 768;

    return (
        <section
            id="whats-broken"
            style={{
                display: "flex",
                justifyContent: "center", // centers the whole content
                padding: isMobile ? "40px 5%" : "0px 10%",
                background: "#161618",
                color: "white",
                minHeight: "90vh",
                textAlign: isMobile ? "center" : "left",
            }}
        >
            {/* Inner container to hold text + logo together */}
            <div
                style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    alignItems: "center",
                    gap: isMobile ? "40px" : "60px",
                }}
            >
                {/* Left Content */}
                <div style={{ maxWidth: isMobile ? "100%" : "50%" }}>
                    {/* Top Text */}
                    <p
                        style={{
                            fontSize: isMobile
                                ? "1.2rem"
                                : "clamp(1.4rem, 2vw, 1.6rem)", // fluid scaling
                            marginBottom: "10px",
                            color: "#FFFFFF",
                        }}
                    >
                        Control When It Belongs.
                    </p>

                    {/* Middle Text */}
                    <h2
                        style={{
                            fontSize: isMobile
                                ? "1.5rem"
                                : "clamp(1.6rem, 2.5vw, 2rem)", // fluid scaling
                            marginBottom: "10px",
                            color: "#FFFFFF",
                        }}
                    >
                        Tired of platforms deciding who sees your business? <br />
                        Done with posting and hoping customers notice? <br />
                        We are too.
                    </h2>

                    {/* Main Heading */}
                    <h1
                        style={{
                            fontSize: isMobile
                                ? "0.9rem"
                                : "clamp(0.9rem, 1.5vw, 1rem)", // fluid scaling
                            marginBottom: "20px",
                            color: "#AAAAAA",
                        }}
                    >
                        Stop shouting into the void. Start connecting with customers <br />
                        who are actually nearby and ready to act. Simple tools, real <br />
                        results, your control.
                    </h1>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: isMobile ? "column" : "row",
                            gap: "15px",
                            alignItems: isMobile ? "center" : "flex-start",
                        }}
                    >
                        <a
                            href="#the-solution"
                            style={{
                                padding: "8px 16px",
                                borderRadius: "6px",
                                background: "linear-gradient(90deg, #6A00F5, #00D4FF)",
                                color: "white",
                                textDecoration: "none",
                                fontWeight: "500",
                                fontSize: "0.9rem",
                            }}
                        >
                            Free Trial
                        </a>
                        <a
                            href="#dashboard-login"
                            style={{
                                padding: "8px 16px",
                                borderRadius: "6px",
                                border: "2px solid white",
                                color: "white",
                                textDecoration: "none",
                                fontWeight: "500",
                                fontSize: "0.9rem",
                            }}
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Right Logo */}
                <div style={{ marginLeft: isMobile ? "0" : "150px" }}>
                    <img
                        src={newLogo}
                        alt="4Serve Logo"
                        style={{
                            maxHeight: isMobile
                                ? "180px"
                                : "clamp(200px, 25vw, 300px)", // fluid scaling
                            width: "auto",
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
