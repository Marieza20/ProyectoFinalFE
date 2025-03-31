async function get() {
    try {
        const response = await fetch("http://localhost:3000/equipos", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching equipos');
        }

        const equipos = await response.json();
        return equipos;
    } catch (error) {
        console.error('Error fetching equipos:', error);
        throw error;
    }
}


//////////LLAMADO POST//////////
async function post(nombre,encargado,descripcion) {
    try {
        const equipoData = { 
            nombre,
            encargado,
            descripcion
        };

        const response = await fetch("http://localhost:3000/equipos", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(equipoData)
        });
     
        return await response.json();
    } catch (error) {
        console.error('Error posting equipo:', error);
        throw error;
    }
}


//////////////LLAMADO UPDATE/////////////
async function update(nombre,encargado,descripcion,id) 
{
    try {
        const equipoData = { 
            nombre,
            encargado,
            descripcion
        };

        const response = await fetch("http://localhost:3000/equipos/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(equipoData)
        });

        return await response.json();
    } catch (error) {
        console.error('Error update equipo:', error);
        throw error;
    }
}


//////////////LLAMADO DELETE/////////////
async function deleteT(id) {
    try {
        const response = await fetch(`http://localhost:3000/equipos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting equipo with id ${id}`);
        }

        return { message: `Equipo with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting equipo:', error);
        throw error;
    }
}

export default { get, post, update, deleteT };