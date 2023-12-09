fetch('https://ghibliapi.vercel.app/films')
    .then(response => response.json())
    .then(data => {
        const filmContainer = document.getElementById('filmContainer');

        data.forEach(film => {
            const filmCard = document.createElement('div');
            filmCard.classList.add('film-card');

            const filmImage = document.createElement('img');
            filmImage.classList.add('film-image');
            filmImage.src = film.image;
            filmImage.alt = film.title;

            const filmDetails = document.createElement('div');
            filmDetails.classList.add('film-details');

            const filmTitle = document.createElement('h2');
            filmTitle.classList.add('film-title');
            filmTitle.textContent = film.title;

            const viewButton = document.createElement('button');
            viewButton.classList.add('view-button');
            viewButton.textContent = 'View';
            viewButton.onclick = () => openPopup(film.title, film.description, film.image);

            filmDetails.appendChild(filmTitle);
            filmDetails.appendChild(viewButton);

            filmCard.appendChild(filmImage);
            filmCard.appendChild(filmDetails);

            filmContainer.appendChild(filmCard);
        });
    })
    .catch(error => console.error('Error fetching films:', error));
