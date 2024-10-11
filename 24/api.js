export async function getUserData(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) throw new Error('User not found');
        const user = await response.json();
        console.log(`Name: ${user.name}, Email: ${user.email}`);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

export async function getFilmData(filmId) {
    try {
        const response = await fetch(`https://swapi.dev/api/films/${filmId}/`);
        if (!response.ok) throw new Error('Film not found');
        const film = await response.json();
        console.log(`Title: ${film.title}, Release Date: ${film.release_date}`);
    } catch (error) {
        console.error('Error fetching film data:', error);
    }
}

export async function getPlanetData(planetId) {
    try {
        const response = await fetch(`https://swapi.dev/api/planets/${planetId}/`);
        if (!response.ok) throw new Error('Planet not found');
        const planet = await response.json();
        console.log(`Planet Name: ${planet.name}, Climate: ${planet.climate}`);
    } catch (error) {
        console.error('Error fetching planet data:', error);
    }
}
