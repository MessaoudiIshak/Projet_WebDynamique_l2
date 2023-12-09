// Popup script
function openPopup(title, description, imageUrl) {
    // Create the popup container
    const popupContainer = document.createElement('div');
    popupContainer.className = 'popup-container';

    // Create the popup content
    const content = document.createElement('div');
    content.className = 'popup-content';

    const exitButton = document.createElement('button');
    exitButton.innerText = 'X';
    exitButton.className = 'exit-button';
    exitButton.onclick = () => {
        // Add action for the exit button
        // For example, close the popup
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
        // Add action for the Watch button
        // For example, redirect to a streaming service
    };

    content.appendChild(exitButton);
    content.appendChild(titleElement);
    content.appendChild(filmImage);
    content.appendChild(descriptionElement);
    content.appendChild(watchButton);

    popupContainer.appendChild(content);

    // Append the popup container to the body
    document.body.appendChild(popupContainer);
}
