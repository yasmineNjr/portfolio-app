import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
import bioImage from '../../assests/7.jpg';

function MainNavigation(){
    
    return <div style={{position: 'relative'}}>
        <header className={classes.header}>
            {/* <h1><Link to="/">Portfolio</Link></h1> */}
            <nav>
                <ul>
                    <li><Link to='/Bio'>Bio</Link></li>
                    <li><Link to='/AboutMe'>About</Link></li>
                    <li><Link to='/Services'>Services</Link></li>
                    <li><Link to='/Projects'>Projects</Link></li>
                    <li style={{marginRight: '1rem'}}><Link to='/Resume'>Resume</Link></li>
                </ul>
            </nav>
        </header>
        <div className={classes['header-image']}>
            <img src={bioImage} alt="Yasmine's portfolio" />
        </div>
    </div>
    
}

export default MainNavigation;