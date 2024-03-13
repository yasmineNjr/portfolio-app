import classes from './Card.module.css';

const Card = props => {

    return <div className={classes.card} style={{ height: props.height}}>
            {props.children}
        </div>
}

export default Card;