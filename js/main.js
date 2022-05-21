const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
};

const {
  data: { ip }
} = await axios.get("https://api.ipify.org?format=json", config);

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

    /*fetch('http://localhost:9045/api/word', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(word1),
      })
    

    console.log(word1);*/
    $.ajax('http://localhost:9045/api/word', {
    contentType: 'application/json',
    crossDomain: true,
    data: {word1},
    method: 'POST'
})

}

function word22(){
  let word2 = [
    {
      letter: document.getElementById("letter1-2").value,
      color: document.querySelector('input[name="color1-2"]:checked').value
    },
    {
      
      letter: document.getElementById("letter2-2").value,
      color: document.querySelector('input[name="color2-2"]:checked').value
    },
    {
      letter: document.getElementById("letter3-2").value,
      color: document.querySelector('input[name="color3-2"]:checked').value
      
    },
    {
      letter: document.getElementById("letter4-2").value,
      color: document.querySelector('input[name="color4-2"]:checked').value
    },
    {
      letter: document.getElementById("letter5-2").value,
      color: document.querySelector('input[name="color5-2"]:checked').value
    }
  ]
  console.log(word2);

}


function word33(){
  let word3 = [
    {
      letter: document.getElementById("letter1-2").value,
      color: document.querySelector('input[name="color1-2"]:checked').value
    },
    {
      
      letter: document.getElementById("letter2-2").value,
      color: document.querySelector('input[name="color2-2"]:checked').value
    },
    {
      letter: document.getElementById("letter3-2").value,
      color: document.querySelector('input[name="color3-2"]:checked').value
      
    },
    {
      letter: document.getElementById("letter4-2").value,
      color: document.querySelector('input[name="color4-2"]:checked').value
    },
    {
      letter: document.getElementById("letter5-2").value,
      color: document.querySelector('input[name="color5-2"]:checked').value
    }
  ]
  console.log(word3);

}

function word44(){
  let word4 = [
    {
      letter: document.getElementById("letter1-3").value,
      color: document.querySelector('input[name="color1-3"]:checked').value
    },
    {
      
      letter: document.getElementById("letter2-3").value,
      color: document.querySelector('input[name="color2-3"]:checked').value
    },
    {
      letter: document.getElementById("letter3-3").value,
      color: document.querySelector('input[name="color3-3"]:checked').value
      
    },
    {
      letter: document.getElementById("letter4-3").value,
      color: document.querySelector('input[name="color4-3"]:checked').value
    },
    {
      letter: document.getElementById("letter5-3").value,
      color: document.querySelector('input[name="color5-3"]:checked').value
    }
  ]
  console.log(word4);

}

function word55(){
  let word5 = [
    {
      letter: document.getElementById("letter1-5").value,
      color: document.querySelector('input[name="color1-5"]:checked').value
    },
    {
      
      letter: document.getElementById("letter2-5").value,
      color: document.querySelector('input[name="color2-5"]:checked').value
    },
    {
      letter: document.getElementById("letter3-5").value,
      color: document.querySelector('input[name="color3-5"]:checked').value
      
    },
    {
      letter: document.getElementById("letter4-5").value,
      color: document.querySelector('input[name="color4-5"]:checked').value
    },
    {
      letter: document.getElementById("letter5-5").value,
      color: document.querySelector('input[name="color5-5"]:checked').value
    }
  ]
  console.log(word5);

}


















/*

    fetch('http://localhost:9045/api/word', {
      method: 'POST', // or 'PUT'
      body: word1,
      })
      
      fetch('http://localhost:9045/api/words', {
      method: 'GET' // or 'PUT'
      })
    
*/