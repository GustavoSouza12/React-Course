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

Keys give elements a stable identity

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

# Class 19 Index as Key Anti-pattern



Isn't recommended use the names from list being the key attribute, because it may repeat in the application

### example

<pre>
    <code>
        const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
     </code>
</pre>

and then 
 
<pre>
    <code>
         const nameList = names.map(name => <h2 key={name}>{name}</h2>)   
     </code>
</pre>

### One better way to define keys is use the attribute index as it:

<pre>
    <code>
         const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)   
     </code>
</pre>

### When use Index as key

1. The items in the list do not have unique id
2. The list is static list and will not change
3. The list will never be reordered or filtered


# 20 Styling and CSS Basics

### How style css in react?

there are 4 ways to style css in a React application

1. CSS stylesheets
2. Inline styling
3. CSS Modules
4. CSS in JS Libraries (Styled Components)

### CSS using props and conditional

1. Create a new prop in one component


         <ComponentExample ConditionalCss={false} />   
  

2. Get some class from the css file and in the component file

<pre>
    <code>
          let className = props.ConditionalCss ? 'Class Name here' : '' 

            return (
                div
                    h1 className={`${className} font-xl`}>Style h1
                /div
            )
     </code>
</pre>

### Inline styling


1. Create a new object with css properties and use it as style 

<pre>
    <code>
        const heading = {
            fontSize: '72px',
            color: 'blue'
        }

        function inline() {
            return (
                div
                h1 style={heading}> inline /h1 
                /div
            )
        }
     </code>
</pre>

### CSS MODULES

1. Acessing classes using an css module 

<pre>
    <code>
    import Styles from './Styles/appStyles.module.css'


    function App() {
        return (
            h1 className={Styles.AnyClass}>Sucess /h1
        )
    }  
     </code>
</pre>

# 21 Basics of Form Handing

### 3 steps 

1. add element html

<pre>
    <code>
        form onSubmit = {this.handlerSubmit}
               div
                    label Username /label

                    input type='text' /
               /div
     </code>
</pre>

2. asign the component state to the element value

<pre>
    <code>
        this.state = {
            username: ''
        }

        input
            type='text'
            value={this.username}
     </code>
</pre>


3. asign onChange handler to the component state

<pre>
    <code>
        this.state = {
            username: ''
        }

        handlerUsername = e => {
            this.setState({
                username: e.target.value
            })
        }
        input
            type='text'
            value={this.username}
            onChange={this.handlerUsername}
     </code>
</pre>


# 22 Lifecycle Methods in class component

### 1. Mounting

When an instance of a component is being created and inserted into the dom

#### 1.1 Mounting methods (4 methods)

Constructor, static getDerivedStateFromProps, render and componentDivMount

### 2. Updating

When a component is being re-rendered as a result of changes to either its props or state

#### 2.1 Updating methods (5 methods)

static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate and componentDidUpdate

### 3. Unmounting 

When a component is being removed from the DOM

#### 3.1 Unmonting method (1 method)

componentWillUnmount

### 4. Error Handling

When there is an error during rendering, in a lifecycle method, or in the constructor of any child component

#### 4.1 Error Handling methods (2 methods)

static getDerivedStateFromError and componentDidCatch