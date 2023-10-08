import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement('h1',{},[React.createElement('h2',{},"hello  h2"),React.createElement('p',{},"hello p")])
console.info(heading)
const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)
console.info(root)