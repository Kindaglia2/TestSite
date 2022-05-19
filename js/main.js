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
        letter: document.getElementById("letter1").value,
        color: document.querySelector('input[name="color1"]:checked').value
      },
      {
        
        letter: document.getElementById("letter2").value,
        color: document.querySelector('input[name="color2"]:checked').value
      },
      {
        letter: document.getElementById("letter3").value,
        color: document.querySelector('input[name="color3"]:checked').value
        
      },
      {
        letter: document.getElementById("letter4").value,
        color: document.querySelector('input[name="color4"]:checked').value
      },
      {
        letter: document.getElementById("letter5").value,
        color: document.querySelector('input[name="color5"]:checked').value
      }
    ]


    fetch('http://localhost:9045/api/word', {
      method: 'POST', // or 'PUT'
      body: word1,
      })
      
      fetch('http://localhost:9045/api/words', {
      method: 'GET' // or 'PUT'
      })
    





}




