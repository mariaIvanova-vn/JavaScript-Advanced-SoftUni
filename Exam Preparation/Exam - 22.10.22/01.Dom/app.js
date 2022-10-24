//window.addEventListener("load", solve);


function solve() {
  let inputs = {
    fName: document.getElementById('first-name'),
    lName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    storyTitle: document.getElementById('story-title'),
    genre: document.getElementById('genre'),
    story: document.getElementById('story')
  };
  let prevList = document.getElementById('preview-list');

  let publishButton = document.getElementById('form-btn');
  publishButton.addEventListener('click', (e) => {
    e.preventDefault();

    let fName = inputs.fName.value;
    let lName = inputs.lName.value;
    let age = inputs.age.value;
    let storyTitle = inputs.storyTitle.value;
    let genre = inputs.genre.value;
    let story = inputs.story.value;

    if (fName == '' || lName == '' || age == '' || storyTitle == '' || genre == '' || story == '') {
      return;
    }
    let li = document.createElement('li');
    li.className = 'story-info';
    li.innerHTML = `<article>
                    <h4>Name: ${fName} ${lName}</h4>
                    <p>Age: ${age}</p>
                    <p>Title: ${storyTitle}</p>
                    <p>Genre: ${genre}</p>
                    <p>${story}</p>
                    </article>
                    <button class="save-btn">Save Story</button>
                    <button class="edit-btn">Edit Story</button>
                    <button class="delete-btn">Delete Story</button>`;


    let saveButton = li.querySelector('.save-btn');
    saveButton.addEventListener('click', () => {
      let div = document.getElementById('main');
      div.innerHTML = '';
      div.setAttribute(`<h1>Your scary story is saved!</h1>`);
    });


    let editButton = li.querySelector('.edit-btn');
    editButton.addEventListener('click', ()=>{
      inputs.fName.value = fName;
      inputs.lName.value = lName;
      inputs.age.value = age;
      inputs.storyTitle.value = storyTitle;
      inputs.genre.value = genre;
      inputs.story.value = story;
      li.remove();
      publishButton.disabled = false;
    });


    let deleteBtn = li.querySelector('.delete-btn')    
    deleteBtn.addEventListener('click', ()=>{
      li.remove();
      publishButton.disabled = false;
    });

    prevList.appendChild(li);
    publishButton.disabled = true;

    inputs.fName.value = '';
    inputs.lName.value = '';
    inputs.age.value = '';
    inputs.storyTitle.value = '';
    inputs.genre.value = '';
    inputs.story.value = '';
  });
}