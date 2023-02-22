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

  let textContentContainer = getElementByXpath(
    "/html/body/div/div/div/div/main/div[1]/div[2]/div[1]/div[1]/div"
  );
  textContentContainer.scrollTop = 0;
  console.log("scrolled to top :)");
})();
