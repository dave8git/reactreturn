import sytles from './Container.module.scss';

const Container = props => {
    return (
        <div className={sytles.container}>{props.children}</div>
    )
}

export default Container;