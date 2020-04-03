(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{158:function(e,t,a){"use strict";a.r(t);a(72),a(73);var n=a(0),o=a.n(n),l=a(11),c=a.n(l),r=(a(78),a(20)),s=a(21),i=a(26),m=a(22),d=a(27),u=a(70),h=a(52),p=a(28),E=a(67),f=a.n(E),g=(a(79),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={fio:"",coords:"",date:""},a.saveChanges=function(e){a.props.addRow(e,a.state),a.setState((function(e){return{fio:"",coords:"",date:""}})),a.props.closeDialog()},a.onChangeFIO=function(e,t){a.setState({fio:e.target.value})},a.onChangePlace=function(e){a.setState({coords:e.target.value})},a.onChangeDate=function(e){a.setState({date:e})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(p.a,{show:this.props.showDialog,onHide:this.props.closeDialog},o.a.createElement(p.a.Header,{closeButton:!0},o.a.createElement(p.a.Title,null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0442\u0440\u043e\u043a\u0438")),o.a.createElement(p.a.Body,null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"fio"},"\u0424\u0418\u041e"),o.a.createElement("input",{type:"text",className:"form-control",id:"fio","aria-describedby":"fioHelp",placeholder:"",value:this.state.fio,onChange:this.onChangeFIO}),o.a.createElement("small",{id:"fioHelp",className:"form-text text-muted"},"\u0424\u0418\u041e \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e")))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"place"},"\u041c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435"),o.a.createElement("input",{type:"text",className:"form-control",id:"place","aria-describedby":"placeHelp",placeholder:"",value:this.state.coords,onChange:this.onChangePlace}),o.a.createElement("small",{id:"placeHelp",className:"form-text text-muted"},"\u041a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b")))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"date"},"\u0414\u0430\u0442\u0430"),o.a.createElement("br",null),o.a.createElement(f.a,{id:"date",placeholderText:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443",selected:this.state.date,onChange:function(t){return e.onChangeDate(t)}})))))),o.a.createElement(p.a.Footer,null,o.a.createElement(h.a,{variant:"secondary",onClick:this.props.closeDialog},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"),o.a.createElement(h.a,{variant:"primary",onClick:this.saveChanges},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))}}]),t}(n.Component)),v=a(51),b=a.n(v),w=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={items:[],showModal:!1},a.addRow=function(e,t){var n={name:t.fio,place:t.coords,date:t.date};a.setState({items:[].concat(Object(u.a)(a.state.items),[n])}),b.a.post("mark",n).then((function(e){a.getData()}))},a.showModal=function(){a.setState((function(e){e.showModal;return{showModal:!0}}))},a.hideModal=function(){a.setState((function(e){e.showModal;return{showModal:!1}}))},a.getData=function(){b.a.get("mark").then((function(e){console.log(e),console.log(e.data),console.log(e.data.data),a.setState({items:e.data.data})}))},a.getDate=function(e){return e.toLocaleDateString()},a.componentDidMount=function(){a.getData()},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(g,{addRow:this.addRow,showDialog:this.state.showModal,closeDialog:this.hideModal}),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("table",{className:"table"},o.a.createElement("thead",{className:"thead-dark"},o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"#"),o.a.createElement("th",{scope:"col"},"\u0424\u0418\u041e"),o.a.createElement("th",{scope:"col"},"\u041c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435"),o.a.createElement("th",{scope:"col"},"\u0414\u0430\u0442\u0430"))),o.a.createElement("tbody",null,this.state.items.map((function(e){return o.a.createElement("tr",{key:e.id},o.a.createElement("td",null,e.id),o.a.createElement("td",null,e.name),o.a.createElement("td",null,e.place),o.a.createElement("td",null,e.date))})))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.showModal},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0443"),o.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.getData},"Get data")))))}}]),t}(n.Component),y=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(w,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,t,a){e.exports=a(158)},78:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.0c9e9d79.chunk.js.map