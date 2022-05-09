import { useEffect, useState } from "react";

const useTotalitems = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-eyrie-16544.herokuapp.com/equipment')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return [services, setServices];
}
 
export default useTotalitems;