document.addEventListener('DOMContentLoaded', function (){
    
    let div = document.createElement ('div');
    div.className = 'header-container';
    document.body.appendChild(div);
    
    let h1 = document.createElement ('h1')
    let textH1 = document.createTextNode ('This is an h1');
    h1.className = 'h1';
    h1.appendChild(textH1);
    div.appendChild(h1);
   
    let h2 = document.createElement ('h2');
    let textH2 = document.createTextNode ('This is an h2');
    h2.className = 'h2';
    h2.appendChild(textH2);
    div.appendChild(h2);
    
    let h3 = document.createElement ('h3'); 
    let textH3 = document.createTextNode ('This is an h3');
    h3.className = 'h3';
    h3.appendChild(textH3); 
    div.appendChild(h3);
    
    let h4 = document.createElement ('h4');
    let textH4 = document.createTextNode ('This is an h4'); 
    h4.className = 'h4';
    h4.appendChild(textH4);
    div.appendChild(h4);
    
    let h5 = document.createElement ('h5');
    let textH5 = document.createTextNode ('This is an h5');
    h5.className = 'h5';
    h5.appendChild(textH5);
    div.appendChild(h5);
    
    let h6 = document.createElement ('h6');
    let textH6 = document.createTextNode ('This is an h6');
    h6.className = 'h6';
    h6.appendChild(textH6);
    div.appendChild(h6);
    


})



