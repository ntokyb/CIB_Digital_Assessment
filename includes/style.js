var images = [
     "golden-gate-bridge-in-san-francisco-california-4121708.jpg",
     "suv-traveling-on-road-near-flatiron-building-1388069.jpg",
     "aerial-view-of-seashore-near-large-grey-rocks-853199.jpg",
     "river-between-green-leafed-tree-1766838.jpg"
], 
base = "/includes/images/",
secs = 4;
images.forEach(function (img) {
     new Image().src = base + img;
     // caches images, avoiding white flash between background replacements
   });


   function backgroundSequence() {
     window.clearTimeout();
     var k = 0;
     for (i = 0; i < images.length; i++) {
       setTimeout(function () {
         document.getElementById("slidesHome").style.background =
           "url(" + base + images[k] + ") no-repeat center fixed";
         document.getElementById("slidesHome").style.backgroundSize = "cover";
         if (k + 1 === images.length) {
           setTimeout(function () {
             backgroundSequence();
           }, secs * 1000);
         } else {
           k++;
         }
       }, secs * 1000 * i);
     }
   }
   backgroundSequence();