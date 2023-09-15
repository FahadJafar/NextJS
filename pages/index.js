import Link from "next/link";
import styles from '../styles/Home.module.css';
export default function Home() 
{ return (
   
    <div className="Home">
      
      <h2 className={styles.title}>HomePage</h2>
      <h2 className={styles.text}>Enjoy Exploring Lists of Users</h2>
<Link href="/Lists" className={styles.btn}>Available Lists</Link>
    </div>
  );
}
