(function(e){function t(t){for(var i,n,r=t[0],c=t[1],p=t[2],u=0,l=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&l.push(s[n][0]),s[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);d&&d(t);while(l.length)l.shift()();return o.push.apply(o,p||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],i=!0,n=1;n<a.length;n++){var r=a[n];0!==s[r]&&(i=!1)}i&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var i={},n={app:0},s={app:0},o=[];function r(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e2ac6fb3"}[e]+".js"}function c(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={about:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var i="css/"+({about:"about"}[e]||e)+"."+{about:"321d5b44"}[e]+".css",s=c.p+i,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var p=o[r],u=p.getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(u===i||u===s))return t()}var l=document.getElementsByTagName("style");for(r=0;r<l.length;r++){p=l[r],u=p.getAttribute("data-href");if(u===i||u===s)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var i=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete n[e],d.parentNode.removeChild(d),a(o)},d.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){n[e]=0})));var i=s[e];if(0!==i)if(i)t.push(i[2]);else{var o=new Promise((function(t,a){i=s[e]=[t,a]}));t.push(i[2]=o);var p,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(e);var l=new Error;p=function(t){u.onerror=u.onload=null,clearTimeout(d);var a=s[e];if(0!==a){if(a){var i=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+i+": "+n+")",l.name="ChunkLoadError",l.type=i,l.request=n,a[1](l)}s[e]=void 0}};var d=setTimeout((function(){p({type:"timeout",target:u})}),12e4);u.onerror=u.onload=p,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=i,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(a,i,function(t){return e[t]}.bind(null,i));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var p=window["webpackJsonp"]=window["webpackJsonp"]||[],u=p.push.bind(p);p.push=t,p=p.slice();for(var l=0;l<p.length;l++)t(p[l]);var d=u;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"062a":function(e,t,a){e.exports=a.p+"img/jwt.48f2ef95.png"},"08fc":function(e,t,a){e.exports=a.p+"img/seo.7bcded17.jpg"},"0cb9":function(e,t,a){e.exports=a.p+"img/flower_medium.6bd6b756.png"},"0d64":function(e,t,a){e.exports=a.p+"img/banner2.18c1c0bc.jpg"},"113a":function(e,t,a){e.exports=a.p+"img/customer_service.3125e210.jpg"},1660:function(e,t,a){e.exports=a.p+"img/site_existant.9c03087f.jpg"},1771:function(e,t,a){var i={"./CV_Linon.jpg":"ab0d","./Sass.png":"2c0f","./accessibility.jpg":"f42a","./animation.jpg":"51f1","./arrow.png":"c5d4","./banner.jpg":"4c4a","./banner1.jpg":"ba57","./banner2.jpg":"0d64","./contact_background.jpg":"bb63","./cration_de_site.jpg":"8727","./css.png":"e4d5","./customer_service.jpg":"113a","./entrepreneur.jpg":"1d7b","./express.png":"aba8","./flower.png":"5bd0","./flower_blue.jpg":"4fbb","./flower_medium.png":"0cb9","./flower_small.png":"bd02","./git.png":"43ac","./github.png":"359c","./html.png":"b55a","./js.png":"f505","./jwt.png":"062a","./mongodb.png":"57db","./mysql.png":"808d","./nodejs.png":"4722","./photo_cv.jpeg":"76ab","./price.jpg":"d4f7","./question.jpg":"fabc","./responsive.jpg":"33ec","./security.jpg":"8bf5","./seo.jpg":"08fc","./site_existant.jpg":"1660","./tailored.jpg":"4344","./tarifs.jpg":"f9db","./user.jpg":"18d5","./validity.jpg":"f36b","./vuejs.png":"2289"};function n(e){var t=s(e);return a(t)}function s(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=s,e.exports=n,n.id="1771"},"18d5":function(e,t,a){e.exports=a.p+"img/user.9535d32e.jpg"},"1d7b":function(e,t,a){e.exports=a.p+"img/entrepreneur.a09d366d.jpg"},2289:function(e,t,a){e.exports=a.p+"img/vuejs.0c519a68.png"},"2c0f":function(e,t,a){e.exports=a.p+"img/Sass.83b5b82f.png"},"33ec":function(e,t,a){e.exports=a.p+"img/responsive.a8704bcb.jpg"},"359c":function(e,t,a){e.exports=a.p+"img/github.72dabd4c.png"},3831:function(e,t,a){},4344:function(e,t,a){e.exports=a.p+"img/tailored.3283ccb7.jpg"},"43ac":function(e,t,a){e.exports=a.p+"img/git.a3fc9cf3.png"},4722:function(e,t,a){e.exports=a.p+"img/nodejs.8551aee1.png"},"4c4a":function(e,t,a){e.exports=a.p+"img/banner.12e415ed.jpg"},"4fbb":function(e,t,a){e.exports=a.p+"img/flower_blue.be35b17e.jpg"},"51f1":function(e,t,a){e.exports=a.p+"img/animation.f9fe9d2a.jpg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("header",{attrs:{id:"nav"}},[a("div",{staticClass:"router1"},[a("router-link",{staticClass:"router1__link",attrs:{to:"/"}},[e._v("Accueil")]),a("div",{staticClass:"underline"})],1),a("div",{staticClass:"router2"},[a("router-link",{staticClass:"router1__link",attrs:{to:"/about"}},[e._v("Infos")]),a("div",{staticClass:"underline"})],1),a("div",{staticClass:"router3"},[a("router-link",{staticClass:"router1__link",attrs:{to:"/contact"}},[e._v("Contacts")]),a("div",{staticClass:"underline"})],1),a("div",{staticClass:"router4"},[a("router-link",{staticClass:"router1__link",attrs:{to:"/lab"}},[e._v("Labo")]),a("div",{staticClass:"underline"})],1)]),a("main",{staticClass:"main"},[a("router-view")],1)])},s=[],o=(a("d4aa"),a("2877")),r={},c=Object(o["a"])(r,n,s,!1,null,"628b9034",null),p=c.exports,u=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),l=a("bb51");i["a"].use(u["a"]);var d=[{path:"/",name:"Home",component:l["default"]},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/contact",name:"Contact",component:function(){return a.e("about").then(a.bind(null,"b8fa"))}},{path:"/lab",name:"Lab",component:function(){return a.e("about").then(a.bind(null,"6cd1"))}},{path:"*",name:"notFound",component:function(){return Promise.resolve().then(a.bind(null,"bb51"))}}],m=new u["a"]({mode:"hash",base:"/",routes:d}),v=m,f=a("2f62");i["a"].use(f["a"]);var g=new f["a"].Store({state:{},mutations:{},actions:{},modules:{}}),h=a("755e");i["a"].config.productionTip=!1,i["a"].use(h,{load:{key:"AIzaSyB3N7m5i29xucTvjqmsvlM0uIgnXf9Ngf0",libraries:"liyana-317113"}}),new i["a"]({router:v,store:g,render:function(e){return e(p)}}).$mount("#app")},"57db":function(e,t,a){e.exports=a.p+"img/mongodb.9a7db2f5.png"},"5af2":function(e,t,a){},"5bd0":function(e,t,a){e.exports=a.p+"img/flower.fe9842e5.png"},"6f13":function(e,t,a){"use strict";a("a9b6")},"76ab":function(e,t,a){e.exports=a.p+"img/photo_cv.919be36e.jpeg"},"76b3":function(e,t,a){"use strict";a("ad8d")},7898:function(e,t,a){"use strict";a("3831")},"808d":function(e,t,a){e.exports=a.p+"img/mysql.fdcbcca9.png"},"842b":function(e,t,a){"use strict";a("ac7a")},8727:function(e,t,a){e.exports=a.p+"img/cration_de_site.2c3fe9d5.jpg"},"8bf5":function(e,t,a){e.exports=a.p+"img/security.3d6082c9.jpg"},9685:function(e,t,a){"use strict";a("dd63")},a9b6:function(e,t,a){},ab0d:function(e,t,a){e.exports=a.p+"img/CV_Linon.47bc0e57.jpg"},aba8:function(e,t,a){e.exports=a.p+"img/express.2e313d2d.png"},ac7a:function(e,t,a){},ad8d:function(e,t,a){},b55a:function(e,t,a){e.exports=a.p+"img/html.0cf7d043.png"},ba57:function(e,t,a){e.exports=a.p+"img/banner1.3f655af2.jpg"},bb51:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"home"},[i("transition",{attrs:{name:"fade"}},[e.load?i("Preloader"):e._e()],1),i("div",{staticClass:"box_page"},[e._m(0),i("div",{staticClass:"home__content"},[i("Pics",{staticClass:"home__content__items",attrs:{url:"cration_de_site.jpg",alternative:"Photo d'un homme sur un ordinateur. Accès j'ai besoin d'un site web",description:"J'ai besoin d'un site web"},nativeOn:{click:function(t){return e.create(t)}}}),i("Pics",{staticClass:"home__content__items_by_two",attrs:{url:"site_existant.jpg",alternative:"Photo d'un bureau personnelle. Accès j'ai déjà un site web",description:"J'ai déjà un site web"},nativeOn:{click:function(t){return e.update(t)}}}),i("Pics",{staticClass:"home__content__items_by_two",attrs:{url:"customer_service.jpg",alternative:"Photo d'une équipe de service client. Accès service client",description:"Espace client"},nativeOn:{click:function(t){return e.service(t)}}})],1),e.popup?i("div",{staticClass:"popup"},[i("div",{staticClass:"popup__background",on:{click:e.close_popup}}),e._v(" "),i("div",{staticClass:"popup__form"},[i("p",{staticClass:"popup__form__close",on:{click:e.close_popup}},[e._v("X")]),e.creation?i("Creation"):e._e(),e._v(" "),e.optimisation?i("Mywebsite"):e._e(),e._v(" "),e.support?i("Support"):e._e()],1)]):e._e(),i("p",{staticClass:"black_cursive"},[e._v("Liyana c'est:")]),e._m(1),e._m(2),e._m(3),i("div",{staticClass:"tarifs"},[e._m(4),i("div",[i("img",{staticClass:"arrow",attrs:{src:a("c5d4"),alt:"une personne qui se demande combien coûte un site internet"}}),i("a",{staticClass:"tarifs__button",attrs:{href:a("f9db"),title:"Télécharger ma grille tarifaire😊",download:""}},[i("p",[e._v("Télécharger ma grille tarifaire")])])])]),i("div",{staticClass:"info"})])],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"home__header"},[a("h2",{staticClass:"home__header__h2"},[e._v("Liyana")]),a("h1",{staticClass:"home__header__h1"},[e._v("Développeur Web")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tailored"},[a("h3",[e._v("Vos projets sur mesure")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"explain"},[i("img",{staticClass:"explain__img",attrs:{src:a("1d7b"),alt:"une personne qui se demande comment créer un site internet"}}),i("p",{staticClass:"explain__text"},[e._v("Ne vous posez plus de questions😎! Nous étudions ensemble votre projet et l'adaptons à votre budget 🤝🏽. Pour "),i("strong",[e._v("un site internet")]),e._v(" qui reflète votre activité et votre personnalité! ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"price"},[a("h3",[e._v("Mes tarifs")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("p",{staticClass:"tarifs__question"},[e._v(" Un peu de transparence?")]),i("img",{staticClass:"tarifs__img",attrs:{src:a("fabc"),alt:"une personne qui se demande combien coûte un site internet"}})])}],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{attrs:{action:""}},[a("div",{staticClass:"text_center space wrapping"},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedSex,expression:"checkedSex"}],attrs:{type:"radio",id:"madame",name:"sexe","aria-label":"choix du sexe féminim, madame",value:"madame"},domProps:{checked:e._q(e.checkedSex,"madame")},on:{change:function(t){e.checkedSex="madame"}}}),a("label",{attrs:{for:"madame"}},[e._v("Madame")])]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedSex,expression:"checkedSex"}],attrs:{type:"radio",id:"monsieur",name:"sexe","aria-label":"choix sexe masculin, monsieur",value:"monsieur"},domProps:{checked:e._q(e.checkedSex,"monsieur")},on:{change:function(t){e.checkedSex="monsieur"}}}),a("label",{attrs:{for:"monsieur"}},[e._v("Monsieur")])])]),a("div",{staticClass:"wrapping"},[a("div",[a("label",{attrs:{for:"name","aria-label":"Votre nom"}},[e._v("Nom*")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",pattern:"[ A-Za-z-0-9\\p{L}]{2,254}",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),a("div",[a("label",{attrs:{for:"firstname","aria-label":"Votre Prénom"}},[e._v("Prénom*")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.firstname,expression:"firstname"}],attrs:{type:"text",pattern:"[ A-Za-z-0-9\\p{L}]{2,254}",required:""},domProps:{value:e.firstname},on:{input:function(t){t.target.composing||(e.firstname=t.target.value)}}})]),a("div",[a("label",{attrs:{for:"compagny","aria-label":"le nom de votre société"}},[e._v("Dénomination social")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.compagny,expression:"compagny"}],attrs:{type:"text"},domProps:{value:e.compagny},on:{input:function(t){t.target.composing||(e.compagny=t.target.value)}}})])]),a("div",{staticClass:"space wrapping"},[a("div",[a("label",{attrs:{for:"phone","aria-label":"Votre numéro de téléphone"}},[e._v("Téléphone*")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"number",pattern:"[ 0-9\\p{L}]{15}",required:""},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),a("div",[a("label",{attrs:{for:"mail","aria-label":"Votre adresse email"}},[e._v("Mail*")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.mail,expression:"mail"}],attrs:{type:"email",required:""},domProps:{value:e.mail},on:{input:function(t){t.target.composing||(e.mail=t.target.value)}}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"space margin_right"},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.design,expression:"design"}],attrs:{type:"radio",id:"have",name:"design","aria-label":"ai une maquette",value:"ai une maquette"},domProps:{checked:e._q(e.design,"ai une maquette")},on:{change:function(t){e.design="ai une maquette"}}}),a("label",{attrs:{for:"has_desidn"}},[e._v("J'ai une maquette")])]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.design,expression:"design"}],attrs:{type:"radio",id:"have_not",name:"design","aria-label":" pas de maquette",value:"pas de maquette"},domProps:{checked:e._q(e.design,"pas de maquette")},on:{change:function(t){e.design="pas de maquette"}}}),a("label",{attrs:{for:"has_no_desidn"}},[e._v("Je n'ai pas de maquette")])])]),a("div",[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.specifications,expression:"specifications"}],attrs:{type:"radio",id:"specifications",name:"specifications","aria-label":"ai un cahier des charges",value:"ai un cahier des charges"},domProps:{checked:e._q(e.specifications,"ai un cahier des charges")},on:{change:function(t){e.specifications="ai un cahier des charges"}}}),a("label",{attrs:{for:"has_specifications"}},[e._v("J'ai un cahier des charges")])]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.specifications,expression:"specifications"}],attrs:{type:"radio",id:"no_specifications",name:"specifications","aria-label":"pas de cahier des charges",value:"pas de cahier des charges"},domProps:{checked:e._q(e.specifications,"pas de cahier des charges")},on:{change:function(t){e.specifications="pas de cahier des charges"}}}),a("label",{attrs:{for:"has_no_specifications"}},[e._v("C'est quoi un cahier des charges?🙃")])])])]),a("div",{staticClass:"space"},[a("p",{staticClass:"text_center"},[e._v("Mon projet:")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio",id:"cabinet",name:"project","aria-label":"Je veux un site vitrine",value:"Je veux un site vitrine"},domProps:{checked:e._q(e.type,"Je veux un site vitrine")},on:{change:function(t){e.type="Je veux un site vitrine"}}}),a("label",{attrs:{for:"cabinet"}},[e._v("Je veux un site vitrine juste pour présenter mon activité")])]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio",id:"dynamic",name:"project","aria-label":"je veux un site dynamique",value:"je veux un site dynamique"},domProps:{checked:e._q(e.type,"je veux un site dynamique")},on:{change:function(t){e.type="je veux un site dynamique"}}}),a("label",{attrs:{for:"dynamic"}},[e._v("Je veux un site dynamique")])]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio",id:"single_page",name:"project","aria-label":"je veux un site monopage",value:"je veux un site monopage"},domProps:{checked:e._q(e.type,"je veux un site monopage")},on:{change:function(t){e.type="je veux un site monopage"}}}),a("label",{attrs:{for:"single_page"}},[e._v("Je veux un site monopage")])]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio",id:"single_page",name:"project","aria-label":"je veux un avis avant de choisir",value:"je veux un avis avant de choisir"},domProps:{checked:e._q(e.type,"je veux un avis avant de choisir")},on:{change:function(t){e.type="je veux un avis avant de choisir"}}}),a("label",{attrs:{for:"help"}},[e._v("Je veux un avis avant de choisir 🤓")])])]),a("div",{staticClass:"space"},[a("p",{staticClass:"text_center"},[e._v("Mon budget:")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.budget,expression:"budget"}],attrs:{type:"radio",id:"limited_budget",name:"budget","aria-label":"budget limité",value:"budget limité"},domProps:{checked:e._q(e.budget,"budget limité")},on:{change:[function(t){e.budget="budget limité"},e.price]}}),a("label",{attrs:{for:"limited_budget"}},[e._v("Il est limité")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.cost,expression:"cost"},{name:"show",rawName:"v-show",value:e.show_label_price,expression:"show_label_price"}],attrs:{type:"text",pattern:"[ A-Za-z-0-9\\p{L}]{2,50}",placeholder:"indiquez le montant"},domProps:{value:e.cost},on:{input:function(t){t.target.composing||(e.cost=t.target.value)}}})]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.budget,expression:"budget"}],attrs:{type:"radio",id:"not_limited_budget",name:"budget","aria-label":"pas de budget",value:"pas de budget"},domProps:{checked:e._q(e.budget,"pas de budget")},on:{change:[function(t){e.budget="pas de budget"},e.no_price]}}),a("label",{attrs:{for:"not_limited_budget"}},[e._v("Je n'ai pas vraiment de budget ")])])]),a("button",{staticClass:"center space",on:{click:e.sendEmail}},[e._v("Envoyer")])])},o=[],r=(a("b0c0"),a("99af"),a("bc3a")),c=a.n(r),p={name:"creation",data:function(){return{checkedSex:"",name:"",firstname:"",compagny:"",phone:"",mail:"",design:"",specifications:"",type:"",budget:""}},methods:{no_price:function(){this.show_label_price=!1},price:function(){this.show_label_price=!0},sendEmail:function(e){e.preventDefault(),console.log(this.phone),""==this.name||""==this.firstname||""==this.mail?window.alert("Merci de remplir correctement le formulaire pour que je puisse vous répondre au mieux et au plus vite!"):setTimeout(c.a.post("https://api.emailjs.com/api/v1.0/email/send",{user_id:"user_pyqe7uNn5u2rhcaWosBYE",service_id:"gmail",template_id:"template_t1nk9ub",template_params:{from_name:"".concat(this.checkedSex," ").concat(this.name,"  ").concat(this.firstname," de la société ").concat(this.compagny," "),message:"info contact: téléphone:".concat(this.phone,", email: ").concat(this.mail,". ").concat(this.design,". ").concat(this.specifications,". ").concat(this.type,". ").concat(this.budget,"  le montant max est de  ").concat(this.cost)}},{headers:{"Content-Type":"application/json"}}).then((function(e){setTimeout(console.log(e),2e3),window.alert("Votre message a été envoyé avec succès!")})),1e4)}}},u=p,l=(a("7898"),a("2877")),d=Object(l["a"])(u,s,o,!1,null,"536d8250",null),m=d.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{attrs:{action:""}},[a("div",{staticClass:"text_center space wrapping"},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedSex,expression:"checkedSex"}],attrs:{type:"radio",id:"madame",name:"sexe","aria-label":"choix du sexe féminim, madame",value:"madame"},domProps:{checked:e._q(e.checkedSex,"madame")},on:{change:function(t){e.checkedSex="madame"}}}),a("label",{attrs:{for:"madame"}},[e._v("Madame")])]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedSex,expression:"checkedSex"}],attrs:{type:"radio",id:"monsieur",name:"sexe","aria-label":"choix sexe masculin, monsieur",value:"monsieur"},domProps:{checked:e._q(e.checkedSex,"monsieur")},on:{change:function(t){e.checkedSex="monsieur"}}}),a("label",{attrs:{for:"monsieur"}},[e._v("Monsieur")])])]),a("div",{staticClass:"wrapping"},[a("div",[a("label",{attrs:{for:"name","aria-label":"Votre nom"}},[e._v("Nom*")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",pattern:"[ A-Za-z-0-9\\p{L}]{2,254}",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),a("div",[a("label",{attrs:{for:"firstname","aria-label":"Votre Prénom"}},[e._v("Prénom*")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.firstname,expression:"firstname"}],attrs:{type:"text",pattern:"[ A-Za-z-0-9\\p{L}]{2,254}",required:""},domProps:{value:e.firstname},on:{input:function(t){t.target.composing||(e.firstname=t.target.value)}}})]),a("div",[a("label",{attrs:{for:"compagny","aria-label":"le nom de votre société"}},[e._v("Dénomination social")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.compagny,expression:"compagny"}],attrs:{type:"text"},domProps:{value:e.compagny},on:{input:function(t){t.target.composing||(e.compagny=t.target.value)}}})])]),a("div",{staticClass:"space wrapping"},[a("div",[a("label",{attrs:{for:"phone","aria-label":"Votre numéro de téléphone"}},[e._v("Téléphone*")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"number",pattern:"[ 0-9\\p{L}]{15}",required:""},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),a("div",[a("label",{attrs:{for:"mail","aria-label":"Votre adresse email"}},[e._v("Mail*")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.mail,expression:"mail"}],attrs:{type:"email",required:""},domProps:{value:e.mail},on:{input:function(t){t.target.composing||(e.mail=t.target.value)}}})])]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.specifications,expression:"specifications"}],attrs:{type:"radio",id:"specifications",name:"specifications","aria-label":"ai un cahier des charges",value:"ai un cahier des charges"},domProps:{checked:e._q(e.specifications,"ai un cahier des charges")},on:{change:function(t){e.specifications="ai un cahier des charges"}}}),a("label",{attrs:{for:"has_specifications"}},[e._v("J'ai un cahier des charges")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.specifications,expression:"specifications"}],attrs:{type:"radio",id:"no_specifications",name:"specifications","aria-label":"pas de cahier des charges",value:"pas de cahier des charges"},domProps:{checked:e._q(e.specifications,"pas de cahier des charges")},on:{change:function(t){e.specifications="pas de cahier des charges"}}}),a("label",{attrs:{for:"has_no_specifications"}},[e._v("C'est quoi un cahier des charges?🙃")])]),a("div",[a("p",{staticClass:"text_center"},[e._v("Je veux:")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio",id:"cabinet",name:"project","aria-label":"Je veux Ajouter des fonctionalités",value:"Je veux Ajouter des fonctionalités"},domProps:{checked:e._q(e.type,"Je veux Ajouter des fonctionalités")},on:{change:function(t){e.type="Je veux Ajouter des fonctionalités"}}}),a("label",{attrs:{for:"cabinet"}},[e._v("Ajouter des fonctionalités")])]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio",id:"dynamic",name:"project","aria-label":"je veux Un nouveau site web",value:"je veux Un nouveau site web"},domProps:{checked:e._q(e.type,"je veux Un nouveau site web")},on:{change:function(t){e.type="je veux Un nouveau site web"}}}),a("label",{attrs:{for:"dynamic"}},[e._v("Un nouveau site web")])]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio",id:"single_page",name:"project","aria-label":"je veux Améliorer mon référencement",value:"je veux Améliorer mon référencement"},domProps:{checked:e._q(e.type,"je veux Améliorer mon référencement")},on:{change:function(t){e.type="je veux Améliorer mon référencement"}}}),a("label",{attrs:{for:"single_page"}},[e._v("Améliorer mon référencement")])]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"radio",id:"single_page",name:"project","aria-label":"je veux monétiser mon site",value:"je veux monétiser mon site"},domProps:{checked:e._q(e.type,"je veux monétiser mon site")},on:{change:function(t){e.type="je veux monétiser mon site"}}}),a("label",{attrs:{for:"single_page"}},[e._v("Monétiser mon site ")])])]),a("div",[a("label",{attrs:{for:"lang","aria-label":"les langages de mon site"}},[e._v("Les langages de mon site: ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.langages,expression:"langages"}],attrs:{type:"text",placeholder:"Ex: javascript, php, etc..."},domProps:{value:e.langages},on:{input:function(t){t.target.composing||(e.langages=t.target.value)}}})]),a("div",{staticClass:"space"},[a("p",{staticClass:"text_center"},[e._v("Mon budget:")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.budget,expression:"budget"}],attrs:{type:"radio",id:"limited_budget",name:"budget","aria-label":"budget limité",value:"budget limité"},domProps:{checked:e._q(e.budget,"budget limité")},on:{change:[function(t){e.budget="budget limité"},e.price]}}),a("label",{attrs:{for:"limited_budget"}},[e._v("Il est limité")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.cost,expression:"cost"},{name:"show",rawName:"v-show",value:e.show_label_price,expression:"show_label_price"}],attrs:{type:"text",pattern:"[ A-Za-z-0-9\\p{L}]{2,50}",placeholder:"indiquez le montant"},domProps:{value:e.cost},on:{input:function(t){t.target.composing||(e.cost=t.target.value)}}})]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.budget,expression:"budget"}],attrs:{type:"radio",id:"not_limited_budget",name:"budget","aria-label":"pas de budget",value:"pas de budget"},domProps:{checked:e._q(e.budget,"pas de budget")},on:{change:[function(t){e.budget="pas de budget"},e.no_price]}}),a("label",{attrs:{for:"not_limited_budget"}},[e._v("Je n'ai pas vraiment de budget ")])])]),a("button",{staticClass:"center",on:{click:e.sendEmail}},[e._v("Envoyer")])])},f=[],g={name:"mywebsite",data:function(){return{checkedSex:"",name:"",firstname:"",compagny:"",phone:"",mail:"",langages:"",specifications:"",type:"",budget:"",show_label_price:!1,cost:""}},methods:{no_price:function(){this.show_label_price=!1},price:function(){this.show_label_price=!0},sendEmail:function(e){e.preventDefault(),console.log(this.phone),""==this.name||""==this.firstname||""==this.mail?window.alert("Merci de remplir correctement le formulaire pour que je puisse vous répondre au mieux et au plus vite!"):setTimeout(c.a.post("https://api.emailjs.com/api/v1.0/email/send",{user_id:"user_pyqe7uNn5u2rhcaWosBYE",service_id:"gmail",template_id:"template_t1nk9ub",template_params:{from_name:"".concat(this.checkedSex," ").concat(this.name,"  ").concat(this.firstname," de la société ").concat(this.compagny," "),message:"info contact: téléphone:".concat(this.phone,", email: ").concat(this.mail,". ").concat(this.langages,". ").concat(this.specifications,". ").concat(this.type,". ").concat(this.budget," le montant max est de  ").concat(this.cost," ")}},{headers:{"Content-Type":"application/json"}}).then((function(e){setTimeout(console.log(e),2e3),window.alert("Votre message a été envoyé avec succès!")})),1e4)}}},h=g,b=(a("76b3"),Object(l["a"])(h,v,f,!1,null,"3594b6c5",null)),_=b.exports,x=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"box"},[i("img",{staticClass:"box__pic",attrs:{src:a("1771")("./"+e.url),alt:e.alternative}}),i("p",{staticClass:"box__text"},[e._v(e._s(e.description))])])},y=[],j={name:"pics",props:{url:{type:String},alternative:{type:String},description:{type:String}}},w=j,C=(a("842b"),Object(l["a"])(w,x,y,!1,null,"018ab675",null)),k=C.exports,q=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",[e._v("En cours de développement...")]),a("p",[e._v("En attendant n'hésitez pas à prendre contact avec moi par mail: liyana.pro97@gmail.com")]),a("p",[e._v("Ou par téléphone et sur whatsapp: 06.96.17.18.11 (pour whatsapp: +596 696 17 18 11) ")])])}],N={name:"support"},S=N,E=Object(l["a"])(S,q,P,!1,null,null,null),A=E.exports,O=a("edd1"),J={name:"Home",components:{Pics:k,Creation:m,Mywebsite:_,Support:A,Preloader:O["a"]},data:function(){return{popup:!1,creation:!1,optimisation:!1,support:!1,load:!0}},mounted:function(){this.hideSpinner()},methods:{hideSpinner:function(){var e=this;setTimeout((function(){e.load=!1}),1e3)},create:function(){this.popup=!0,this.creation=!0},update:function(){this.popup=!0,this.optimisation=!0},service:function(){this.popup=!0,this.support=!0},close_popup:function(){this.popup=!1,this.creation=!1,this.optimisation=!1,this.support=!1}}},L=J,M=(a("6f13"),Object(l["a"])(L,i,n,!1,null,"0a9e43ad",null));t["default"]=M.exports},bb63:function(e,t,a){e.exports=a.p+"img/contact_background.ec6a5dd4.jpg"},bd02:function(e,t,a){e.exports=a.p+"img/flower_small.7df25fd1.png"},c5d4:function(e,t,a){e.exports=a.p+"img/arrow.2d381a78.png"},d4aa:function(e,t,a){"use strict";a("5af2")},d4f7:function(e,t,a){e.exports=a.p+"img/price.72ec0ac5.jpg"},dd63:function(e,t,a){},e4d5:function(e,t,a){e.exports=a.p+"img/css.62115c94.png"},edd1:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"load"},[a("div",{staticClass:"lds-ellipsis"},[a("div"),a("div"),a("div"),a("div")])])}],s={name:"Preloader"},o=s,r=(a("9685"),a("2877")),c=Object(r["a"])(o,i,n,!1,null,"c4bde69a",null);t["a"]=c.exports},f36b:function(e,t,a){e.exports=a.p+"img/validity.c5befebf.jpg"},f42a:function(e,t,a){e.exports=a.p+"img/accessibility.f7906aae.jpg"},f505:function(e,t,a){e.exports=a.p+"img/js.9a62415c.png"},f9db:function(e,t,a){e.exports=a.p+"img/tarifs.1264251b.jpg"},fabc:function(e,t,a){e.exports=a.p+"img/question.abc59356.jpg"}});
//# sourceMappingURL=app.25e99a67.js.map