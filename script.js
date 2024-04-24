/*
favi = Circles - Post Malone
ravi = MNMK - Ken Carson
tavi = Rerout3 - DC The Don
savi = 4 - Lotus - Lil Uzi Vert
mavi = 5 - Flatbed Freestyle - Playboi Carti
bavi = 6 - Charmander - Aminé
vavi = 7 - Count Me Out - Kendrick Lamar
pavi = 8 - All We Got - Chance The Rapper
havi = 9 - The Blue - Tobi Lou
zavi = 10 - Sorry Not Sorry - Bryson Tiller
navi = 11 - Rice & Gravy - Smino
gavi = 12 - STATS - Baby Keem
*/
// Song Blocks
var favi = document.getElementById('favi'),
    ravi = document.getElementById('ravi'),
    tavi = document.getElementById('tavi'),
    savi = document.getElementById('savi'),
    mavi = document.getElementById('mavi'),
    bavi = document.getElementById('bavi'),
    vavi = document.getElementById('vavi'),
    pavi = document.getElementById('pavi'),
    havi = document.getElementById('havi'),
    zavi = document.getElementById('zavi'),
    navi = document.getElementById('navi'),
    gavi = document.getElementById('gavi'),
// Body
    body = document.getElementById('body'),
// Songs
    circles = document.getElementById('circles'),
    mNMK = document.getElementById('mNMK'),
    reroute = document.getElementById('reroute'),
    lotus = document.getElementById('lotus'),
    flatbed = document.getElementById('flatbed'),
    charmander = document.getElementById('charmander'),
    cmOut = document.getElementById('cmOut'),
    awGot = document.getElementById('awGot'),
    tBlue = document.getElementById('tBlue'),
    sNOTS = document.getElementById('sNOTS'),
    riceGravy = document.getElementById('riceGravy'),
    stats = document.getElementById('stats'), 
	audios = document.querySelectorAll('audio');

//debug
console.log(audios);

// circles Hover
favi.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  circles.play();
  favi.style.scale = "1.1";
  favi.style.transition = "scale 500ms"
  //body
  document.body.style.backgroundColor = "rgb(6, 57, 53)";
  document.body.style.backgroundImage = "url('https://www.icegif.com/wp-content/uploads/rain-icegif-7.gif')";
  document.body.style.transition = "background-color 2.3s, background-image 2s";
  //MNMK
  ravi.style.backgroundColor = "rgb(19, 50, 98)";
  ravi.style.borderColor = "rgb(30, 120, 122)";
  ravi.style.backgroundImage = "url('https://media3.giphy.com/media/cGx4oplRePUY9bcCpi/giphy.gif?cid=6c09b952xy0xch6hzxhd1cx36z938c07wehxnu71ah0gkgsd&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g')";
  ravi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // reroute
  tavi.style.backgroundColor = "rgb(84,52,10)";
  tavi.style.borderColor = "rgb(84,52,10)"; 
  tavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  tavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // lotus
  savi.style.backgroundColor = "rgb(84,52,10)";
  savi.style.borderColor = "rgb(84,52,10)"; 
  savi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  savi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // flatbed
  mavi.style.backgroundColor = "rgb(84,52,10)";
  mavi.style.borderColor = "rgb(84,52,10)"; 
  mavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  mavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // charmander
  bavi.style.backgroundColor = "rgb(84,52,10)";
  bavi.style.borderColor = "rgb(84,52,10)"; 
  bavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  bavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // cmOut
  vavi.style.backgroundColor = "rgb(84,52,10)";
  vavi.style.borderColor = "rgb(84,52,10)"; 
  vavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  vavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // awGot
  pavi.style.backgroundColor = "rgb(84,52,10)";
  pavi.style.borderColor = "rgb(84,52,10)"; 
  pavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  pavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // tBlue
  havi.style.backgroundColor = "rgb(84,52,10)";
  havi.style.borderColor = "rgb(84,52,10)"; 
  havi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  havi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // sNOTS
  zavi.style.backgroundColor = "rgb(84,52,10)";
  zavi.style.borderColor = "rgb(84,52,10)"; 
  zavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  zavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // riceGravy
  navi.style.backgroundColor = "rgb(84,52,10)";
  navi.style.borderColor = "rgb(84,52,10)"; 
  navi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  navi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // stats
  gavi.style.backgroundColor = "rgb(84,52,10)";
  gavi.style.borderColor = "rgb(84,52,10)"; 
  gavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  gavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  
  

});
}, false);

// circles Leave Hover
favi.addEventListener('mouseleave', function() {
  circles.pause();
  circles.currentTime = 0;
  favi.style.scale = "1";
  //body
  document.body.style.backgroundColor = "rgb(255,230,230)";
  document.body.style.backgroundImage = "url(none)"
  document.body.style.transition = "background-image 0s, background-color 1.5s";
  // MNMK
  ravi.style.backgroundColor = "rgb(14, 4, 8)";
  ravi.style.borderColor = "black";
  ravi.style.backgroundImage = "url('none')";
  ravi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // reroute
  tavi.style.backgroundImage = "url('none')";
  tavi.style.backgroundColor = "rgb(255, 255, 230)";
  tavi.style.borderColor = "rgb(255, 60, 10)";
  tavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // lotus
  savi.style.backgroundImage = "url('none')";
  savi.style.backgroundColor = "rgb(26, 3, 31)";
  savi.style.borderColor = "rgb(221, 212, 59)";
  savi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Flatbed
  mavi.style.backgroundImage = "url('none')";
  mavi.style.backgroundColor = "rgb(34, 34, 34)";
  mavi.style.borderColor = "rgb(255, 255, 255)";
  mavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Charmander
  bavi.style.backgroundImage = "url('none')";
  bavi.style.backgroundColor = "rgb(252, 245, 25)";
  bavi.style.borderColor = "rgb(240, 55, 150)";
  bavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Count Me Out
  vavi.style.backgroundImage = "url('none')";
  vavi.style.backgroundColor = "rgb(119, 73, 33)";
  vavi.style.borderColor = "rgb(196, 182, 146)";
  vavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // All We Got
  pavi.style.backgroundImage = "url('none')";
  pavi.style.backgroundColor = "rgb(252, 106, 113)";
  pavi.style.borderColor = "rgb(23, 61, 156)";
  pavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // The Blue
  havi.style.backgroundImage = "url('none')";
  havi.style.backgroundColor = "rgb(172, 202, 241)";
  havi.style.borderColor = "rgb(189, 195, 195)";
  havi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Sorry Not Sorry
  zavi.style.backgroundImage = "url('none')";
  zavi.style.backgroundColor = "rgb(62, 32, 32)";
  zavi.style.borderColor = "rgb(31, 32, 31)";
  zavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Rice & Gravy
  navi.style.backgroundImage = "url('none')";
  navi.style.backgroundColor = "rgb(175, 170, 128)";
  navi.style.borderColor = "rgb(77, 61, 27)";
  navi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // STATS
  gavi.style.backgroundImage = "url('none')";
  gavi.style.backgroundColor = "rgb(203, 203, 203)";
  gavi.style.borderColor = "rgb(64, 64, 64)";
  gavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
}, false);

// MNMK Hover
ravi.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  mNMK.play();
  ravi.style.scale = "1.1";
  ravi.style.transition = "scale 500ms"
  // Body
  document.body.style.backgroundColor = "black";
  document.body.style.backgroundImage = "url('https://media1.tenor.com/m/9Ej4hAhvBekAAAAC/tv-static-interference.gif')";
  document.body.style.transition = "background-image 1.5s, background-color 1.5s";
  // circles
  favi.style.backgroundColor = "rgb(14, 4, 8)";
  favi.style.borderColor = "rgb(0,0,0)"; 
  favi.style.backgroundImage = "url('https://media1.tenor.com/m/ogPc8keC1TwAAAAC/a-great-chaos-ken-carson.gif.png')";
  favi.style.transition = "border-color 1s, background-color 1s, background-image 0s 3s";
  // reroute
  tavi.style.backgroundColor = "rgb(14, 4, 8)";
  tavi.style.borderColor = "rgb(0,0,0)"; 
  tavi.style.backgroundImage = "url('https://media1.tenor.com/m/tJ0mmRw_YDsAAAAC/black-and-white-ken-carson.gif')";
  tavi.style.transition = "border-color 1s, background-color 1s, background-image 0s 110s";
    // lotus
  savi.style.backgroundColor = "rgb(14, 4, 8)";
  savi.style.borderColor = "rgb(0,0,0)"; 
  savi.style.backgroundImage = "url('https://media1.tenor.com/m/cpBTqH3VCFoAAAAC/ken-carson-opium.gif')";
  savi.style.transition = "border-color 1s, background-color 1s, background-image 0s 15s";
  // flatbed
  mavi.style.backgroundColor = "rgb(14, 4, 8)";
  mavi.style.borderColor = "rgb(0,0,0)"; 
  mavi.style.backgroundImage = "url('https://media1.tenor.com/m/nJmQ2JtO-UwAAAAC/x-teenx.gif')";
  mavi.style.transition = "border-color 1s, background-color 1s, background-image 0s 19s";
  // charmander
  bavi.style.backgroundColor = "rgb(14, 4, 8)";
  bavi.style.borderColor = "rgb(0,0,0)"; 
  bavi.style.backgroundImage = "url('https://media1.tenor.com/m/nM3NH9eusxoAAAAC/ken-carson-succubus.gif')";
  bavi.style.transition = "border-color 1s, background-color 1s, background-image 0s 165s";
  // cmOut
  vavi.style.backgroundColor = "rgb(14, 4, 8)";
  vavi.style.borderColor = "rgb(0,0,0)"; 
  vavi.style.backgroundImage = "url('https://media1.tenor.com/m/G45gDgi26X4AAAAC/ken-ken-carson.gif')";
  vavi.style.transition = "border-color 1s, background-color 1s, background-image 0s 64s";
  // awGot
  pavi.style.backgroundColor = "rgb(14, 4, 8)";
  pavi.style.borderColor = "rgb(0,0,0)"; 
  pavi.style.backgroundImage = "url('https://media1.tenor.com/m/NH-Cc8zN4XAAAAAd/ken-carson-jennifer%27s-body.gif')";
  pavi.style.transition = "border-color 1s, background-color 1s, background-image 0s 55s";
  // tBlue
  havi.style.backgroundColor = "rgb(14, 4, 8)";
  havi.style.borderColor = "rgb(0,0,0)"; 
  havi.style.backgroundImage = "url('https://media1.tenor.com/m/mTb45C1AS-oAAAAC/ken-ken-carson.gif')";
  havi.style.transition = "border-color 1s, background-color 1s, background-image 0s 82s";
  // sNOTS
  zavi.style.backgroundColor = "rgb(14, 4, 8)";
  zavi.style.borderColor = "rgb(0,0,0)"; 
  zavi.style.backgroundImage = "url('https://media1.tenor.com/m/8mHS4k1ks4sAAAAd/ken-carson-opium.gif')";
  zavi.style.transition = "border-color 1s, background-color 1s, background-image 0s 178s";
  // riceGravy
  navi.style.backgroundColor = "rgb(14, 4, 8)";
  navi.style.borderColor = "rgb(0,0,0)"; 
  navi.style.backgroundImage = "url('https://media1.tenor.com/m/1nHFtPteBo8AAAAC/ken-carson-freestyle2.gif')";
  navi.style.transition = "border-color 1s, background-color 1s, background-image 0s 40s";
  // stats
  gavi.style.backgroundColor = "rgb(14, 4, 8)";
  gavi.style.borderColor = "rgb(0,0,0)"; 
  gavi.style.backgroundImage = "url('https://media1.tenor.com/m/nshedwkZVxoAAAAC/kencarson-ken.gif')";
  gavi.style.transition = "border-color 1s, background-color 1s, background-image 0s 144s";
});
  
}, false);

// MNMK Leave Hover
ravi.addEventListener('mouseleave', function() {
  mNMK.pause();
  mNMK.currentTime = 0;
  ravi.style.scale = "1";
  // Body
  document.body.style.backgroundColor = "rgb(255,230,230)";
  document.body.style.backgroundImage = "url(none)"
  document.body.style.transition = "background-image 0s, background-color 1.5s";
  // circles
  favi.style.backgroundColor = "rgb(26,77,80)";
  favi.style.borderColor = "rgb(22, 22, 22)"; 
  favi.style.backgroundImage = "url('none')";
  favi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // reroute
  tavi.style.backgroundImage = "url('none')";
  tavi.style.backgroundColor = "rgb(255, 255, 230)";
  tavi.style.borderColor = "rgb(255, 60, 10)";
  tavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // lotus
  savi.style.backgroundImage = "url('none')";
  savi.style.backgroundColor = "rgb(26, 3, 31)";
  savi.style.borderColor = "rgb(221, 212, 59)";
  savi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Flatbed
  mavi.style.backgroundImage = "url('none')";
  mavi.style.backgroundColor = "rgb(34, 34, 34)";
  mavi.style.borderColor = "rgb(255, 255, 255)";
  mavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Charmander
  bavi.style.backgroundImage = "url('none')";
  bavi.style.backgroundColor = "rgb(252, 245, 25)";
  bavi.style.borderColor = "rgb(240, 55, 150)";
  bavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Count Me Out
  vavi.style.backgroundImage = "url('none')";
  vavi.style.backgroundColor = "rgb(119, 73, 33)";
  vavi.style.borderColor = "rgb(196, 182, 146)";
  vavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // All We Got
  pavi.style.backgroundImage = "url('none')";
  pavi.style.backgroundColor = "rgb(252, 106, 113)";
  pavi.style.borderColor = "rgb(23, 61, 156)";
  pavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // The Blue
  havi.style.backgroundImage = "url('none')";
  havi.style.backgroundColor = "rgb(172, 202, 241)";
  havi.style.borderColor = "rgb(189, 195, 195)";
  havi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Sorry Not Sorry
  zavi.style.backgroundImage = "url('none')";
  zavi.style.backgroundColor = "rgb(62, 32, 32)";
  zavi.style.borderColor = "rgb(31, 32, 31)";
  zavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Rice & Gravy
  navi.style.backgroundImage = "url('none')";
  navi.style.backgroundColor = "rgb(175, 170, 128)";
  navi.style.borderColor = "rgb(77, 61, 27)";
  navi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // STATS
  gavi.style.backgroundImage = "url('none')";
  gavi.style.backgroundColor = "rgb(203, 203, 203)";
  gavi.style.borderColor = "rgb(64, 64, 64)";
  gavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  
}, false);

// reroute Hover
tavi.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  reroute.play();
  tavi.style.scale = "1.1";
  tavi.style.transition = "scale 500ms"
  // Body
  document.body.style.backgroundColor = "rgb(0,0,0)";
  document.body.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmdvYzkxNDcyNWF5YXZoanJiNHJ5bG14N3hxN2V1NzhvejQ4cjFlNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26DMTFdmddWLJHFYY/giphy.gif')";
  document.body.style.transition = "background-image 1.5s, background-color 1.5s";
  // circles
  favi.style.backgroundImage = "url('https://media1.tenor.com/m/Rhp6mh-opeYAAAAC/dc-the-don.gif')";
  favi.style.backgroundColor = "rgb(0, 0, 0)";
  favi.style.borderColor = "rgb(55, 255, 130)";
  favi.style.transition = "border-color 1s, background-color 1s, background-image 0s 3s";
  // MNMK
  ravi.style.backgroundImage = "url('https://media1.tenor.com/m/xMCcCKMK_AQAAAAd/dc-the-don.gif')";
  ravi.style.backgroundColor = "rgb(0, 0, 0)";
  ravi.style.borderColor = "rgb(123, 99, 235)";
  ravi.style.transition = "border-color 1s, background-color 1s, background-image 0s 40s";
    // lotus
  savi.style.backgroundColor = "rgb(0,0,0)";
  savi.style.borderColor = "rgb(107, 207, 232)"; 
  savi.style.backgroundImage = "url('https://media1.tenor.com/m/4B3z8pAWGGsAAAAd/dc-the-don.gif')";
  savi.style.transition = "border-color 1s, background-color 1s, background-image 0s 135s";
  // flatbed
  mavi.style.backgroundColor = "rgb(0,0,0)";
  mavi.style.borderColor = "rgb(252, 144, 35)"; 
  mavi.style.backgroundImage = "url('https://media1.tenor.com/m/1XW0qmEHUD4AAAAC/dance-dc-the-don.gif')";
  mavi.style.transition = "border-color 1s, background-color 1s, background-image 0s 94s";
  // charmander
  bavi.style.backgroundColor = "rgb(0,0,0)";
  bavi.style.borderColor = "rgb(224,182,10)"; 
  bavi.style.backgroundImage = "url('https://media1.tenor.com/m/PiC9oGLfU1YAAAAd/dc-the-don.gif')";
  bavi.style.transition = "border-color 1s, background-color 1s, background-image 0s 27s";
  // cmOut
  vavi.style.backgroundColor = "rgb(0,0,0)";
  vavi.style.borderColor = "rgb(247, 92, 15)"; 
  vavi.style.backgroundImage = "url('https://media1.tenor.com/m/V5kblH_BPYUAAAAd/dc-the-don.gif')";
  vavi.style.transition = "border-color 1s, background-color 1s, background-image 0s 106.5s";
  // awGot
  pavi.style.backgroundColor = "rgb(0,0,0)";
  pavi.style.borderColor = "rgb(34,52,200)"; 
  pavi.style.backgroundImage = "url('https://media1.tenor.com/m/OFyh4CU6AhoAAAAd/dc-the-don.gif')";
  pavi.style.transition = "border-color 1s, background-color 1s, background-image 0s 19s";
  // tBlue
  havi.style.backgroundColor = "rgb(0,0,0)";
  havi.style.borderColor = "rgb(219, 29, 60)"; 
  havi.style.backgroundImage = "url('https://media1.tenor.com/m/PPtMAy8p55IAAAAd/dc-the-don.gif')";
  havi.style.transition = "border-color 1s, background-color 1s, background-image 0s 80s";
  // sNOTS
  zavi.style.backgroundColor = "rgb(0,0,0)";
  zavi.style.borderColor = "rgb(175, 10, 240)"; 
  zavi.style.backgroundImage = "url('https://media1.tenor.com/m/DCNzMXk0-ewAAAAC/dcthedon.gif')";
  zavi.style.transition = "border-color 1s, background-color 1s, background-image 0s 66s";
  // riceGravy
  navi.style.backgroundColor = "rgb(0,0,0)";
  navi.style.borderColor = "rgb(222, 27, 167)"; 
  navi.style.backgroundImage = "url('https://media1.tenor.com/m/nKhxZN12-bYAAAAd/dc-the-don.gif')";
  navi.style.transition = "border-color 1s, background-color 1s, background-image 0s 13s";
  // stats
  gavi.style.backgroundColor = "rgb(0,0,0)";
  gavi.style.borderColor = "rgb(8, 201, 47)"; 
  gavi.style.backgroundImage = "url('https://media1.tenor.com/m/Z7Izjq-sUxYAAAAd/dc-the-don.gif')";
  gavi.style.transition = "border-color 1s, background-color 1s, background-image 0s 120s";
});
}, false);

// reroute Leave Hover
tavi.addEventListener('mouseleave', function() {
 reroute.pause();
  reroute.currentTime = 0;
  tavi.style.scale = "1";
  //Body
  document.body.style.backgroundColor = "rgb(255,230,230)";
  document.body.style.backgroundImage = "url(none)"
  document.body.style.transition = "background-image 0s, background-color 1.5s";
  // MNMK
  ravi.style.backgroundColor = "rgb(14, 4, 8)";
  ravi.style.borderColor = "black"; 
  ravi.style.backgroundImage = "url('none')";
  ravi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // circles
  favi.style.backgroundImage = "url('none')";
  favi.style.backgroundColor = "rgb(26,77,80)";
  favi.style.borderColor = "rgb(22, 22, 22)";
  favi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // lotus
  savi.style.backgroundImage = "url('none')";
  savi.style.backgroundColor = "rgb(26, 3, 31)";
  savi.style.borderColor = "rgb(221, 212, 59)";
  savi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Flatbed
  mavi.style.backgroundImage = "url('none')";
  mavi.style.backgroundColor = "rgb(34, 34, 34)";
  mavi.style.borderColor = "rgb(255, 255, 255)";
  mavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Charmander
  bavi.style.backgroundImage = "url('none')";
  bavi.style.backgroundColor = "rgb(252, 245, 25)";
  bavi.style.borderColor = "rgb(240, 55, 150)";
  bavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Count Me Out
  vavi.style.backgroundImage = "url('none')";
  vavi.style.backgroundColor = "rgb(119, 73, 33)";
  vavi.style.borderColor = "rgb(196, 182, 146)";
  vavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // All We Got
  pavi.style.backgroundImage = "url('none')";
  pavi.style.backgroundColor = "rgb(252, 106, 113)";
  pavi.style.borderColor = "rgb(23, 61, 156)";
  pavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // The Blue
  havi.style.backgroundImage = "url('none')";
  havi.style.backgroundColor = "rgb(172, 202, 241)";
  havi.style.borderColor = "rgb(189, 195, 195)";
  havi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Sorry Not Sorry
  zavi.style.backgroundImage = "url('none')";
  zavi.style.backgroundColor = "rgb(62, 32, 32)";
  zavi.style.borderColor = "rgb(31, 32, 31)";
  zavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Rice & Gravy
  navi.style.backgroundImage = "url('none')";
  navi.style.backgroundColor = "rgb(175, 170, 128)";
  navi.style.borderColor = "rgb(77, 61, 27)";
  navi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // STATS
  gavi.style.backgroundImage = "url('none')";
  gavi.style.backgroundColor = "rgb(203, 203, 203)";
  gavi.style.borderColor = "rgb(64, 64, 64)";
  gavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
}, false);

// lotus Hover
savi.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  lotus.play();
  savi.style.scale = "1.1";
  savi.style.transition = "scale 500ms"
  // Body
  document.body.style.backgroundColor = "rgb(255,230,230)";
  document.body.style.backgroundImage = "url(' ')";
  document.body.style.transition = "background-image 1.5s, background-color 1.5s";
  // circles
  favi.style.backgroundImage = "url('https://media1.tenor.com/m/KYz4uDh6KM0AAAAd/dc-the-don-sad-frosty.gif')";
  favi.style.backgroundColor = "rgb(255, 255, 230)";
  favi.style.borderColor = "slategray";
  favi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // MNMK
  ravi.style.backgroundImage = "url('none')";
  ravi.style.backgroundColor = "rgb(255, 255, 230)";
  ravi.style.borderColor = "slategray";
  ravi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
    // reroute
  tavi.style.backgroundColor = "rgb(84,52,10)";
  tavi.style.borderColor = "rgb(84,52,10)"; 
  tavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  tavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // flatbed
  mavi.style.backgroundColor = "rgb(84,52,10)";
  mavi.style.borderColor = "rgb(84,52,10)"; 
  mavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  mavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // charmander
  bavi.style.backgroundColor = "rgb(84,52,10)";
  bavi.style.borderColor = "rgb(84,52,10)"; 
  bavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  bavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // cmOut
  vavi.style.backgroundColor = "rgb(84,52,10)";
  vavi.style.borderColor = "rgb(84,52,10)"; 
  vavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  vavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // awGot
  pavi.style.backgroundColor = "rgb(84,52,10)";
  pavi.style.borderColor = "rgb(84,52,10)"; 
  pavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  pavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // tBlue
  havi.style.backgroundColor = "rgb(84,52,10)";
  havi.style.borderColor = "rgb(84,52,10)"; 
  havi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  havi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // sNOTS
  zavi.style.backgroundColor = "rgb(84,52,10)";
  zavi.style.borderColor = "rgb(84,52,10)"; 
  zavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  zavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // riceGravy
  navi.style.backgroundColor = "rgb(84,52,10)";
  navi.style.borderColor = "rgb(84,52,10)"; 
  navi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  navi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // stats
  gavi.style.backgroundColor = "rgb(84,52,10)";
  gavi.style.borderColor = "rgb(84,52,10)"; 
  gavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  gavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  
});
}, false);

// lotus Leave Hover
savi.addEventListener('mouseleave', function() {
 lotus.pause();
  lotus.currentTime = 0;
  savi.style.scale = "1";
  //Body
  document.body.style.backgroundColor = "rgb(255,230,230)";
  document.body.style.backgroundImage = "url(none)"
  document.body.style.transition = "background-image 0s, background-color 1.5s";
  // MNMK
  ravi.style.backgroundColor = "rgb(14, 4, 8)";
  ravi.style.borderColor = "black";
  ravi.style.backgroundImage = "url('none')";
  ravi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // reroute
  tavi.style.backgroundImage = "url('none')";
  tavi.style.backgroundColor = "rgb(255, 255, 230)";
  tavi.style.borderColor = "rgb(255, 60, 10)";
  tavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // circles
  favi.style.backgroundImage = "url('none')";
  favi.style.backgroundColor = "rgb(26,77,80)";
  favi.style.borderColor = "rgb(22, 22, 22)"; 
  favi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Flatbed
  mavi.style.backgroundImage = "url('none')";
  mavi.style.backgroundColor = "rgb(34, 34, 34)";
  mavi.style.borderColor = "rgb(255, 255, 255)";
  mavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Charmander
  bavi.style.backgroundImage = "url('none')";
  bavi.style.backgroundColor = "rgb(252, 245, 25)";
  bavi.style.borderColor = "rgb(240, 55, 150)";
  bavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Count Me Out
  vavi.style.backgroundImage = "url('none')";
  vavi.style.backgroundColor = "rgb(119, 73, 33)";
  vavi.style.borderColor = "rgb(196, 182, 146)";
  vavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // All We Got
  pavi.style.backgroundImage = "url('none')";
  pavi.style.backgroundColor = "rgb(252, 106, 113)";
  pavi.style.borderColor = "rgb(23, 61, 156)";
  pavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // The Blue
  havi.style.backgroundImage = "url('none')";
  havi.style.backgroundColor = "rgb(172, 202, 241)";
  havi.style.borderColor = "rgb(189, 195, 195)";
  havi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Sorry Not Sorry
  zavi.style.backgroundImage = "url('none')";
  zavi.style.backgroundColor = "rgb(62, 32, 32)";
  zavi.style.borderColor = "rgb(31, 32, 31)";
  zavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Rice & Gravy
  navi.style.backgroundImage = "url('none')";
  navi.style.backgroundColor = "rgb(175, 170, 128)";
  navi.style.borderColor = "rgb(77, 61, 27)";
  navi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // STATS
  gavi.style.backgroundImage = "url('none')";
  gavi.style.backgroundColor = "rgb(203, 203, 203)";
  gavi.style.borderColor = "rgb(64, 64, 64)";
  gavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  
}, false);

// flatbed Hover
mavi.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  flatbed.play();
  mavi.style.scale = "1.1";
  mavi.style.transition = "scale 500ms"
  // Body
  document.body.style.backgroundColor = "rgb(255,230,230)";
  document.body.style.backgroundImage = "url(' ')";
  document.body.style.transition = "background-image 1.5s, background-color 1.5s";
  // circles
  favi.style.backgroundImage = "url('https://media1.tenor.com/m/KYz4uDh6KM0AAAAd/dc-the-don-sad-frosty.gif')";
  favi.style.backgroundColor = "rgb(255, 255, 230)";
  favi.style.borderColor = "slategray";
  favi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // MNMK
  ravi.style.backgroundImage = "url('none')";
  ravi.style.backgroundColor = "rgb(255, 255, 230)";
  ravi.style.borderColor = "slategray";
  ravi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
    // lotus
  savi.style.backgroundColor = "rgb(84,52,10)";
  savi.style.borderColor = "rgb(84,52,10)"; 
  savi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  savi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // reroute
  tavi.style.backgroundColor = "rgb(84,52,10)";
  tavi.style.borderColor = "rgb(84,52,10)"; 
  tavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  tavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // charmander
  bavi.style.backgroundColor = "rgb(84,52,10)";
  bavi.style.borderColor = "rgb(84,52,10)"; 
  bavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  bavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // cmOut
  vavi.style.backgroundColor = "rgb(84,52,10)";
  vavi.style.borderColor = "rgb(84,52,10)"; 
  vavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  vavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // awGot
  pavi.style.backgroundColor = "rgb(84,52,10)";
  pavi.style.borderColor = "rgb(84,52,10)"; 
  pavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  pavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // tBlue
  havi.style.backgroundColor = "rgb(84,52,10)";
  havi.style.borderColor = "rgb(84,52,10)"; 
  havi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  havi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // sNOTS
  zavi.style.backgroundColor = "rgb(84,52,10)";
  zavi.style.borderColor = "rgb(84,52,10)"; 
  zavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  zavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // riceGravy
  navi.style.backgroundColor = "rgb(84,52,10)";
  navi.style.borderColor = "rgb(84,52,10)"; 
  navi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  navi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // stats
  gavi.style.backgroundColor = "rgb(84,52,10)";
  gavi.style.borderColor = "rgb(84,52,10)"; 
  gavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  gavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
});
}, false);

// flatbed Leave Hover
mavi.addEventListener('mouseleave', function() {
 flatbed.pause();
  flatbed.currentTime = 0;
  mavi.style.scale = "1";
  //Body
  document.body.style.backgroundColor = "rgb(255,230,230)";
  document.body.style.backgroundImage = "url(none)"
  document.body.style.transition = "background-image 0s, background-color 1.5s";
  // MNMK
  ravi.style.backgroundColor = "rgb(14, 4, 8)";
  ravi.style.borderColor = "black";
  ravi.style.backgroundImage = "url('none')";
  ravi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // reroute
  tavi.style.backgroundImage = "url('none')";
  tavi.style.backgroundColor = "rgb(255, 255, 230)";
  tavi.style.borderColor = "rgb(255, 60, 10)";
  tavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // lotus
  savi.style.backgroundImage = "url('none')";
  savi.style.backgroundColor = "rgb(26, 3, 31)";
  savi.style.borderColor = "rgb(221, 212, 59)";
  savi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Circles
  favi.style.backgroundImage = "url('none')";
  favi.style.backgroundColor = "rgb(26,77,80)";
  favi.style.borderColor = "rgb(22, 22, 22)"; 
  favi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Charmander
  bavi.style.backgroundImage = "url('none')";
  bavi.style.backgroundColor = "rgb(252, 245, 25)";
  bavi.style.borderColor = "rgb(240, 55, 150)";
  bavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Count Me Out
  vavi.style.backgroundImage = "url('none')";
  vavi.style.backgroundColor = "rgb(119, 73, 33)";
  vavi.style.borderColor = "rgb(196, 182, 146)";
  vavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // All We Got
  pavi.style.backgroundImage = "url('none')";
  pavi.style.backgroundColor = "rgb(252, 106, 113)";
  pavi.style.borderColor = "rgb(23, 61, 156)";
  pavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // The Blue
  havi.style.backgroundImage = "url('none')";
  havi.style.backgroundColor = "rgb(172, 202, 241)";
  havi.style.borderColor = "rgb(189, 195, 195)";
  havi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Sorry Not Sorry
  zavi.style.backgroundImage = "url('none')";
  zavi.style.backgroundColor = "rgb(62, 32, 32)";
  zavi.style.borderColor = "rgb(31, 32, 31)";
  zavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Rice & Gravy
  navi.style.backgroundImage = "url('none')";
  navi.style.backgroundColor = "rgb(175, 170, 128)";
  navi.style.borderColor = "rgb(77, 61, 27)";
  navi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // STATS
  gavi.style.backgroundImage = "url('none')";
  gavi.style.backgroundColor = "rgb(203, 203, 203)";
  gavi.style.borderColor = "rgb(64, 64, 64)";
  gavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
}, false);

// charmander Hover
bavi.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  charmander.play();
  bavi.style.scale = "1.1";
  bavi.style.transition = "scale 500ms"
  // Body
  document.body.style.backgroundColor = "rgb(255,230,230)";
  document.body.style.backgroundImage = "url(' ')";
  document.body.style.transition = "background-image 1.5s, background-color 1.5s";
  // circles
  favi.style.backgroundImage = "url('https://media1.tenor.com/m/KYz4uDh6KM0AAAAd/dc-the-don-sad-frosty.gif')";
  favi.style.backgroundColor = "rgb(255, 255, 230)";
  favi.style.borderColor = "slategray";
  favi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // MNMK
  ravi.style.backgroundImage = "url('none')";
  ravi.style.backgroundColor = "rgb(255, 255, 230)";
  ravi.style.borderColor = "slategray";
  ravi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
    // lotus
  savi.style.backgroundColor = "rgb(84,52,10)";
  savi.style.borderColor = "rgb(84,52,10)"; 
  savi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  savi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // flatbed
  mavi.style.backgroundColor = "rgb(84,52,10)";
  mavi.style.borderColor = "rgb(84,52,10)"; 
  mavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  mavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // reroute
  tavi.style.backgroundColor = "rgb(84,52,10)";
  tavi.style.borderColor = "rgb(84,52,10)"; 
  tavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  tavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // cmOut
  vavi.style.backgroundColor = "rgb(84,52,10)";
  vavi.style.borderColor = "rgb(84,52,10)"; 
  vavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  vavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // awGot
  pavi.style.backgroundColor = "rgb(84,52,10)";
  pavi.style.borderColor = "rgb(84,52,10)"; 
  pavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  pavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // tBlue
  havi.style.backgroundColor = "rgb(84,52,10)";
  havi.style.borderColor = "rgb(84,52,10)"; 
  havi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  havi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // sNOTS
  zavi.style.backgroundColor = "rgb(84,52,10)";
  zavi.style.borderColor = "rgb(84,52,10)"; 
  zavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  zavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // riceGravy
  navi.style.backgroundColor = "rgb(84,52,10)";
  navi.style.borderColor = "rgb(84,52,10)"; 
  navi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  navi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // stats
  gavi.style.backgroundColor = "rgb(84,52,10)";
  gavi.style.borderColor = "rgb(84,52,10)"; 
  gavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  gavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
});
}, false);
// charmander Leave Hover
bavi.addEventListener('mouseleave', function() {
 charmander.pause();
  charmander.currentTime = 0;
  bavi.style.scale = "1";
  //Body
  document.body.style.backgroundColor = "rgb(255,230,230)";
  document.body.style.backgroundImage = "url(none)"
  document.body.style.transition = "background-image 0s, background-color 1.5s";
  // MNMK
  ravi.style.backgroundColor = "rgb(14, 4, 8)";
  ravi.style.borderColor = "black";
  ravi.style.backgroundImage = "url('none')";
  ravi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // reroute
  tavi.style.backgroundImage = "url('none')";
  tavi.style.backgroundColor = "rgb(255, 255, 230)";
  tavi.style.borderColor = "rgb(255, 60, 10)";
  tavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // lotus
  savi.style.backgroundImage = "url('none')";
  savi.style.backgroundColor = "rgb(26, 3, 31)";
  savi.style.borderColor = "rgb(221, 212, 59)";
  savi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Flatbed
  mavi.style.backgroundImage = "url('none')";
  mavi.style.backgroundColor = "rgb(34, 34, 34)";
  mavi.style.borderColor = "rgb(255, 255, 255)";
  mavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Circles
  favi.style.backgroundImage = "url('none')";
  favi.style.backgroundColor = "rgb(26,77,80)";
  favi.style.borderColor = "rgb(22, 22, 22)"; 
  favi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Count Me Out
  vavi.style.backgroundImage = "url('none')";
  vavi.style.backgroundColor = "rgb(119, 73, 33)";
  vavi.style.borderColor = "rgb(196, 182, 146)";
  vavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // All We Got
  pavi.style.backgroundImage = "url('none')";
  pavi.style.backgroundColor = "rgb(252, 106, 113)";
  pavi.style.borderColor = "rgb(23, 61, 156)";
  pavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // The Blue
  havi.style.backgroundImage = "url('none')";
  havi.style.backgroundColor = "rgb(172, 202, 241)";
  havi.style.borderColor = "rgb(189, 195, 195)";
  havi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Sorry Not Sorry
  zavi.style.backgroundImage = "url('none')";
  zavi.style.backgroundColor = "rgb(62, 32, 32)";
  zavi.style.borderColor = "rgb(31, 32, 31)";
  zavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Rice & Gravy
  navi.style.backgroundImage = "url('none')";
  navi.style.backgroundColor = "rgb(175, 170, 128)";
  navi.style.borderColor = "rgb(77, 61, 27)";
  navi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // STATS
  gavi.style.backgroundImage = "url('none')";
  gavi.style.backgroundColor = "rgb(203, 203, 203)";
  gavi.style.borderColor = "rgb(64, 64, 64)";
  gavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
}, false);

// Count Me Out Hover
vavi.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  cmOut.play();
  vavi.style.scale = "1.1";
  vavi.style.transition = "scale 500ms"
  // Body
  document.body.style.backgroundColor = "rgb(255,230,230)";
  document.body.style.backgroundImage = "url(' ')";
  document.body.style.transition = "background-image 1.5s, background-color 1.5s";
  // circles
  favi.style.backgroundImage = "url('https://media1.tenor.com/m/KYz4uDh6KM0AAAAd/dc-the-don-sad-frosty.gif')";
  favi.style.backgroundColor = "rgb(255, 255, 230)";
  favi.style.borderColor = "slategray";
  favi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // MNMK
  ravi.style.backgroundImage = "url('none')";
  ravi.style.backgroundColor = "rgb(255, 255, 230)";
  ravi.style.borderColor = "slategray";
  ravi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
    // lotus
  savi.style.backgroundColor = "rgb(84,52,10)";
  savi.style.borderColor = "rgb(84,52,10)"; 
  savi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  savi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // flatbed
  mavi.style.backgroundColor = "rgb(84,52,10)";
  mavi.style.borderColor = "rgb(84,52,10)"; 
  mavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  mavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // charmander
  bavi.style.backgroundColor = "rgb(84,52,10)";
  bavi.style.borderColor = "rgb(84,52,10)"; 
  bavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  bavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // reroute
  tavi.style.backgroundColor = "rgb(84,52,10)";
  tavi.style.borderColor = "rgb(84,52,10)"; 
  tavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  tavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // awGot
  pavi.style.backgroundColor = "rgb(84,52,10)";
  pavi.style.borderColor = "rgb(84,52,10)"; 
  pavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  pavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // tBlue
  havi.style.backgroundColor = "rgb(84,52,10)";
  havi.style.borderColor = "rgb(84,52,10)"; 
  havi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  havi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // sNOTS
  zavi.style.backgroundColor = "rgb(84,52,10)";
  zavi.style.borderColor = "rgb(84,52,10)"; 
  zavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  zavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // riceGravy
  navi.style.backgroundColor = "rgb(84,52,10)";
  navi.style.borderColor = "rgb(84,52,10)"; 
  navi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  navi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // stats
  gavi.style.backgroundColor = "rgb(84,52,10)";
  gavi.style.borderColor = "rgb(84,52,10)"; 
  gavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  gavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
});
}, false);

// Count Me Out Leave Hover
vavi.addEventListener('mouseleave', function() {
 cmOut.pause();
  cmOut.currentTime = 0;
  vavi.style.scale = "1";
  //Body
  document.body.style.backgroundColor = "rgb(255,230,230)";
  document.body.style.backgroundImage = "url(none)"
  document.body.style.transition = "background-image 0s, background-color 1.5s";
  // MNMK
  ravi.style.backgroundColor = "rgb(14, 4, 8)";
  ravi.style.borderColor = "black";
  ravi.style.backgroundImage = "url('none')";
  ravi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // reroute
  tavi.style.backgroundImage = "url('none')";
  tavi.style.backgroundColor = "rgb(255, 255, 230)";
  tavi.style.borderColor = "rgb(255, 60, 10)";
  tavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // lotus
  savi.style.backgroundImage = "url('none')";
  savi.style.backgroundColor = "rgb(26, 3, 31)";
  savi.style.borderColor = "rgb(221, 212, 59)";
  savi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Flatbed
  mavi.style.backgroundImage = "url('none')";
  mavi.style.backgroundColor = "rgb(34, 34, 34)";
  mavi.style.borderColor = "rgb(255, 255, 255)";
  mavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Charmander
  bavi.style.backgroundImage = "url('none')";
  bavi.style.backgroundColor = "rgb(252, 245, 25)";
  bavi.style.borderColor = "rgb(240, 55, 150)";
  bavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Circles
  favi.style.backgroundImage = "url('none')";
  favi.style.backgroundColor = "rgb(26,77,80)";
  favi.style.borderColor = "rgb(22, 22, 22)"; 
  favi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // All We Got
  pavi.style.backgroundImage = "url('none')";
  pavi.style.backgroundColor = "rgb(252, 106, 113)";
  pavi.style.borderColor = "rgb(23, 61, 156)";
  pavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // The Blue
  havi.style.backgroundImage = "url('none')";
  havi.style.backgroundColor = "rgb(172, 202, 241)";
  havi.style.borderColor = "rgb(189, 195, 195)";
  havi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Sorry Not Sorry
  zavi.style.backgroundImage = "url('none')";
  zavi.style.backgroundColor = "rgb(62, 32, 32)";
  zavi.style.borderColor = "rgb(31, 32, 31)";
  zavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Rice & Gravy
  navi.style.backgroundImage = "url('none')";
  navi.style.backgroundColor = "rgb(175, 170, 128)";
  navi.style.borderColor = "rgb(77, 61, 27)";
  navi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // STATS
  gavi.style.backgroundImage = "url('none')";
  gavi.style.backgroundColor = "rgb(203, 203, 203)";
  gavi.style.borderColor = "rgb(64, 64, 64)";
  gavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
}, false);

// All We Got Hover
pavi.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  awGot.play();
  pavi.style.scale = "1.1";
  pavi.style.transition = "scale 500ms"
  // Body
  document.body.style.backgroundColor = "rgb(255,230,230)";
  document.body.style.backgroundImage = "url(' ')";
  document.body.style.transition = "background-image 1.5s, background-color 1.5s";
  // circles
  favi.style.backgroundImage = "url('https://media1.tenor.com/m/KYz4uDh6KM0AAAAd/dc-the-don-sad-frosty.gif')";
  favi.style.backgroundColor = "rgb(255, 255, 230)";
  favi.style.borderColor = "slategray";
  favi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // MNMK
  ravi.style.backgroundImage = "url('none')";
  ravi.style.backgroundColor = "rgb(255, 255, 230)";
  ravi.style.borderColor = "slategray";
  ravi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
    // lotus
  savi.style.backgroundColor = "rgb(84,52,10)";
  savi.style.borderColor = "rgb(84,52,10)"; 
  savi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  savi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // flatbed
  mavi.style.backgroundColor = "rgb(84,52,10)";
  mavi.style.borderColor = "rgb(84,52,10)"; 
  mavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  mavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // charmander
  bavi.style.backgroundColor = "rgb(84,52,10)";
  bavi.style.borderColor = "rgb(84,52,10)"; 
  bavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  bavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // cmOut
  vavi.style.backgroundColor = "rgb(84,52,10)";
  vavi.style.borderColor = "rgb(84,52,10)"; 
  vavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  vavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // reroute
  tavi.style.backgroundColor = "rgb(84,52,10)";
  tavi.style.borderColor = "rgb(84,52,10)"; 
  tavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  tavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // tBlue
  havi.style.backgroundColor = "rgb(84,52,10)";
  havi.style.borderColor = "rgb(84,52,10)"; 
  havi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  havi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // sNOTS
  zavi.style.backgroundColor = "rgb(84,52,10)";
  zavi.style.borderColor = "rgb(84,52,10)"; 
  zavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  zavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // riceGravy
  navi.style.backgroundColor = "rgb(84,52,10)";
  navi.style.borderColor = "rgb(84,52,10)"; 
  navi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  navi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // stats
  gavi.style.backgroundColor = "rgb(84,52,10)";
  gavi.style.borderColor = "rgb(84,52,10)"; 
  gavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  gavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
});
}, false);

// All We Got Leave Hover
pavi.addEventListener('mouseleave', function() {
 awGot.pause();
  awGot.currentTime = 0;
  pavi.style.scale = "1";
  //Body
  document.body.style.backgroundColor = "rgb(255,230,230)";
  document.body.style.backgroundImage = "url(none)"
  document.body.style.transition = "background-image 0s, background-color 1.5s";
  //circles
  favi.style.backgroundImage = "url('none')";
  favi.style.backgroundColor = "rgb(26,77,80)";
  favi.style.borderColor = "rgb(22, 22, 22)";
  favi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  //MNMK
  ravi.style.backgroundImage = "url('none')";
  ravi.style.backgroundColor = "rgb(14, 4, 8)";
  ravi.style.borderColor = "black";
  ravi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // reroute
  tavi.style.backgroundImage = "url('none')";
  tavi.style.backgroundColor = "rgb(255, 255, 230)";
  tavi.style.borderColor = "rgb(255, 60, 10)";
  tavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // lotus
  savi.style.backgroundImage = "url('none')";
  savi.style.backgroundColor = "rgb(26, 3, 31)";
  savi.style.borderColor = "rgb(221, 212, 59)";
  savi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Flatbed
  mavi.style.backgroundImage = "url('none')";
  mavi.style.backgroundColor = "rgb(34, 34, 34)";
  mavi.style.borderColor = "rgb(255, 255, 255)";
  mavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Charmander
  bavi.style.backgroundImage = "url('none')";
  bavi.style.backgroundColor = "rgb(252, 245, 25)";
  bavi.style.borderColor = "rgb(240, 55, 150)";
  bavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Count Me Out
  vavi.style.backgroundImage = "url('none')";
  vavi.style.backgroundColor = "rgb(119, 73, 33)";
  vavi.style.borderColor = "rgb(196, 182, 146)";
  vavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // The Blue
  havi.style.backgroundImage = "url('none')";
  havi.style.backgroundColor = "rgb(172, 202, 241)";
  havi.style.borderColor = "rgb(189, 195, 195)";
  havi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Sorry Not Sorry
  zavi.style.backgroundImage = "url('none')";
  zavi.style.backgroundColor = "rgb(62, 32, 32)";
  zavi.style.borderColor = "rgb(31, 32, 31)";
  zavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Rice & Gravy
  navi.style.backgroundImage = "url('none')";
  navi.style.backgroundColor = "rgb(175, 170, 128)";
  navi.style.borderColor = "rgb(77, 61, 27)";
  navi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // STATS
  gavi.style.backgroundImage = "url('none')";
  gavi.style.backgroundColor = "rgb(203, 203, 203)";
  gavi.style.borderColor = "rgb(64, 64, 64)";
  gavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
}, false);

// The Blue Hover
havi.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  tBlue.play();
  havi.style.scale = "1.1";
  havi.style.transition = "scale 500ms"
  // Body
  document.body.style.backgroundColor = "rgb(255,230,230)";
  document.body.style.backgroundImage = "url(' ')";
  document.body.style.transition = "background-image 1.5s, background-color 1.5s";
  // circles
  favi.style.backgroundImage = "url('https://media1.tenor.com/m/KYz4uDh6KM0AAAAd/dc-the-don-sad-frosty.gif')";
  favi.style.backgroundColor = "rgb(255, 255, 230)";
  favi.style.borderColor = "slategray";
  favi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // MNMK
  ravi.style.backgroundImage = "url('none')";
  ravi.style.backgroundColor = "rgb(255, 255, 230)";
  ravi.style.borderColor = "slategray";
  ravi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
    // lotus
  savi.style.backgroundColor = "rgb(84,52,10)";
  savi.style.borderColor = "rgb(84,52,10)"; 
  savi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  savi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // flatbed
  mavi.style.backgroundColor = "rgb(84,52,10)";
  mavi.style.borderColor = "rgb(84,52,10)"; 
  mavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  mavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // charmander
  bavi.style.backgroundColor = "rgb(84,52,10)";
  bavi.style.borderColor = "rgb(84,52,10)"; 
  bavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  bavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // cmOut
  vavi.style.backgroundColor = "rgb(84,52,10)";
  vavi.style.borderColor = "rgb(84,52,10)"; 
  vavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  vavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // awGot
  pavi.style.backgroundColor = "rgb(84,52,10)";
  pavi.style.borderColor = "rgb(84,52,10)"; 
  pavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  pavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // reroute
  tavi.style.backgroundColor = "rgb(84,52,10)";
  tavi.style.borderColor = "rgb(84,52,10)"; 
  tavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  tavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // sNOTS
  zavi.style.backgroundColor = "rgb(84,52,10)";
  zavi.style.borderColor = "rgb(84,52,10)"; 
  zavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  zavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // riceGravy
  navi.style.backgroundColor = "rgb(84,52,10)";
  navi.style.borderColor = "rgb(84,52,10)"; 
  navi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  navi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // stats
  gavi.style.backgroundColor = "rgb(84,52,10)";
  gavi.style.borderColor = "rgb(84,52,10)"; 
  gavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  gavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
});
}, false);

// The Blue Leave Hover
havi.addEventListener('mouseleave', function() {
 tBlue.pause();
  tBlue.currentTime = 0;
  havi.style.scale = "1";
  //Body
  document.body.style.backgroundColor = "rgb(255,230,230)";
  document.body.style.backgroundImage = "url(none)"
  document.body.style.transition = "background-image 0s, background-color 1.5s";
  //circles
  favi.style.backgroundImage = "url('none')";
  favi.style.backgroundColor = "rgb(26,77,80)";
  favi.style.borderColor = "rgb(22, 22, 22)"; 
  favi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  //MNMK
  ravi.style.backgroundImage = "url('none')";
  ravi.style.backgroundColor = "rgb(14, 4, 8)";
  ravi.style.borderColor = "black";
  ravi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // reroute
  tavi.style.backgroundImage = "url('none')";
  tavi.style.backgroundColor = "rgb(255, 255, 230)";
  tavi.style.borderColor = "rgb(255, 60, 10)";
  tavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // lotus
  savi.style.backgroundImage = "url('none')";
  savi.style.backgroundColor = "rgb(26, 3, 31)";
  savi.style.borderColor = "rgb(221, 212, 59)";
  savi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Flatbed
  mavi.style.backgroundImage = "url('none')";
  mavi.style.backgroundColor = "rgb(34, 34, 34)";
  mavi.style.borderColor = "rgb(255, 255, 255)";
  mavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Charmander
  bavi.style.backgroundImage = "url('none')";
  bavi.style.backgroundColor = "rgb(252, 245, 25)";
  bavi.style.borderColor = "rgb(240, 55, 150)";
  bavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Count Me Out
  vavi.style.backgroundImage = "url('none')";
  vavi.style.backgroundColor = "rgb(119, 73, 33)";
  vavi.style.borderColor = "rgb(196, 182, 146)";
  vavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // All We Got
  pavi.style.backgroundImage = "url('none')";
  pavi.style.backgroundColor = "rgb(252, 106, 113)";
  pavi.style.borderColor = "rgb(23, 61, 156)";
  pavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Sorry Not Sorry
  zavi.style.backgroundImage = "url('none')";
  zavi.style.backgroundColor = "rgb(62, 32, 32)";
  zavi.style.borderColor = "rgb(31, 32, 31)";
  zavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Rice & Gravy
  navi.style.backgroundImage = "url('none')";
  navi.style.backgroundColor = "rgb(175, 170, 128)";
  navi.style.borderColor = "rgb(77, 61, 27)";
  navi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // STATS
  gavi.style.backgroundImage = "url('none')";
  gavi.style.backgroundColor = "rgb(203, 203, 203)";
  gavi.style.borderColor = "rgb(64, 64, 64)";
  gavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
}, false);

// Sorry Not Sorry Hover
zavi.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  sNOTS.play();
  zavi.style.scale = "1.1";
  zavi.style.transition = "scale 500ms"
  // Body
  document.body.style.backgroundColor = "rgb(255,230,230)";
  document.body.style.backgroundImage = "url(' ')";
  document.body.style.transition = "background-image 1.5s, background-color 1.5s";
  // circles
  favi.style.backgroundImage = "url('https://media1.tenor.com/m/KYz4uDh6KM0AAAAd/dc-the-don-sad-frosty.gif')";
  favi.style.backgroundColor = "rgb(255, 255, 230)";
  favi.style.borderColor = "slategray";
  favi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // MNMK
  ravi.style.backgroundImage = "url('none')";
  ravi.style.backgroundColor = "rgb(255, 255, 230)";
  ravi.style.borderColor = "slategray";
  ravi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
    // lotus
  savi.style.backgroundColor = "rgb(84,52,10)";
  savi.style.borderColor = "rgb(84,52,10)"; 
  savi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  savi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // flatbed
  mavi.style.backgroundColor = "rgb(84,52,10)";
  mavi.style.borderColor = "rgb(84,52,10)"; 
  mavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  mavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // charmander
  bavi.style.backgroundColor = "rgb(84,52,10)";
  bavi.style.borderColor = "rgb(84,52,10)"; 
  bavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  bavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // cmOut
  vavi.style.backgroundColor = "rgb(84,52,10)";
  vavi.style.borderColor = "rgb(84,52,10)"; 
  vavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  vavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // awGot
  pavi.style.backgroundColor = "rgb(84,52,10)";
  pavi.style.borderColor = "rgb(84,52,10)"; 
  pavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  pavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // tBlue
  havi.style.backgroundColor = "rgb(84,52,10)";
  havi.style.borderColor = "rgb(84,52,10)"; 
  havi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  havi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // reroute
  tavi.style.backgroundColor = "rgb(84,52,10)";
  tavi.style.borderColor = "rgb(84,52,10)"; 
  tavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  tavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // riceGravy
  navi.style.backgroundColor = "rgb(84,52,10)";
  navi.style.borderColor = "rgb(84,52,10)"; 
  navi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  navi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // stats
  gavi.style.backgroundColor = "rgb(84,52,10)";
  gavi.style.borderColor = "rgb(84,52,10)"; 
  gavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  gavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
});
}, false);

// Sorry Not Sorry Leave Hover
zavi.addEventListener('mouseleave', function() {
 sNOTS.pause();
  sNOTS.currentTime = 0;
  zavi.style.scale = "1";
  //Body
  document.body.style.backgroundColor = "rgb(255,230,230)";
  document.body.style.backgroundImage = "url(none)"
  document.body.style.transition = "background-image 0s, background-color 1.5s";
  //circles
  favi.style.backgroundImage = "url('none')";
  favi.style.backgroundColor = "rgb(26,77,80)";
  favi.style.borderColor = "rgb(22, 22, 22)"; 
  favi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  //MNMK
  ravi.style.backgroundImage = "url('none')";
  ravi.style.backgroundColor = "rgb(14, 4, 8)";
  ravi.style.borderColor = "black";
  ravi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // reroute
  tavi.style.backgroundImage = "url('none')";
  tavi.style.backgroundColor = "rgb(255, 255, 230)";
  tavi.style.borderColor = "rgb(255, 60, 10)";
  tavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // lotus
  savi.style.backgroundImage = "url('none')";
  savi.style.backgroundColor = "rgb(26, 3, 31)";
  savi.style.borderColor = "rgb(221, 212, 59)";
  savi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Flatbed
  mavi.style.backgroundImage = "url('none')";
  mavi.style.backgroundColor = "rgb(34, 34, 34)";
  mavi.style.borderColor = "rgb(255, 255, 255)";
  mavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Charmander
  bavi.style.backgroundImage = "url('none')";
  bavi.style.backgroundColor = "rgb(252, 245, 25)";
  bavi.style.borderColor = "rgb(240, 55, 150)";
  bavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Count Me Out
  vavi.style.backgroundImage = "url('none')";
  vavi.style.backgroundColor = "rgb(119, 73, 33)";
  vavi.style.borderColor = "rgb(196, 182, 146)";
  vavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // All We Got
  pavi.style.backgroundImage = "url('none')";
  pavi.style.backgroundColor = "rgb(252, 106, 113)";
  pavi.style.borderColor = "rgb(23, 61, 156)";
  pavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // The Blue
  havi.style.backgroundImage = "url('none')";
  havi.style.backgroundColor = "rgb(172, 202, 241)";
  havi.style.borderColor = "rgb(189, 195, 195)";
  havi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Rice & Gravy
  navi.style.backgroundImage = "url('none')";
  navi.style.backgroundColor = "rgb(175, 170, 128)";
  navi.style.borderColor = "rgb(77, 61, 27)";
  navi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // STATS
  gavi.style.backgroundImage = "url('none')";
  gavi.style.backgroundColor = "rgb(203, 203, 203)";
  gavi.style.borderColor = "rgb(64, 64, 64)";
  gavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
}, false);

// Rice & Gravy Hover
navi.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  riceGravy.play();
  navi.style.scale = "1.1";
  navi.style.transition = "scale 500ms"
  // Body
  document.body.style.backgroundColor = "rgb(255,230,230)";
  document.body.style.backgroundImage = "url(' ')";
  document.body.style.transition = "background-image 1.5s, background-color 1.5s";
  // circles
  favi.style.backgroundImage = "url('https://media1.tenor.com/m/KYz4uDh6KM0AAAAd/dc-the-don-sad-frosty.gif')";
  favi.style.backgroundColor = "rgb(255, 255, 230)";
  favi.style.borderColor = "slategray";
  favi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // MNMK
  ravi.style.backgroundImage = "url('none')";
  ravi.style.backgroundColor = "rgb(255, 255, 230)";
  ravi.style.borderColor = "slategray";
  ravi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
    // lotus
  savi.style.backgroundColor = "rgb(84,52,10)";
  savi.style.borderColor = "rgb(84,52,10)"; 
  savi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  savi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // flatbed
  mavi.style.backgroundColor = "rgb(84,52,10)";
  mavi.style.borderColor = "rgb(84,52,10)"; 
  mavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  mavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // charmander
  bavi.style.backgroundColor = "rgb(84,52,10)";
  bavi.style.borderColor = "rgb(84,52,10)"; 
  bavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  bavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // cmOut
  vavi.style.backgroundColor = "rgb(84,52,10)";
  vavi.style.borderColor = "rgb(84,52,10)"; 
  vavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  vavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // awGot
  pavi.style.backgroundColor = "rgb(84,52,10)";
  pavi.style.borderColor = "rgb(84,52,10)"; 
  pavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  pavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // tBlue
  havi.style.backgroundColor = "rgb(84,52,10)";
  havi.style.borderColor = "rgb(84,52,10)"; 
  havi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  havi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // sNOTS
  zavi.style.backgroundColor = "rgb(84,52,10)";
  zavi.style.borderColor = "rgb(84,52,10)"; 
  zavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  zavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // reroute
  tavi.style.backgroundColor = "rgb(84,52,10)";
  tavi.style.borderColor = "rgb(84,52,10)"; 
  tavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  tavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // stats
  gavi.style.backgroundColor = "rgb(84,52,10)";
  gavi.style.borderColor = "rgb(84,52,10)"; 
  gavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  gavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
});
}, false);

// Rice & Gravy Leave Hover
navi.addEventListener('mouseleave', function() {
 riceGravy.pause();
  riceGravy.currentTime = 0;
  navi.style.scale = "1";
  //Body
  document.body.style.backgroundColor = "rgb(255,230,230)";
  document.body.style.backgroundImage = "url(none)"
  document.body.style.transition = "background-image 0s, background-color 1.5s";
  //circles
  favi.style.backgroundImage = "url('none')";
  favi.style.backgroundColor = "rgb(26,77,80)";
  favi.style.borderColor = "rgb(22, 22, 22)";
  favi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  //MNMK
  ravi.style.backgroundImage = "url('none')";
  ravi.style.backgroundColor = "rgb(14, 4, 8)";
  ravi.style.borderColor = "black";
  ravi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // reroute
  tavi.style.backgroundImage = "url('none')";
  tavi.style.backgroundColor = "rgb(255, 255, 230)";
  tavi.style.borderColor = "rgb(255, 60, 10)";
  tavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // lotus
  savi.style.backgroundImage = "url('none')";
  savi.style.backgroundColor = "rgb(26, 3, 31)";
  savi.style.borderColor = "rgb(221, 212, 59)";
  savi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Flatbed
  mavi.style.backgroundImage = "url('none')";
  mavi.style.backgroundColor = "rgb(34, 34, 34)";
  mavi.style.borderColor = "rgb(255, 255, 255)";
  mavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Charmander
  bavi.style.backgroundImage = "url('none')";
  bavi.style.backgroundColor = "rgb(252, 245, 25)";
  bavi.style.borderColor = "rgb(240, 55, 150)";
  bavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Count Me Out
  vavi.style.backgroundImage = "url('none')";
  vavi.style.backgroundColor = "rgb(119, 73, 33)";
  vavi.style.borderColor = "rgb(196, 182, 146)";
  vavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // All We Got
  pavi.style.backgroundImage = "url('none')";
  pavi.style.backgroundColor = "rgb(252, 106, 113)";
  pavi.style.borderColor = "rgb(23, 61, 156)";
  pavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // The Blue
  havi.style.backgroundImage = "url('none')";
  havi.style.backgroundColor = "rgb(172, 202, 241)";
  havi.style.borderColor = "rgb(189, 195, 195)";
  havi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Sorry Not Sorry
  zavi.style.backgroundImage = "url('none')";
  zavi.style.backgroundColor = "rgb(62, 32, 32)";
  zavi.style.borderColor = "rgb(31, 32, 31)";
  zavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // STATS
  gavi.style.backgroundImage = "url('none')";
  gavi.style.backgroundColor = "rgb(203, 203, 203)";
  gavi.style.borderColor = "rgb(64, 64, 64)";
  gavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
}, false);

// STATS Hover
gavi.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  stats.play();
  gavi.style.scale = "1.1";
  gavi.style.transition = "scale 500ms"
  // Body
  document.body.style.backgroundColor = "rgb(255,230,230)";
  document.body.style.backgroundImage = "url(' ')";
  document.body.style.transition = "background-image 1.5s, background-color 1.5s";
  // circles
  favi.style.backgroundImage = "url('https://media1.tenor.com/m/KYz4uDh6KM0AAAAd/dc-the-don-sad-frosty.gif')";
  favi.style.backgroundColor = "rgb(255, 255, 230)";
  favi.style.borderColor = "slategray";
  favi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // MNMK
  ravi.style.backgroundImage = "url('none')";
  ravi.style.backgroundColor = "rgb(255, 255, 230)";
  ravi.style.borderColor = "slategray";
  ravi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
    // lotus
  savi.style.backgroundColor = "rgb(84,52,10)";
  savi.style.borderColor = "rgb(84,52,10)"; 
  savi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  savi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // flatbed
  mavi.style.backgroundColor = "rgb(84,52,10)";
  mavi.style.borderColor = "rgb(84,52,10)"; 
  mavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  mavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // charmander
  bavi.style.backgroundColor = "rgb(84,52,10)";
  bavi.style.borderColor = "rgb(84,52,10)"; 
  bavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  bavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // cmOut
  vavi.style.backgroundColor = "rgb(84,52,10)";
  vavi.style.borderColor = "rgb(84,52,10)"; 
  vavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  vavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // awGot
  pavi.style.backgroundColor = "rgb(84,52,10)";
  pavi.style.borderColor = "rgb(84,52,10)"; 
  pavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  pavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // tBlue
  havi.style.backgroundColor = "rgb(84,52,10)";
  havi.style.borderColor = "rgb(84,52,10)"; 
  havi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  havi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // sNOTS
  zavi.style.backgroundColor = "rgb(84,52,10)";
  zavi.style.borderColor = "rgb(84,52,10)"; 
  zavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  zavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // riceGravy
  navi.style.backgroundColor = "rgb(84,52,10)";
  navi.style.borderColor = "rgb(84,52,10)"; 
  navi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  navi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
  // reroute
  tavi.style.backgroundColor = "rgb(84,52,10)";
  tavi.style.borderColor = "rgb(84,52,10)"; 
  tavi.style.backgroundImage = "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHRseTJ2MmVvZGRucHFhYm5lcjZpdWo0OW5rNHVrdjl6Y3Q4OHdlMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DshZcMyZzsjFOr3v6N/giphy.gif')";
  tavi.style.transition = "border-color 1s, background-color 1s, background-image 500ms";
});
}, false);

// STATS Leave Hover
gavi.addEventListener('mouseleave', function() {
 stats.pause();
  stats.currentTime = 0;
  gavi.style.scale = "1";
  //Body
  document.body.style.backgroundColor = "rgb(255,230,230)";
  document.body.style.backgroundImage = "url(none)"
  document.body.style.transition = "background-image 0s, background-color 1.5s";
  //circles
  favi.style.backgroundImage = "url('none')";
  favi.style.backgroundColor = "rgb(26,77,80)";
  favi.style.borderColor = "rgb(22, 22, 22)"; 
  favi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  //MNMK
  ravi.style.backgroundImage = "url('none')";
  ravi.style.backgroundColor = "rgb(14, 4, 8)";
  ravi.style.borderColor = "black";
  ravi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // reroute
  tavi.style.backgroundImage = "url('none')";
  tavi.style.backgroundColor = "rgb(255, 255, 230)";
  tavi.style.borderColor = "rgb(255, 60, 10)";
  tavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // lotus
  savi.style.backgroundImage = "url('none')";
  savi.style.backgroundColor = "rgb(26, 3, 31)";
  savi.style.borderColor = "rgb(221, 212, 59)";
  savi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Flatbed
  mavi.style.backgroundImage = "url('none')";
  mavi.style.backgroundColor = "rgb(34, 34, 34)";
  mavi.style.borderColor = "rgb(255, 255, 255)";
  mavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Charmander
  bavi.style.backgroundImage = "url('none')";
  bavi.style.backgroundColor = "rgb(252, 245, 25)";
  bavi.style.borderColor = "rgb(240, 55, 150)";
  bavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Count Me Out
  vavi.style.backgroundImage = "url('none')";
  vavi.style.backgroundColor = "rgb(119, 73, 33)";
  vavi.style.borderColor = "rgb(196, 182, 146)";
  vavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // All We Got
  pavi.style.backgroundImage = "url('none')";
  pavi.style.backgroundColor = "rgb(252, 106, 113)";
  pavi.style.borderColor = "rgb(23, 61, 156)";
  pavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // The Blue
  havi.style.backgroundImage = "url('none')";
  havi.style.backgroundColor = "rgb(172, 202, 241)";
  havi.style.borderColor = "rgb(189, 195, 195)";
  havi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Sorry Not Sorry
  zavi.style.backgroundImage = "url('none')";
  zavi.style.backgroundColor = "rgb(62, 32, 32)";
  zavi.style.borderColor = "rgb(31, 32, 31)";
  zavi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
  // Rice & Gravy
  navi.style.backgroundImage = "url('none')";
  navi.style.backgroundColor = "rgb(175, 170, 128)";
  navi.style.borderColor = "rgb(77, 61, 27)";
  navi.style.transition = "border-color 1s, background-color 1s, backgroundImage 0s";
}, false);
