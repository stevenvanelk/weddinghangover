function preloadSpotifyEmbeds() {
  const placeholders = document.querySelectorAll('.spotify-placeholder');

  placeholders.forEach((placeholder) => {
    const url = placeholder.getAttribute('data-spotify-url');
    if (!url) return;

    const wrapper = placeholder.closest('.spotify-embed-wrapper');
    if (!wrapper) return;

    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.className = 'spotify-embed preloaded'; // ← gets hidden via CSS
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '80');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture');
    iframe.setAttribute('loading', 'lazy');

    let iframeError = false;
    iframe.addEventListener('error', () => {
      iframeError = true;
    });

    document.body.appendChild(iframe);

    placeholder.addEventListener('click', () => {
      wrapper.innerHTML = '';

      if (iframeError) {
        const fallbackLink = document.createElement('a');
        fallbackLink.href = url;
        fallbackLink.textContent = 'Listen on Spotify';
        fallbackLink.className = 'button-link';
        fallbackLink.target = '_blank';
        wrapper.appendChild(fallbackLink);
      } else {
        iframe.classList.remove('preloaded'); // ← reveal the iframe
        iframe.classList.add('fade-in');      // ← optional: smooth transition
        wrapper.appendChild(iframe);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(preloadSpotifyEmbeds);
  } else {
    window.addEventListener('load', preloadSpotifyEmbeds);
  }
});
