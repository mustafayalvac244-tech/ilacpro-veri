(function(){
var b=document.body,id=b.getAttribute("data-id"),kt=document.getElementById("kt");
var E={dikkat:["Kullanmadan önce dikkat edilmesi gerekenler",2],kullanim:["Nasıl kullanılır",3],yanEtki:["Olası yan etkiler nelerdir",4],saklama:["Saklanması",5]};
function par(m){var p=String(m).replace(/[ \t]+\n/g,"\n").split(/\n\s*\n/).map(function(x){return x.replace(/\n(?![•\-–●▪○])/g," ").replace(/\s{2,}/g," ").trim()}).filter(Boolean),o=[];
for(var i=0;i<p.length;i++){var t=p[i],m=/^\d+\s*\/\s*\d+(?:\s+|$)/.exec(t);if(m){t=t.slice(m[0].length);if(!t)continue;if(o.length&&!/[.!?:;]$/.test(o[o.length-1])&&!/^[•\-–●▪○]/.test(t)){o[o.length-1]+=" "+t;continue}}o.push(t)}return o}
function el(t,c,txt){var e=document.createElement(t);if(c)e.className=c;if(txt!=null)e.textContent=txt;return e}
function bolum(key,x){var s=el("section");s.id=key;var h=el("h2",null,E[key][0]);h.appendChild(el("small",null,"KT · Bölüm "+E[key][1]));s.appendChild(h);
var ps=par(x.metin),alt=x.alt||{},ids={};
for(var k in alt){var a=String(alt[k]).replace(/\s+/g," ").trim().slice(0,30);if(a)ids[k]=a}
ps.forEach(function(t){var bas=t.length<110&&!/^[•\-–●▪○]/.test(t)&&!/[.:;,)]$/.test(t)&&!/\. /.test(t);var e=el(bas?"h3":"p",null,t);
for(var k in ids){if(t.indexOf(ids[k])>-1){e.id=key+"-"+k;delete ids[k];break}}s.appendChild(e)});return s}
if(id&&kt){fetch("../kt/"+id+".json").then(function(r){return r.json()}).then(function(k){var bl=k&&k.bolumler||{};for(var key in E){var x=bl[key];if(x&&x.metin)kt.appendChild(bolum(key,x))}
if(location.hash){var t=document.getElementById(location.hash.slice(1));if(t)t.scrollIntoView()}}).catch(function(){})}
var ac=document.getElementById("ac"),ind=document.getElementById("indir");
if(ac&&ind)ac.addEventListener("click",function(){setTimeout(function(){if(!document.hidden)ind.className+=" on"},1500)});
})();
