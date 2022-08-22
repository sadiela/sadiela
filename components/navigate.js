import Link from 'next/link';
import styles from './navigate.module.css'

export default function Navigate() {
    return <h3 className={styles.navigate}>
        <Link classname='linkclass' href="/Bio">Bio</Link>    
        <Link classname='linkclass' href="/Contact">Contact me</Link>     
        <Link classname='linkclass' href="/Miscellaneous">Miscellaneous</Link>     
        <Link classname='linkclass' href="/Music">Music</Link>     
        <Link classname='linkclass' href="/Publications">Publications</Link>    
        <Link classname='linkclass' href="/PersonalProjects">Personal projects</Link> 
    </h3>;
}