const app = function(){

    const getRequest = function() { 
    const request = new XMLHttpRequest();
    request.open('GET', '/api/get-questions');
    request.addEventListener('load', function(){
      if(this.status != 200) {
        return;
      }
      const responseBody = JSON.parse(this.responseText);
          responseBody.forEach(element => {
              return render(element);
          });
        });
        request.send();
    }

    const render = function(element) {
        const ul = document.querySelector('#questions');
        const li = document.createElement('li');
        const text = document.createElement('p');
        text.innerText = `${element.question}`;
        li.appendChild(text);
        ul.appendChild(li);
    }

    var button = document.querySelector('button');
    button.addEventListener('click', getRequest);
  }

document.addEventListener('DOMContentLoaded', app);