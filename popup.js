function openPopup(title, description, imageUrl) {
    const popupContainer = document.createElement('div');
    popupContainer.className = 'popup-container';

    const content = document.createElement('div');
    content.className = 'popup-content';

    const exitButton = document.createElement('button');
    exitButton.innerText = 'X';
    exitButton.className = 'exit-button';
    exitButton.onclick = () => {
        document.body.removeChild(popupContainer);
    };

    const titleElement = document.createElement('h2');
    titleElement.innerText = title;

    const filmImage = document.createElement('img');
    filmImage.className = 'popup-image';
    filmImage.src = imageUrl;
    filmImage.alt = title;

    const descriptionElement = document.createElement('p');
    descriptionElement.innerText = description;

    const watchButton = document.createElement('button');
    watchButton.innerText = 'Watch';
    watchButton.className = 'watch-button';
    watchButton.onclick = () => {
    };

    content.appendChild(exitButton);
    content.appendChild(titleElement);
    content.appendChild(filmImage);
    content.appendChild(descriptionElement);
    content.appendChild(watchButton);

    popupContainer.appendChild(content);

    document.body.appendChild(popupContainer);
}


