let promptContainer;

function getOrCreateUIPrompt() {
  function toggle() {
    promptContainer.classList.toggle('show');
  }

  if (!promptContainer) {
    promptContainer = document.createElement('div');
    promptContainer.className = 'prompt-reload-container';

    promptContainer.innerHTML = `
      <h5>New content is available</h5>
      <button class='prompt-btn-reload'>
        Reload
      </button>
      <button class='prompt-btn-close'>
        &#x2715;
      </button>
    `;

    const btnReload = promptContainer.querySelector('.prompt-btn-reload');
    const btnClose = promptContainer.querySelector('.prompt-btn-close');

    btnReload.addEventListener('click', (e) => {
      e.stopPropagation();
      window.location.reload();
    })
    btnClose.addEventListener('click', (e) => {
      e.stopPropagation();
      toggle();
    });

    document.body.appendChild(promptContainer);
  }

  return {
    toggle,
  };
}
