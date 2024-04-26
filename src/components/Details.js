import { useParams } from 'react-router-dom'
const Details = () => {
    const {id} = useParams()
    return ( 
        <div className="details">
            
            this is the details {id}
        </div>
     );
}
 
export default Details;