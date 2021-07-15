// stolen from https://www.w3schools.com/howto/howto_js_draggable.asp
// @ts-ignore
window.dragpositions = {};

function dragElement(elmnt: HTMLElement) {
  // @ts-ignore stop
  if (window.dragpositions[elmnt.id] == null) {
    // @ts-ignore stop
    window.dragpositions[elmnt.id] = {
      pos1: 0,
      pos2: 0,
      pos3: 0,
      pos4: 0,
    };
  }

  let topbar = document.querySelector(`#${elmnt.id} .topBar`);
  if (topbar) {
    /* if present, the header is where you move the DIV from:*/
    // @ts-ignore its not null, shut up
    topbar.onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e: MouseEvent) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    // @ts-ignore stop
    window.dragpositions[elmnt.id].pos3 = e.clientX;
    // @ts-ignore stop
    window.dragpositions[elmnt.id].pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e: MouseEvent) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    // @ts-ignore
    window.dragpositions[elmnt.id].pos1 = // @ts-ignore
      window.dragpositions[elmnt.id].pos3 - e.clientX;
    // @ts-ignore
    window.dragpositions[elmnt.id].pos2 = // @ts-ignore
      window.dragpositions[elmnt.id].pos4 - e.clientY;
    // @ts-ignore
    window.dragpositions[elmnt.id].pos3 = e.clientX;
    // @ts-ignore
    window.dragpositions[elmnt.id].pos4 = e.clientY;
    // set the element's new position:

    elmnt.style.top = // @ts-ignore
      elmnt.offsetTop - window.dragpositions[elmnt.id].pos2 + "px";

    elmnt.style.left = // @ts-ignore
      elmnt.offsetLeft - window.dragpositions[elmnt.id].pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

export default dragElement;
