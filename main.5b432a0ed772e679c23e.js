(()=>{var n={747:()=>{var n=document.getElementById("english-option"),e=document.getElementById("arabic-option");n.addEventListener("click",(function(){n.classList.add("hidden"),e.classList.remove("hidden")})),e.addEventListener("click",(function(){e.classList.add("hidden"),n.classList.remove("hidden")}));var A=document.getElementById("readMore-open"),t=document.getElementById("description");A.addEventListener("click",(function(n){n.preventDefault(),t.classList.toggle("open"),A.classList.toggle("rotate")}));var i=document.getElementById("phone-number"),o=document.getElementById("number-validation-message"),r=document.getElementById("button-validation-green"),a=document.getElementById("registration"),s=document.getElementById("pin"),c=document.querySelector(".registration__form"),l=document.getElementById("reset");i.addEventListener("input",(function(){10===i.value.length?(o.style.display="none",r.classList.add("green")):(o.style.display="block",r.classList.remove("green"))})),c.addEventListener("submit",(function(n){n.preventDefault()})),i.addEventListener("input",(function(){var n=i.value.replace(/\s/g,""),e=10===n.length;o.classList.toggle("valid",e),e&&(r.removeAttribute("disabled"),o.style.display="none"),o.style.display=n.length?"block":"none",r.addEventListener("click",(function(){a.style.display="none",s.style.display="flex",l.style.display="flex"})),10===e&&(s.style.display="none",s.style.display=n.length?"block":"none")}));var p=document.querySelectorAll(".pin__input"),C=document.getElementById("button-validation-pin"),d=document.querySelector(".pin__form"),g=document.getElementById("headerBlock"),x=document.getElementById("sectionBlock"),u=document.getElementById("registrationBlock"),f=document.getElementById("readMoreBlock"),m=document.getElementById("mainBlock"),h=document.getElementById("footerLink");d.addEventListener("submit",(function(n){n.preventDefault()})),p.forEach((function(n){n.addEventListener("input",(function(){var n=Array.from(p).map((function(n){return n.value})),e=n.every((function(n){return""!==n}));console.log(n,e),e?(C.removeAttribute("disabled"),C.classList.add("green")):(C.setAttribute("disabled","disabled"),C.classList.remove("green"))}))})),C.addEventListener("click",(function(){m.style.display="block",g.style.display="none",g.style.display="none",x.style.display="none",u.style.display="none",f.style.display="none",h.style.display="none"}));var b=document.querySelector(".carousel__slides").getElementsByClassName("carousel__slide-image"),_=document.querySelector("#carousel__arrow-left"),y=document.querySelector("#carousel__arrow-right"),B=document.querySelectorAll(".carousel__dot"),w=0;function v(n){for(var e=0;e<b.length;e++)b[e].classList.remove("active");b[n].classList.add("active"),B.forEach((function(n){return n.classList.remove("active")})),B[n].classList.add("active")}_.addEventListener("click",(function(){v(w=(w-1+b.length)%b.length)})),y.addEventListener("click",(function(){v(w=(w+1)%b.length)})),B.forEach((function(n,e){n.addEventListener("click",(function(){v(w=e)}))})),v(w);var E=document.getElementById("menuLink"),k=document.getElementById("closeMenu"),F=document.getElementById("menuContent"),G=document.body;E.addEventListener("click",(function(){F.classList.add("show"),G.classList.add("prevent-click"),G.style.overflow="hidden"})),k.addEventListener("click",(function(){F.classList.remove("show"),G.classList.remove("prevent-click"),G.style.overflow="auto"})),document.addEventListener("click",(function(n){var e=n.target;F.contains(e)||E.contains(e)||(F.classList.remove("show"),G.classList.remove("prevent-click"),G.style.overflow="auto")}))},144:(n,e,A)=>{"use strict";A.d(e,{Z:()=>C});var t=A(537),i=A.n(t),o=A(645),r=A.n(o),a=A(626),s=A.n(a),c=new URL(A(967),A.b),l=r()(i()),p=s()(c);l.push([n.id,`*{box-sizing:border-box;margin:0;padding:0}p,header,div,img,h1,h2,h3,h4,li,ul{margin:0;padding:0;list-style:none}.info__description,.header__language-option{font-family:"Inter",sans-serif;color:#fff;font-size:16px;font-weight:400;line-height:19px}.info__title{font-family:"Inter",sans-serif;color:#fff;font-size:24px;font-weight:600;line-height:29px}.footer__rights,.footer__link,.readMore__description,.pin__link{font-family:"Roboto",sans-serif;font-weight:500}.readMore__link,.registration__submit-text,.registration__title{font-family:"Roboto",sans-serif;font-size:16px;font-weight:500;line-height:17px}.pin__title,.registration__submit[type=submit]{font-family:"Roboto",sans-serif;font-size:17px;font-weight:700;line-height:17px}.popularSection__count,.gamesSection__count,.greenBlock__box-text{font-family:"Montserrat",sans-serif;font-size:14px;font-weight:400;line-height:17px}.menu__cv,.popularSection__buttons button,.popularSection__title,.gamesSection__title,.carousel__submit{font-family:"Montserrat",sans-serif;font-size:18px;font-weight:700;line-height:17px}.page__body{overflow:auto;box-sizing:border-box;scroll-behavior:smooth;background-color:#1e2128;padding:22px;min-height:100vh}.page .hidden{display:none}.page .no-scroll{overflow:hidden}.page .prevent-click{pointer-events:none}.container{max-width:768px;margin:0 auto}.header{display:flex;justify-content:space-between;align-items:center}.header__language-selector{display:flex}.header__logo{width:54px;height:44px}.hidden{display:none}.info{display:flex;flex-direction:column;align-items:center;gap:10px}.info__title{text-align:center}.info__description{color:#a4a4a4;text-align:center;size:12px}.registration{margin-top:50px}.registration__title{color:#fff;margin-bottom:20px}.registration__form{max-width:100%}.registration__inputContainer{display:flex}.registration__country-code-select select{width:100%;height:45px;padding:10px;border:1px solid #ccc;border-right:none;border-top-left-radius:4px;border-bottom-left-radius:4px;-moz-appearance:none;-webkit-appearance:none;appearance:none}.registration__country-code-select::after{content:"";position:absolute;top:50%;right:10px;transform:translateY(-50%);background-image:url("https://www.svgrepo.com/show/511043/line-xl.svg");background-repeat:no-repeat;background-size:16px;width:16px;height:16px}.registration__country-code-select{position:relative;width:58px}.registration__phone-number-container{flex:1;width:100%;height:45px;position:relative}.registration__phone-number-input{width:100%;height:100%;border:1px solid #ccc;border-top-right-radius:4px;border-bottom-right-radius:4px;text-align:center}.registration__submit[type=submit]{background-color:gray;color:#fff;width:100%;height:50px;padding:10px 20px;border:none;border-radius:4px;cursor:pointer;margin-top:20px}.registration__submit[type=submit].green{background-color:green}.registration__submit-text{font-size:12px;text-align:center;color:#9a9a9a;margin-top:10px}.registration__number-validation-message{display:none}.registration__number-validation-message.valid{border-radius:0px 3px 3px 0px;background-color:green;position:absolute;top:0;right:0;width:40px;height:45px;background-image:url(${p});background-repeat:no-repeat;background-position:center;opacity:0;animation:fadeIn .3s ease forwards}@keyframes fadeIn{0%{opacity:0;transform:translateX(70%)}100%{opacity:1;transform:translateX(0)}}.pin{display:flex;flex-direction:column;align-items:center}.pin__title{font-size:17px;line-height:17px;text-align:left;margin-bottom:20px;color:#fff}.pin__form{display:flex;flex-direction:column}.pin__lock{margin-right:20px}.pin__input{width:40px;height:40px;margin-right:10px;text-align:center;font-size:20px;border-radius:4px}.pin__reset{display:flex;flex-direction:column;align-items:center;text-align:center;margin-top:20px}.pin__list{display:flex;flex-direction:column;gap:15px}.pin__link{font-size:14px;line-height:17px;color:#fff}.readMore{margin-top:30px;display:flex;flex-direction:column;align-items:center;gap:10px}.readMore__link{display:flex;text-align:center;align-items:center;cursor:pointer;size:16px;color:#8f8f8f;text-decoration:none}.readMore__description{font-size:12px;line-height:14px;color:#fff;max-height:0;overflow:hidden;transition:max-height .3s ease;max-width:480px}.readMore__description.open{max-height:210px}.readMore__myAccount{color:#aed300}.readMore__icon{transition:transform .3s ease;cursor:pointer;margin-left:5px;margin-right:5px}.readMore__link.rotate .readMore__icon{transform:rotate(90deg)}.footer{display:flex;flex-direction:column;text-align:center;margin-top:40px}.footer__list{display:flex;justify-content:center;gap:20px;margin-bottom:20px}.footer__link{font-size:14px;line-height:16px;letter-spacing:0em;color:#bababa}.footer__rights{margin-top:10px;font-size:10px;line-height:12px;color:#bababa}.main__header{display:flex;justify-content:space-between;align-items:center}.greenBlock{position:relative;margin:0 auto;z-index:1}.greenBlock__box{display:flex;height:62px;border-radius:12px;background:#aed300;padding:12px}.greenBlock__box-text{color:#000;display:flex;margin:0 auto;align-items:center;text-align:center}.carousel{position:relative;bottom:20px;overflow:hidden;max-width:768px;max-height:375px;margin-left:-22px;margin-right:-22px}.carousel__container{display:flex;align-items:center;justify-content:center;position:relative;max-width:768px;max-height:375px}.carousel__slides{max-width:768px;display:flex;transition:transform .3s ease-in-out}.carousel__slide-image{width:100%;height:100%;display:none}.carousel__slide-image.active{display:block}.carousel__arrow-left{left:10px}.carousel__arrow-right{right:10px}.carousel__indicator{position:absolute;height:20px;bottom:10px;left:50%;transform:translateX(-50%)}.carousel__dot{display:inline-block;width:10px;height:10px;border-radius:50%;background-color:rgba(190,190,190,.5);margin:0 5px;cursor:pointer}.carousel__dot.active{background-color:#fff}.carousel__submit{background-color:#bf2de2;margin:0 auto;width:230px;height:65px;border-radius:12px;color:#fff;padding:10px 20px;border:none;cursor:pointer;margin-top:20px;display:flex;justify-content:center;align-items:center;box-shadow:0px 4px 8px rgba(255,85,249,.2);transition:transform .2s ease,box-shadow .2s ease}.carousel__submit:hover{transform:scale(0.95)}.carousel__submit:active{transform:scale(1);box-shadow:0px 4px 8px rgba(0,0,0,.2)}.arrow{position:absolute;top:50%;transform:translateY(-50%);width:80px;height:80px;cursor:pointer}.line{top:40px;margin-top:40px;height:4px;background:linear-gradient(90deg, rgba(174, 211, 0, 0) 0%, #AED300 50.8%, rgba(174, 211, 0, 0) 100%);filter:blur(2px)}.gamesSection{margin-top:40px;text-align:center}.gamesSection__header{display:flex;justify-content:flex-start;align-items:center;margin-bottom:40px}.gamesSection__title{font-size:16px;color:#fff}.gamesSection__count{margin-left:5px;width:30px;height:30px;background-color:#aed300;border-radius:50%;display:flex;justify-content:center;align-items:center;color:#000}.gamesSection__images{display:flex;flex-wrap:wrap;justify-content:center;margin-bottom:20px;gap:10px}.gamesSection__more-games{margin-top:40px;display:flex;justify-content:flex-end;align-items:center}.gamesSection__add-icon{width:30px;height:30px;margin-left:5px;background-color:#aed300;border-radius:50%;display:flex;justify-content:center;align-items:center;color:#fff;cursor:pointer}.popularSection{display:flex;flex-direction:column;margin-top:40px;align-items:center}.popularSection__header{display:flex;margin-right:auto}.popularSection__title{font-size:16px;color:#fff}.popularSection__game-count{width:30px;height:30px;background-color:#aed300;border-radius:50%;display:flex;justify-content:center;align-items:center;color:#fff}.popularSection__count{margin-left:5px;width:30px;height:30px;background-color:#aed300;border-radius:50%;display:flex;justify-content:center;align-items:center;color:#000}.popularSection__images{display:flex;flex-wrap:wrap;justify-content:center;margin-bottom:20px;gap:20px}.popularSection__buttons button{height:42px;width:100%;margin:0 10px;padding:10px 20px;background-color:#aed300;border:none;border-radius:5px;color:#fff;cursor:pointer;font-size:14px;color:#000}.popularSection__buttons{width:380px;display:flex;justify-content:center;align-items:center}.popularSection__images{display:grid;grid-template-columns:repeat(1, 6fr);grid-gap:20px;margin-top:40px}@media(min-width: 768px){.popularSection__images{grid-template-columns:repeat(2, 6fr)}}.menu{max-width:768px;position:fixed;top:0;right:-100%;width:100%;height:100vh;background-color:rgba(240,240,240,.9);backdrop-filter:blur(10px);transition:right .3s ease;z-index:999}.menu__image{width:100px;height:100px}.menu__list{display:flex;flex-direction:column;gap:50px;align-items:center}.menu__cv{font-size:38px;color:#000}.menu.show{right:0;overflow-y:hidden}.close-link{display:flex;margin:15px;align-items:center}.close-link img{margin:0 22px 0 0;width:50px;height:50px}.close-link:hover img{opacity:.7}`,"",{version:3,sources:["webpack://./src/utils/_reset.scss","webpack://./src/utils/_variables.scss","webpack://./src/styles/blocks/Page.scss","webpack://./src/styles/blocks/Header.scss","webpack://./src/styles/blocks/Info.scss","webpack://./src/styles/blocks/Registration.scss","webpack://./src/styles/blocks/ReadMore.scss","webpack://./src/styles/blocks/Footer.scss","webpack://./src/styles/blocks/MainBlock.scss","webpack://./src/styles/blocks/GreenBlock.scss","webpack://./src/styles/blocks/Carousel.scss","webpack://./src/styles/blocks/Line.scss","webpack://./src/styles/blocks/NewGames.scss","webpack://./src/styles/blocks/PopularGame.scss","webpack://./src/utils/_mixins.scss","webpack://./src/styles/blocks/Menu.scss"],names:[],mappings:"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",sourcesContent:["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n\n}\n\np,\nheader,\ndiv,\nimg,\nh1,\nh2,\nh3,\nh4,\nli,\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n",'%Inter400 {\n  font-family: "Inter" , sans-serif;\n  color: #ffffff;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 19px;\n}\n\n%Inter600 {\n  font-family: "Inter" , sans-serif;\n  color: #ffffff;\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 29px;\n}\n\n%Roboto400 {\n  font-family: "Roboto", sans-serif;\n  font-weight: 500;\n}\n\n%Roboto500 {\n  font-family: "Roboto", sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 17px;\n}\n\n%Roboto700 {\n  font-family: "Roboto", sans-serif;\n  font-size: 17px;\n  font-weight: 700;\n  line-height: 17px;\n}\n\n%Montserrat400 {\n  font-family: "Montserrat", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 17px;\n}\n\n%Montserrat700 {\n  font-family: "Montserrat", sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 17px;\n}\n\n',".page {\n  &__body {\n    overflow: auto;\n    box-sizing: border-box;\n    scroll-behavior: smooth;\n    background-color: #1E2128;\n    padding: 22px;\n    min-height: 100vh;\n  }\n\n  .hidden {\n    display: none;\n  }\n  \n  .no-scroll {\n    overflow: hidden;\n  }\n  \n  .prevent-click {\n    pointer-events: none;\n  }\n}\n\n.container {\n  max-width: 768px;\n  margin: 0 auto;\n};\n",".header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  &__language-selector {\n    display: flex;\n  }\n\n  &__language-option {\n    @extend %Inter400;\n  }\n\n  &__logo {\n    width: 54px;\n    height: 44px;\n  }\n};\n\n.hidden {\n  display: none;\n}\n",".info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  \n  &__title {\n    @extend %Inter600;\n    text-align: center;\n  };\n\n  &__description{\n    @extend %Inter400;\n    color: #A4A4A4; \n    text-align: center;\n    size: 12px;\n  };\n}",'.registration {\n  margin-top: 50px;\n\n  &__title {\n    @extend %Roboto500;\n    color: white;\n    margin-bottom: 20px;\n  };\n\n  &__form {\n    max-width: 100%;\n  };\n  \n  &__inputContainer {\n    display: flex;\n  };\n\n  &__country-code-select select {\n    width: 100%;\n    height: 45px;\n    padding: 10px;\n    border: 1px solid #ccc;\n    border-right: none;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n  };\n\n  &__country-code-select::after {\n    content: "";\n    position: absolute;\n    top: 50%;\n    right: 10px;\n    transform: translateY(-50%);\n    background-image: url("https://www.svgrepo.com/show/511043/line-xl.svg");\n    background-repeat: no-repeat;\n    background-size: 16px;\n    width: 16px;\n    height: 16px;\n  }\n\n  &__country-code-select {\n    position: relative;\n    width: 58px;\n  }\n\n\n  &__phone-number-container {\n    flex: 1;\n    width: 100%;\n    height: 45px;\n    position: relative;\n\n  }\n\n  &__phone-number-input {\n    width: 100%;\n    height: 100%;\n    border: 1px solid #ccc;\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n    text-align: center;\n  };\n\n  &__submit[type="submit"] {\n    background-color: grey;\n    @extend %Roboto700;\n    color: white;\n    width: 100%;\n    height: 50px;\n    padding: 10px 20px;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    margin-top: 20px;\n  };\n  \n  &__submit[type="submit"].green {\n    background-color: green;\n  }\n\n  &__submit-text {\n    @extend %Roboto500;\n    font-size: 12px;\n    text-align: center;\n    color: #9A9A9A;\n    margin-top: 10px;\n  }\n\n  &__number-validation-message {\n    display: none;\n  }\n  \n  &__number-validation-message.valid {\n    border-radius: 0px 3px 3px 0px;\n    background-color: green;\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 40px;\n    height: 45px;\n    background-image: url(\'./../images/done.svg\');\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0;\n    animation: fadeIn 0.3s ease forwards;\n  }\n  \n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n      transform: translateX(70%);\n    }\n    100% {\n      opacity: 1;\n      transform: translateX(0);\n    }\n  }\n}\n\n.pin {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  &__title {\n    @extend %Roboto700;\n    font-size: 17px;\n    line-height: 17px;\n    text-align: left;\n    margin-bottom: 20px;\n    color: white;\n  }\n\n  &__form {\n    display: flex;\n    flex-direction: column;\n  }\n\n  &__lock {\n    margin-right: 20px;\n  }\n\n  &__input {\n    width: 40px;\n    height: 40px;\n    margin-right: 10px;\n    text-align: center;\n    font-size: 20px;\n    border-radius: 4px;\n  }\n\n  &__reset {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    margin-top: 20px;\n  }\n\n  &__list {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n  }\n\n  &__link {\n    @extend %Roboto400;\n    font-size: 14px;\n    line-height: 17px;\n    color: #FFFFFF;\n  }\n}\n',".readMore {\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n\n  &__link {\n    display: flex;\n    @extend %Roboto500;\n    text-align: center;\n    align-items: center;\n    cursor: pointer;\n    size: 16px;\n    color: #8F8F8F;\n    text-decoration: none;\n  }\n\n  &__description {\n    @extend %Roboto400;\n    font-size: 12px;\n    line-height: 14px;\n    color: white;\n    max-height: 0;\n    overflow: hidden;\n    transition: max-height 0.3s ease;\n    max-width: 480px;\n  }\n  \n  &__description.open {\n    max-height: 210px;\n  }\n\n  &__myAccount {\n    color: #AED300;\n  }\n\n  &__icon {\n    transition: transform 0.3s ease;\n    cursor: pointer;\n    margin-left: 5px;\n    margin-right: 5px;\n  }\n  \n  &__link.rotate &__icon {\n    transform: rotate(90deg);\n  }\n};\n",".footer {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  margin-top: 40px;\n\n  &__list {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    margin-bottom: 20px;\n  }\n\n  &__link {\n    @extend %Roboto400;\n    font-size: 14px;\n    line-height: 16px;\n    letter-spacing: 0em;\n    color: #BABABA;\n  }\n\n  &__rights {\n    margin-top: 10px;\n    @extend %Roboto400;\n    font-size: 10px;\n    line-height: 12px;\n    color: #BABABA;\n  }\n}\n",".main {\n  &__header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n}",".greenBlock {\n  position: relative;\n  margin: 0 auto;\n  z-index: 1;\n\n  &__box {\n    display: flex;\n    height: 62px;\n    border-radius: 12px;\n    background: #AED300;\n    padding: 12px;\n  }\n\n  &__box-text {\n    @extend %Montserrat400;\n    color: black;\n    display: flex;\n    margin: 0 auto;\n    align-items: center;\n    text-align: center;\n  }\n}",".carousel {\n  position: relative;\n  bottom: 20px;\n  overflow: hidden;\n  max-width: 768px;\n  max-height: 375px; \n  margin-left: -22px;\n  margin-right: -22px;\n\n  &__container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    max-width: 768px;\n    max-height: 375px;\n  }\n\n  &__slides {\n    max-width: 768px;\n    display: flex;\n    transition: transform 0.3s ease-in-out;\n  }\n\n  &__slide-image {\n    width: 100%;\n    height: 100%;\n    display: none;\n  }\n\n  &__slide-image.active {\n    display: block;\n  }\n\n  &__arrow-left {\n    left: 10px;\n  }\n\n  &__arrow-right {\n    right: 10px;\n  }\n\n  &__indicator {\n    position: absolute;\n    height: 20px;\n    bottom: 10px;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n\n  &__dot {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background-color: rgba(190, 190, 190, 0.5);\n    margin: 0 5px;\n    cursor: pointer;\n  }\n\n  &__dot.active {\n    background-color: #fff;\n  }\n\n  &__submit {\n    background-color: #BF2DE2;\n    margin: 0 auto;\n    width: 230px;\n    height: 65px;\n    border-radius: 12px;\n    @extend %Montserrat700;\n    color: white;\n    padding: 10px 20px;\n    border: none;\n    cursor: pointer;\n    margin-top: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0px 4px 8px rgba(255, 85, 249, 0.2);\n    transition: transform 0.2s ease, box-shadow 0.2s ease;\n  }\n  \n  &__submit:hover {\n    transform: scale(0.95);\n  }\n  \n  &__submit:active {\n    transform: scale(1);\n    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);\n  }\n}\n\n\n.arrow {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 80px;\n  height: 80px;\n  cursor: pointer;\n}\n",".line {\n  top: 40px;\n  margin-top: 40px;\n  height: 4px;\n  background: linear-gradient(90deg, rgba(174, 211, 0, 0) 0%, #AED300 50.8%, rgba(174, 211, 0, 0) 100%);\n  filter: blur(2px);\n}",".gamesSection {\n  margin-top: 40px;\n  text-align: center;\n\n  &__header {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    margin-bottom: 40px;\n  }\n\n  &__title {\n    @extend %Montserrat700;\n    font-size: 16px;\n    color: white;\n  }\n\n  &__count {\n    margin-left: 5px;\n    @extend %Montserrat400;\n    width: 30px;\n    height: 30px;\n    background-color: #AED300;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: black;\n  }\n\n  &__images {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-bottom: 20px;\n    gap: 10px;\n  }\n\n  &__more-games {\n    margin-top: 40px;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n  }\n\n  &__add-icon {\n    width: 30px;\n    height: 30px;\n    margin-left: 5px;\n    background-color: #AED300;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #fff;\n    cursor: pointer;\n  }\n}\n",".popularSection {\n  display: flex;\n  flex-direction: column;\n  margin-top: 40px;\n  align-items: center;\n\n  &__header {\n    display: flex;\n    margin-right: auto;\n  }\n\n  &__title {\n    @extend %Montserrat700;\n    font-size: 16px;\n    color: white;\n  }\n\n\n  &__game-count {\n    width: 30px;\n    height: 30px;\n    background-color: #AED300;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #fff;\n  }\n\n  &__count {\n    margin-left: 5px;\n    @extend %Montserrat400;\n    width: 30px;\n    height: 30px;\n    background-color: #AED300;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: black;\n  }\n\n  &__images {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-bottom: 20px;\n    gap: 20px;\n  }\n\n  &__buttons button {\n    height: 42px;\n    width: 100%;\n    margin: 0 10px;\n    padding: 10px 20px;\n    background-color: #AED300;\n    border: none;\n    border-radius: 5px;\n    color: #fff;\n    cursor: pointer;\n    @extend %Montserrat700;\n    font-size: 14px;\n    color: black;\n  }\n\n  &__buttons {\n    width: 380px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  \n  &__images {\n    display: grid;\n    grid-template-columns: repeat(1, 6fr);\n    grid-gap: 20px;\n    margin-top: 40px;\n\n    @include onTablet {\n      grid-template-columns: repeat(2, 6fr);\n    }\n  }\n}\n","@mixin onTablet {\n  @media (min-width: 768px) {\n    @content;\n  }\n}\n",".menu {\n  max-width: 768px;\n  position: fixed;\n  top: 0;\n  right: -100%;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(240, 240, 240, 0.9);\n  backdrop-filter: blur(10px);\n  transition: right 0.3s ease;\n  z-index: 999;\n\n  &__image {\n    width: 100px;\n    height: 100px;\n  }\n\n  &__list {\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n    align-items: center;\n  }\n\n  &__cv {\n    @extend %Montserrat700;\n    font-size: 38px;\n    color: black;\n  }\n}\n\n.menu.show {\n  right: 0;\n  overflow-y: hidden;\n}\n\n.close-link {\n  display: flex;\n  margin: 15px;\n  align-items: center;\n}\n\n.close-link img {\n  margin: 0 22px 0 0;\n  width: 50px;\n  height: 50px;\n}\n\n.close-link:hover img {\n  opacity: 0.7;\n}\n"],sourceRoot:""}]);const C=l},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var A="",t=void 0!==e[5];return e[4]&&(A+="@supports (".concat(e[4],") {")),e[2]&&(A+="@media ".concat(e[2]," {")),t&&(A+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),A+=n(e),t&&(A+="}"),e[2]&&(A+="}"),e[4]&&(A+="}"),A})).join("")},e.i=function(n,A,t,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(t)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(r[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);t&&r[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),A&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=A):l[2]=A),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},626:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{"use strict";n.exports=function(n){var e=n[1],A=n[3];if(!A)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(A)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),o="/*# ".concat(i," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},91:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),e.hash&&(n+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(n)?'"'.concat(n,'"'):n):n}},379:n=>{"use strict";var e=[];function A(n){for(var A=-1,t=0;t<e.length;t++)if(e[t].identifier===n){A=t;break}return A}function t(n,t){for(var o={},r=[],a=0;a<n.length;a++){var s=n[a],c=t.base?s[0]+t.base:s[0],l=o[c]||0,p="".concat(c," ").concat(l);o[c]=l+1;var C=A(p),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==C)e[C].references++,e[C].updater(d);else{var g=i(d,t);t.byIndex=a,e.splice(a,0,{identifier:p,updater:g,references:1})}r.push(p)}return r}function i(n,e){var A=e.domAPI(e);return A.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;A.update(n=e)}else A.remove()}}n.exports=function(n,i){var o=t(n=n||[],i=i||{});return function(n){n=n||[];for(var r=0;r<o.length;r++){var a=A(o[r]);e[a].references--}for(var s=t(n,i),c=0;c<o.length;c++){var l=A(o[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=s}}},569:n=>{"use strict";var e={};n.exports=function(n,A){var t=function(n){if(void 0===e[n]){var A=document.querySelector(n);if(window.HTMLIFrameElement&&A instanceof window.HTMLIFrameElement)try{A=A.contentDocument.head}catch(n){A=null}e[n]=A}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(A)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},636:(n,e,A)=>{"use strict";n.exports=function(n){var e=A.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(A){!function(n,e,A){var t="";A.supports&&(t+="@supports (".concat(A.supports,") {")),A.media&&(t+="@media ".concat(A.media," {"));var i=void 0!==A.layer;i&&(t+="@layer".concat(A.layer.length>0?" ".concat(A.layer):""," {")),t+=A.css,i&&(t+="}"),A.media&&(t+="}"),A.supports&&(t+="}");var o=A.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,A)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},317:(n,e,A)=>{"use strict";n.exports=A.p+"main.scss"},807:(n,e,A)=>{"use strict";n.exports=A.p+"10Game.svg"},227:(n,e,A)=>{"use strict";n.exports=A.p+"11Game.svg"},759:(n,e,A)=>{"use strict";n.exports=A.p+"1Game.svg"},385:(n,e,A)=>{"use strict";n.exports=A.p+"2Game.svg"},548:(n,e,A)=>{"use strict";n.exports=A.p+"3Game.svg"},570:(n,e,A)=>{"use strict";n.exports=A.p+"4Game.svg"},774:(n,e,A)=>{"use strict";n.exports=A.p+"5Game.svg"},565:(n,e,A)=>{"use strict";n.exports=A.p+"6Game.svg"},105:(n,e,A)=>{"use strict";n.exports=A.p+"7Game.svg"},775:(n,e,A)=>{"use strict";n.exports=A.p+"8Game.svg"},192:(n,e,A)=>{"use strict";n.exports=A.p+"9Game.svg"},456:(n,e,A)=>{"use strict";n.exports=A.p+"GitHub_Invertocat_Logo.svg"},834:(n,e,A)=>{"use strict";n.exports=A.p+"account.svg"},396:(n,e,A)=>{"use strict";n.exports=A.p+"arrow-short-left-svgrepo-com.svg"},429:(n,e,A)=>{"use strict";n.exports=A.p+"arrow-short-right-svgrepo-com.svg"},73:(n,e,A)=>{"use strict";n.exports=A.p+"arrow.svg"},167:(n,e,A)=>{"use strict";n.exports=A.p+"close.svg"},967:(n,e,A)=>{"use strict";n.exports=A.p+"done.svg"},329:(n,e,A)=>{"use strict";n.exports=A.p+"footer.svg"},667:(n,e,A)=>{"use strict";n.exports=A.p+"highrise.png"},51:(n,e,A)=>{"use strict";n.exports=A.p+"linkedin.png"},5:(n,e,A)=>{"use strict";n.exports=A.p+"lock.svg"},937:(n,e,A)=>{"use strict";n.exports=A.p+"logo.svg"},869:(n,e,A)=>{"use strict";n.exports=A.p+"logoMain.svg"},813:(n,e,A)=>{"use strict";n.exports=A.p+"maincraft.webp"},17:(n,e,A)=>{"use strict";n.exports=A.p+"menu.svg"},247:(n,e,A)=>{"use strict";n.exports=A.p+"video-games-style.webp"}},e={};function A(t){var i=e[t];if(void 0!==i)return i.exports;var o=e[t]={id:t,exports:{}};return n[t](o,o.exports,A),o.exports}A.m=n,A.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return A.d(e,{a:e}),e},A.d=(n,e)=>{for(var t in e)A.o(e,t)&&!A.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},A.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),A.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;A.g.importScripts&&(n=A.g.location+"");var e=A.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var i=t.length-1;i>-1&&!n;)n=t[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),A.p=n})(),A.b=document.baseURI||self.location.href,A.nc=void 0,(()=>{"use strict";var n=A(91),e=A.n(n),t=new URL(A(937),A.b),i=new URL(A(317),A.b),o=new URL(A(73),A.b),r=new URL(A(5),A.b),a=new URL(A(17),A.b),s=new URL(A(869),A.b),c=new URL(A(834),A.b),l=new URL(A(167),A.b),p=new URL(A(456),A.b),C=new URL(A(51),A.b),d=new URL(A(813),A.b),g=new URL(A(247),A.b),x=new URL(A(667),A.b),u=new URL(A(396),A.b),f=new URL(A(429),A.b),m=new URL(A(759),A.b),h=new URL(A(385),A.b),b=new URL(A(548),A.b),_=new URL(A(570),A.b),y=new URL(A(774),A.b),B=new URL(A(565),A.b),w=new URL(A(105),A.b),v=new URL(A(775),A.b),E=new URL(A(192),A.b),k=new URL(A(807),A.b),F=new URL(A(227),A.b),G=new URL(A(329),A.b);e()(t),e()(i),e()(o),e()(r),e()(a),e()(s),e()(c),e()(l),e()(p),e()(C),e()(d),e()(g),e()(x),e()(u),e()(f),e()(m),e()(h),e()(b),e()(_),e()(y),e()(B),e()(w);e()(v),e()(E),e()(k),e()(F),e()(G);var U=A(379),L=A.n(U),R=A(795),Y=A.n(R),S=A(569),z=A.n(S),I=A(636),M=A.n(I),j=A(216),W=A.n(j),q=A(589),D=A.n(q),Q=A(144),T={};T.styleTagTransform=D(),T.setAttributes=M(),T.insert=z().bind(null,"head"),T.domAPI=Y(),T.insertStyleElement=W(),L()(Q.Z,T),Q.Z&&Q.Z.locals&&Q.Z.locals,A(747)})()})();
//# sourceMappingURL=main.5b432a0ed772e679c23e.js.map