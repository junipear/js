   <script>
       var i = 0; //start input
       var images = [];
       var time = 3000;

       //image list
       images[0] = 'images/img1.jpg';
       images[1] = 'images/img2.jpg';

       //change image
       function changeImg() {
           document.slide.src = images[i];

           if(i < images.length - 1){
               i++;
           } else {
               i = 0;
           }

           setTimeout("changeImg()", time);
       }

       window.onload = changeImg;
           
   </script>
<img name="slide" width="100%">
