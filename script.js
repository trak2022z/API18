(function() {

  window.addEventListener('load', init);

  function init() {
    qsa('section button').addEventListener('click', makeRequest);
  }

  function makeRequest() {
    let c = id('category').value;
    let q = id('question').value;
    let a = id('answer').value;

    fetch('https://courses.cs.washington.edu/courses/cse154/webservices/trivia/trivia.php', {
      method: 'POST',
      body: new URLSearchParams({
        category: c,
        question: q,
        answer: a
      })
    })
      .then(statusCheck)
      .then(res => res.text())
      .then(message => {
        let container = gen('section');

        let p1 = gen('p');
        p1.innerHTML = 'category: ' + c;
        container.appendChild(p1);

        let p2 = gen('p');
        p2.innerHTML = 'question: ' + q;
        container.appendChild(p2);

        let p3 = gen('p');
        p3.innerHTML = 'answer: ' + a;
        container.appendChild(p3);

        let p4 = gen('p');
        p4.innerHTML = 'API Response: ' + message;
        container.appendChild(p4);

        id('trivia').appendChild(container);
      })
      .catch(error => console.error(error));
  }

  function statusCheck(response) {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response;
  }

  function qsa(query) {
    return document.querySelectorAll(query);
  }

  function qs(query) {
    return document.querySelector(query);
  }

  function id(id) {
    return document.getElementById(id);
  }

  function gen(el) {
    return document.createElement(el);
  }

})();
