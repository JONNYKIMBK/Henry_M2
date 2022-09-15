var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
  if(matchFunc(startEl)) resultSet.push(startEl);


  //recorrer los hijos
  for (let i = 0; i < startEl.children.length; i++) {
    let result = traverseDomAndCollectElements(matchFunc, startEl.children[i])
    resultSet = [...resultSet,...result];
  }

  // TU CÓDIGO AQUÍ
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0]==="#") return "id";
  if (selector[0]===".") return "class";
  if (selector.includes(".")) return "tag.class";

  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  let sel=selector.slice(1);
  if (selectorType === "id") { 
    matchFunction= function(el){
      
      return el.id && (el.id===sel);
    }
  } else if (selectorType === "class") {
    matchFunction=function(el){
      return el.className && el.classList.contains(sel);
    }
  } else if (selectorType === "tag.class") {
      matchFunction=function(el){
        // let index= selector.indexOf(".");
        // let selClass=selector.substring(index+1);
        // let selTag=selector.substring(0,index);
        // return (el.tagName.toLowerCase()===selTag.toLowerCase()) && el.classList.contains(selClass);

        //destructuring, separamos el tag de la class y usamos recursividad
        let [tag, clas] = selector.split(".");
        return matchFunctionMaker(tag)(el) && matchFunctionMaker("."+clas)(el);
      }
  } else if (selectorType === "tag") {
      matchFunction=function(el){
        return (el.tagName.toLowerCase()===selector.toLowerCase());
      }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
