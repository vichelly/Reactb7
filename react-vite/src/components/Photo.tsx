type props = {
    url: string;
    legend: string; 
}

export const Photo = ({url, legend}: props)=> {
    return(
        /* utilizando fragment  */
        <>
            <img src={url} />
            <p> {legend} </p>
            <hr />
        </>
    );
}
