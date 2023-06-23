function createTasks (task){
    const wrapper = document.querySelector('.wrapper')
    const wrapper2 = document.createElement('div')
    wrapper.appendChild(wrapper2)
    wrapper2.classList.add('wrapper2')
    wrapper2.innerHTML = `<div>${task}</div><div class="image-wrapper">
        <button id = "btn1" class="btn">
            <img class="button" src="images/nike.jpeg" alt="##">
        </button>
        <button id = "btn2"  class="btn">
            <img class="button" src="images/delete.png" alt="##">
        </button>
        <button id = "btn3"  class="btn">
            <img class="button" src="images/refresh.png" alt="##">
        </button>
    </div>`;

    const btn1 = document.getElementById('btn1')
    const btn2 = document.getElementById('btn2')
    const btn3 = document.getElementById('btn3')
    btn1.addEventListener('click' , () =>{
        wrapper2.style.background = 'rgb(34,193,195)'
        wrapper2.style.background = 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(54,0,172,1) 65%)'
    })
    btn2.addEventListener('click' , () =>{
        wrapper2.remove()
    })
    btn3.addEventListener('click' , () =>{
        wrapper2.style.display = 'none'
    })
}

const form = document.querySelector('form');
const input = document.querySelector('.task-adder');
form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  createTasks(input.value);
}); 