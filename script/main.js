(function () {
  var theImages = document.querySelectorAll('.image-holder'),
      theHeader = document.querySelector('.heading'),
      theSubhead = document.querySelector('.main-copy h2'),
      theSeasonText = document.querySelector('.main-copy p'),
      appliedClass;

      function changeElements() {
<<<<<<< HEAD
        // I want to to load dynamic content here
=======
        // I want to load dynamic content here
>>>>>>> dev.lynds.lightbox
        //debugger;
        let subImages = document.querySelector('.subImagesContainer');
        let objectIndex = dynamicContent[this.id];

<<<<<<< HEAD
        // remove all of the thumbnail images, whenever container has children in it, remove them
        while (subImages.firstChild){
          subImages.removeChild(subImages.firstChild);
        }

        //create an image element and add it to the page
        objectIndex.images.forEach(function(element, index){
          let newSubImg = document.createElement('img');

          //add a css class
          newSubImg.classList.add('thumb');
          //add an image source
          newSubImg.src="images/" + objectIndex.images[index];
          //append it to the container
=======
        // remove all of the thumbnail images
        while (subImages.firstChild) {
          subImages.removeChild(subImages.firstChild);
        }

        // create an image element and add it to the page
        objectIndex.images.forEach(function(element, index){
          let newSubImg = document.createElement('img');

          // add a css class
          newSubImg.classList.add('thumb');
          // add an image source
          newSubImg.src = "images/" + objectIndex.images[index];

          //add an index number to the thumbnail for array reference
          newSubImg.dataset.index = index;

          // add some event handling
          newSubImg.addEventListener('click', function() {popLightbox(index, objectIndex); }, false);

          // append it to the container
>>>>>>> dev.lynds.lightbox
          subImages.appendChild(newSubImg);
        });

        theSubhead.classList.remove(appliedClass);
        theHeader.classList.remove(appliedClass);

        theSubhead.classList.add(this.id);
        theHeader.classList.add(this.id);

        theSubhead.firstChild.nodeValue = objectIndex.headline;
        theSeasonText.firstChild.nodeValue = objectIndex.text;

        appliedClass = this.id;
<<<<<<< HEAD
      }

      theImages.forEach(function(element, index){
=======

        console.log(this.id);
      }

      theImages.forEach(function(element, index) {
>>>>>>> dev.lynds.lightbox
        //loop through and do stuff to each element at the top of the page
        element.addEventListener('click', changeElements, false);
      });

<<<<<<< HEAD
      //initialize the app
      //theSubhead.firstChild.nodeValue = dynamicContent['spring'].headline;
      // theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
    //  theHeader.classList.add('spring');
      document.querySelector('#spring').click();

changeElements.call(document.querySelector('#spring'));

=======
      function popLightbox(currentIndex, currentObject) {
        //debugger;
        window.scrollTo(0, 0);
        document.body.style.overflow = "hidden";

        // turn on the lightbox
        let lightbox = document.querySelector('.lightbox');
        lightbox.style.display = 'block';

        //populate all the content on the page
        let lightboxImg = lightbox.querySelector('img');
        let lightboxClose = lightbox.querySelector('.close-lightbox');
        let lightboxDesc = lightbox.querySelector ('p');

        lightboxImg.src = "images/" + currentObject.images[currentIndex];
        lightboxDesc.innerHTML = currentObject.imageDescription[currentIndex];

        lightboxClose.addEventListener('click', closeLightbox, false);
      }

    function closeLightbox(){
      //debugger
      const lightbox = document.querySelector('.lightbox');
      lightbox.style.display = 'none';
      document.body.style.overflow = "auto";
    }

      // initialize the app
      // theSubhead.firstChild.nodeValue = dynamicContent['spring'].headline;
      // theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
      // theHeader.classList.add('spring');
      //
      //document.querySelector('#spring').click();

      changeElements.call(document.querySelector('#spring'));
>>>>>>> dev.lynds.lightbox
})();
