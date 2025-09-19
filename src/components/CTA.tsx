const CTA = () => {
    return (
        <section style={{ padding: "60px 20px", textAlign: "center" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Why Choose Rivon?</h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
                {["Fast Deployment", "Custom AI Models", "Secure", "Scalable"].map((feature) => (
                    <div
                        key={feature}
                        style={{
                            background: "#333",
                            padding: "20px",
                            borderRadius: "8px",
                            minWidth: "180px",
                            flex: "1 1 180px",
                        }}
                    >
                        <h3>{feature}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CTA;
