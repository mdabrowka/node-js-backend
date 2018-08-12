const app = function(){

    const getRequest = function() { 
    const request = new XMLHttpRequest();
    request.open('GET', '/api/get-questions');
    request.addEventListener('load', function(){
      if(this.status != 200) {
        return;
      }
      const responseBody = JSON.parse(this.responseText);
          console.log('logging response body', responseBody);
        });
        request.send();
    }

    var button = document.querySelector('button');
    button.addEventListener('click', getRequest);
  }

document.addEventListener('DOMContentLoaded', app);