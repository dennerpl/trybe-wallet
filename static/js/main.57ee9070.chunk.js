(this["webpackJsonpsd-0x-project-trybewallet"]=this["webpackJsonpsd-0x-project-trybewallet"]||[]).push([[0],{32:function(e,t,a){e.exports=a(44)},41:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),i=a.n(l),c=a(23),o=a(9),s=(a(41),a(2)),u=a(16),d=a(10),p=a(11),m=a(8),h=a(13),b=a(12),E=a(17),v=a.n(E),g=a(21),f=a(6);var y=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={email:"",password:"",disabled:!0},e.handleChange=e.handleChange.bind(Object(m.a)(e)),e.buttonValidation=e.buttonValidation.bind(Object(m.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(m.a)(e)),e}return Object(p.a)(a,[{key:"buttonValidation",value:function(){var e=this.state.email,t=this.state.password,a=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e);t.length>5&&a?this.setState({disabled:!1}):this.setState({disabled:!0})}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(u.a)({},a,n),this.buttonValidation)}},{key:"handleSubmit",value:function(){var e=this.props,t=e.login,a=e.history;t(this.state.email),a.push("/carteira")}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.disabled;return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"email"},"Email",r.a.createElement("div",null,r.a.createElement("input",{name:"email","data-testid":"email-input",placeholder:"Digite seu email",id:"email",type:"text",value:t,onChange:this.handleChange})))," ",r.a.createElement("label",{htmlFor:"password"},"Senha",r.a.createElement("div",null,r.a.createElement("input",{name:"password","data-testid":"password-input",placeholder:"Digite sua senha",id:"password",type:"text",value:a,onChange:this.handleChange})))," ",r.a.createElement("button",{type:"button",disabled:n,onClick:this.handleSubmit},"Entrar")))}}]),a}(r.a.Component),x={login:function(e){return{type:"LOGIN",email:e}}},j=Object(o.b)(null,x)(y),O=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={expense:[],value:"",description:"",method:"",currency:"",tag:""},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.loadCurrencies)()}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(u.a)({},a,n),this.buttonValidation)}},{key:"resetState",value:function(){this.setState({expense:[],value:"",description:"",method:"",currency:"",tag:""})}},{key:"handleSubmit",value:function(){var e=Object(g.a)(v.a.mark((function e(t){var a,n,r,l,i,c,o,s,u,d,p,m;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=this.props,n=a.expenses,r=a.addExpenses,l=a.loadCurrencies,i=a.exchangeRates,c=this.state,o=c.value,s=c.description,u=c.method,d=c.currency,p=c.tag,e.next=5,l();case 5:console.log(i),this.setState({expense:{id:n.length,value:o,currency:d,description:s,method:u,tag:p,exchangeRates:i}}),m=this.state.expense,r(m),this.resetState();case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.currencies,t=this.state,a=t.value,n=t.description,l=t.currency,i=t.method,c=t.tag;return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"value"},"Valor da despesa",r.a.createElement("div",null,r.a.createElement("input",{name:"value","data-testid":"value-input",placeholder:"Digite seu despesa",id:"value",type:"text",value:a,onChange:this.handleChange})))," ",r.a.createElement("label",{htmlFor:"description"},"O que \xe9?",r.a.createElement("div",null,r.a.createElement("input",{name:"description","data-testid":"description-input",placeholder:"Descri\xe7\xe3o da despesa",id:"description",type:"text",value:n,onChange:this.handleChange})))," ",r.a.createElement("label",{htmlFor:"currency-input","data-testid":"currency-input-label"},"Sigla",r.a.createElement("select",{style:{marginLeft:10},name:"currency",onChange:this.handleChange,id:"currency-input","data-testid":"currency-input",value:l},e.filter((function(e){return"BRLT"!==e.codein})).map((function(e,t){return r.a.createElement("option",{key:t,value:e.code,"data-testid":e.code},e.code)})))),r.a.createElement("label",{htmlFor:"method-input","data-testid":"method-input-label"},"Forma de pagamento",r.a.createElement("select",{style:{marginLeft:10},name:"method",onChange:this.handleChange,id:"method-input","data-testid":"method-input",value:i},r.a.createElement("option",{value:"Dinheiro","data-testid":"method-option"},"Dinheiro"),r.a.createElement("option",{value:"Cart\xe3o de cr\xe9dito","data-testid":"method-option"},"Cart\xe3o de cr\xe9dito"),r.a.createElement("option",{value:"Cart\xe3o de d\xe9bito","data-testid":"method-option"},"Cart\xe3o de d\xe9bito"))),r.a.createElement("label",{htmlFor:"tag-input","data-testid":"tag-input-label"},"Categoria",r.a.createElement("select",{style:{marginLeft:10},name:"tag",onChange:this.handleChange,id:"tag-input","data-testid":"tag-input",value:c},r.a.createElement("option",{value:"Alimenta\xe7\xe3o","data-testid":"tag-option"},"Alimenta\xe7\xe3o"),r.a.createElement("option",{value:"Lazer","data-testid":"tag-option"},"Lazer"),r.a.createElement("option",{value:"Trabalho","data-testid":"tag-option"},"Trabalho"),r.a.createElement("option",{value:"Transporte","data-testid":"tag-option"},"Transporte"),r.a.createElement("option",{value:"Sa\xfade","data-testid":"tag-option"},"Sa\xfade"))),r.a.createElement("button",{type:"button",onClick:this.handleSubmit},"Adicionar despesa")))}}]),a}(r.a.Component),C=Object(o.b)((function(e){return{currencies:e.wallet.currencies,expenses:e.wallet.expenses,exchangeRates:e.wallet.exchangeRates}}),(function(e){return{loadCurrencies:function(){return e(function(){var e=Object(g.a)(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://economia.awesomeapi.com.br/json/all");case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",t((r=n,{type:"FETCH_SUCCESS",payload:Object(f.a)({},r)})));case 7:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}())},addExpenses:function(t){return e({type:"CHANGE",expenses:t})}}}))(O),w=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).renderElements=n.renderElements.bind(Object(m.a)(n)),n}return Object(p.a)(a,[{key:"renderElements",value:function(e){var t=e.description,a=e.tag,n=e.method,l=e.value,i=e.exchangeRates,c=e.currency,o=e.id,s=this.props.deleteExpense;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t),r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",null,l),r.a.createElement("td",null,i[c].name),r.a.createElement("td",null,parseFloat(i[c].ask).toFixed(2)),r.a.createElement("td",null,parseFloat(l)*parseFloat(i[c].ask)),r.a.createElement("td",null,"Real"),r.a.createElement("td",null,r.a.createElement("button",{type:"button","data-testid":"delete-btn",onClick:function(){return s(o)}},"Deletar")))}},{key:"render",value:function(){var e=this,t=this.props.expenses;return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Descri\xe7\xe3o"),r.a.createElement("th",null,"Tag"),r.a.createElement("th",null,"M\xe9todo de pagamento"),r.a.createElement("th",null,"Valor"),r.a.createElement("th",null,"Moeda"),r.a.createElement("th",null,"C\xe2mbio utilizado"),r.a.createElement("th",null,"Valor convertido"),r.a.createElement("th",null,"Moeda de convers\xe3o"),r.a.createElement("th",null,"Editar/Excluir"))),r.a.createElement("tbody",null,t.map((function(t){return e.renderElements(t)})))))}}]),a}(r.a.Component),k=Object(o.b)((function(e){return{expenses:e.wallet.expenses}}),(function(e){return{deleteExpense:function(t){return e(function(e){return{type:"DELETE",id:e}}(t))}}}))(w),S=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.email;return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("section",null,"Bem vindo",r.a.createElement("p",{"data-testid":"email-field"},e)),r.a.createElement("section",null,"Gastos totais R$",r.a.createElement("p",{Adicione:!0,o:!0,atributo:!0,"data-testid":"total-field"},0)),r.a.createElement("section",null,"Seus gastos est\xe3o sendo convertidos para"," ",r.a.createElement("p",{"data-testid":"header-currency-field"},"BRL"))),r.a.createElement(C,null),r.a.createElement(k,null))}}]),a}(r.a.Component),F=Object(o.b)((function(e){return{email:e.user.email,currencies:e.wallet.currencies,expenses:e.wallet.expenses,total:e.wallet.total}}))(S);var D=function(){return r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:j}),r.a.createElement(s.a,{path:"/carteira",component:F}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(14),R=a(30),T={email:""},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(f.a)(Object(f.a)({},e),{},{email:t.email});default:return e}},V=a(31),z={currencies:[],expenses:[],total:0,isLoading:!1,exchangeRates:{}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE":return t.expenses.id=e.expenses.length,Object(f.a)(Object(f.a)({},e),{},{expenses:[].concat(Object(V.a)(e.expenses),[t.expenses]),total:e.total+parseFloat(t.expenses.value)*parseFloat(t.expenses.exchangeRates[t.expenses.currency].ask)});case"FETCH_SUCCESS":return Object(f.a)(Object(f.a)({},e),{},{currencies:Object.keys(t.payload).map((function(e){return t.payload[e]})),exchangeRates:t.payload});case"DELETE":return Object(f.a)(Object(f.a)({},e),{},{expenses:e.expenses.filter((function(e){return e.id!==t.id}))});default:return e}},G=Object(L.c)({user:A,wallet:B}),H=Object(L.d)(G,Object(L.a)(R.a));i.a.render(r.a.createElement(c.a,{basename:"/your-app-name"},r.a.createElement(o.a,{store:H},r.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.57ee9070.chunk.js.map