const hero = document.querySelector(".hero");
const menu = document.querySelector(".menu");
const box = document.querySelector(".box");
const row = document.querySelector(".row");

import { banners, catalog, catalogData, catalogBrand} from "./main.js";

const renderGet = async () => {
  const data = await banners();
  hero.innerHTML = data.map((item) => `
  <div class="pt-10">
  <img src="${item.img}" alt="">
  </div>
  `).join("");
}

renderGet()

const render = async () => {
  const data = await catalog();

  menu.innerHTML = data.map((item) => `
  <div class="border rounded-[15px] bg-slate-800 p-3">
   <img src="${item.img}">
   <h2 class="font-bold text-lg text-green-700">${item.text}</h2>
   <button class="border border-spacing-10 py-1 px-2 font-medium text-lg text-red-400 rounded-[10px]" data-name="${item.name}">${item.name}</button>
  </div>
  `).join("")
}
render();

const renderData = async (name) => {
    const data = await catalogData(name)
    
    box.innerHTML = data?.map((item) => `
    <div class="border rounded-[15px] bg-slate-800 p-6 mb-5 w-[250px]">
     <img src="${item.img}">
     <h2 class="font-bold text-lg text-green-700">${item.title}</h2>
     <p class="font-bold text-lg text-green-700">${item.rame}</p>
     <p class="font-bold text-lg text-green-700">${item.color}</p>
     <div class="flex justify-between mt-5">
      <button class="border border-spacing-10 py-1 px-2 font-medium text-lg text-red-400 rounded-[10px]" data-name="${item.name}">${item.brand}</button>
     <h3 class="font-bold text-lg text-green-700">${item.price}</h3>
     </div>
    </div>
    `).join("")
   
}


menu.addEventListener("click",(e)=>{
  
  if(e.target.dataset.name){
    renderData(e.target.dataset.name)
  }
})


const renderBrand = async (brand) => {
  const data = await catalogBrand(brand)

  row.innerHTML = data?.map((item) => `
     <div class="border rounded-[15px] bg-slate-800 p-6 mb-5 w-[250px]">
     <img src="${item.img}">
     <p class="font-bold text-lg text-green-700">${item.brand}</p>
    </div>
    `).join("")
}

row.addEventListener("click",(e)=>{
  
  if(e.target.dataset.name){
    renderBrand(e.target.dataset.name)
  }
})