const openAIKey = "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";

async function generateEssay() {
    if (!textInput) {
      swal("Oops!", "Please enter a topic to be generated!!.", "error");
      return;
    }
    document.getElementById("button").innerHTML = "<span class='material-symbols-outlined'>settings</span>Generating....";
    setTimeout(function() {
      document.getElementById("button").innerHTML = "<span class='material-symbols-outlined'>done</span>Generated";
    }, 18000);
    var topic = document.getElementById("textInput").value;
    var prompt = "Write an essay on the topic of " + topic + "\n\n";
    
    const response = await fetch(`https://api.openai.com/v1/engines/davinci/completions`, {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${openAIKey}`
                      },
                      body: JSON.stringify({
                        prompt: prompt,
                        max_tokens: 500,
                        temperature: 0.9,
                        top_p: 0.9
                      })
                    });
                    const responseJSON = await response.json();
                    document.getElementById("output_below").style.display = "block";
                    document.getElementById("essayOutput").style.display = "block";
                    document.getElementById('essayOutput').innerHTML = responseJSON.choices[0].text;
    
        }