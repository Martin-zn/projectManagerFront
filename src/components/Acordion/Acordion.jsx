import React, { useEffect, useState } from 'react'
import RowTable from './RowTable'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProjects } from '../../service/fetchProject'

function Acordion() {
    
    const dispatch = useDispatch();
    const projects = useSelector((state) => state.projects.projects);
    const loading = useSelector((state) => state.projects.loading);
    const error = useSelector((state) => state.projects.error)

    useEffect(() => {
        dispatch(fetchProjects());
    },[dispatch])

    if (loading) {
        return <div>LOADING...</div>
    }
    if (error){
        return <div>ERROR: {error}</div>
    }


    return (
        <div className="accordion p-1" id="accordionExample ">
            {projects.map((projects, index) => (

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                            Proyecto: {projects.name}

                        </button>

                    </h2>

                    <div id={`collapse${index}`} className=" collapse" data-bs-parent="#accordionExample">

                        <div className="accordion-body bg-secondary">

                            <table className="table table-dark table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Actividad</th>
                                        <th scope="col">Descripcion</th>
                                        <th scope="col">Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projects.activities.map(activity => (
                                        <RowTable key={activity.id} activity={activity} />
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Acordion
