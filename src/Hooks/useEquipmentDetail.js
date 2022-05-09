import { useEffect, useState } from "react";

const useEquipmentDetail = equipmentId => {
    const [equipment, setEquipment] = useState({});

    useEffect(() => {
        const url = `https://mysterious-eyrie-16544.herokuapp.com/equipment/${equipmentId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setEquipment(data));
    }, [equipmentId]);

    return [equipment, setEquipment];
}

export default useEquipmentDetail;