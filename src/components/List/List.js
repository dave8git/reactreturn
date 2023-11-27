import styles from './List.module.scss';
import Column from '../Column/Column';

const List = () => {
    return (
        <>
            <header className={styles.header}>
                <h2 className={styles.title}>Things to do<span>soon</span></h2>
            </header>
            <p className={styles.description}>Interesting things I want to check out</p>
            <section className={styles.columns}>
                <Column>Books</Column>
                <Column>Movies</Column>
                <Column>Games</Column>
                {/* <article><h2>Books</h2></article>
                <article><h2>Movies</h2></article>
                <article><h2>Games</h2></article> */}
            </section>
        </>

    );
};

export default List;