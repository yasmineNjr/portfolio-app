import classes from './ProjectItem.module.css';
// import {Link} from 'react-router-dom';
import Card from '../components/layouts/Card';

const ProjectItem = (props) => {

    return  <section className={classes.section}>
                <Card height='90%'>
                    <div>
                        {/* <div  style={{ textAlign: 'center', color: '#EED3D9' }}>
                            <strong>{props.index} of {props.count}</strong>
                        </div> */}
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
                                        <p style={{color: '#EED3D9'}}>
                                            <a href={props.project.url} target='_blank' rel='noreferrer'>{props.project.url}</a>
                                            {/* <Link to='/Bio'>{props.project.url}</Link> */}
                                        </p>
                                }
                            </div>
                        </div>
                    </div>
                   
                </Card>
            </section>
}

export default ProjectItem;