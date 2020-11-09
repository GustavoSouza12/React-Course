# Class 12 Destructuring Props

<pre>
    <code>
        const example = (props) => {
    </code> 
</pre>

para desestruturar essa props é necessário invocar o NOME da prop entre chaves
<pre>
    <code>
        const example = ({nameOfProp}) => {
    </code> 
</pre>

o outro jeito é invocar as props dentro de uma const retirando do objeto prop:
<pre>
    <code> 
        const example = props => {
        const {nameOfProp} = props
    </code> 
</pre>

em componentes de classe basta chamar o this.props:
<pre>
    <code> 
        class ClassClick extends Component {
        const {nameOfProp} = this.props
    </code> 
</pre>

# Class 13 Event Handling

eventos em react são passados entre chaves, diferente do HTML

HTML = <code>onclick="testFunction()"</code>

React = <code>onClick={testFunction}</code>

obs: no react, invocar uma função com parenteses é igual a uma chamada de função automática 

obs: em componentes de classe, será usado o this para invocar a função

<code>onClick={this.testFunction}</code>

# Class 14 Binding Event Handlers in class components

### binding in constructor 

<code>this.functionName = this.functionName.bind(this)</code>

```html
<button onClick={this.functionName}>EventBind</button>
``` 
### binding on event render

```html
<button onClick={this.functionName.bind(this)}>EventBind</button>
``` 

# Class 15 Methods as props 

É possível no react passar um método(função) como uma propriedade de um componente pai para um filho:

### Componente pai

<pre>
    <code> 
    this.funcExample = this.funcExample.bind(this)

    funcExample(){
            alert(`Esse é o method example`)
        }
        
    ChildComponent method={this.funcExample}/> 

  </code> 
</pre>

### Componente filho

<pre>
    <code> 
    function ChildComponent({method}) {
        return (

        )
    }
  </code> 
</pre>

#### Inside return

    ```html
    <div>
        <button onClick={() => method('Gustavo')}>Child Button</button> 
    </div>
    ```

conditional rendering



