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

# Class 16 Conditional rendering

### 1.if/else

    First set a state:

<pre>
    <code> 
        this.state = {
            stateExample = false  
        }
    </code> 
</pre>

    Now, applying conditional rendering 

<pre>
    <code> 
        if (this.state.stateExample){
            return true condition, JSX or otherthing
        } else {
            return false condition JSX or otherthing
        }
  </code> 
</pre>   

### 2.Element variables

First set a state:

<pre>
    <code> 
        this.state = {
            stateExample = false  
        }
  </code> 
</pre>

    <p>After, set the conditional rendering in one variable that stores the element</p>

<pre>
    <code> 
        let variableExample
        if(this.state.stateExample){
            variableExample = true condition, JSX or otherthing
        } else{
            variableExample = false condition, JSX or otherthing
        }
  </code> 
</pre>

And in the end return the variable

```html
return <div>{variableExample}</div>
```

### 3.Ternary conditional operator

First set the state:
<pre>
    <code> 
        this.state = {
            stateExample = false  
        }
  </code> 
</pre>

Ternary is the most simplest way to do it:

<pre>
    <code> 
        return this.state.stateExample ? (
            div True div ) : (
            div False div )

        )
  </code> 
</pre>


# Class 17 List Rendering

### Using the map() method

the <strong>map()</strong> method creates a new array with the results of calling a provided function on every element in the calling array

Example: 

<pre>
    <code>
        function NameList() {

        const names = ['Bruce', 'Gustavo', 'Ana']
        
        return (
            div
            {
                names.map(name => h2{name}h2)
            }
            div
        )
    }
    </code>
</pre>    

# Class 18 List and Keys

it's a special attribute 

Onething in React is that each child in an array needs to have an unique key prop

To make it, its possible using the child item id or even name

### Important point!
Key props aren't acessible in child components in a React.js application

### Why we need it?

We need it bacause it helps react identify which items in a list have changed or added or removed.

It places a crucial role in handling UI updates efficently


<pre>
    <code>
        function NameList() {
            const persons = [
                {
                    id: 1,
                    name: 'Gustavo',
                    age: 30,
                    skill: 'React'
                },
                {
                    id: 2,
                    name: 'Ana',
                    age: 30,
                    skill: 'Angular'
                },
                {
                    id: 3,
                    name: 'Bruce',
                    age: 20,
                    skill: 'Vue'
                }
            ]
            const personList = persons.map(person => (<Person key={person.id} person={person} />))   
            
            return <div>{personList}</div>

        }
    </code>
</pre>  