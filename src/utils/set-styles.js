export default function setStyles( objId, propertyObject ) {
 var elem = document.querySelector(objId);
 for (var property in propertyObject)
    elem.style[property] = propertyObject[property];
}