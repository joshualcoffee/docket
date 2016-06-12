import interact from 'interact.js';

export const resourcePosition = (resource, event) => {
  let start_key = resource+"_"+event.start_time.format('HH_mm');
  let end_key = resource+"_"+event.end_time.format('HH_mm');
  try{
    let start_el = document.querySelectorAll(`[data-time="${start_key}"]`)[0];
    let end_el = document.querySelectorAll(`[data-time="${end_key}"]`)[0];

    return {
      left: start_el.offsetLeft,
      top: 0
    }
  }catch(err){
    return {
      top: null,
      left: null
    }
  }

};

function _moveEvent(event){
  var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

export const position = (event) => {
  let interact_el = interact(event);
  let width = document.querySelectorAll('[data-time]')[0].offsetWidth;
  let height = document.querySelectorAll('[data-time]')[0].offsetHeight;
  let _bindInteract = () => {

    interact_el
      .draggable({
        // enable autoScroll
        autoScroll: true,
        // call this function on every dragmove event
        onmove: _moveEvent,
        snap: {
          targets: [
            interact.createSnapGrid({ x: width, y: height })
          ],
          range: Infinity,
          relativePoints: [ { x: 0, y: 0 } ],
          offset: { x: 9, y: 6 }
        },
        // call this function on every dragend event
        onend: function (event) {
          console.log('end')
        }
      })
      .resizable({
        edges: {
          top   : false,       // Use pointer coords to check for resize.
          left  : true,      // Disable resizing from left edge.
          bottom: false,// Resize if pointer target matches selector
          right : true    // Resize if pointer target is the given Element
        }
      })
      .on('resizemove', function (event) {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0),
        y = (parseFloat(target.getAttribute('data-y')) || 0);

    // update the element's style
    target.style.width  = event.rect.width + 'px';

    // translate when resizing from top or left edges
    x += event.deltaRect.left;
    y += event.deltaRect.top;

    target.style.webkitTransform = target.style.transform =
        'translate(' + x + 'px,' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
    target.textContent = Math.round(event.rect.width) + '×' + Math.round(event.rect.height);
  });
  }

  let _destroyInteract = () => {

  }

  return {
    bindInteract: _bindInteract,
    destroy: _destroyInteract
  }
}
