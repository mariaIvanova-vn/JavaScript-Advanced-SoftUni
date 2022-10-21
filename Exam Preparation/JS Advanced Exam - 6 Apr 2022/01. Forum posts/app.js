window.addEventListener("load", solve);        //   100/100

function solve() {
  const input = {
    title: document.getElementById('post-title'),
    category: document.getElementById('post-category'),
    content: document.getElementById('post-content')
  };
  const lists = {
    review: document.getElementById('review-list'),
    published: document.getElementById('published-list')
  };
  document.getElementById('publish-btn').addEventListener('click', publish);
  document.getElementById('clear-btn').addEventListener('click', clear);

  function publish(event) {
    event.preventDefault();

    let title = input.title.value;
    let category = input.category.value;
    let content = input.content.value;

    if (title == '' || category == '' || content == '') {    //Title, category, and content are non-empty strings.
      return;                                        // If any of them are empty, the program should not do anything.
    }

    let li = document.createElement('li');
    li.className = 'rpost';
    li.innerHTML = `<article>
      <h4>${title}</h4>
      <p>Category: ${category}</p>
      <p>Content: ${content}</p>
    </article>
    <button class="action-btn edit">Edit</button>
    <button class="action-btn approve">Approve</button>`;

    const editBtn = li.querySelector('.edit');
    editBtn.addEventListener('click', () => {
      input.title.value = title;
      input.category.value = category;
      input.content.value = content;

      li.remove();    //remove list item from list
    });
    const approveBtn = li.querySelector('.approve');
    approveBtn.addEventListener('click', () => {
      lists.published.appendChild(li);

      editBtn.remove();
      approveBtn.remove();

    });

    lists.review.appendChild(li);   //append to first fields

    //clear inpud fields:
    input.title.value = '';
    input.category.value = '';
    input.content.value = '';
  }

  function clear() {
    lists.published.innerHTML = '';
  }
}
