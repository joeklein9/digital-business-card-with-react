import React from "react"

export default function Info () {
    return (
        
        <div className = "info-container">
            <div className ="photo-container">
                <img src = "./images/joseph-photo.jpg" width = "317px" length = "317px"/>
            </div>
            <p className = "my-name">Joseph Kleinhenz</p>
            <p className = "job-title">Frontend Developer</p>
            <p className = "website-link">josephkleinhenz.website</p>
            <div className = "button-container">
                <button className = "email-button">
                    <img src = "./images/Mail.png" width = "16px" height = "16px"/>Email
                </button>
                <button className = "linkedin-button">
                    <img src = "./images/linkedin.png" width = "16px" height = "16px"/>LinkedIn
                </button>
                
            </div>
            
        
        
        </div>
        
        
    )
}