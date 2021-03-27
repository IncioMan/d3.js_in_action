### Chapter 2

* **d3.extent(<array>)**, **d3.max(<array>)**, **d3.min(<array>)**: handy functions to calculate min, max of an array of values (extent returns an array of 2 values: min and max)

* **d3.nest.key(<>).entries()**: allows to restructure the data according to a function mapping data entries to a key (similar to a group by but with no aggregate function).

* **clamp(true)**: allows to impose d3 not to extrapolate values greater than the maximum domain in a scale. Greater values are mapped to the highest value of the domain

* **data(<data>, function_id)**: allows to specify what id should be used to bind shapes to data object. By default d3 uses the position in the array, which is in most of the cases not what we desire. Better always to define a meaningful id.