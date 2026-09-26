(function(){
var b=document.body,id=b.getAttribute("data-id"),kt=document.getElementById("kt");
var E={dikkat:["Kullanmadan önce dikkat edilmesi gerekenler",2],kullanim:["Nasıl kullanılır",3],yanEtki:["Olası yan etkiler",4],saklama:["Saklanması",5]};
var SABIT=/^(Diğer ilaçlar ile birlikte kullanımı|Hamilelik|Emzirme|Araç ve makine kullanımı|.{1,60} içeriğinde bulunan bazı yardımcı maddeler hakkında önemli bilgiler|Uygun kullanım ve doz ?\/ ?uygulama sıklığı için talimatlar|Uygulama yolu ve metodu|Değişik yaş grupları|Çocuklarda kullanımı|Yaşlılarda kullanımı|Özel kullanım durumları|Böbrek yetmezliği|Karaciğer yetmezliği|Yiyecek ve içecek ile kullanılması|Çok yaygın|Yaygın|Yaygın olmayan|Seyrek|Çok seyrek|Bilinmiyor|Sıklığı bilinmeyen|Bilinmeyen sıklıkta)\s*:?$/i;
function par(m){var p=String(m).replace(/[ \t]+\n/g,"\n").split(/\n\s*\n/).map(function(x){return x.replace(/\n(?![•\-–●▪○])/g," ").replace(/\s{2,}/g," ").trim()}).filter(Boolean),o=[];
for(var i=0;i<p.length;i++){var t=p[i],m=/^\d+\s*\/\s*\d+(?:\s+|$)/.exec(t);if(m){t=t.slice(m[0].length);if(!t)continue;if(o.length&&!/[.!?:;]$/.test(o[o.length-1])&&!/^[•\-–●▪○]/.test(t)){o[o.length-1]+=" "+t;continue}}o.push(t)}return o}
function bas(t){if(t.length>=110||/^[•\-–●▪○|]/.test(t)||/[|.;,)]$/.test(t)||/\. /.test(t))return false;
return /^\d+\.\s\S/.test(t)||/(KULLANMAYINIZ|DİKKATLİ KULLANINIZ|unutursanız|kullandıysanız|sonlandırıldığında(ki olası etkiler)?)\s*:?$/.test(t)||SABIT.test(t)}
function el(t,c,txt){var e=document.createElement(t);if(c)e.className=c;if(txt!=null)e.textContent=txt;return e}
function bolum(key,x){var s=el("section");s.id=key;var d=el("div","bas");d.appendChild(el("h2",null,E[key][0]));d.appendChild(el("small",null,"KT · Bölüm "+E[key][1]));s.appendChild(d);
var ps=par(x.metin),alt=x.alt||{},ids={};
for(var k in alt){var a=String(alt[k]).replace(/\s+/g," ").trim().slice(0,30);if(a)ids[k]=a}
ps.forEach(function(t){var e=el(bas(t)?"h3":"p",null,t);
for(var k in ids){if(t.indexOf(ids[k])>-1){e.id=key+"-"+k;delete ids[k];break}}s.appendChild(e)});return s}
function hata(){var p=document.getElementById("pdf"),e=el("p","not","Diğer bölümler yüklenemedi; tam metin ");
if(p){var a=el("a",null,"TİTCK PDF");a.href=p.href;a.rel="noopener";e.appendChild(a);e.appendChild(document.createTextNode(" dosyasında."))}else e.textContent+="TİTCK PDF dosyasında.";kt.appendChild(e)}
if(id&&kt){fetch("../kt/"+id+".json").then(function(r){if(!r.ok)throw 0;return r.json()}).then(function(k){var bl=k&&k.bolumler||{},n=0;for(var key in E){var x=bl[key];if(x&&x.metin){kt.appendChild(bolum(key,x));n++}}
if(!n)hata();else if(location.hash){var t=document.getElementById(location.hash.slice(1));if(t)t.scrollIntoView()}}).catch(hata)}
var ac=document.getElementById("ac"),ind=document.getElementById("indir");
if(ac&&ind)ac.addEventListener("click",function(){setTimeout(function(){if(!document.hidden)ind.className+=" on"},1500)});
})();
