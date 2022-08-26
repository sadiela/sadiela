import Link from 'next/link';
import style from './navigate.module.css'

export default function Navigate() {
    return <h3 className={style.navigate}>
        <Link className={style.linkclass} href="/Bio">Bio</Link> 
        <Link className={style.linkclass}  href="/Publications">Publications</Link>    
        <Link className={style.linkclass}  href="/PersonalProjects">Personal projects</Link> 
        <Link className={style.linkclass}  href="/Music">Music</Link>  
        <Link className={style.linkclass}  href="/CheatSheets">Cheat Sheets</Link>      
        <Link className={style.linkclass}  href="/Miscellaneous">Miscellaneous</Link> 
        <Link className={style.linkclass}  href="/Contact">Contact me</Link>         
    </h3>;
}