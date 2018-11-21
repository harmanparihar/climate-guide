import React, { Component } from 'react';
import Member from './Member';

import team from '../assets/images/team.jpeg';
import maggie from '../assets/images/maggie.png';
import harman from '../assets/images/harman.png';
import julia from '../assets/images/julia.png';
import meet from '../assets/images/meet.png';
import diego from '../assets/images/diego.png';

class Team extends Component {
    render() {
        return (
            <section>
                <h2>Our Team</h2>
                <p>Our team is very collaborative and driven. We’re comprised of 5 members: 2 computer science graduates, an experienced web designer, a talented graphic designer and a proficient project manager. Most importantly, we share the same level of passion, devotion and commitment to environmental causes.</p>
                <img src={team} alt="Climate Guide Team" />
                <Member
                    memberName="Harmanpreet Kaur"
                    memberImg={harman}
                    memberRole="Lead front-end developer / Back-end support"
                    memberDesc="Harman is a highly-motivated, results-driven and insightful Computer Science graduate. She likes to solve real-world problems using technology, such as building reliable applications and making it accessible to the large audiences."
                />

                <Member
                    memberName="Meet Madhu"
                    memberImg={meet}
                    memberRole="Lead quality assurance analyst / Front-end support"
                    memberDesc="As a Computer Engineering graduate, Meet is an experienced JAVA developer and junior web developer. He is very hardworking and passionate about what he does, that’s why he’ll be in charge of ensuring functional and design specifications of the web app."
                />

                <Member
                    memberName="Diego Rodrigues de Oliveira"
                    memberImg={diego}
                    memberRole="Lead back-end developer / UX UI support"
                    memberDesc="Diego has a Bachelor of Graphic Design and over 5 years of professional experience in e-commerce and responsive web design. He is excited about taking on new roles and new challenges for this project, as he will be in charge of the dataset and server, along with its structures and processing algorithms."
                />

                <Member
                    memberName="Yulia Stanovsky"
                    memberImg={julia}
                    memberRole="Lead UX UI / Designer / Animator"
                    memberDesc="With a Bachelor degree of fine arts and animation, Yulia enjoys creating beautiful and practical design solutions in her projects. She carries her sketch book and color pencils all the time so that she’s always ready to create great UX and UI design along with the animation (via user interaction) of our web app."
                />

                <Member
                    memberName="Mai Khanh (Maggie) Vu"
                    memberImg={maggie}
                    memberRole="Project manager / Development & QA support"
                    memberDesc="Having a Master degree in Information and Communications Technology, Maggie has a solid background in the ICT economy and regulation. Her experience working in different industries and cultures allows her to empower her team members and leverage the collective strengths. She will ensure that the project is complete on time within scope."
                />

            </section>
        );
    }
}

export default Team;
