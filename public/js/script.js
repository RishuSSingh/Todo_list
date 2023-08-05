const btn = document.querySelector('.btn');
const newtask =  document.querySelector('.newtask');
const form = document.querySelector('form');
const tasklist = document.querySelector('.tasklist')


function addtoList(data) {
    tasklist.innerText = '';
    data.forEach((d) => {
        let li = document.createElement('li');
        li.innerText = d;
        tasklist.appendChild(li);
    });
}

form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    try{
       let {data} =  await axios.post('/addtask' ,{newtask : newtask.value});
       addtoList(data);
    // console.log(data);
    }
    catch(err){
        console.log(err);
    }
})