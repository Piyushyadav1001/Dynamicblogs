function requestUserRepos(username){
    const xhr = new XMLHttpRequest();
const urls = window.location.pathname;
const url = `https://hacker-news.firebaseio.com/v0/item/${urls}.json?print=pretty`;
console.log(url)
    xhr.open('GET', url, true);
    xhr.onload = function() {
        const data = JSON.parse(this.response);
        console.log(data);
        if(data.by!=null){
      document.getElementById("first").innerText=data.by
        }

         if(data.type!=null){
      document.getElementById("third").innerText=data.type
        }

        if(data.text!=null){
      document.getElementById("five").innerText=data.text
        }

        if(data.score!=null){
      document.getElementById("seven").innerText=data.score
        }
         if(data.poll!=null){
      document.getElementById("eight").innerText=data.poll
        }
        if(data.parts!=null){
      document.getElementById("nine").innerText=data.parts
        }

         if(data.url!=null){
      document.getElementById("eleven").innerText=data.url
        }
         if(data.title!=null){
      document.getElementById("twelve").innerText=data.title
        }
         if(data.descendants!=null){
      document.getElementById("thirteen").innerText=data.descendants
        }

    }

    // Send the request to the server
    xhr.send();
}
requestUserRepos('url');