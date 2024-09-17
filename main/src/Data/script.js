const menu = document.querySelector(".menu");
const box = document.querySelector(".box")

import { catalog, catalogData } from "./main.js";


const render = async () => {
  const data = await catalog();

  menu.innerHTML = data.map((item) => `
  <div class="border border-spacing-x-96 bg-slate-800 p-3">
   <img src="${item.img}">
   <h2 class="font-bold text-lg text-green-700">${item.text}</h2>
   <button class="border border-spacing-10 py-1 px-2 font-medium text-lg text-red-400 rounded-[10px]" data-name="${item.name}">${item.name}</button>
  </div>
  `).join("")
}
render();

const renderData = async (name) => {
    const data = await catalogData(name)
    console.log(data);
    
    box.innerHTML = data?.map((item) => `
    <div class="border border-spacing-x-96 bg-slate-800 p-3 mb-5 w-[250px]">
     <img src="${item.img}">
     <h2 class="font-bold text-lg text-green-700">${item.title}</h2>
     <p class="font-bold text-lg text-green-700">${item.rame}</p>
     <p class="font-bold text-lg text-green-700">${item.color}</p>
     <h2 class="font-bold text-lg text-green-700">${item.brand}</h2>
     <h3 class="font-bold text-lg text-green-700">${item.price}</h3>
    </div>
    `).join("")
   
}


menu.addEventListener("click",(e)=>{
  
  if(e.target.dataset.name){
    renderData(e.target.dataset.name)
  }
})
