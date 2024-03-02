import classes from './Footer.module.css';

const Footer = () => {

    return  (
        <div className={classes.maindiv}>
            <div className={classes.innerdiv}>
                Designed And Developed By <p style={{color: 'black'}}>x</p><strong style={{textShadow: '#8e44ad 1px 0 10px', color: '#8e44ad'}}>Yasmine Alnajjar</strong>
            </div>
        </div>
    )
}

export default Footer;