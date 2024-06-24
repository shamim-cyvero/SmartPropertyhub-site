
import React from 'react';
import './Kamyafloor.css';
import pic from '../../../../Assets/Sikka/890_2bhk.jpeg';
import pic2 from '../../../../Assets/Sikka/990_2bhk.jpeg';
import pic3 from '../../../../Assets/Sikka/1090_2bhk.jpeg';
import pic4 from '../../../../Assets/Sikka/1100_2bhk_Study.jpeg';
import pic5 from '../../../../Assets/Sikka/1250_3bhk.jpeg';
import pic6 from '../../../../Assets/Sikka/1315_3bhk.jpeg';
import pic7 from '../../../../Assets/Sikka/1450_3bhk_Servant.jpeg';
import pic8 from '../../../../Assets/Sikka/1650_3bhk_Servant.jpeg';
import pic9 from '../../../../Assets/Sikka/1695_4bhk_Servant.jpeg';
import pic10 from '../../../../Assets/Sikka/2150_4bhk_Servant .jpeg';

import FloorPlanItem from './FloorPlanItem';

const Kamyafloor = () => {
    const floorPlans = [
        { image: pic, description: '2BHK - (890 SQ.FT.)' },
        { image: pic2, description: '2BHK - (990 SQ.FT.)' },
        { image: pic3, description: '2BHK - (1090 SQ.FT.)' },
        { image: pic4, description: '2BHK - (1100 SQ.FT. Study)' },
        { image: pic5, description: '3BHK - (1250 SQ.FT.)' },
        { image: pic6, description: '3BHK - (1315 SQ.FT.)' },
        { image: pic7, description: '3BHK - (1450 SQ.FT. Servant)' },
        { image: pic8, description: '3BHK - (1650 SQ.FT. Servant)' },
        { image: pic9, description: '4BHK - (1695 SQ.FT. Servant)' },
        { image: pic10, description: '4BHK - (2150 SQ.FT. Servant)' },
    ];

    return (
        <div className="container-fluid mt-5" id='kamya'>
            <h1 className='text-center text-light'>Floor Plan</h1>

            <div className="kamyaImges mt-5">
                {floorPlans.map((plan, index) => (
                    <FloorPlanItem key={index} image={plan.image} description={plan.description} />
                ))}
            </div>
        </div>
    );
};

export default Kamyafloor;
