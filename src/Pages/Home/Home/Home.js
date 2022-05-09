import React from 'react';
import ManageInventorySection from '../../ManageInventorySection/ManageInventorySection';
import Banner from '../Banner/Banner';
import Equipments from '../Equipments/Equipments';
import Mission from '../Mission/Mission'
import Strength from '../Strength/Strength'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Mission></Mission>
            <Equipments></Equipments>
            <ManageInventorySection></ManageInventorySection>
            <Strength></Strength>
        </div>
    );
};

export default Home;