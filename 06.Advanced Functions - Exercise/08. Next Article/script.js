function getArticleGenerator(articles) {
    let text = articles;
    let resultDiv = document.getElementById('content');


    return () => {
        if (text.length !== 0){
          let article =  document.createElement('article');
          article.textContent=text.shift();
          resultDiv.appendChild(article);
        }
  }
}
