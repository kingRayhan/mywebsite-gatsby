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
                        My name is Rayhan and I'm a full stack web developer, Nodejs wizard. With my 8+ years of freelancing career, I learned a lot of modern webs developing tools and frameworks like Nestjs, Graphql, expressjs, reactjs, vuejs, webpack, grunt, sass, jsx, handlebars etc.
                    </p>

                    <p>Typically I love to work with <img src="https://camo.githubusercontent.com/9fe17389d4352e072b2aa2da7009002fa2844285a63fa308705a233562f37c34/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f31382f3030303030302f6772617068716c2e706e67" alt="GraphQL Logo" data-canonical-src="https://img.icons8.com/color/18/000000/graphql.png" /> Graphql and <img src="https://camo.githubusercontent.com/758daf1d36a1ad9f54c81f727edf6d37b7588a62ba4a628ab3206e692b78ce35/68747470733a2f2f696d672e69636f6e73382e636f6d2f6f66666963652f31362f3030303030302f72656163742e706e67" alt="React Logo" data-canonical-src="https://img.icons8.com/office/16/000000/react.png" /> Reactjs.</p>

                    <a
                        href="https://github.com/kingRayhan"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="brack-btn"
                    >
                        [ Github ]
                    </a>

                    <a
                        href="https://www.youtube.com/kingrayhan"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="brack-btn"
                    >
                        [ Youtube ]
                    </a>
                    
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
                </div>
            </div>
        </div>
    </div>
)

export default AboutMe
