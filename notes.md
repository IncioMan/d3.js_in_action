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