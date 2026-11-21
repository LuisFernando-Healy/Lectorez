import { useState } from "react";
import './Challenge.css'


export default function Challenge(){

    const [challenges,setChallenge] = useState([
        {
            id: 1,
            title: 'Maratón de Palabras Semanal',
            category: 'Constancia',
            description: 'Escribe al menos 1,000 palabras repartidas en tus historias o borradores esta semana.',
            current: 650,
            target: 1000,
            unit: 'palabras',
            step: 150, // Cuánto suma al registrar progreso rápido
            reward: '🏅 Insignia Pluma Veloz'
        },
        {
            id: 2,
            title: 'Arquitecto de Universos',
            category: 'Worldbuilding',
            description: 'Crea 3 universos narrativos distintos con su género y reglas bien definidas.',
            current: 1,
            target: 3,
            unit: 'universos',
            step: 1,
            reward: '🪐 Insignia Creador de Mundos'
        },
        {
            id: 3,
            title: 'Primer Borrador Completo',
            category: 'Narrativa',
            description: 'Publica 5 artículos o capítulos seguidos dentro de tu biblioteca personal.',
            current: 5,
            target: 5,
            unit: 'artículos',
            step: 1,
            reward: '🔥 Racha Imparable'
        }
    ]);

    const handleAddProgress = (challengeID) => {

        const update = challenges.map((item)=>{
            if(item.id === challengeID && item.current < item.target){
                const nexValue = Math.min(item.target, item.current + item.step)     
                return { ...item, current:nexValue}         
            }
        return item
        })

        setChallenge(update);

    }

    const completedCount = challenges.filter(c=> c.current >= c.target).length;

    return(

        <div className="view-container">
            <header className="view-header challenges-header">
                <div>
                    <h1 className="view-title">LibroxChallenge</h1>
                    <p className="view-subtitle">Supera metas de escritura manten tu  racha y desbloquea insignias </p>
                </div>

                <div className="challenges-grid">
                    {
                        challenges.map((challenge)=>{

                            const porcentaje = Math.min(100,Math.round((challenge.current/challenge.target)*100));
                            const isCompleted = challenge.current >= challenge.target;
                            return(
                                <div key={challenge.id} className={`challenge-card ${isCompleted ? 'completed': ''}`}>
                                    <div>
                                        <div className="challenge-top">
                                            <span className="challenge-category"> { challenge.category}</span>
                                            { isCompleted && <span className="completed-tag"> completado!!! </span>}
                                        </div>
                                       <h3 className="challege-title">{challenge.title}</h3>
                                        <p className="challenge-desc">{challenge.description}</p>
                                    </div>

                                    <div className="challenge-progress-section">
                                        <div className="progress-stats">
                                            <span> { challenge.current } / {challenge.target} {challenge.unit}</span>
                                            <strong>{porcentaje}%</strong>

                                        </div>
                                        <div className="progress-bar-bg">
                                            <div className="progress-bar-fill" style={{width:`${porcentaje}%`}}>

                                            </div>
                                        </div>
                                        <div className="challenge-footer">
                                            <span className="challenge-reward">{challenge.reward}</span>
                                            <button className="btn-progress" onClick={()=>handleAddProgress(challenge.id)} disabled={isCompleted}>
                                                {isCompleted ? 'logrado' : `+${challenge.step} ${challenge.unit}`} </button>

                                        </div>

                                    </div>


                                  

                                    

                                </div>

                               
                            );
                        })
                    }

                </div>

            </header>



        </div>





    )





}