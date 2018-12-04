import React, { Component } from 'react';

class Member extends Component {
    render() {
        return (
            <section className='about-member'>
                <img src={this.props.memberImg} alt={this.props.memberName + "'s photo"} />
                <h3>{this.props.memberName}</h3>
                <p>{this.props.memberRole}</p>
                <p>{this.props.memberDesc}</p>
                <p className="connect-me">
                    <a href={this.props.memberLinkedin}><span className="fab fa-linkedin"></span></a>
                    {this.props.memberGithub ? <a href={this.props.memberGithub}><span className="fab fa-github"></span></a> : null}
                </p>
            </section>
        );
    }
}

export default Member;
