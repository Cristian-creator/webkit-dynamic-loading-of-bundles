# Practical example of dynamically loading of bundles in Webkit

-> The present application contains a simple **Node.js** server with 2 routes ( `/api1` and `/api2`) and both of them respond with a static json file.
-> Regarding to the UI, I created a **React** & **Typescript** application which <ins> renders </ins> **ONLY** the content of homepage <ins> based </ins> on `modules` <ins> query parameter </ins>

Particularities:
- the query values are stored in `modules` parameter ( `/?modules=changesidebar,newlist` )
- I created a <ins> separate file </ins> ( component ) based on each `modules` value:
  - `modules === undefined`         // renders a menu on the left-side and data from `/api1`  
  - `modules === changesidebar`     // renders a menu on the right-side and data from `/api1`
  - `modules === newlist`           // renders a menu on the left-side and data from `/api2`
  - `modules === changesidebar,newlist || newlist,changesidebar`  // renders a menu on the right-side and data from `/api2`
- <ins> the application will load just the javascript bundle for the current page </ins>
