document.addEventListener('click',e=>{const d=document.querySelector('.mobile-nav[open]');if(d && !d.contains(e.target)) d.removeAttribute('open');});
