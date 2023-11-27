import styles from './TextInput.module.scss';

const TextInput = props => {
    return(<input className={styles.input} type="text">{props.children}</input>);
}

export default TextInput;