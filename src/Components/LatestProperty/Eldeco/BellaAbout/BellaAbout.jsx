import React from 'react'
import './BellaAbout.css'
import o1 from '../../../../Assets/eldeco/o1.webp'
import o2 from '../../../../Assets/eldeco/o2.webp'
import o3 from '../../../../Assets/eldeco/o3.webp'
import o4 from '../../../../Assets/eldeco/o4.webp'

import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

function BellaAbout() {
    return (
        <>
            <div className="bellaSection">
                <div className="bella-Img">
                    <img src={o1} alt="o1" className='mt-5' />
                    <img src={o2} alt="o2" />
                    <img src={o3} alt="o3" className='mt-5'/>
                    <img src={o4} alt="o4" />
                </div>

                <div className="bella-Content">
                    {/* <h2>About us</h2> */}
                    <h1>Discover Luxury At It's Best.</h1>
                    <p>Situated in the thriving locale of Greater Noida West,
                        Eldeco La Vida Bella puts you at the centre of excitement and convenience. Set amidst beautiful landscape, here 5 palatial towers, each apartment is equipped with all-weather air
                        conditioning, welcome you to experience the eptiome of a modern lifestyle. Step into our uber-luxury 3 and 4 BR premium residences, accessible via the 130- meter Noida-Greater Noida Link Road, awaits you. Enjoy the convenience of 24- meter wide internal road, ensuring smooth navigation within the commiunity. Indulge in the sophistication of 9ft main door with digital lock, adding a touch
                        of security and elegance to your living experience.</p>

                    <hr className='mt-4 mb-4'/>

                    {/* <Link><button>Download brochure</button></Link> */}
                    <Button _hover={{bgColor:'#00B66E'}} bgColor={'#00B98E'} color={'white'}  children={'Get Start'} />

                </div>
            </div>
        </>
    )
}

export default BellaAbout