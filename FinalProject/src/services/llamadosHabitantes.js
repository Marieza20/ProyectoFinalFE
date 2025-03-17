async function get() {
    try {
        const response = await fetch("http://localhost:3000/habitantes", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching habitantes');
        }

        const habitantes = await response.json();
        return habitantes;
    } catch (error) {
        console.error('Error fetching habitantes:', error);
        throw error;
    }
}


//////////LLAMADO POST//////////
async function post(apodo,nombre,edad,cedula,zona,alimentacion,estudios,enfermedades,medicamentos,atencionMed,atencionPsi,laboral) {
    try {
        const habitanteData = { 
            apodo,
            nombre,
            edad,
            cedula,
            zona,
            alimentacion,
            estudios,
            enfermedades,
            medicamentos,
            atencionMed,
            atencionPsi,
            laboral
        };

        const response = await fetch("http://localhost:3000/habitantes", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(habitanteData)
        });
     
        return await response.json();
    } catch (error) {
        console.error('Error posting habitante:', error);
        throw error;
    }
}


//////////////LLAMADO UPDATE/////////////
async function update(apodo,nombre,edad,cedula,zona,alimentacion,estudios,enfermedades,medicamentos,atencionMed,atencionPsi,laboral,id) 
{
    try {
        const habitanteData = { 
            apodo,
            nombre, 
            edad,
            cedula,
            zona,
            alimentacion,
            estudios,
            enfermedades,
            medicamentos,
            atencionMed,
            atencionPsi,
            laboral
        };

        const response = await fetch("http://localhost:3000/habitantes/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(habitanteData)
        });

        return await response.json();
    } catch (error) {
        console.error('Error update habitante:', error);
        throw error;
    }
}


//////////////LLAMADO DELETE/////////////
async function deleteT(id) {
    try {
        const response = await fetch(`http://localhost:3000/habitantes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting habitante with id ${id}`);
        }

        return { message: `Habitante with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting habitante:', error);
        throw error;
    }
}

export default { get, post, update, deleteT };