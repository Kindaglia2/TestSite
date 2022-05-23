function myFunction(){
  /*
    const word1 = {
        letter1: document.getElementById("letter1").value,
        color1: document.querySelector('input[name="color1"]:checked').value,
        letter2: document.getElementById("letter2").value,
        color2: document.querySelector('input[name="color2"]:checked').value,
        letter3: document.getElementById("letter3").value,
        color3: document.querySelector('input[name="color3"]:checked').value,
        letter4: document.getElementById("letter4").value,
        color4: document.querySelector('input[name="color4"]:checked').value,
        letter5: document.getElementById("letter5").value,
        color5: document.querySelector('input[name="color5"]:checked').value,
    };
*/


    let word1 = [
      {
        lettera: document.getElementById("letter1").value,
        colore: document.querySelector('input[name="color1"]:checked').value
      },
      {
        
        lettera: document.getElementById("letter2").value,
        colore: document.querySelector('input[name="color2"]:checked').value
      },
      {
        lettera: document.getElementById("letter3").value,
        colore: document.querySelector('input[name="color3"]:checked').value
        
      },
      {
        lettera: document.getElementById("letter4").value,
        colore: document.querySelector('input[name="color4"]:checked').value
      },
      {
        lettera: document.getElementById("letter5").value,
        colore: document.querySelector('input[name="color5"]:checked').value
      }
    ]

      fetch('http://bright-wordle.herokuapp.com/api/word', {
      method: "POST",
      body: word1,
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json));



}




