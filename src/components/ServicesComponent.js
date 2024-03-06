import Card from '../components/layouts/Card';
import classes from './ServicesComponent.module.css';
import testImage from '../assests/test.png';
import mobileImage from '../assests/mobile.png';
import uiImage from '../assests/ui.png';
import dotnetImage from '../assests/dotnet.png';
import webImage from '../assests/web.png';
import CommunicateImage from '../assests/communicate.png';

const ServicesComponent = () => {
    
    return  (
        <div className={classes.main}>
            <h1 >
                My Services
            </h1>
            <section>
                <ul>
                    <li className={classes.lileft}>
                        <Card height='90%'>
                            <div className={classes.maindiv}>
                                <div className={classes.titlediv}>
                                    {/* <FaReact size='1.5rem' style={{marginRight: '0.5rem'}}/> */}
                                    <img src={uiImage} alt="Client Communication" style={{ width: '8rem', height: '8rem'}}/>
                                    <h3>UI/UX Design Integration</h3>
                                </div>
                                Collaborate with designers and integrate UI/UX design elements seamlessly into React,React Native, 
                                and .Net applications.
                            </div>
                        </Card>
                    </li>
                    <li className={classes.liright}>
                        <Card height='90%'>
                            <div className={classes.maindiv}>
                                <div className={classes.titlediv}>
                                    {/* <FaReact size='1.5rem' style={{marginRight: '0.5rem'}}/> */}
                                    <img src={webImage} alt="React Development" style={{ width: '8rem', height: '8rem'}}/>
                                    <h3>React Development</h3>
                                </div>
                                Build user interfaces and interactive web applications using React/Next.
                                Understand component-based architecture and create reusable and modular code.
                            </div>
                        </Card>
                    </li>
                    <li className={classes.lileft}>
                        <Card height='90%'>
                            <div className={classes.maindiv}>
                                <div className={classes.titlediv}>
                                    {/* <TbBrandReactNative size='1.5rem' style={{marginRight: '0.5rem'}} /> */}
                                    <img src={mobileImage} alt="React Native Development" style={{ width: '8rem', height: '8rem'}}/>
                                    <h3>React Native Development</h3>
                                </div>
                                Develop cross-platform mobile applications using React Native for both iOS and Android platforms with a single codebase.
                            </div>
                        </Card>
                    </li>
                    <li className={classes.liright}>
                        <Card height='90%'>
                            <div className={classes.maindiv}>
                                <div className={classes.titlediv}>
                                    {/* <MdOutlineSocialDistance size='1.5rem' style={{marginRight: '0.5rem'}}/> */}
                                    <img src={dotnetImage} alt=".NET Development" style={{ width: '8rem', height: '8rem'}}/>
                                    <h3>.NET Development</h3>
                                </div>
                                Build scalable and robust desktop application using windows form/WPF and 
                                web applications using ASP.NET with C# language.
                            </div>
                        </Card>
                    </li>
                    {/* <li>
                        <Card>
                            <div>
                                Full-Stack Development
                            </div>
                        </Card>
                    </li> */}
                    <li className={classes.lileft}>
                        <Card height='90%'>
                            <div className={classes.maindiv}>
                                <div className={classes.titlediv}>
                                    {/* <MdOutlineSocialDistance size='1.5rem' style={{marginRight: '0.5rem'}}/> */}
                                    <img src={testImage} alt="Testing and Debugging" style={{ width: '8rem', height: '8rem'}}/>
                                    <h3>Testing and Debugging</h3>
                                </div>
                                Perform testing to ensure an error-free experience, 
                                and resolve issues in both development and production environments to ensure smooth software operation.
                            </div>
                        </Card>
                    </li>
                    
                    {/* Test and debug to ensure the reliability and performance of the applications. */}
                    <li className={classes.liright}>
                        <Card height='90%'>
                            <div className={classes.maindiv} style={{ marginBottom: '0.5rem'}}>
                                <div className={classes.titlediv}>
                                    {/* <MdOutlineSocialDistance size='1.5rem' style={{marginRight: '0.5rem'}}/> */}
                                    <img src={CommunicateImage} alt="Client Communication" style={{ width: '8rem', height: '8rem'}}/>
                                    <h3>Client Communication</h3>
                                </div>
                                Communicate effectively with clients, stakeholders, and team members, 
                                ensuring that project requirements are understood and delivered successfully.
                            </div>
                        </Card>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default ServicesComponent;