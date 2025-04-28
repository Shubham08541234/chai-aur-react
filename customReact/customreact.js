function customRender(reactElement, container) {
    // let elem = document.createElement(reactElement.type)
    // elem.setAttribute('href', reactElement.props.href)
    // elem.setAttribute('target', reactElement.props.target)
    // elem.innerHTML = reactElement.children
    // container.append(elem)

    let elem = document.createElement(reactElement.type)
    for (const prop in reactElement.props) {
        if (Object.prototype.hasOwnProperty.call(reactElement.props, prop)) {
            const element = reactElement.props[prop];
            elem.setAttribute(prop, element)
            
        }
    }
    elem.innerHTML = reactElement.children
    container.append(elem)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google.com'
}
const maincontainer = document.querySelector("#root")

customRender(reactElement, maincontainer)
