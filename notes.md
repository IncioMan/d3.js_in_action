### Chapter 2

* **d3.extent(<array>)**, **d3.max(<array>)**, **d3.min(<array>)**: handy functions to calculate min, max of an array of values (extent returns an array of 2 values: min and max)

* **d3.nest.key(<>).entries()**: allows to restructure the data according to a function mapping data entries to a key (similar to a group by but with no aggregate function).

* **clamp(true)**: allows to impose d3 not to extrapolate values greater than the maximum domain in a scale. Greater values are mapped to the highest value of the domain

* **data(<data>, function_id)**: allows to specify what id should be used to bind shapes to data object. By default d3 uses the position in the array, which is in most of the cases not what we desire. Better always to define a meaningful id.

### Chapter 3

* To access the HTML element associated with a datapoint one can use **this** but **not in arrow functions** (only in `function(d){}` and not `(d)=>{}`). Alternatively **node()** of a selection (`d3.select("circle").node();`)

* SVG has no Z-levels, which means that the drawing order of elements is determined by their DOM order.
In order to avoid having the element below the others (for example in case this elements is enlarged and overlaps the neighobors) d3 functions can be used `<d3selectiom>.raise()` or lower(). Make sure you are selecting the right level. In case not navigate the tree using `d3.select(this.parentElement)` and raise that. Alternatively, in native JS `this.parentElement.appendChild(this);`

* `style("pointer-events","none");` can be used to disable events (mouseover, out) fired by this element



### Chapter 4

* Create xAxis for one more label so that they do not end on the last value (7) but expand the range to be greater than the width so that the values are nicely spread on the width of the svg

* The coordinates (x,y) of the elements inside the g are relative to the parent. In this case g was placed on the median value so every coordinate for the graphical components are relative to the median value (scaled).

* Use the post-selection for removing the domain lines of the axis [see issue](https://github.com/d3/d3-axis/issues/48).

* When drawing complex components grouped in a g and associated with the same data point, one can draw the g, attach the data and then call the function `.each(function(d,i){` //draw the different components and access the g element by calling this}.

* To create a line, use `d3.line()` which takes a generator for mapping x `.x()` values and y `.y()` values (scaled) and returns a function. Then pass this returned function to the **d** attribute of the path element to draw the line.
* Use `d3.line().defined(*function for each data point returning a boolean*)` method to not interpolate points in the data (not shown in this example)
* The interpolation method for the line can be selected using the `.curve()` method: cardinal, basis, step
* Axis can be styled using css selectors (.ticks > line/text) or via the .call method when drawing the axis