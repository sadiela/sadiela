import Link from 'next/link';
import style from './navigate.module.css'

export const linkStyle = {
    color: 'red',
    'font-family': 'monospace',
    'font-weight':'bold',
    'text-decoration': 'none',
    'padding-right': '30px',
    'padding-left': '5px'
}

export default function Navigate() {
    return <h3 className={style.navigate}>
        <Link href="/Bio">Bio</Link> 
        <Link href="/PersonalProjects">Personal Projects</Link> 
        <Link href="/Publications">Publications</Link>   
        <Link href="/CheatSheets">Cheat Sheets</Link>       
        <Link href="/Music">Music</Link>  
        <Link href="/Miscellaneous">Miscellaneous</Link> 
    </h3>;
}