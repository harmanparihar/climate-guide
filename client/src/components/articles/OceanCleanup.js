import React, { Component } from 'react';

class OceanCleanup extends Component {
    render() {
        return (
                 <article className="article">

                <h3 className="article-title">The Ocean Cleanup</h3>
                <a href="https://www.theoceancleanup.com">www.theoceancleanup.com</a>
                <div className="article-content">
                    <h4>1. Who</h4>
                    <p>The company is founded in 2013 by Dutch inventor Boyan Slat in the Netherlands. It’s a non-profit organization that is developing advanced technologies to rid the world’s oceans of plastic.</p>
                    <h4>2. What</h4>
                    <p>The Ocean Cleanup is designing and developing the first feasible method to remove the plastic in the oceans, specifically the Great Pacific garbage patch.</p>
                    <p>Every year, millions of tons of plastic are poured into the ocean. Due to natural circulating currents, the plastic becomes trapped in the ocean gyres (there are 5 in total), which are the systems formed by these currents. Once trapped, the plastic will break down and get increasingly mistaken for food by marine life.</p>
                    <h4>3. Why</h4>
                    <p>Plastic pollution in our oceans is one of the biggest environmental issues with considerable damages on marine life. It also carries toxic pollutants into the food chain that we consume daily. Current conventional measures are costly, time-consuming, labor-intensive and non-effective. For example using vessels and nets would take thousands of years and billions of dollars to complete cleaning the Great Pacific Garbage Patch.</p>
                    <h4>4. Where</h4>
                    <p>After 5 years of research, extensive and thorough engineering and testing, System 001 was officially launched from San Francisco Bay on September 8, 2018 to begin its journey to sail off towards the Great Pacific garbage patch. It’s expected to reach the deployment site mid-October, after which the system roams the gyre autonomously.</p>
                    <h4>5. When</h4>
                    <p>The Ocean Cleanup will monitor System 001 extensively to study its behavior and surrounding environment in order to continuously improve the technology. After retrieving and recycling the concentrated plastic, the revenue gained will be used to deploy the remaining systems.</p>
                    <p>The plan is to deploy a full fleet of 60 systems by 2020 with the aim of removing 50% of the garbage patch in 5 years' time. After that, the cleanup will be expanded to the other ocean gyres. The Ocean Cleanup estimates to remove 90% of ocean plastic by 2040.</p>
                    <h4>6. How</h4>
                    <p>The Ocean Cleanup has been developing a passive drifting system, moving with the ocean currents - just like the plastic - to catch it. The revolutionary idea stems from the founder’s simple observation: “Why go after the plastic, if the plastic can come to you?”</p>
                    <h5>a. How is it built?</h5>
                    <p>The first prototype, called System 001, is basically an artificial coastline designed to gather and trap plastic. It consists of a floater that prevents plastic from flowing over, and a skirt attached below that stops debris from escaping underneath. The system is designed to capture plastics ranging from tiny pieces up to large debris, including massive discarded fishing nets. It’s also U-shaped to prevent debris from getting away once trapped inside.</p>
                    <h5>b. How does it work?</h5>
                    <p>The advantage of the system is that it’s inherently carried by ocean currents, just like plastic. But since the floater remains afloat, the system also gets carried by wind and waves, thus moves faster than the plastic, allowing the plastic to be captured.</p>
                    <p>The system doesn’t require external energy source but fully relies on natural ocean currents and solar energy to power lights and other electronics used. These electronics power real-time telemetry in order to monitor the system’s performance. There is also attached equipment such as lanterns, radar reflectors, navigational signals, GPS and anti-collision beacons to ensure sea traffic and safety.</p>
                    <h5>c. How is it safe?</h5>
                    <p>Most importantly, the system is inherently safe for marine life. Since it moves at extremely low speeds, creatures can easily swim away. Moreover, the skirt is designed so that the current will flow underneath, guiding with it organisms that can't actively move, while the plastic (which floats) remains trapped inside the system. Also, a vessel will pass by every few months not only to remove the collected plastic, but to also check for marine life.</p>
                </div>
            </article>
        );
    }
}

export default OceanCleanup;
