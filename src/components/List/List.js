import styles from './List.module.scss';
import Column from '../Column/Column';
import { useState, useEffect } from 'react';
import shortid from 'shortid';

const List = () => {
    const [value, setValue] = useState(''); 

    const [columns, setColumns] = useState([
        {id: 1, title: 'Books', icon: 'book'},
        {id: 2, title: 'Movies', icon: 'film'},
        {id: 3, title: 'Games', icon: 'gamepad'}
    ]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setColumns([...columns, { id: 4, title: 'Test column'}]);
    //     }, 2000);
    // },[]);
   
    const handleSubmit = e => { 
        e.preventDefault();
        setColumns([...columns, { id: shortid(), title: value}]);
    }

    return (
        <>
            <header className={styles.header}>
                <h2 className={styles.title}>Things to do<span>soon</span></h2>
            </header>
            <p className={styles.description}>Interesting things I want to check out</p>
            <section className={styles.columns}>
                {columns.map(column => <Column key={column.id} icon={column.icon}>{column.title}</Column>)}
                {/* <Column icon="book">Books</Column>
                <Column icon="film">Movies</Column>
                <Column icon="gamepad">Games</Column> */}
                {/* <article><h2>Books</h2></article>
                <article><h2>Movies</h2></article>
                <article><h2>Games</h2></article> */}
            </section>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={e => setValue(e.target.value)} />
                <button>Add column</button>
            </form>
        </>

    );
};

export default List;