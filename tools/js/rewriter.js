function paraphraseWords() {
    //main code below
    const inputText = document.getElementById("essayOutput").value;
    if (!inputText) {
        swal("Oops!", "Please regenerate an essay to be paraphrased.", "error");
        return;
    }
    document.getElementById("button1").innerHTML = "Paraphrasing....";
    setTimeout(function() {
      document.getElementById("button1").innerHTML = "Paraphrased";
      }, 8000);
    document.getElementById("paraphrase").style.display = "block";
    document.getElementById("para").style.display = "block";
    document.getElementById("closebtn").style.display = 'block';
 
    const API_KEY = '9486fa2b54msha9aa03ced74647ep165fd2jsn56925d2ccb80';
    const requestUrl = "https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite";
    const xhr = new XMLHttpRequest();

    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === this.DONE) {
            const response = JSON.parse(this.responseText);
            const rewrittenText = response.rewrite;
            document.getElementById("paraphrase_below").style.display = "block";
            document.getElementById("paraphrase").value = rewrittenText;
            swal("Hurry!", 'Your generated essay has been paraphrased and rewritten. GoodLuck on your essay!!', "success");
        }
    });
    xhr.open("POST", requestUrl);
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("X-RapidAPI-Key", API_KEY);
    xhr.setRequestHeader("X-RapidAPI-Host", "rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com");

    xhr.send(JSON.stringify({
        language: "en",
        strength: 3,
        text: inputText,
        mode: "auto"
    }));
  }
  function closeBtn() {
      document.getElementById("paraphrase").style.display = "none"; //closebtn //para
      document.getElementById("para").style.display = "none";
      document.getElementById("paraphrase_below").style.display = "none";
      document.getElementById("closebtn").style.display = "none";

    }