import React from "react";

const About = () => {
    return (
        <div>

            <style>{`
        .about-wrapper {
          min-height: 80vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px 20px;
          background: linear-gradient(135deg, #f7d1ff, #ffb3d9, #ffd1ec);
        }

        .about-card {
          background: white;
          padding: 30px 40px;
          border-radius: 12px;
          width: 100%;
          max-width: 600px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          animation: fadeIn 0.7s ease;
        }

        .about-title {
          font-size: 32px;
          font-weight: 700;
          color: #cc2e8b;
          margin-bottom: 15px;
        }

        .about-text {
          font-size: 16px;
          line-height: 1.6;
          color: #555;
          margin-bottom: 20px;
        }

        .highlight {
          color: #cc2e8b;
          font-weight: 600;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

            <div className="about-wrapper">
                <div className="about-card">
                    <h1 className="about-title">About Us</h1>

                    <p className="about-text">
                        Connectly is a simple and modern <span className="highlight">Contact Management App</span>
                        built using the powerful <span className="highlight">MERN Stack</span>.
                    </p>

                    <p className="about-text">
                        It allows you to easily add, view, and manage your contacts with a
                        clean and minimal UI inspired by soft pink and lavender gradients.
                    </p>

                    <p className="about-text">
                        This project helps beginners learn how frontend and backend work together —
                        including API handling, database connections, and UI/UX.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
