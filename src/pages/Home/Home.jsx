import { useContext } from 'react';
import { myContext } from '../../app/context';
export const Home = () => {

    const {estado, SetAuth} = useContext(myContext)

    return (
        <div>
            {<pre>{JSON.stringify(estado.auth, 2, null)}</pre>}
            <button onClick={()=>SetAuth("token","123413452456134masfkmaoñsrnoent")}>token</button>
            <button onClick={()=>SetAuth("name","Danilo")}>name</button>
        </div>
    )
}