import { Fragment } from 'react';
import classes from './BioComponent.module.css';
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";
import Footer from './layouts/Footer';

const BioComponent = () => {

    return <Fragment>
            <section className={classes.summary}>
            <p>
                Hello, I'm
            </p>
            <h2>Yasmine Alnajjar</h2>
            <p className={classes.job}>
                Software Developer
            </p>
            <p>
                Passionate Software Engineer with a keen interest in rapidly acquiring new skills and techniques. Experienced in developing .NET applications.
                as well as web applications with React. Proficient in creating RESTful APIs and developing mobile applications using React Native and Java .
                Enjoys working collaboratively in a team environment
            </p>
            <div >
                <ul>
                    <li>
                        <a href='https://telegram.me/rose_an_sy' target='_blank' rel='noreferrer'>
                            <span className={classes.icon}>
                                <BsTelegram color='white' size='1.6rem' 
                                            onMouseOver={({target})=>{target.style.color="#8e44ad"; }} 
                                            onMouseOut={({target})=>{target.style.color="#EED3D9"; }}/>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href='https://wa.me/+963955502266' target='_blank' rel='noreferrer'>
                            <span className={classes.icon}>
                                <IoLogoWhatsapp color='white' size='1.7rem'
                                            onMouseOver={({target})=>{target.style.color="#8e44ad"; }} 
                                            onMouseOut={({target})=>{target.style.color="#EED3D9"; }}/>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href='mailto:yasmine.alnajargmail.com' target='_blank' rel='noreferrer'>
                            <span className={classes.icon}>
                                <IoMdMail   color='white' size='1.7rem' 
                                            onMouseOver={({target})=>{target.style.color="#8e44ad"; }} 
                                            onMouseOut={({target})=>{target.style.color="#EED3D9"; }}/>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href='https://telegram.me/rose_an_sy' target='_blank' rel='noreferrer'>
                            <span className={classes.icon}>
                                <FaGithub color='white' size='1.7rem'
                                            onMouseOver={({target})=>{target.style.color="#8e44ad"; }} 
                                            onMouseOut={({target})=>{target.style.color="#EED3D9"; }}/>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href='https://telegram.me/rose_an_sy' target='_blank' rel='noreferrer'>
                            <span className={classes.icon}>
                                <FaLinkedin color='white' size='1.6rem' 
                                            onMouseOver={({target})=>{target.style.color="#8e44ad"; }} 
                                            onMouseOut={({target})=>{target.style.color="#EED3D9"; }}/>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <Footer/>
    </Fragment>
        

}

export default BioComponent;