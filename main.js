(()=>{"use strict";class t{constructor(t){this.parentEl=t,this.counter=!1,this.onClick.bind(this)}static get markup(){return'<dir class="Collapsible">\n        <div class="Collapsible-row">\n          <button class="btn">Collapsible</button>\n        </div>\n      </dir>'}bindToDOM(){this.parentEl.innerHTML=this.constructor.markup,this.widget=this.parentEl.querySelector(".Collapsible"),this.widget.addEventListener("click",(t=>this.onClick(t)))}onClick(t){if(t.target.closest(".btn")){if(t.target.closest(".btn").classList.toggle("action"),t.target.closest(".btn").classList.contains("action")&&!this.parentEl.querySelector(".promt")){const t=document.createElement("div");t.className="promt",t.innerText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa\n            voluptatibus debitis porro odio iure in aspernatur consequuntur,\n            enim ducimus suscipit provident architecto molestiae quaerat.\n            Obcaecati assumenda hic fuga porro pariatur.",this.widget.querySelector(".Collapsible-row").append(t)}!t.target.closest(".btn").classList.contains("action")&&this.parentEl.querySelector(".promt")&&(t.target.closest(".btn").classList.remove("action"),this.parentEl.querySelector(".promt").addEventListener("animationend",(()=>{this.parentEl.querySelector(".promt").remove()})),this.parentEl.querySelector(".promt").classList.add("hiden"))}!t.target.closest(".btn")&&this.parentEl.querySelector(".btn").classList.contains("action")&&(this.parentEl.querySelector(".btn").classList.remove("action"),this.parentEl.querySelector(".promt").addEventListener("animationend",(()=>{this.parentEl.querySelector(".promt").remove()})),this.parentEl.querySelector(".promt").classList.add("hiden"))}}document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".conteiner");new t(e).bindToDOM()}))})();