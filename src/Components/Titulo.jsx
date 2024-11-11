import React, { useState } from 'react';
import SelectorRamo from './SelectorRamo';
import { Text } from '@mantine/core';

export default function Tabla() {
    const [ramoSeleccionado, setRamoSeleccionado] = useState(null);

    const manejarClicRamo = (nombreRamo) => {
        setRamoSeleccionado(nombreRamo);
    };

    return (
        <>
            <Text ta="center"  fw={700} size='xl'>Malla Curricular 2020</Text>
            <Text ta="center"   size='md'>(Ingeniería Civil Informática)</Text>
            <SelectorRamo ramoSeleccionado={ramoSeleccionado} />
        </>
    );
}
