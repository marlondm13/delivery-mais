import { useEffect, useState } from "react";

function Hook(){
    //useState
    const [qtd, setQtd] = useState(0);

    //useEffect
    useEffect(function(){
        document.title = `Contador: ${qtd}`;
    }, [qtd]);
    
    const Somar = () => setQtd(qtd+1); 
    const Subtrair = () => setQtd(qtd-1); 

    return <div>
        <h1>{qtd}</h1>
        <button onClick={Somar}>+1</button>
        <button onClick={Subtrair}>-1</button>
    </div>
}

export default Hook;

/*página criada para entender os conceitos de Hook: useState e useEffect;*/
