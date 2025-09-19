import React from "react";

const WhatsBroken = () => {
    const boxes = [
        {
            title: "Priced Out of Powerful Tools",
            text: `Big company customer connection tools cost big company 
      money—budgets most small businesses can't justify.`,
        },
        {
            title: "Messages That Miss the Moment",
            text: `Your customer needs you right now, right outside — 
      but your message won't reach them until tonight.`,
        },
        {
            title: "Juggling a Dozen Tools",
            text: `Managing your online presence shouldn't require a 
      computer science degree and full-time staff.`,
        },
        {
            title: "Shouting Into the Void",
            text: `You post hoping someone notices, while interested 
      customers walk right past your door.`,
        },
    ];

    return (
        <section
            id="whats-broken-section"
            style={{
                scrollMarginTop: "100px", // offsets sticky navbar
                position: "relative",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                padding: "clamp(60px, 10vw, 0px) 10% clamp(60px, 5vw, 80px) 10%",
                background: "rgba(0, 102, 255, 0.1)",
                borderTop: "2px solid #0066FF",
                borderBottom: "2px solid #0066FF",
                borderRadius: "12px",
                color: "white",
                gap: "clamp(20px, 5vw, 40px)",
                flexWrap: "wrap",
            }}
        >
            {/* Title above slogan */}
            <div
                style={{
                    position: "absolute",
                    top: "30px", // moved down a bit
                    left: "10%",
                    padding: "6px 18px",
                    border: "2px solid #0066FF",
                    borderRadius: "40px",
                    background: "rgba(0, 102, 255, 0.2)",
                    color: "#FFFFFF",
                    fontSize: "clamp(1rem, 2vw, 1.2rem)",
                    fontWeight: "400",
                    textAlign: "center",
                    width: "fit-content",
                    zIndex: 2,
                }}
            >
                What's Broken?
            </div>

            {/* Left Column: Catch Phrase */}
            <div
                style={{
                    flex: "1 1 300px",
                    maxWidth: "400px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center", // vertically center catch phrase
                    gap: "20px",
                    marginTop: "14px", // shifted down slightly
                    marginBottom: "clamp(20px, 3vw, 40px)",
                }}
            >
                <p className="slogan-text">Every Business Knows These Problems</p>
            </div>

            {/* Right Boxes */}
            <div
                style={{
                    flex: "2 1 500px",
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gridGap: "clamp(15px, 3vw, 20px)",
                    minWidth: "280px",
                }}
            >
                {boxes.map((box, index) => (
                    <div
                        key={index}
                        style={{
                            background: "rgba(0, 102, 255, 0.2)",
                            padding: "clamp(15px, 2vw, 20px)",
                            borderRadius: "10px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "clamp(8px, 1vw, 10px)",
                            minHeight: "140px",
                            border: "1px solid #0066FF",
                        }}
                    >
                        <h3
                            style={{
                                fontSize: "clamp(1rem, 1.5vw, 1.5rem)",
                                margin: 0,
                            }}
                        >
                            {box.title}
                        </h3>
                        <p
                            style={{
                                fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
                                margin: 0,
                                color: "#CCCCCC",
                                lineHeight: 1.5,
                            }}
                        >
                            {box.text}
                        </p>
                    </div>
                ))}
            </div>

            {/* Media query and scaling for slogan */}
            <style>{`
                .slogan-text {
                  font-size: clamp(1.2rem, 2.5vw, 2.5rem);
                  margin: 0;
                }

                @media (min-width: 1440px) {
                  .slogan-text {
                    margin-top: 90px;
                    font-size: 3rem;
                  }
                }
            `}</style>
        </section>
    );
};

export default WhatsBroken;
