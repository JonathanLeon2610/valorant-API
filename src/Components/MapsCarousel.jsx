import { useEffect, useState } from "react";
function MapCarousel() {
    const [maps, setMaps] = useState([]);

    useEffect(() => {

        fetch('https://valorant-api.com/v1/maps')
            .then(response => response.json())
            .then(data => {
                setMaps(data.data)
                console.log(data.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <div className="maps-carousel-container">
                <h1>Maps Avaible</h1>
                <div className="maps-galery">
                    {maps.map((map) => (
                        <div
                            key={map.uuid}
                            className="map-item"
                            style={{ backgroundImage: `url(${map.splash})` }}
                        >
                            <h2>{map.displayName}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MapCarousel;