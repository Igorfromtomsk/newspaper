import '../pages/EditPage/workSpace/layer/stylesBody.css';

export function getNewDocumentStyles() {
  return localStorage.getItem('newDocumentStyles');
}

export function getSearchedStyles() {
  let text;
  let styles = document.styleSheets;

  Object.keys(styles).some(styleIndex => {
    if (!styles[styleIndex].href) {
      let stylesPack = styles[styleIndex];
      return Object.keys(stylesPack.rules).some(ruleIndex => {
        let rule = stylesPack.rules[ruleIndex];

        if (rule.cssText && rule.cssText.indexOf('.new-document-anchor-style') !== -1) {
          let rules = stylesPack.cssRules;

          text = '';

          Object.keys(rules).forEach(i => {
            text += rules[i].cssText;
          });

          return true;
        } else {
          return false;
        }
      })
    } else {
      return true;
    }
  });

  return text;
}

export function checkNewDocumentStylesUpdate() {
  let bodyStyles = getNewDocumentStyles();

  if (!bodyStyles) {
    localStorage.setItem('newDocumentStyles', getSearchedStyles());
  } else {
    let downloadedStyles = getSearchedStyles();
    let localStorageBodyStyles = localStorage.getItem('newDocumentStyles');

    if (downloadedStyles !== localStorageBodyStyles) {
      localStorage.setItem('newDocumentStyles', getSearchedStyles());
    }
  }
}