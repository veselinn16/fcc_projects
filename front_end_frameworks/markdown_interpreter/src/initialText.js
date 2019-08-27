// js sting
const jsString = `let a = 23;`;

// vars for creating preformatted code
const templates1 = "````javascript";
const templates2 = "````";

// variable contructing preformatted code block
const blockCode = `${templates1}
${jsString}
${templates2}`;

// list items
const listItems = `+ Red
+ Green
+ Blue`;

// block quotes
const blockQuotes = `> Quote by some famous person`;

// inline code
const codeBlock = "````const arrowFunction = () => 'Hello Markdown World!'````";

// variable constructing inline code block
const inlineCode = `${codeBlock}`;

// image
const img = `![Markdown Logo](https://miro.medium.com/max/1200/1*G0YcQMGtG6jWgq6xIQ1BnQ.png)`;

// bolded text
const boldText = `**I am strong text!**`;

// text rendered in the input tab initially
export default `
# Welcome to the Mardown Previewer!
***
## Write your Markdown code and watch it turn into HTML!
***
__Inline code:__
[Link to awesome website](https://www.google.com)
***
__Inline code:__
${inlineCode}
***
__Code blocks__
${blockCode}
***
__Unordered lists:__
${listItems}
***
__Quotes:__
${blockQuotes}
***
__Images:__
${img}
***
__Bolded text:__
${boldText}`;
