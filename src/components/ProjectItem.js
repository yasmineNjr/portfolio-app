import classes from './ProjectItem.module.css';
import Card from '../components/layouts/Card';
import { FaLink } from "react-icons/fa6";
import { BiVideo } from "react-icons/bi";

const ProjectItem = (props) => {

    return  <section className={classes.section}>
                <Card height='95%'>
                    <div>
                        <div className={classes.maindiv}>
                            <div className={classes.imgdiv}>
                                <img src={props.project.image} alt='logo' className={classes.img}/>
                            </div>
                            <div className={classes.innerdiv}>
                                <h3>{props.project.title}</h3>
                                <ul>
                                    {
                                        props.project.technics.map((tec) => (
                                            <li>{tec}</li>
                                        ))
                                    }
                                </ul>
                                <p>{props.project.description}</p> 
                                {
                                    props.project.url !== '' && 
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '0'}}>
                                        <FaLink color='#8e44ad' size='1.2rem' style={{marginRight: '0.5rem'}}/>
                                        <p style={{padding: '0'}}>
                                            <a href={props.project.url} target='_blank' rel='noreferrer'>{props.project.urlText}</a>
                                        </p>
                                    </div>
                                }
                                {
                                    props.project.video !== '' &&
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem', padding: '0'}}>
                                        <BiVideo color='#8e44ad' size='1.2rem' style={{marginRight: '0.5rem'}}/>
                                        <p style={{padding: '0'}}>
                                            <a href={props.project.video} target='_blank' rel='noreferrer'>{props.project.videoText}</a>
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </Card>
            </section>
}

export default ProjectItem;