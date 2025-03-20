async function get() {
    try {
        const response = await fetch("http://localhost:3000/eventos", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching eventos');
        }

        const eventos = await response.json();
        return eventos;
    } catch (error) {
        console.error('Error fetching eventos:', error);
        throw error;
    }
}


//////////LLAMADO POST//////////
async function post(nombre,encargado,descripcion,enlace) {
    try {
        const eventoData = { 
            nombre,
            encargado,
            descripcion,
            enlace
        };

        const response = await fetch("http://localhost:3000/eventos", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventoData)
        });
     
        return await response.json();
    } catch (error) {
        console.error('Error posting evento:', error);
        throw error;
    }
}


//////////////LLAMADO UPDATE/////////////
async function update(nombre,encargado,descripcion,enlace,id) 
{
    try {
        const eventoData = { 
            nombre,
            encargado,
            descripcion,
            enlace
        };

        const response = await fetch("http://localhost:3000/eventos/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventoData)
        });

        return await response.json();
    } catch (error) {
        console.error('Error update evento:', error);
        throw error;
    }
}


//////////////LLAMADO DELETE/////////////
async function deleteT(id) {
    try {
        const response = await fetch(`http://localhost:3000/eventos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting evento with id ${id}`);
        }

        return { message: `Evento with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting evento:', error);
        throw error;
    }
}

export default { get, post, update, deleteT };