(this["webpackJsonpcripto-wallet"]=this["webpackJsonpcripto-wallet"]||[]).push([[0],{28:function(e){e.exports=JSON.parse('[{"id":1,"Moneda":"Bitcoin","Cantidad":0.002},{"id":2,"Moneda":"Ethereum","Cantidad":30.034},{"id":3,"Moneda":"Dogecoin","Cantidad":420}]')},34:function(e,a,t){e.exports=t(51)},39:function(e,a,t){},42:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),c=t.n(r),o=(t(39),t(63)),s=function(){return l.a.createElement("div",{className:"text-left"},l.a.createElement(o.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},l.a.createElement(o.a.Brand,{id:"cripto",href:"#home"},"CRIPTO"),l.a.createElement("img",{src:"https://images.vexels.com/media/users/3/144837/isolated/preview/40f189daa5c0279718484ca5f5569f78-icono-de-bitcoin-by-vexels.png",width:"30",height:"30",className:"d-inline-block mr-auto ml-0 align-top",alt:"React Bootstrap logo"})))},m=(t(42),t(19),t(54)),i=t(55),d=t(64),u=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"text-center noticias"},l.a.createElement("h1",{className:"bg-dark text-warning "},"Noticias")),l.a.createElement(m.a,{className:" "},l.a.createElement(i.a,null,l.a.createElement(d.a,null,l.a.createElement(d.a.Img,{variant:"top",src:"https://eleconomista.com.ar/wp-content/uploads/2021/06/XsUZgt-v_400x400.jpg"}),l.a.createElement(d.a.Body,null,l.a.createElement(d.a.Title,null,"El Salvador y Miami abrazan las criptos y el BCE advierte a quienes no emitan una CBDC"),l.a.createElement(d.a.Text,null,"Tengo tiempo para saber Si lo que sue\xf1o concluye en algo No te apures ya m\xe1s loco Porque es entonces cuando las horas Bajan El d\xeda es vidrio sin sol Bajan La noche te oculta la voz Y adem\xe1s vos quer\xe9s sol Despacio tambi\xe9n pod\xe9s hallar la luna"))),l.a.createElement(d.a,null,l.a.createElement(d.a.Img,{variant:"top",src:"https://www.trecebits.com/wp-content/uploads/2021/02/AirDrop.jpg"}),l.a.createElement(d.a.Body,null,l.a.createElement(d.a.Title,null,"Pa\xedses que podr\xedan adoptar el Bitcoin como moneda tras El Salvador"),l.a.createElement(d.a.Text,null,"Paraguay y Panam\xe1 propondr\xe1n leyes similares a la promulgada por El Salvador para convertir el Bitcoin u otras criptos en monedas de curso legal")),l.a.createElement(d.a.Footer,null,l.a.createElement("small",{className:"text-muted"},"Hace 2 horas"))),l.a.createElement(d.a,{bg:"danger",text:"white",className:"text-center p-3"},l.a.createElement("blockquote",{className:"blockquote mb-0 card-body"},l.a.createElement("p",null,"El BCRA y la @CNVArgentina consideran oportuno alertar sobre los riesgos e implicancias de los criptoactivos..."," ",l.a.createElement("a",{href:"https://twitter.com/BancoCentral_AR/status/1395426680190218242?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1395426680190218242%7Ctwgr%5E%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fwww.telam.com.ar%2Fnotas%2F202105%2F555256-mercado-cripto-derrumbe-dos-semanas.html"},"Ver mas")),l.a.createElement("footer",{className:"blockquote-footer"},l.a.createElement("small",{className:"text-muted"},l.a.createElement("a",{className:"h5",href:"https://twitter.com/BancoCentral_AR/status/1395426680190218242?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1395426680190218242%7Ctwgr%5E%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fwww.telam.com.ar%2Fnotas%2F202105%2F555256-mercado-cripto-derrumbe-dos-semanas.html"},"BCRA via Twitter"))))),l.a.createElement(d.a,{className:"text-center"},l.a.createElement(d.a.Img,{src:"https://media.ambito.com/p/92c907c7b1fe6cd7e8b0158cd3ecbe15/adjuntos/239/imagenes/038/995/0038995716/por-el-momento-el-servicio-no-esta-habilitado-america-latina.jpg"}),l.a.createElement(d.a.Body,null,l.a.createElement(d.a.Title,null,"Coinbase lleg\xf3 a Google Pay y Apple Pay para permitir pagar con criptos desde el tel\xe9fono"),l.a.createElement(d.a.Text,null,"El acuerdo supone un nuevo impulso para las criptomonedas. Se espera que con el correr de los meses, el servicio sea habilitado en aquellos pa\xedses donde funciona la tarjeta Coinbase Card."),l.a.createElement(d.a.Text,null,l.a.createElement("small",{className:"text-muted"},"Hace 30 minutos")))))))},E=t(16),p=t.n(E),g=t(25),h=t(29),b=function(){var e=Object(n.useState)(),a=Object(h.a)(e,2),t=a[0],r=a[1],c=function(){var e=Object(g.a)(p.a.mark((function e(){var a,t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coingecko.com/api/v3/simple/price?ids=Bitcoin%2CEthereum%2CDogecoin&vs_currencies=usd%2Cars");case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,r([t]),console.log([t]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){c()}),[]),l.a.createElement("div",null,l.a.createElement("div",{className:"text-center"},l.a.createElement("h1",{className:"bg-dark text-warning mt-3 ml-1 mr-1"},"Cotizacion en tiempo real")),l.a.createElement("ul",null,t?t.map((function(e,a){return l.a.createElement("div",{className:" mr-5"},l.a.createElement("div",{class:"container mt-3 "},l.a.createElement("div",{class:"row text-center"},l.a.createElement("div",{class:"col-sm bg-warning m-2 "},l.a.createElement("h2",null," Bitcoin "),l.a.createElement("img",{src:"http://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png",alt:"",className:"w-25 p-1",srcset:""}),l.a.createElement("div",{className:"text-center rounded-2 blur "},l.a.createElement("h4",{className:"p-3"},e.bitcoin.usd," ",l.a.createElement("p",{className:"text-success"},"USD")," ",e.bitcoin.ars,l.a.createElement("p",{className:"text-primary"},"ARS")))),l.a.createElement("div",{class:"col-sm bg-warning m-2"},l.a.createElement("h2",null,"Ethereum"),l.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/b/b7/ETHEREUM-YOUTUBE-PROFILE-PIC.png",alt:"",className:"w-25 p-1",srcset:""}),l.a.createElement("div",{className:"text-center rounded-2 blur"},l.a.createElement("h4",{className:"p-3"},e.ethereum.usd," ",l.a.createElement("p",{className:"text-success"},"USD")," ",e.ethereum.ars,l.a.createElement("p",{className:"text-primary"},"ARS")))),l.a.createElement("div",{class:"col-sm bg-warning m-2"},l.a.createElement("h2",null,"DogeCoin"),l.a.createElement("img",{src:"https://www.pngplay.com/wp-content/uploads/8/Dogecoin-PNG-Download-Image.png",alt:"",className:"w-25 p-1",srcset:""}),l.a.createElement("div",{className:"text-center rounded-2 blur"},l.a.createElement("h4",{className:"p-3"},e.dogecoin.usd," ",l.a.createElement("p",{className:"text-success"},"USD")," ",e.dogecoin.ars,l.a.createElement("p",{className:"text-primary"},"ARS")))))),l.a.createElement("div",{className:"text-center"}))})):"Cargando..."))},f=t(13),v=t(17),w=t(26),C=t(27),N=t(31),x=t(30),y=t(56),A=t(57),k=t(58),B=t(65),j=t(59),M=t(60),O=t(61),S=t(62),z=t(28),F=function(e){Object(N.a)(t,e);var a=Object(x.a)(t);function t(){var e;Object(w.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={data:z,modalActualizar:!1,modalInsertar:!1,form:{id:"",Moneda:"",precio:"",descripcion:""}},e.mostrarModalActualizar=function(a){e.setState({form:a,modalActualizar:!0})},e.cerrarModalActualizar=function(){e.setState({modalActualizar:!1})},e.editar=function(a){var t=0,n=e.state.data;n.map((function(e){a.id===e.id&&(n[t].Moneda=a.Moneda,n[t].Cantidad=a.Cantidad),t++})),e.setState({data:n,modalActualizar:!1})},e.handleChange=function(a){e.setState({form:Object(v.a)(Object(v.a)({},e.state.form),{},Object(f.a)({},a.target.name,a.target.value))})},e}return Object(C.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"text-center"},l.a.createElement("h1",{className:"bg-dark text-warning"},"Mi billetera")),l.a.createElement(y.a,{className:"text-center"},l.a.createElement(A.a,null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Moneda"),l.a.createElement("th",{className:"d-none d-lg-block"},"Cantidad"),l.a.createElement("th",null))),l.a.createElement("tbody",null,this.state.data.map((function(a){return l.a.createElement("tr",{key:a.id},l.a.createElement("td",null,a.id),l.a.createElement("td",null,a.Moneda),l.a.createElement("td",{className:"d-none d-lg-block"},a.Cantidad),l.a.createElement("td",null,l.a.createElement(k.a,{color:"warning",onClick:function(){return e.mostrarModalActualizar(a)}},"Vender/Comprar")," "))}))))),l.a.createElement(B.a,{isOpen:this.state.modalActualizar},l.a.createElement(j.a,null,l.a.createElement("div",null,l.a.createElement("h1",null,"Editar Registro"))),l.a.createElement(M.a,null,l.a.createElement(O.a,null,l.a.createElement("label",null,"Id:"),l.a.createElement("input",{className:"form-control",readOnly:!0,type:"text",value:this.state.form.id})),l.a.createElement(O.a,null,l.a.createElement("label",null,"Moneda"),l.a.createElement("input",{className:"form-control",name:"Moneda",readOnly:!0,type:"text",onChange:this.handleChange,value:this.state.form.Moneda})),l.a.createElement(O.a,null,l.a.createElement("label",null,"Cantidad"),l.a.createElement("input",{className:"form-control",name:"Cantidad",type:"text",onChange:this.handleChange,value:this.state.form.Cantidad}))),l.a.createElement(S.a,null,l.a.createElement(k.a,{color:"success",onClick:function(){return e.editar(e.state.form)}},"Actualizar monedero"),l.a.createElement(k.a,{color:"danger",onClick:function(){return e.cerrarModalActualizar()}},"Cancelar"))))}}]),t}(l.a.Component);var D=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(s,null),l.a.createElement(b,null),l.a.createElement("hr",null),l.a.createElement(u,null),l.a.createElement("hr",null),l.a.createElement(F,null))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(D,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.482d0983.chunk.js.map