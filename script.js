const rev=document.querySelectorAll('.reveal');
const obs=new IntersectionObserver(e=>{e.forEach(i=>{if(i.isIntersecting){i.target.classList.add('visible');obs.unobserve(i.target);}})},{threshold:0.2});
rev.forEach(r=>obs.observe(r));
const tr=document.getElementById('pageTransition');const links=document.querySelectorAll('a[data-transition]');
links.forEach(a=>a.onclick=e=>{e.preventDefault();tr.classList.add('active');setTimeout(()=>{location=a.href;},450);});
window.onload=()=>{setTimeout(()=>tr.classList.remove('active'),60);}
