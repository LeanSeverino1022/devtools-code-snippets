// show random colored outline on selected DOM elements.. similar to http://pesticide.io/

var groupByTag = 1;
var selector = '*';

// change the selector if you wish
if( !groupByTag ) {
  $$(selector).forEach(function (a) {a.style.outline = '1px solid #' + (~~(Math.random() * (1 << 24))).toString(16); });
}
else
//  outline elements by tag. line of code below taken from addyosmani's work. Thanks
for(i=0;A=$$(selector)[i++];)A.style.outline="solid hsl("+(A+A).length*9+",99%,50%)1px"
