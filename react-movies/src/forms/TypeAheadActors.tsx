import { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { actorMovieDTO } from "../actors/actos.model";

export default function TypeAheadActors(props: typeAheadActorsProps) {

const actors: actorMovieDTO[] = [
    {id: 1, name: 'Felipe', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/170px-Tom_Holland_by_Gage_Skidmore.jpg'},
    {id: 2, name: 'Gonzalez', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/170px-Tom_Holland_by_Gage_Skidmore.jpg'},
    {id: 3, name: 'Motalez', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/170px-Tom_Holland_by_Gage_Skidmore.jpg'},
    {id: 4, name: 'Halate', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/170px-Tom_Holland_by_Gage_Skidmore.jpg'},
]

const [dragElement, setDragElement] = useState<actorMovieDTO | undefined>(undefined)

function handleDragStart(actor: actorMovieDTO) {
    setDragElement(actor)
}

function handleDragOver(actor: actorMovieDTO) {
    if(!dragElement) {
        return;
    }

    if(actor.id !== dragElement.id) {
        const draggedElementIndex = props.actors.findIndex(x => x.id === dragElement.id);
        const actorIndex = props.actors.findIndex(x => x.id === actor.id)

        const actors = [...props.actors]
        actors[actorIndex] = dragElement
        actors[draggedElementIndex] = actor
        props.onAdd(actors)
    }
}

const selected: actorMovieDTO[] = []

    return (
        <div className="mb-3">
            <label>{props.displayName}</label>
            <Typeahead 
                id="typeahead"
                onChange={actors => {
                    
                    if(props.actors.findIndex(x => x.id == actors[0].id) === -1) {
                    props.onAdd([...props.actors, actors[0]])
                    }
                    console.log(actors)
                }}
                options={actors}
                labelKey={actor => actor.name}
                filterBy={['name']}
                placeholder = "Write the name of the actor..."
                minLength={1}
                flip={true}
                selected={selected}
                renderMenuItemChildren={actor => (
                    <>
                        <img src={actor.picture} alt="actor"
                            style={{
                                height: '64px',
                                marginRight: '10px',
                                width: '64px'
                            }}
                        />
                        <span>{actor.name}</span>
                    </>
                )}

            />

            <ul className="list-group">
                        {props.actors.map(actor => <li key={actor.id}
                        draggable={true}
                        onDragStart={() => handleDragStart(actor)}
                        onDragOver={() => handleDragOver(actor)}
                        className="list-group-item list-group-item-action">
                          
                            {props.listUI(actor)}
                            <span className="badge badge-primary badge-pill pointer text-dark"
                            style={{marginLeft: '0.5rem'}}
                            onClick={() => props.onRemove(actor)}>X</span>
                        </li>)}
            </ul>
        </div>
    )

}

interface typeAheadActorsProps {
    displayName: string;
    actors: actorMovieDTO[];
    onAdd(actors: actorMovieDTO[]): void
    onRemove(acotr: actorMovieDTO): void
    listUI(actor: actorMovieDTO): ReactElement;
}
