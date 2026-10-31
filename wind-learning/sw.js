const CACHE='wind-v1-20261031-6';
const BASE=['./','index.html','teacher.html','style.css','app.js','teacher.js','ui.js','client.js','data.js','lesson8.js','domain.js','config.js','icon.svg','manifest.webmanifest','sources.html','vendor/qrcode.js'];
BASE.push(...['app.js','teacher.js','ui.js','client.js','data.js','lesson8.js','domain.js','config.js'].map(p=>p+'?v=20261031-6'));
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(BASE))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('wind-v1-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==location.origin||u.pathname.includes('/api/'))return;e.respondWith(fetch(e.request).then(r=>{if(r.ok&&BASE.some(p=>new URL(p,self.registration.scope).pathname===u.pathname)){const clone=r.clone();caches.open(CACHE).then(c=>c.put(e.request,clone))}return r}).catch(async()=>await caches.match(e.request)||new Response('目前離線，請先連線下載這一頁。',{status:503,headers:{'Content-Type':'text/plain;charset=utf-8'}})))});
