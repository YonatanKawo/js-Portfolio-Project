fetch('http://localhost:3000/jokes')
    .then(resp => resp.json())
    .then(data => { 
     //console.log(data);
      data.forEach(jokesToDom) 
    })

  function jokesToDom(data) {
    const {type,setup,punchline} = data;
    document.body.style.background = "url('https://source.unsplash.com/1600x900/?')"
    const searchBar = document.querySelector(".search-bar");  
    
  // Event listener #1 - search bar and enter
    searchBar.addEventListener("keyup", event => {   
      if (searchBar.value == "Jokes" && event.key == "Enter")  {
          document.querySelector(".setup").innerText = "Setup: " + setup ;
          document.querySelector(".punchline").innerText = "Punch line: " + punchline;
          document.querySelector(".type").innerText = "Type: " + type;
      }

    })
  }
  
// // Event listener #2 - like and dislike button
 const like = "\u{1F44D}"
const disLike = "\u{1F44E}"
const jokes = document.querySelector(".jokes")
const button = document.createElement("button")

    jokes.append(button);
    button.innerHTML = disLike? like: disLike;

    button.addEventListener("click", () => {
      button.innerHTML = button.innerHTML === disLike? like: disLike;
    });


//   //Event listener # 3 
  const cancel = document.querySelector(".cancel");
  const card = document.querySelector(".card")
  cancel.addEventListener("click", () => {

    card.style.backgroundColor = "transparent"
    card.innerHTML = null;
    card.innerText = "Please Refresh the page";

}); 