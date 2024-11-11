import React, { useState } from 'react';
import data from './Info.json'; 

const SelectorRamo = () => {
    const [celdasColoreadas, setCeldasColoreadas] = useState({
        seleccionada: null,
        previa: [],
        siguiente: []
    });
    const manejarClicCelda = (semestre, ramoName) => {  
        if (!ramoName) return;
        const ramo = data.subjects.find(subject => subject.name === ramoName);

        if (!ramo) return;
        const previos = ramo.prev;
        const siguientes = ramo.next;
        
        setCeldasColoreadas({
            seleccionada: ramoName,
            previa: previos,
            siguiente: siguientes
        });
    };

    const renderizarTabla = () => {
        const semestres = Array.from({ length: 11 }, (_, index) => index + 1); 
        return semestres.map((semestre) => (
            <td key={semestre} style={{ verticalAlign: 'top' }}>
                <div><strong>Semestre {semestre}</strong></div>
                {data.subjects
                    .filter((subject) => subject.semester === semestre)
                    .map((subject) => {
                        const esRamoSeleccionado = subject.name === celdasColoreadas.seleccionada;
                        const esRamoPrevio = celdasColoreadas.previa.includes(subject.name);
                        const esRamoSiguiente = celdasColoreadas.siguiente.includes(subject.name);

                        let fondoColor = null;
                        if (esRamoSeleccionado) {
                            fondoColor = '#caf2ff'; 
                        } else if (esRamoPrevio) {
                            fondoColor = '#faa1bd'; 
                        } else if (esRamoSiguiente) {
                            fondoColor = '#c3efab'; 
                        }

                        return (
                            <div
                                key={subject.name}
                                onClick={() => manejarClicCelda(semestre, subject.name)}
                                style={{
                                    backgroundColor: fondoColor,
                                    padding: '5px',
                                    marginBottom: '5px',
                                    cursor: 'pointer',
                                    borderRadius: '4px',
                                }}
                            >
                                {subject.name || '---'} 
                            </div>
                        );
                    })}
            </td>
        ));
    };

    return (
        <div>
            <table border="1" style={{ width: '100%' }}>
                <tbody>
                    <tr>
                        {renderizarTabla()}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SelectorRamo;
