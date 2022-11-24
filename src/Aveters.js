import React, { useEffect, useState } from 'react';
import './Avater.css'



const Aveters = () => {

    const [name, setName] = useState([])
    const [avatars, setAvatars] = useState('avataaars')

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users/1/todos')
            .then((res) => res.json())
            .then((res) => setName(res))

    }, [])


    const handleAvatars = (avatar) => {

        setAvatars(avatar)
    }

    return (
        <div>
            <h2 className='color'>Avatars From DiceBear</h2>
            <div className='sticky'>
                <button className='buttons' onClick={() => handleAvatars('jdenticon')}>vector</button>
                <button className='buttons' onClick={() => handleAvatars('bottts')}>Bots</button>
                <button className='buttons' onClick={() => handleAvatars('identicon')}>Identi</button>
                <button className='buttons' onClick={() => handleAvatars('gridy')}>Alien</button>
                <button className='buttons' onClick={() => handleAvatars('micah')}>Avatars</button>
                <button className='buttons' onClick={() => handleAvatars('human')}>Pixel</button>
                <button className='buttons' onClick={() => handleAvatars('avataaars')}>Human</button>
            </div>
            <div>

                {
                    name.map(n =>
                        <div>
                            <img className='style' src={`https://avatars.dicebear.com/api/${avatars}/${n.id}.svg`} alt="" />
                        </div>)
                }

            </div>


        </div>
    );
};

export default Aveters;