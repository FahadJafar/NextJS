import Link from "next/link";

export const getStaticProps = async ()=>
{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

   return { props: {list:data}}

    

}

const Lists = ({list}) => {
    return ( 
        <div className="List">
              <h2>Names</h2>
    {list.map((i)=>(
     
        <div className="KK" key={i.id}>
             <Link href={"/Lists/" + i.id}>
            <p>{i.name}</p>
            </Link>
        </div>
     
    ))}
        </div>
     );
}
 
export default Lists;
