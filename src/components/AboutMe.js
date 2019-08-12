import React from 'react'
const AboutMe = () => (
    <div className="about-me pt-5 pb-5">
        <div className="container">
            <div className="row">
                <div className="section-title col-md-4">
                    <h5 className="title">About Me</h5>
                    <h3 className="hash-sign">#</h3>
                </div>

                <div className="about-me__text col-md-8 pt-4">
                    <p>
                        I used to be learn coding. I love noting else coding. I code in php , java , python , c++ but I
                        love javascript most. No girls love me , but I love to do code. Sometimes I thought if I could
                        live in a deep forest where I have a computer and a internet connection and enough food. No one
                        will disturb me, I can learn till my very last breath. :D
                    </p>

                    <a
                        href="https://www.linkedin.com/in/kingrayhan/"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="brack-btn"
                    >
                        [ LinkedIn ]
                    </a>
                    <a href="/static/cv.pdf" rel="noopener noreferrer" download target="_blank" className="brack-btn">
                        [ My CV ]
                    </a>

                    <a
                        href="https://www.upwork.com/freelancers/~01f5b2b716e00e089b"
                        target="_blank"
                        className="brack-btn"
                        rel="noopener noreferrer"
                    >
                        [ Upwork ]
                    </a>
                </div>
            </div>
        </div>
    </div>
)

export default AboutMe
