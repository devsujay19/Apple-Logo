console.log('This is the Apple Logo Created using HTML and CSS only.');

console.log('Logo re-created in HTML and CSS Code by : Sujay Mukherjee');

document.addEventListener('keydown', function(event) {
  if (event.key === 'O' && (event.ctrlKey || event.shiftKey || event.altKey)){
    window.open('https://www.apple.com');
  }
});
