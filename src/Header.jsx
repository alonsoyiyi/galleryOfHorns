import { useState } from "react";

function Header () {
    const [color,setColor]=useState(true);

    function cambiarFondo(){
        setColor(!color);
    }
    return (
        <div onClick={cambiarFondo}>
            {color ? <h1 className="cambio1">My Horns gallery</h1> 
            : <h1 className="cambio2">My Horns gallery</h1>
                
            }
        </div>
    );
}

export default Header;