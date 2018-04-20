export const graphJSTemplate = data => (`cytoscape({
    container: document.getElementById('cy'),

    layout: {
        name: 'breadthfirst',
        circle: true,
        roots: ['AppModule'],
        padding: 10
    },

    style: [
    {
      selector: 'node',
      css: {
        'content': 'data(id)',
        'text-valign': 'center',
        'text-halign': 'center'
      }
    },
    {
      selector: '$node > node',
      css: {
        'padding-top': '10px',
        'padding-left': '10px',
        'padding-bottom': '10px',
        'padding-right': '10px',
        'text-valign': 'top',
        'text-halign': 'center',
        'background-color': '#bbb'
      }
    },
    {
      selector: 'edge',
      css: {
        'target-arrow-shape': 'triangle'
      }
    },
    {
      selector: ':selected',
      css: {
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black'
      }
    }
  ],

    elements: ${JSON.stringify(data)},

    ready: function(){
        window.cy = this;
    }
});

var isToolboxOpened = true;
function toggle() {
    isToolboxOpened = !isToolboxOpened;
    if (!isToolboxOpened) {
        $(".actions>button").html("+");
    } else {
        $(".actions>button").html("x");
    }
    var maxHeight = 640;
    var minHeight = 40;
    var filtersHeight = $('#filters').height();
    setInterval(function(){
        if (filtersHeight > minHeight && !isToolboxOpened) {
            filtersHeight = filtersHeight-10;
            $('#filters').height(filtersHeight);
        } else if (filtersHeight < maxHeight && isToolboxOpened) {
            filtersHeight = filtersHeight+10;
            $('#filters').height(filtersHeight);
        }
    }, 1);
}
`);