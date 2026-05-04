(function() {
  const url = window.location.href;
  const archives = ['archive.is', 'archive.ph', 'archive.today', 'web.archive.org'];
  if (archives.some(a => url.includes(a))) {
    alert('You\'re already on an archive page!');
    return;
  }
  window.location.href = 'https://archive.is/latest/' + encodeURIComponent(url);
})();