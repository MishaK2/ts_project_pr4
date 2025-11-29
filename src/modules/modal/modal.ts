export function initModal(): void { const modal=document.getElementById("modal") as HTMLDivElement;
     const openBtn=document.getElementById("openModal") as HTMLButtonElement; 
     const closeBtn=document.getElementById("closeModal") as HTMLButtonElement; if(openBtn&&modal){openBtn.onclick=()=>modal.style.display="flex";} if(closeBtn&&modal){closeBtn.onclick=()=>modal.style.display="none";}}