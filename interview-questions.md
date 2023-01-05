# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer:

JSX stands for JavaScript XML and is used as a method to pass html to React since React is based on Javascript and interpretes JS to run correctly. JSX is very similar to HTML but there are some very small differences that will cause React to not work correctly is JSX is not used. An example of the small differences is when a developer wants to work with CSS and refer to a CSS class to modify an HTML element. Because "class" is a reserved word in Javascript, the developer must refer to a CSS class as "className". There are similar nuances in JSX, but the vast majority of JSX looks like standard HTML.

Researched answer:

JSX is a syntax extension to JavaScript used in React. While it is not absolutely mandatory to use with React, JSX was designed to be used in conjunction with React development. JSX allows for both markup and logic to be in the same file instead of seprating files by type. This allows for much faster and intuitive development, since functions that would have otherwise had to exist in separate files can be contained within the same file. React is focused on a "separation of concerns" and JSX allows componenets to be separate, yet still contain everything they need to function in a single file  

2. What is yarn? What file(s) are modified in a React application when you run the command yarn in your terminal?

Your answer:

Yarn stands for "Yet Another Resource Negotiator". It is a package manager that helps with creating, updating, and managing dependencies needed to Javascript-based applications. React apps need a combination of other small, premade bits of code to run correctly in order for the main application to work. These bits of code, called packages, are all different and can be any number of versions or types. To make sure the correct versions of the correct packages are loaded for an application to work correctly, Yarn creates and updates a special file called "yarn.lock". This file lists all the necessary packages and their versions for a given application. This file ensures that anyone creating, working, or running an application has the correct packages and versions so the application can run correctly. 

Researched answer:

I would use most of my original answer. I would add that the term for all of these necessary packages and their versions are the "dependencies" for an application.

3. What is a React component?

Your answer:

A component is React's building block for a complete application. React believes in the "separation of concerns" where parts of an app and their accociated files are kept as separate parts of a while as opposed to one large, difficult to manage file that holds the entire application in one place. A portion of a React application that performs a particular function or takes up a certain portion of a page is called a component. The components are then assembled into a functioning application. Components are linked to each other through properties and functions, so components often times cannot function independently without data or help from another componenet, but logically each component is its own entity that serves a singular purpose. 

Researched answer:

I would use most of my original answer and add that a major advantage of components comes with the ideology of "don't repeat yourself" (DRY). Once a component is built, it can be resued indefinitely with very little extra work. Componenet keep applications tidy and make future development much easier, as components can be added, removed, or updated with little disruption of the the rest of the application

4. What is the difference between state values and props in React?

Your answer:

State and props are both major aspects of how React works. State is a form of memory within React. State allows parts of React components to have a default state and then change that state later depending on time, actions, or the state of another portion of the components or the state of something in another component. States can include the position of a switch, the value of a counter, or pretty much anything that is not static. The big reason this is important in React is that it allows changes without rendering the entire page for the change. If state changes withing a component, only that component changes. The rest of the page remains how it is. Props (short for properties) allows separate components of a React application to communicate with each other. While props only allows information to flow downhill (from higher components to lower components), it makes the component architecture possible. Without props, it would be impossible to pass data from one component to the other which would defeat the purpose of components in the first place. Props reinforces the idea of DRY by letting their be a single source of data which is then shared everywhere that data is shares through props.

Researched answer:

I would add to my original answer that state is created within a component while props comes from outside a component. Props are immutable while state is mutable.

5. What is the DOM?

Your answer:

DOM stands for Document Object Model. The DOM is a representation of a webpage that allows for access to and actions on certain parts of web pages using special syntax. Javascript actions like "onClick" and "getElementByID" are examples of using the DOM to trigger and action or identify a specific element of a webpage. The DOM uses dot notation to access parts of a webpage or identify a part of a webpage to perform an action if a certain action occurs at the specific location within the DOM. 

Researched answer:

I would add that the DOM represents a document as a combination of nodes and objects. It is a programming interface for web documents and allows programs to change a document's structure, style, and content.

6. STRETCH: Which is the difference between a div and a span?

Your answer:

A div is an HTML element used to create a logical division in a web page. The div doesn't actually mean anything itself and is invsible on a rendered webpage, but it acts as a container so anything within it can be manipulated separately from anything outside of the div. Developers can use divs for CSS styling, to hold certain elements, or to just keep HTML code more organized. Divs are block level, meaning that other elements coming before or after the div will be above of below the div on the rendered page (except when using flex box or CSS grid, but that is out of the scope of this answer). Spans serve a similar purpose to divs in that they can separate things to give special treatment to elements within the span, but spans in inline which means they be be surrounded by other elements and remain in place compared to the other elements. An example could be putting a span inside a paragraph. While the span could have special CSS styling so it looks different than the rest of the paragraph, the span will not affect the location of the text or other elements within the paragraph. The page will be rendered as if the span were just another part of the paragraph.

Researched answer:

I wouldn't add much to my original answer.

## Looking Ahead: Terms for Next Week


1. Object-oriented programming:

Object-oriented programming (OOP) is a type of programming that treats a program or application as a collection of objects. Each object can represent some aspect of the overall program and objects can contain both data and/or functions. Much like state in React, OOP allows developers to compartmentalize the program into objects that perform certain functions or represent certain things which can be used over and over again. Classes and inheritance allow objects to be readily created and modified and work with other objects by using encapsulation, which keeps objects' state private so one objects won't inadvertantly negatively affect another object. This model makes OOP very flexible and scalable.

2. Ruby:

Ruby is an object oriented programming language released in 1995 by its creator, Yukihiro Matsumoto. Matsumoto aimed to create a language that balanced both functional and imperative programming. In Ruby, everything is an object. This approach makes Ruby very flexible. Any code in Ruby can be given properties and/or actions. Ruby offers a special feature called  "blocks". Blocks allow great flexibility and customization within methods and functions. Ruby differs from some languages in that it features single inheritance only to reduce complexity in relationships between mothods. 

3. Implicit return:

Implicit return negates the need to explicitly declare a "return" to generate a value to be used or displayed once a function completes its work. As long as the last expression in an execution path would normally require the "return" word, implicit return means that typing "return" is not necessary. "Return" is stil used in Ruby, but it stops a method where the "return" is placed in order to return a specific value at that point in the code. If returning the value at that specific location is not necessary, implicit return will take care of generating the ultimate value at the end of the function.

4. Ruby blocks:

Blocks are anonymous functions that can be passed into methods. They allow for more condensed code that is easier to understand and faster to execute. Blocks are very flexible and methods can be constructed with blocks in mind to make the methods easier to use with blocks. Certain other key concepts like "yield", "call", "instance_exec", and "instance_eval" can all work with blocks to make them more effective and process blocks more quickly with less code. Blocks have particular syntax so they can be built and identified easily. Blocks are always inside {}. Blocks can have their own arguments, as well. Inside the {}, argurments are separated from the block's body by the | character.

5. Ruby hashes:

Ruby hashes are similar to arrays, but the main difference is that indexing is done via arbitrary keys as opposed to integers. Any objects can be a key in a hash. This makes hashes much more flexible when it comes to naming conventions and easier to manage when referring to hash values using their keys.
