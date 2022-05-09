import { useEffect, useState } from "react";

const useServiceDetail = equipmentId => {
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `https://mysterious-eyrie-16544.herokuapp.com/equipment/${equipmentId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [equipmentId]);

    return [service, setService];
}

export default useServiceDetail;