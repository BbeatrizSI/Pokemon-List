(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"bulbasaur","types":["poison","grass"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{"id":2,"name":"ivysaur","types":["poison","grass"],"evolution":"bulbasaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{"id":3,"name":"venusaur","types":["poison","grass"],"evolution":"ivysaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{"id":4,"name":"charmander","types":["fire"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{"id":5,"name":"charmeleon","types":["fire"],"evolution":"charmander","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{"id":6,"name":"charizard","types":["flying","fire"],"evolution":"charmeleon","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{"id":7,"name":"squirtle","types":["water"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{"id":8,"name":"wartortle","types":["water"],"evolution":"squirtle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{"id":9,"name":"blastoise","types":["water"],"evolution":"wartortle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{"id":10,"name":"caterpie","types":["bug"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}]')},function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(8),o=a.n(n),i=(a(15),a(2)),c=a(3),p=a(4),u=a(1),l=a(6),m=a(5),d=(a(16),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).addToFavorites2=function(e){var t=Number(e.currentTarget.id);r.props.addToFavorites(t),console.log(t)},r.addToFavorites2=r.addToFavorites2.bind(Object(u.a)(r)),r}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.types.map((function(e,t){return s.a.createElement("li",{className:"card__types--kind",key:t},e)}));return s.a.createElement("li",{className:"card card__container ".concat(this.props.favorite),key:this.props.id,id:this.props.id,onClick:this.addToFavorites2},s.a.createElement("h2",{className:"card__title "},this.props.name),s.a.createElement("div",{className:"img__container"},s.a.createElement("img",{className:"card__img",src:this.props.url,alt:"Foto de ".concat(this.props.name)})),s.a.createElement("div",{className:"types-container"},s.a.createElement("h3",{className:"card__types--title"},"Tipos:"),s.a.createElement("ul",{className:"card__types--list "},e)))}}]),a}(s.a.Component)),v=(a(17),function(e){var t=e.pokemons.map((function(t){return s.a.createElement(d,{key:t.id,id:t.id,name:t.name,url:t.url,types:t.types,addToFavorites:e.addToFavorites,favorite:e.favorites.includes(t.id)?"selected":""})}));return s.a.createElement("section",{className:"page"},s.a.createElement("h1",{className:"main-title"},"Mi listado de ",s.a.createElement("span",{className:"main-title-pokemon"},"Pokemon")),s.a.createElement("ul",{className:"cards"},t))}),h=(a(18),a(9)),f=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).addToFavorites=function(e){r.state.favorites.includes(e)?r.setState((function(t){var a=t.favorites.filter((function(t){return e!==t}));return Object(i.a)(Object(i.a)({},t),{},{favorites:a})})):r.setState((function(t){return Object(i.a)(Object(i.a)({},t),{},{favorites:t.favorites.concat(e)})}))},r.state={pokemons:h,favorites:[]},r.addToFavorites=r.addToFavorites.bind(Object(u.a)(r)),r}return Object(p.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(v,{pokemons:this.state.pokemons,addToFavorites:this.addToFavorites,favorites:this.state.favorites}))}}]),a}(s.a.Component);o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(f,null)),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.29ef8afe.chunk.js.map