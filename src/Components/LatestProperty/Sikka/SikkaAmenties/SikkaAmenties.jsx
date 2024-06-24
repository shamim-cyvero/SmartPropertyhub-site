import React from 'react'
import './SikkaAmenties.css'
import SikkaItem from './SikkaItem';
import pic from '../../../../Assets/Sikka/prime_location.png'
import pic2 from '../../../../Assets/Sikka/lift.png'
import pic3 from '../../../../Assets/Sikka/fire_fighting.png'
import pic4 from '../../../../Assets/Sikka/24_hr_security.png'
import pic5 from '../../../../Assets/Sikka/amphitheatre.png'
import pic6 from '../../../../Assets/Sikka/badminton_court.png'
import pic7 from '../../../../Assets/Sikka/basketball_court.png'
import pic8 from '../../../../Assets/Sikka/carrom.png'
import pic9 from '../../../../Assets/Sikka/club_house.png'
import pic10 from '../../../../Assets/Sikka/cricket_pitch.png'
import pic11 from '../../../../Assets/Sikka/gymnasium.png'
import pic12 from '../../../../Assets/Sikka/hi_tech_security.png'
import pic13 from '../../../../Assets/Sikka/intercom.png'
import pic14 from '../../../../Assets/Sikka/jogging-track.png'
import pic15 from '../../../../Assets/Sikka/landscape-garden.png'
import pic16 from '../../../../Assets/Sikka/lift.png'
import pic17 from '../../../../Assets/Sikka/parking.png'
import pic18 from '../../../../Assets/Sikka/play_zone.png'
import pic19 from '../../../../Assets/Sikka/pool_table.png'
import pic20 from '../../../../Assets/Sikka/power_backup.png'
import pic21 from '../../../../Assets/Sikka/prime_location.png'
import pic22 from '../../../../Assets/Sikka/reflexology-park.png'
import pic23 from '../../../../Assets/Sikka/ro.png'
import pic24 from '../../../../Assets/Sikka/school.png'
import pic25 from '../../../../Assets/Sikka/skating_rink.png'
import pic26 from '../../../../Assets/Sikka/swimming_pool.png'
import pic27 from '../../../../Assets/Sikka/table_tennis.png'
import pic28 from '../../../../Assets/Sikka/temple.png'
import pic29 from '../../../../Assets/Sikka/yoga.png'

function SikkaAmenties() {
    const floorPlans = [
        { image: pic, description: 'Prime Pocation' },
        { image: pic2, description: 'Lift' },
        { image: pic3, description: 'Fire Fighting' },
        { image: pic4, description: '24 HR Security' },
        { image: pic5, description: 'Amphitheatre' },
        { image: pic6, description: 'Badminton Court' },
        { image: pic7, description: 'Basketball Court' },
        { image: pic8, description: 'Carrom' },
        { image: pic9, description: 'Club House' },
        { image: pic10, description: 'Cricket Pitch' },
        { image: pic11, description: 'Gymnasium' },
        { image: pic12, description: 'Hi-Tech Security' },
        { image: pic13, description: 'InterCom' },
        { image: pic14, description: 'ROJogging Track' },
        { image: pic15, description: 'Landscape Garden' },
        { image: pic17, description: 'Car Parking' },
        { image: pic18, description: 'Kids Play Zone' },
        { image: pic19, description: 'Pool Table' },
        { image: pic20, description: 'Power Backup' },
        // { image: pic21, description: 'RO' },
        { image: pic22, description: 'Reflexology Park' },
        { image: pic23, description: 'RO' },
        { image: pic24, description: 'School' },
        { image: pic25, description: 'Skating Rink' },
        { image: pic26, description: 'Swimming Pool' },
        { image: pic27, description: 'Table Tennis' },
        { image: pic28, description: 'Temple' },
        { image: pic29, description: 'Yoga/Meditation Area' },
    ];
    return (
        <>
            <div className="container-fluid mt-5" id='kamya'>
                <h1 className='text-center text-light'>Amenties</h1>

                <div className="SikkaImges mt-5">
                    {floorPlans.map((plan, index) => (
                        <SikkaItem key={index} image={plan.image} description={plan.description} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default SikkaAmenties