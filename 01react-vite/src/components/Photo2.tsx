import {ReactNode} from 'react';

type props = {
    legend: string; 
    children: ReactNode;
}

export const Photo2 = ({children, legend}: props)=> {
    return(
        /* utilizando fragment  */
        <>
            {children}
            <p> {legend} </p>
            <hr />
        </>
    );
}
