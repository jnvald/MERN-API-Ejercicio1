import {useEffect} from 'react';

const ApiPokemon = (props) => {

    const {state} = props;
 
    useEffect(() => {
        console.log(props)
        }, [props]);

    return (
        <div>
            {state.people ? state.people.map((item, index)=>{
                return(<div key={index}> <li>{item.name}</li></div>)
            }):null}
        </div>
    );
}
export default ApiPokemon;
