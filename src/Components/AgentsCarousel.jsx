import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from "react";


function AgentsCarousel() {
    const [agents, setAgents] = useState([]);
    const [maps, setMaps] = useState([]);

    useEffect(() => {

        fetch('https://valorant-api.com/v1/agents')
            .then(response => response.json())
            .then(data => {
                setAgents(data.data)
                console.log(data); 
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    
    return (
        <>
            <div >
                <div className="agents-carousel-container">
                    {agents.map((agent) => (
                        <>
                            {agent.isPlayableCharacter ? (<div className="agent-card">
                                <img src={agent.fullPortrait} alt="" />
                                <div className="card-info">
                                    <h1>{agent.displayName}</h1>
                                    <h2>Role: {agent.role.displayName}</h2>
                                    <img src={agent.role.displayIcon} className="role-icon" alt="" />
                                </div>
                            </div>):('')}
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AgentsCarousel;