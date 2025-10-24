<script>
(function () {
  // list the details ids you will add to the markup
  const ids = [
    'details-cakes',
    'details-cookies'
    // add other details ids here as needed
  ];

  ids.forEach(id => {
    const d = document.getElementById(id);
    if (!d) return;
    d.addEventListener('toggle', () => {
      // only act when this details was opened
      if (!d.open) return;
      ids.forEach(otherId => {
        if (otherId === id) return;
        const o = document.getElementById(otherId);
        if (!o) return;
        // don't close ancestors/descendants of the opened details
        if (o.contains(d) || d.contains(o)) return;
        o.open = false;
      });
    });
  });
})();
</script>