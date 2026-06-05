const formatter = new Intl.DateTimeFormat('es-AR', {
  weekday: 'long',
  day: 'numeric',
  month: 'long'
});

document.getElementById('date').textContent = formatter.format(new Date());
