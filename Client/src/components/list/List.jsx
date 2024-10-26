import "./list.scss"
import Card from "../card/card";


export default function List({posts}){
    return(
        <div className="list">
            
            {posts.map(item=>(
                <Card key={item.id} item={item}/>
            ))}
        </div>
    )
}