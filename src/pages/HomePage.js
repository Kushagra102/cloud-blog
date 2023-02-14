import React from 'react';
import image1 from '../images/image1.png';
import { useNavigate } from "react-router-dom";


function HomePage() {
    const navigate = useNavigate();

    const handleTabChange = () => {
      navigate('/scope');
    }
    return (
    <>
        <div className='home-div'>
            <div className='home-sub-div'>
                <p className='title-1'>We Will Help <br />You Improve <br /> Your Mental Health</p>
            </div>

            <div className='home-sub-div2'>
                <img className='image1-m' src={image1} alt="IMAGE1" />
            </div>
        </div>
        <div>
            <div className='stats-block'>
                <div className='text-box-1'>24/7 Support</div>
                <div className='text-box'>100+ Doctors</div>
                <div className='text-box-1'>1M+ Users</div>
                <div className='text-box'>5M+ Interested</div>
            </div>
        </div>
        <div className='our-services'>
            <h2>Our Services</h2>
            <p>We offer a range of services to support individuals with mental health concerns, help <br /> them better understand their mental health and identify potential concerns.</p>
        </div>
        <div className='services'>
            <div className='service-box'>
                <div className='service-subbox'>
                    <h4>Counseling</h4>
                    <p>Mental health counseling provides support and strategies for improving mental well-being.</p>
                </div>
            </div>
            <div className='service-box'>
                <div className='service-subbox'>
                    <h4>Self-help resources</h4>
                    <p>We provide self-help resources to help individuals better understand and manage their mental health.</p>
                </div>
            </div>
            <div className='service-box'>
                <div className='service-subbox'>
                    <h4>Online Therapy</h4>
                    <p>We offer convenient and confidential mental health support via phone or appointments"</p>
                </div>
            </div>
        </div>
        <div className='services'>
            <div className='service-box'>
                <div className='service-subbox'>
                    <h4>Community Support</h4>
                    <p>People facing similar mental health challenges provide support and belonging.</p>
                </div>
            </div>
            <div className='service-box'>
                <div className='service-subbox'>
                    <h4>Crisis Support</h4>
                    <p>We provide support resources such as hotlines & immediate support for individuals in crisis.</p>
                </div>
            </div>
            <div className='service-box'>
                <div className='service-subbox'>
                    <h4>Mental Health Assessments</h4>
                    <p>To help the community better understand their mental health</p>
                </div>
            </div>
        </div>
        <div className='parent-appoint'>
            <div className='appoint'>
                <div className='appoint-1'>
                    <p>Need a Doctor's Counseling ?</p>
                </div>
                <div className='appoint-2'>
                    <h2>Just make an Appointment <br /> and get Motivated.</h2>
                </div>
                <div className='appoint-3'>
                    <button onClick={handleTabChange}>Get Appointment</button>
                </div>
            </div>
        </div>
        <div class="bottom-container">
            <a class="footer-link" href="https://www.linkedin.com/">LinkedIn</a>
            <a class="footer-link" href="https://twitter.com/">Twitter</a>
            <a class="footer-link" href="https://console.cloud.google.com/">Website</a>
            <p class="copyright">© 2022 lorem impsum @ lorem.</p>
        </div>
    </>
      )
    }


export default HomePage;