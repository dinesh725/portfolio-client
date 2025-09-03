import React from 'react';
import './SocialButtons.css'; // Create this CSS file

const SocialButtons = () => {
    const socials = [
        {
            name: "WhatsApp",
            icon: "bxl-whatsapp",
            link: "https://wa.me/qr/2CYKRI6UIUGRK1",
            gradient: "linear-gradient(45deg, #25D366 0%, #128C7E 100%)",
        },
        {
            name: "Naukri",
            icon: "bxs-briefcase", 
            link: "https://www.naukri.com/mnjuser/profile?id=&altresid",
            gradient: "linear-gradient(45deg, #2d9bf0 0%, #0056a3 100%)",
        },
        {
            name: "Internshala",
            icon: "bxs-graduation", 
            link: "https://internshala.com/chat/c-104550253?filter=all",
            gradient: "linear-gradient(45deg, #00a5ec 0%, #006c8c 100%)",
        },

        {
            name: "LinkedIn",
            icon: "bxl-linkedin",
            link: "https://www.linkedin.com/in/dinesh-khatua-4755512b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            gradient: "linear-gradient(45deg, #0077B5 0%, #00a0dc 100%)",
        },
    ];

    return (
        <div className="social-container-wrapper">
            {socials.map((social, index) => (
                <div key={index} className="social-button-container">
                    <a href={social.link} className="social-link">
                        <div className="icon-static">
                            <i className={`bx ${social.icon}`}></i>
                        </div>
                        <div 
                            className="icon-animated"
                            style={{ background: social.gradient }}
                        >
                            <i className={`bx ${social.icon}`}></i>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default SocialButtons;