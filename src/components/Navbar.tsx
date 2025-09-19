import { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import newLogo from '../assets/images/4ServeLogoStandAlone.jpg';

const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const links = [
        { name: "Whats Broken", target: "whats-broken-section" },
        { name: "The Solution", target: "solution-section" },
        { name: "How It Works", target: "how-it-works-section" },
        { name: "The User Side", target: "user-side-section" },
        { name: "User Cases", target: "user-cases-section" },
    ];

    // Smooth scroll function
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // adjust for navbar height
            const elementPosition = element.offsetTop;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            style={{
                position: "sticky",
                top: 0,
                zIndex: 50,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "6px 16px",
                background: "#161618",
                color: "white",
                boxShadow: scrolled ? "0 2px 8px rgba(0,0,0,0.4)" : "none",
                transition: "background 0.3s",
            }}
        >
            {/* Logo */}
            <div className="logo" style={{ flex: "0 0 auto" }}>
                <img
                    src={newLogo}
                    alt="Logo"
                    style={{
                        height: isMobile ? "40px" : "clamp(40px, 5vw, 60px)",
                        width: "auto",
                    }}
                />
            </div>

            {/* Desktop Links */}
            {!isMobile && (
                <div style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "18px",
                    marginLeft: "40px" // pushes section buttons to the right
                }}>
                    {links.map(link => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.target)}
                            className="nav-link"
                            style={{
                                fontSize: "clamp(0.85rem, 1vw, 0.95rem)",
                                background: "none",
                                border: "none",
                                cursor: "pointer"
                            }}
                        >
                            {link.name}
                        </button>
                    ))}
                </div>
            )}

            {/* Desktop Right Side */}
            {!isMobile && (
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <a href="#" className="social-icon facebook" style={{ fontSize: "clamp(0.9rem, 1.5vw, 1rem)" }}><FaFacebookF /></a>
                    <a href="#" className="social-icon twitter" style={{ fontSize: "clamp(0.9rem, 1.5vw, 1rem)" }}><FaTwitter /></a>
                    <a href="#" className="social-icon instagram" style={{ fontSize: "clamp(0.9rem, 1.5vw, 1rem)" }}><FaInstagram /></a>
                    <button className="cta-button floating-button" style={{ fontSize: "clamp(0.8rem, 1vw, 0.95rem)", padding: "5px 12px" }}>Dashboard Log-In</button>
                </div>
            )}

            {/* Mobile Hamburger */}
            {isMobile && (
                <>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`hamburger ${isOpen ? "open" : ""}`}
                        style={{
                            fontSize: "1.6rem",
                            color: "white",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            zIndex: 110,
                            position: "relative",
                            width: "28px",
                            height: "22px",
                        }}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {isOpen && (
                        <div
                            onClick={() => setIsOpen(false)}
                            style={{
                                position: "fixed",
                                top: 0,
                                left: 0,
                                width: "100vw",
                                height: "100vh",
                                backgroundColor: "rgba(0,0,0,0.5)",
                                zIndex: 100,
                            }}
                        />
                    )}

                    {/* Mobile Menu */}
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            right: isOpen ? "0" : "-100%",
                            height: "100vh",
                            width: "250px",
                            background: "#161618",
                            transition: "right 0.3s ease-in-out",
                            paddingTop: "60px",
                            zIndex: 105,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        {links.map(link => (
                            <button
                                key={link.name}
                                onClick={() => { scrollToSection(link.target); setIsOpen(false); }}
                                className="mobile-link"
                                style={{ fontSize: "0.95rem", background: "none", border: "none", cursor: "pointer" }}
                            >
                                {link.name}
                            </button>
                        ))}

                        <div style={{ display: "flex", justifyContent: "center", padding: "15px", gap: "12px" }}>
                            <a href="#" className="social-icon facebook"><FaFacebookF /></a>
                            <a href="#" className="social-icon twitter"><FaTwitter /></a>
                            <a href="#" className="social-icon instagram"><FaInstagram /></a>
                            <button className="cta-button floating-button">Dashboard Log-In</button>
                        </div>
                    </div>
                </>
            )}

            {/* Styles */}
            <style>{`
                html { scroll-behavior: smooth; } /* ✅ smooth scrolling */

                .nav-link {
                    color: white;
                    padding: 6px 10px;
                    border-radius: 6px;
                    font-weight: 500;
                    position: relative;
                    text-decoration: none;
                    transition: all 0.3s;
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0%;
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background: linear-gradient(90deg, #6A00F5, #00D4FF);
                    transition: width 0.3s ease;
                    border-radius: 1px;
                }
                .nav-link:hover::after { width: 100%; }

                .cta-button {
                    border-radius: 6px;
                    background: linear-gradient(90deg, #6A00F5, #00D4FF);
                    color: white;
                    font-weight: 500;
                    cursor: pointer;
                    border: none;
                    transition: all 0.3s, box-shadow 0.3s;
                    box-shadow: 0 0 0 rgba(106, 0, 245, 0);
                }
                .cta-button:hover, .floating-button:hover {
                    transform: scale(1.05);
                    box-shadow: 0 0 10px #6A00F5, 0 0 15px #00D4FF;
                }
                .floating-button {
                    animation: float 2.5s ease-in-out infinite;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-4px); }
                }

                .social-icon {
                    color: white;
                    transition: all 0.3s ease;
                }
                .social-icon.facebook:hover { transform: scale(1.2); color: #3b5998; }
                .social-icon.twitter:hover { transform: scale(1.2); color: #1da1f2; }
                .social-icon.instagram:hover { transform: scale(1.2); color: #e1306c; }

                .hamburger span {
                    display: block;
                    height: 2.5px;
                    width: 28px;
                    background: white;
                    margin: 5px 0;
                    border-radius: 2px;
                    transition: all 0.3s ease;
                }
                .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(0, 8px); }
                .hamburger.open span:nth-child(2) { opacity: 0; }
                .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(0, -8px); }

                .mobile-link {
                    color: white;
                    text-decoration: none;
                    padding: 12px 18px;
                    position: relative;
                    transition: all 0.3s ease;
                }
                .mobile-link::after {
                    content: '';
                    position: absolute;
                    width: 0%;
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background: linear-gradient(90deg, #6A00F5, #00D4FF);
                    transition: width 0.3s ease;
                    border-radius: 1px;
                }
                .mobile-link:hover::after { width: 100%; }
            `}</style>
        </nav>
    );
};

export default Navbar;
