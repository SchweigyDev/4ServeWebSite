import React from "react";
import phone1 from "../assets/images/4ServeLogoStandAlone.jpg";
import phone2 from "../assets/images/4ServeLogoStandAlone.jpg";
import phone3 from "../assets/images/4ServeLogoStandAlone.jpg";

const TheUserSide: React.FC = () => {
    return (
        <section
            id="user-side-section"
            style={{
                scrollMarginTop: "100px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "clamp(60px, 6vw, 100px) 10% 60px",
                background: "rgba(0, 102, 255, 0.1)",
                color: "white",
                gap: "40px",
            }}
        >
            {/* Title Badge */}
            <div
                style={{
                    position: "absolute",
                    top: "30px",
                    left: "10%",
                    padding: "4px 16px",
                    border: "2px solid white",
                    borderRadius: "40px",
                    background: "rgba(0, 102, 255, 0.4)",
                    color: "white",
                    fontSize: "clamp(0.8rem, 1.5vw, 1rem)",
                    fontWeight: "400",
                    textAlign: "center",
                }}
            >
                The User Side
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "60px",
                    width: "100%",
                }}
            >
                {/* Left Text */}
                <div
                    className="user-text-block"
                    style={{
                        flex: "1 1 400px",
                        maxWidth: "500px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        justifyContent: "center",
                    }}
                >
                    {/* Large Slogan */}
                    <p
                        className="user-slogan"
                        style={{
                            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                            margin: 0,
                            textAlign: "center",
                            color: "#0066FF",
                            whiteSpace: "nowrap",
                            fontWeight: "bold",
                        }}
                    >
                        Why Customers Choose 4Serve
                    </p>

                    {/* Sentence */}
                    <p
                        className="user-subline"
                        style={{
                            fontSize: "clamp(1rem, 2.2vw, 1.3rem)",
                            margin: 0,
                            textAlign: "left",
                            whiteSpace: "nowrap",
                        }}
                    >
                        Other platforms train users to ignore business messages. <br />
                        <span style={{ fontWeight: "bold", color: "#0066FF" }}>4Serve</span>{" "}
                        makes them want to engage.
                    </p>

                    {/* Bullet Points */}
                    <ul
                        style={{
                            display: "inline-block",
                            margin: "0 auto",
                            textAlign: "left",
                            paddingLeft: "1.2em",
                            lineHeight: "1.6",
                        }}
                    >
                        <li>
              <span
                  style={{
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      color: "#0099FF",
                  }}
              >
                Location-based
              </span>{" "}
                            - Messages only appear when customers are nearby and can actually
                            visit your business.
                        </li>
                        <li>
              <span
                  style={{
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      color: "#0099FF",
                  }}
              >
                Permission-driven
              </span>{" "}
                            - Users follow businesses they want to hear from, so your message
                            lands with interested customers.
                        </li>
                        <li>
              <span
                  style={{
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      color: "#0099FF",
                  }}
              >
                Real-Time
              </span>{" "}
                            - Customers get updates exactly when they need them, not hours
                            later in a crowded feed.
                        </li>
                    </ul>
                </div>

                {/* Right Phones */}
                <div
                    className="user-phones-block"
                    style={{
                        flex: "1 1 300px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "relative",
                        height: "540px", // increased for larger phones
                    }}
                >
                    {/* Bottom Phones */}
                    <div
                        className="bottom-phones"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "105px",
                            position: "absolute",
                            bottom: "30px",
                            width: "100%",
                        }}
                    >
                        <img
                            src={phone1}
                            alt="Phone 1"
                            style={{
                                width: "180px",
                                height: "360px",
                                borderRadius: "20px",
                                objectFit: "cover",
                                boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                                border: "4px solid #0066FF",
                            }}
                        />
                        <img
                            src={phone2}
                            alt="Phone 2"
                            style={{
                                width: "180px",
                                height: "360px",
                                borderRadius: "20px",
                                objectFit: "cover",
                                boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                                border: "4px solid #0066FF",
                            }}
                        />
                    </div>

                    {/* Top Phone */}
                    <img
                        src={phone3}
                        alt="Phone 3"
                        className="top-phone"
                        style={{
                            width: "200px",
                            height: "370px",
                            borderRadius: "20px",
                            objectFit: "cover",
                            boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                            border: "4px solid #0066FF",
                            position: "absolute",
                            bottom: "200px",
                            zIndex: 2,
                        }}
                    />
                </div>
            </div>

            {/* Responsive Styles */}
            <style>{`
        /* Medium-Large screens before stacking */
        @media (max-width: 1400px) {
          .user-text-block {
            margin-right: clamp(40px, 6vw, 80px); /* pushes text away from phones */
          }
        }

        /* Layout changes for tablets */
        @media (max-width: 1024px) {
          .user-text-block {
            margin-top: clamp(20px, 5vw, 40px);
            margin-right: 0; /* reset margin for stacked layout */
          }
          .user-phones-block {
            margin-top: 30px; 
          }
        }

        /* Small screens */
        @media (max-width: 768px) {
          .user-text-block {
            margin-top: clamp(30px, 6vw, 50px);
          }
          .user-phones-block {
            margin-top: 50px;
          }

          .user-slogan {
            white-space: normal;
            font-size: 1.4rem;
          }

          .user-subline {
            white-space: normal;
            font-size: 1rem;
          }

          ul {
            margin: 0 auto;
            text-align: left;
            padding-left: 1.2em;
          }
        }

        /* Extra small screens */
        @media (max-width: 500px) {
          .bottom-phones {
            gap: 60px;
          }
          .top-phone {
            width: 160px;
            height: 300px;
            bottom: 180px;
          }
        }
      `}</style>
        </section>
    );
};

export default TheUserSide;
