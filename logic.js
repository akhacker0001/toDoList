const screenValue = document.querySelector('input');
const target_div = document.querySelector('.list-container');
console.log(target_div)

const btn = document.querySelector('button');
btn.addEventListener('click', inputData);
window.addEventListener('keydown',e=>e.key =="Enter" && inputData())

function inputData(){
    const crossBtn = document.querySelectorAll('.fa-times').length;
    let value = screenValue.value;
    insertData(value,crossBtn)

}



function insertData(data,id)
{  
    let html = `

                <div class="items" id=${id}>
                    <div class="sr-no flex-center">${id+1}</div>
                    <div class="content">${data[0].toUpperCase() + data.substr(1)}</div>
                    <div class="close-btn flex-center">
                        <i class="fa fa-times" onClick={deleteItem(${id})} aria-hidden="true"></i>
                    </div>
                </div>
    
    `
    target_div.innerHTML += html
    screenValue.value = '';

}

function deleteItem(id){
    const target_div = document.querySelector('.list-container');
    let delEle = document.getElementById(id);
    target_div.removeChild(delEle)
    const srDiv = document.querySelectorAll('.sr-no');
    const crossBtn = document.querySelectorAll('.fa-times').length;
    for (let i = 0; i < crossBtn; i++) {
        srDiv[i].innerHTML = i+1;
        
    }


}
