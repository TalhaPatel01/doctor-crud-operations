const Greetings = ({ name })=> <h1>Greetings {name}</h1>;

export const PropsDemo = ()=>{
    return (
        <div>
            <Greetings name="Talha"/>
        </div>
    );    
};