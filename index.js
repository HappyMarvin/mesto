(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this.id=e._id,this._sourceImage=e.link,this._templateSelector=n,this._handleCardClick=o,this._handleDeleteClick=i,this._handleLikeClick=a,this._userID=r,this._owner=r===e.owner._id,this._likes=e.likes,this.liked=!1}var n,r;return n=t,(r=[{key:"isLiked",value:function(){var e=this;return this.liked=this._likes.some((function(t){return t._id===e._userID}))}},{key:"_setLikeCount",value:function(e){this._likeCount.textContent=e.length}},{key:"_getTemplate",value:function(){this._cardTemplate=document.querySelector(this._templateSelector).content,this.card=this._cardTemplate.querySelector(".card").cloneNode(!0),this._cardImage=this.card.querySelector(".card__image"),this._likeButton=this.card.querySelector(".card__like"),this._deleteButton=this.card.querySelector(".card__delete"),this._likeCount=this.card.querySelector(".card__like-count")}},{key:"_addContent",value:function(){this.card.querySelector(".card__title").textContent=this._name,this._cardImage.src=this._sourceImage,this._cardImage.alt=this._name,this._owner&&(this._deleteButton.style.display="block"),this._likeCount.textContent=this._likes.length,this._setLikeCount(this._likes)}},{key:"deleteCard",value:function(){this.card.remove(),this.card=null}},{key:"_switchLike",value:function(){this._likeButton.classList.toggle("card__like_active")}},{key:"_addListeners",value:function(){var e=this;this._deleteButton.addEventListener("click",(function(){e._handleDeleteClick()})),this._likeButton.addEventListener("click",(function(){e._handleLikeClick().then((function(t){e._setLikeCount(t.likes),e._switchLike(),e.liked=!e.liked}))})),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e.card)}))}},{key:"createCard",value:function(){return this._getTemplate(),this.isLiked()&&this._switchLike(),this._addContent(),this._addListeners(),this.card}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._validConfig=t,this._formElement=n,this._inputList=Array.from(n.querySelectorAll(t.inputSelector)),this._buttonElement=n.querySelector(t.submitButtonSelector)}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector("#"+e.id+this._validConfig.errorIdPostfix);e.classList.add(this._validConfig.inputErrorClass),n.textContent=t,n.classList.add(this._validConfig.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#"+e.id+this._validConfig.errorIdPostfix);e.classList.remove(this._validConfig.inputErrorClass),t.textContent="",t.classList.remove(this._validConfig.errorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._buttonElement.classList.add(this._validConfig.inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._validConfig.inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))})),this._formElement.addEventListener("closePopup",(function(){e._resetValidationState()}))}},{key:"_resetValidationState",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this),this.close=this.close.bind(this),this._handleClickClose=this._handleClickClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_show"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_show"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"==e.key&&this.close()}},{key:"_handleClickClose",value:function(e){e.target.classList.contains("popup")&&this.close()}},{key:"setEventListeners",value:function(){this._popup.addEventListener("mousedown",this._handleClickClose),this._closeButton.addEventListener("click",this.close)}}])&&o(t.prototype,n),e}();function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._title=t._popup.querySelector(".popup__image-title"),t._image=t._popup.querySelector(".popup__image"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.querySelector(".card__title").textContent;this._title.textContent=t,this._image.src=e.querySelector(".card__image").src,this._image.alt="".concat(t," - полный размер"),u(f(a.prototype),"open",this).call(this)}}])&&s(t.prototype,n),a}(i);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t,n){return(_="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._inputList=n._popup.querySelectorAll(".popup__text-input"),n.form=n._popup.querySelector(".popup__form"),n.submitButton=n._popup.querySelector(".popup__submit"),n.submitButtonText=n.submitButton.textContent,n._handleSubmit=t,n._eventClosePopup=new CustomEvent("closePopup"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setInputValues",value:function(e){var t=this;Object.keys(e).forEach((function(n){t.form.querySelector("input[name=popup-".concat(n,"]")).value=e[n]}))}},{key:"open",value:function(e){_(m(a.prototype),"open",this).call(this),e&&this.setInputValues(e)}},{key:"close",value:function(){_(m(a.prototype),"close",this).call(this),this.form.reset(),this.form.dispatchEvent(this._eventClosePopup),this._renderLoading(!1)}},{key:"_renderLoading",value:function(e){this.submitButton.textContent=e?"Сохранение":this.submitButtonText}},{key:"setEventListeners",value:function(){var e=this;_(m(a.prototype),"setEventListeners",this).call(this),this._listener=function(t){t.preventDefault(),e._renderLoading(!0),e._handleSubmit(e._getInputValues())},this.form.addEventListener("submit",this._listener)}},{key:"_removeEventListeners",value:function(){_(m(a.prototype),"_removeEventListeners",this).call(this),this.form.removeEventListener("submit",this._listener)}}])&&d(t.prototype,n),a}(i);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t,n){return(C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e)).form=n._popup.querySelector(".popup__form"),n._handleSubmit=t,n}return t=a,(n=[{key:"open",value:function(e){C(S(a.prototype),"open",this).call(this),this.card=e}},{key:"setEventListeners",value:function(){var e=this;C(S(a.prototype),"setEventListeners",this).call(this),this._listener=function(t){t.preventDefault(),e._handleSubmit(e.card)},this.form.addEventListener("submit",this._listener)}},{key:"_removeEventListeners",value:function(){C(S(a.prototype),"_removeEventListeners",this).call(this),this.form.removeEventListener("submit",this._listener)}}])&&k(t.prototype,n),a}(i);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t),this._description=document.querySelector(n),this._avatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,description:this._description.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._description.textContent=e.description}},{key:"setUserAvatar",value:function(e){this._avatar.src=e}}])&&O(t.prototype,n),e}();function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(n),this.renderer=t.renderer}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._items;t.reverse().forEach((function(t){e.renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&j(t.prototype,n),e}(),R={inputSelector:".popup__text-input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__text-input_type_error",errorClass:"popup__error_show",errorIdPostfix:"-error"},q=document.querySelector(".profile__edit"),D=document.querySelector(".profile__add"),x=document.querySelector(".profile__edit-avatar");function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var B=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("Ошибка: ".concat(e.status)))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._baseUrl,"users/me"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"setUserData",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._getResponseData(e)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"cards"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards/").concat(e.id),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"switchLike",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"cards/likes/").concat(e.id),{method:t,headers:this._headers}).then((function(e){return n._getResponseData(e)}))}},{key:"addAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._getResponseData(e)})).catch((function(e){return console.error(e.message)}))}}])&&T(t.prototype,n),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-19/",headers:{authorization:"7a0583fa-0284-4573-a326-4d7fa2ed6e73","Content-Type":"application/json"}}),A=new P(".profile__name",".profile__description",".profile__avatar"),V=new p(".popup_image"),N=new L(".popup_delete",(function(e){return B.deleteCard(e).then((function(){e.deleteCard(),N.close()})).catch((function(e){return console.error(e.message)}))})),J=new b(".popup_profile",(function(e){return B.setUserData({name:e["popup-name"],about:e["popup-description"]}).then((function(e){A.setUserInfo({name:e.name,description:e.about}),J.close()})).catch((function(e){return console.error(e.message)}))})),H=new b(".popup_add-avatar",(function(e){return B.addAvatar(e["avatar-link"]).then((function(e){A.setUserAvatar(e.avatar),H.close()})).catch((function(e){return console.error(e.message)}))}));Promise.all([B.getUserData(),B.getInitialCards()]).then((function(e){var n,o,i=(o=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}}(n,o)||function(e,t){if(e){if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=i[0],s=i[1];A.setUserInfo({name:a.name,description:a.about}),A.setUserAvatar(a.avatar);var u=new I({renderer:function(e){var n=new t(e,"#card-template",a._id,(function(){V.open(n.card)}),(function(){N.open(n)}),(function(){var e=n.liked?"DELETE":"PUT";return B.switchLike(n,e)}));u.addItem(n.createCard())}},".gallery__list");u.renderItems(s);var c=new b(".popup_new-place",(function(e){return B.addCard({name:e["popup-name"],link:e["popup-description"]}).then((function(e){u.renderer(e),c.close()})).catch((function(e){return console.error(e.message)}))}));D.addEventListener("click",(function(){return c.open()})),new r(R,c.form).enableValidation(),c.setEventListeners()})),q.addEventListener("click",(function(){return J.open(A.getUserInfo())})),x.addEventListener("click",(function(){return H.open()}));var M=new r(R,H.form);new r(R,J.form).enableValidation(),M.enableValidation(),J.setEventListeners(),H.setEventListeners(),V.setEventListeners(),N.setEventListeners()})();
//# sourceMappingURL=index.js.map