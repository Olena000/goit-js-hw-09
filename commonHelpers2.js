import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t={email:"",message:""},s="feedback-form-state",a=document.querySelector(".feedback-form");a.addEventListener("input",o);a.addEventListener("submit",i);n();function o(e){const l=e.target.name;t[l]=e.target.value.trim(),localStorage.setItem(s,JSON.stringify(t))}function n(){const e=JSON.parse(localStorage.getItem(s));if(!e)return;const{email:l,message:m}=a.elements;l.value=e.email||"",m.value=e.message||"",t.email=e.email||"",t.message=e.message||""}function i(e){e.preventDefault(),t.email===""||t.message===""?alert("Fill please all fields"):(console.log(t),localStorage.removeItem(s),t.email="",t.message="",a.reset())}
//# sourceMappingURL=commonHelpers2.js.map
