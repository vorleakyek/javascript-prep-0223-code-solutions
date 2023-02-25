# prep-html-script-tag-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What tag is needed to load JavaScript scripts into an HTML document?
The `<script>` tag

- How do you use a script tag to write JavaScript directly in the HTML document?
Place it within the body tag or the head tag depending on when we want the JavaScript to load.

```
<body>
    <script>
      console.log('I have added JS to a script tag in the HTML!');
    </script>
    <script src="main.js"></script>
  </body>
```


- How do you use a script tag to load an external JavaScript file?
Using the "src" attribute to point to an external Javascript file.
Example: `<script src="URL"></script>`

The URL of the external script file.
Possible values:

An absolute URL - points to another web site (like src="http://www.example.com/example.js")
A relative URL - points to a file within a web site (like src="/scripts/example.js")

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
```

for HTML:
```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:
```css
div {
  width:100%
}
```
