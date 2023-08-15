import { useEffect, useState } from "react";

function WeaponSlider() {

    const [weapons, setWeapons] = useState([]);

    useEffect(() => {
        fetch('https://valorant-api.com/v1/weapons')
            .then(response => response.json())
            .then(data => {
                setWeapons(data.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="weapons-slider-container">
            {weapons.map((weapon) => (
                <div key={weapon.uuid} className="weapon-card">
                    <img src={weapon.displayIcon} className="weapon-img" alt="" />
                    <div className="weapon-info">
                        <h2>{weapon.displayName}</h2>
                        <div className="secondary-weapon-info">
                            {weapon.weaponStats && (
                                <>
                                    <h3>FireRate: {weapon.weaponStats.fireRate}</h3>
                                    <h3>Cost: {weapon.shopData.cost}</h3>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default WeaponSlider;
