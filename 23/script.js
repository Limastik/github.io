document.getElementById('fetchUsersBtn').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const usersDiv = document.getElementById('users');
            usersDiv.innerHTML = '';
            users.forEach(user => {
                usersDiv.innerHTML += `<p>Name: ${user.name}, Email: ${user.email}</p>`;
            });
        })
        .catch(error => console.error('Error fetching users:', error));
});

document.getElementById('fetchUserBtn').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(user => {
            const userDetailsDiv = document.getElementById('userDetails');
            userDetailsDiv.innerHTML = `
                <div class="user-card">
                    <p><strong>Name:</strong> ${user.name}</p>
                    <p><strong>Username:</strong> ${user.username}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                </div>
            `;
        })
        .catch(error => console.error('Error fetching user details:', error));
});

document.getElementById('fetchUserPostsBtn').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        .then(response => response.json())
        .then(posts => {
            const userPostsDiv = document.getElementById('userPosts');
            userPostsDiv.innerHTML = '';
            posts.forEach(post => {
                userPostsDiv.innerHTML += `<p><strong>Title:</strong> ${post.title}</p>`;
            });
        })
        .catch(error => console.error('Error fetching user posts:', error));
});

document.getElementById('fetchPlanetBtn').addEventListener('click', () => {
    fetch('https://swapi.dev/api/planets/1/')
        .then(response => response.json())
        .then(planet => {
            const planetDetailsDiv = document.getElementById('planetDetails');
            planetDetailsDiv.innerHTML = `
                <div class="planet-card">
                    <p><strong>Name:</strong> ${planet.name}</p>
                    <p><strong>Rotation Period:</strong> ${planet.rotation_period}</p>
                    <p><strong>Orbital Period:</strong> ${planet.orbital_period}</p>
                    <p><strong>Diameter:</strong> ${planet.diameter}</p>
                    <p><strong>Climate:</strong> ${planet.climate}</p>
                    <p><strong>Terrain:</strong> ${planet.terrain}</p>
                    <p><strong>Population:</strong> ${planet.population}</p>
                    <p><strong>Residents:</strong> ${planet.residents.map(resident => `<a href="${resident}">${resident}</a>`).join(', ')}</p>
                </div>
            `;
        })
        .catch(error => console.error('Error fetching planet data:', error));
});
