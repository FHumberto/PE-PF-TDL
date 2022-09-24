const formSearch = document.querySelector('.form-search');
const formAdd = document.querySelector('.form-add');
const listContainer = document.querySelector('.list-container');

formAdd.addEventListener('submit', event =>
{
  event.preventDefault();
  const inputValue = event.target.add.value;
  console.log(inputValue);
  listContainer.innerHTML += `<li class="list-group-item"><span class="inner-item">${inputValue}</span><i class="fa-solid fa-trash inner-item"></i></li>`;
  formAdd.reset();
})

listContainer.addEventListener("click", event =>
{
  const li = event.target;
  if (li.classList.contains('fa-trash'))
  {
    console.log(li.parentElement);
    li.parentElement.remove();
  }
})

formSearch.addEventListener('keyup', event =>
{
  const inputValue = event.target.value;

  Array.from(listContainer.children)
    .filter(li => !li.textContent.toLowerCase().includes(inputValue))
    .forEach(li =>
    {
      li.classList.add('hidden');
    })

  Array.from(listContainer.children)
    .filter(li => li.textContent.toLowerCase().includes(inputValue))
    .forEach(li =>
    {
      li.classList.remove('hidden');
    })
})