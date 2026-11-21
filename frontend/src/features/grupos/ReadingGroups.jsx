import { useState } from "react";
import './ReadingGroups.css'


export default function ReadingGroups(){

    const [groups, setGroups] = useState([
        {
            id: 1,
            name: 'Crónicas de Medianoche',
            topic: 'Fantasía Oscura y Misterio',
            description: 'Leemos y comentamos capítulos semanales de historias de suspenso y mundos ocultos.',
            membersCount: 14,
            isJoined: false
        },
        {
            id: 2,
            name: 'Arquitectos de Mundos',
            topic: 'Ciencia Ficción',
            description: 'Taller colaborativo para revisar reglas de universos narrativos y dar retroalimentación.',
            membersCount: 27,
            isJoined: true
        }
    ])

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newName, setNewName] = useState('');
    const [newTopic, setNewTopic] = useState('');
    const [newDesc, setNewDesc] = useState('');



    


    const handleToggleJoin = (groupId) => {
        const updateGruoups = groups.map((group)=>{
           if(group.id === groupId){

                const joining = !group.isJoined;
                return {
                    ...group, 
                    isJoined: joining, 
                    membersCount: joining ? group.membersCount + 1 : group.membersCount - 1
                }
           }     
             return group
        })

        setGroups(updateGruoups)
    }

    const handleCreateGroup = () => {
        if(!newName.trim() || !newTopic.trim()){
            alert("El nombre del grupo y la tematica son obligatorios")
            return;
        }

        const createDateGroup = {
            id:Date.now(),
            name:newName,
            topic:newDesc,
            membersCount: 1,
            isJoined:true
        }

        setGroups([createDateGroup,...groups])
        setNewName('');
        setNewDesc('');
        setNewTopic('');
        setIsModalOpen(false);

    }

    return(

        <div className="view-container">
                <header className="view-header groups-header">
                    <div>
                            <h1 className="view-title">Grupos de lectura</h1> <br />
                            <p className="view-subtitle">Únete a comunidades de lectores, comparte borradores y debate capítulos</p>
                    </div> <br />
                    

                    <button className="btn-primary" onClick={()=> setIsModalOpen(true)}>
                         Crear Grupo
                    </button>

                </header>

                <div className="groups-grid">
                    { groups.map((group)=>(
                        <div className="group-card" key={group.id}>
                              <header>
                                <span className="group-topic-badge">{group.topic}</span>
                                <h3 className="group-name">{group.name} </h3>
                                <p className="group-desc"> {group.description}</p>

                              </header>  
                              <footer className="group-footer">
                                <span className="group-members"> {group.membersCount} miembros </span> 
                                <button className={`btn-join ${group.isJoined ? 'joined' : ''}`} onClick={()=>handleToggleJoin(group.id)}>
                                    {group.isJoined? 'Salir':'Unirse' }

                                </button>
                              </footer>

                        </div>
                    ))}
                </div>


                {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-light-content">
                        <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>&times;</button>
                        <h3 className="modal-light-title">Nuevo grupo de lectura</h3>

                        <div className="form-group">
                            <label>Nombre del grupo *</label>
                            <input
                                type="text"
                                placeholder="Ej: Lectores de Ciencia Ficción"
                                className="light-input"
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Temática o Género *</label>
                            <input
                                type="text"
                                placeholder="Ej: Novela negra, Poesía, Fantasía..."
                                className="light-input"
                                value={newTopic}
                                onChange={(e) => setNewTopic(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Descripción</label>
                            <textarea
                                placeholder="¿De qué trata este grupo y cada cuánto se reúnen?"
                                className="light-textarea"
                                value={newDesc}
                                onChange={(e) => setNewDesc(e.target.value)}
                            />
                        </div>

                        <div className="modal-light-actions">
                            <button className="btn-light-cancel" onClick={() => setIsModalOpen(false)}>Cancelar</button>
                            <button className="btn-light-submit" onClick={handleCreateGroup}>Crear grupo</button>
                        </div>
                    </div>
                </div>
            )}
               





        </div>



    )


}