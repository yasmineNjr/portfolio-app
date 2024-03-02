import Card from '../components/layouts/Card';
import classes from './AboutMeComponent.module.css';

const AboutMeComponent = () => {

    return  (
        <div className={classes.main}>
            <h1>
                About Me
            </h1>
            <section>
                <Card>
                    <p>
                        I'm a dedicated software developer specializing in React, React Native, and .NET technologies. 
                        With a passion for creating innovative and user-centric solutions, 
                        I thrive on turning complex ideas into elegant, scalable applications.
                    </p>
                    <p>
                        <h3>Technical Proficiency:</h3>
                        React and React Native: Proficient in building responsive and intuitive user interfaces for web and mobile applications.
                        .NET Development: Experienced in developing robust and efficient systems using the .NET framework.
                    </p>
                    <p>
                        <h3>Key Strengths:</h3>
                        <ul>
                            <li>
                                <strong>Problem-Solver: </strong>I enjoy tackling challenges head-on, finding creative solutions to complex problems.
                            </li>
                            <li>
                                <strong>Collaborative Team Player: </strong>I thrive in collaborative environments, valuing open communication and teamwork.
                            </li>
                            <li>
                                <strong>Continuous Learner: </strong>In the ever-evolving world of technology, I am committed to staying abreast of the latest trends and tools.
                            </li>
                        </ul>
                    </p>
                </Card>
            </section>
        </div>
    )
}

export default AboutMeComponent;