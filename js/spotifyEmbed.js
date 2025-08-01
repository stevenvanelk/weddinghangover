document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.spotify-placeholder');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const url = btn.getAttribute('data-spotify-url');
      if (!url) return;

      const wrapper = btn.closest('.spotify-embed-wrapper');
      if (!wrapper) return;

      const iframe = document.createElement('iframe');
      iframe.src = url;
      iframe.className = 'spotify-embed';
      iframe.setAttribute('width', '100%');
      iframe.setAttribute('height', '80');
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allow', 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture');
      iframe.setAttribute('loading', 'lazy');

      wrapper.innerHTML = ''; // Clears placeholder
      wrapper.appendChild(iframe); // Adds iframe in its place
    });
  });
});
