作业:

一: 操作state,添加css
1. 创建两个新组件: UserInput和UserOutput
2. UserInput含有一个input字段,UserOutput有两段
3. Pass a username (of your choice) to UserOutput via props and display it there
4. Add state to the App component (=> the username) and pass the username to the UserOutput component
5. Add a method to manipulate the state (=> an event-handler method)
6. Pass the event-handler method reference to the UserInput component and bind it to the input-change event
7. Ensure that the new input entered by the user overwrites the old username passed to UserOutput
8. Add two-way-binding to your input (in UserInput) to also display the starting username
9. Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets


二:动态操纵state,条件判断
1. create an input field(in app component)with a change listener which outputs the length of the entered text below it.(in a paragraph)
2. create a new component(ValidationComponent) which receives the text length as a prop
3. inside the ValidationComponent, either output 'Text too short' or 'Text long enough' depending on the text length(5 as a minimum length)
4. create another component(charComponent) and style it as an inline box(dislay: inline-block, paddin....)
5. render a list of charComponent where each charComponent receives a different letter of the entered text(in the initial input field) as a prop
6. when you click a charComponent, it should be removed from the entered text
