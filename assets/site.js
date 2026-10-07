(async()=>{
 const body=document.body, root=body.dataset.root||'';
 const load=async(sel,file)=>{const host=document.querySelector(sel);if(!host)return;try{const r=await fetch(root+file);if(!r.ok)throw Error(r.status);host.innerHTML=await r.text();}catch(e){host.innerHTML='<p class="include-error">Composant indisponible. Lancez le site depuis un serveur local.</p>';}};
 await Promise.all([load('#site-header','includes/header.html'),load('#site-footer','includes/footer.html'),body.dataset.menu?load('#section-menu','menus/'+body.dataset.menu+'.html'):Promise.resolve()]);
 document.querySelectorAll('[data-path]').forEach(a=>a.href=root+a.dataset.path);
 document.querySelectorAll('[data-src]').forEach(i=>i.src=root+i.dataset.src);
 const b=document.querySelector('.menubtn'),m=document.querySelector('.menu'); b?.addEventListener('click',()=>{m?.classList.toggle('open');b.setAttribute('aria-expanded',m?.classList.contains('open')?'true':'false')});
 const here=location.pathname.replace(/\/g,'/'); document.querySelectorAll('a[data-path]').forEach(a=>{if(here.endsWith('/'+a.dataset.path)||here.endsWith(a.dataset.path))a.classList.add('active')});
})();
