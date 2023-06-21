console.log('This is the Apple Logo Created using HTML and CSS only.');

console.log('Logo created by : Sujay Mukherjee.');

document.addEventListener('keydown', function(event) {
  if (event.key === 'O' && (event.ctrlKey || event.shiftKey || event.altKey)){
    window.open('https://www.apple.com');
  }
});
