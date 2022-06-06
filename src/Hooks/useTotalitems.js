import { useEffect, useState } from "react";

const useTotalitems = () => {

    const [equipments, setEquipments] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-eyrie-16544.herokuapp.com/equipment')
            .then(res => res.json())
            .then(data => setEquipments(data));
    }, []);

    return [equipments, setEquipments];
} 

export default useTotalitems;