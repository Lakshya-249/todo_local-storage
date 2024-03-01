
let sub = document.getElementById("sub");

sub.addEventListener("click",(e)=>{
    e.preventDefault();
    let val = text.value;
    let val2 = title.value;
    // let len = localStorage.length + 1;
    localStorage.setItem(val2,val);
    getitem();
    location.reload();
});

const getitem = ()=>{
    let a = document.getElementById("id1");
    let str ="";
    for(let x=0;x<localStorage.length;x++){
        let key1 = localStorage.key(x)
        str = str + `<div class="box"id="box1>
                    <p class="p1">${localStorage.getItem(key1)}</p>
                    <button class="btn" onclick="mutton(${x})">Delete</button>
                </div>`;
    }
    id2.innerHTML=str;
}

// let btn = document.getElementsByClassName("btn");
// let arr = Array.from(btn);
// arr.forEach((elem)=>{
//     elem.addEventListener("click",(e)=>{
//         e.preventDefault();
//         let key1 = parseInt(elem.getAttribute("data-step"));
//         let keye = localStorage.key(key1);
//         localStorage.removeItem(keye);
//         getitem();
//     })
// })

const mutton = (key1)=>{
    let keye = localStorage.key(key1);
    localStorage.removeItem(keye);
    getitem();
}

if(localStorage.length!=0){
    getitem();
}else{
    console.log("nothing it it empty!!!");
}