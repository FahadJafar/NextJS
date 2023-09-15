import Link from "next/link";
import styles from "../styles/Home.module.css"
import { useEffect } from "react";
import {useRouter} from "next/router";


const notfound = () => {
    const router=useRouter();
    useEffect(()=>{

        setTimeout(()=>{

            router.push('/');
        },3000)
    
    },[])
    return (  
        <div className="notfound">
            <h2>Page Not Found.................</h2>
            <Link href="/" className={styles.btn}>Back to Home</Link>
        </div>
    );
}
 
export default notfound;
