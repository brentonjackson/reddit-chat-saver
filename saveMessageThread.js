javascript: (() => {
  function getElementByXpath(path) {
    return document.evaluate(
      path,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;
  }
  function getElementsByXpath(path) {
    let nodes = [];
    let result = document.evaluate(
      path,
      document,
      null,
      XPathResult.ORDERED_NODE_ITERATOR_TYPE,
      null
    );
    let node = null;
    while ((node = result.iterateNext())) {
      nodes.push(node);
    }
    return nodes;
  }

  let chatElements = getElementsByXpath(
    "/html/body/div/div/div/div/main/div[1]/div[2]/div[1]/div[1]/div/span|/html/body/div/div/div/div/main/div[1]/div[2]/div[1]/div[1]/div/div"
  );

  let theirName = getElementByXpath(
    "/html/body/div/div/div/div/main/div[1]/div[2]/div[1]/nav/span[1]/span[1]/span"
  ).innerHTML;
  let users = chatElements[0].firstChild.children;
  let myName = users[0].lastChild.innerHTML;
  myName === theirName ? (myName = users[1].lastChild.innerHTML) : null;
  chatElements.shift();

  let chatContent = [];
  let userMessage = [];

  chatElements.forEach((snippet) => {
    let text;
    if (snippet.tag_name == "div") {
      if (snippet.firstChild.tag_name === "TIME") {
        let date = snippet.firstChild.textContent;
        chatContent.push(date + "\n");
      }
    } else {
      let endOfMessage = false;
      if (snippet.firstChild.firstChild.textContent) {
        text = snippet.firstChild.firstChild.textContent;
      } else {
        text = "Message contains no text. MMS or link was sent.";
      }
      userMessage.push(
        "\t" +
          text +
          "\n" +
          "\n\t----------------------------------------------------------------\n"
      );
      if (snippet.firstChild.lastChild.tagName === "DIV") {
        endOfMessage = true;
        let currentSpeaker;
        if (snippet.firstChild.lastChild.firstChild.tagName === "IMG") {
          currentSpeaker =
            snippet.firstChild.lastChild.firstChild.alt.split(" ")[0];
        } else {
          if (getComputedStyle(snippet.firstChild).float != "right") {
            currentSpeaker = myName;
          } else {
            currentSpeaker = theirName;
          }
        }
        let currentSpeakerMsg = currentSpeaker + ":\n";
        userMessage.unshift(currentSpeakerMsg);
        chatContent.push(userMessage);
        userMessage = [];
      } else {
        endOfMessage = false;
      }
    }
  });
  const linkURL = URL.createObjectURL(
    new File([chatContent], theirName + ".txt", { type: "text/plain" })
  );
  let anchor = document.createElement("a");
  anchor.innerText = "Save messages!";
  anchor.href = linkURL;
  anchor.target = "_blank";
  anchor.download = theirName + ".txt";
  anchor.style = "margin: 10px; color: blue";
  anchor.id = "saveMsgLink";
  if (document.querySelector("#saveMsgLink")) {
    document
      .querySelector("nav")
      .removeChild(document.querySelector("#saveMsgLink"));
  }
  document.querySelector("nav").appendChild(anchor);
  console.log("made new chat link :)");
})();
