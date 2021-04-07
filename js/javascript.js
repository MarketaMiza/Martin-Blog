 //Finds the a link inside the .article-preview div, makes it possible to press anywhere inside the div to go to the article

 $(".article-preview").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
      });
  
   //Make sure that your document has jquery linked
  