function sendQuery(url, method) {
    // si l'utilisateur ne spécifie pas de <method> on met 'GET' par défaut
    !method? method = 'GET': null;
    // on crée un objet xhr
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           document.getElementById("api-response").innerHTML = xhr.responseText;
           document.getElementById("api-response2").innerHTML = xhr.responseText;
           document.getElementById("api-response3").innerHTML = xhr.responseText;
           document.getElementById("api-response4").innerHTML = xhr.responseText;
           document.getElementById("api-response5").innerHTML = xhr.responseText;
          
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

function sendQueryWithCallback(url, method, callbackFunction) {
    // si l'utilisateur ne spécifie pas de <method> on met 'GET' par défaut
    (!method) ? method = 'GET': null;

    // on crée un objet xhr
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            
            callbackFunction(xhr.responseText);
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

