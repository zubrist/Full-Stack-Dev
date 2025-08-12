# Web Development Questions - Answers

1. What is HTML? What is the difference between HTML and CSS?
HTML (HyperText Markup Language) is the standard markup language used to create the structure of web pages. CSS (Cascading Style Sheets) is used to style and layout web pages (e.g., colors, fonts, spacing). HTML defines the content and structure; CSS controls presentation and appearance.

2. What is the basic structure of an HTML document?
A basic HTML5 document:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <!-- content here -->
</body>
</html>
```

3. What is the difference between an element and a tag in HTML?
A tag is the markup keyword enclosed in angle brackets (e.g., <p>, </p>). An element consists of the start tag, content, and end tag together (e.g., <p>Hello</p>). Some elements are void (no closing tag) like <img>.

4. How do you create a hyperlink in HTML?
Using the anchor element:
```
<a href="https://example.com" target="_blank">Visit Example</a>
```

5. What is the purpose of the `alt` attribute of an <img> tag in HTML?
The `alt` attribute provides alternative text if the image cannot load and improves accessibility (screen readers) and SEO.

6. How do you create a hyperlink that opens in a new tab?
Add `target="_blank"` to the anchor tag:
```
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Open in new tab</a>
```
Include `rel="noopener noreferrer"` for security/performance.

7. Write down the use of <q> tag & <blockquote> tag.
`<q>` is for short inline quotations; browsers usually add quotation marks automatically.
`<blockquote>` is for longer block-level quotations, often indented.
Example:
```
<p>He said, <q>Practice every day.</q></p>
<blockquote>
  Success usually comes to those who are too busy to be looking for it.
</blockquote>
```

8. Write code snippet to form the following pattern using table only (Pattern A across diagonal):
Assuming pattern shows letters A-E in a diagonal. Example 5x5 table:
```html
<table border="1" cellpadding="6">
  <tbody>
    <tr><td>A</td><td></td><td></td><td></td><td></td></tr>
    <tr><td></td><td>B</td><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td>C</td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td><td>D</td><td></td></tr>
    <tr><td></td><td></td><td></td><td></td><td>E</td></tr>
  </tbody>
</table>
```
(Adjust if exact pattern differs.)

9. How do you embed a video in HTML5?
Use the <video> element:
```html
<video width="400" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
```

10. How do you create a multi-line text input in an HTML form?
Use the <textarea> element:
```html
<textarea name="comments" rows="5" cols="30" placeholder="Enter text..."></textarea>
```

11. How do you create a hidden input field in an HTML form?
```html
<input type="hidden" name="userId" value="12345">
```

12. What is the purpose of the `rel` attribute in a <link> tag?
It specifies the relationship between the current document and the linked resource (e.g., `rel="stylesheet"`, `rel="icon"`, `rel="preload"`). Helps browsers understand how to treat the resource.

13. Write code snippet that creates a registration form that will have the following fields: name(textbox), contact number(Number), email, user id, password, gender(radio), class(dropdown), hobby(checkbox), submit button.
```html
<form action="#" method="post">
  <label>Name: <input type="text" name="name" required></label><br>
  <label>Contact Number: <input type="tel" name="contact" pattern="[0-9]{10}" required></label><br>
  <label>Email: <input type="email" name="email" required></label><br>
  <label>User ID: <input type="text" name="userid" required></label><br>
  <label>Password: <input type="password" name="password" minlength="8" required></label><br>
  Gender:
  <label><input type="radio" name="gender" value="male" required> Male</label>
  <label><input type="radio" name="gender" value="female"> Female</label>
  <label><input type="radio" name="gender" value="other"> Other</label><br>
  Class:
  <select name="class" required>
    <option value="">Select</option>
    <option value="xi">XI</option>
    <option value="xii">XII</option>
    <option value="ug">Undergraduate</option>
    <option value="pg">Postgraduate</option>
  </select><br>
  Hobbies:
  <label><input type="checkbox" name="hobby" value="reading"> Reading</label>
  <label><input type="checkbox" name="hobby" value="sports"> Sports</label>
  <label><input type="checkbox" name="hobby" value="music"> Music</label><br>
  <button type="submit">Submit</button>
</form>
```

14. Define the list types in HTML with example.
Main list types:
- Ordered List (<ol>) numbered.
- Unordered List (<ul>) bulleted.
- Description List (<dl>) term-definition pairs.
Examples:
```html
<ol>
  <li>First</li>
  <li>Second</li>
</ol>
<ul>
  <li>Apple</li>
  <li>Banana</li>
</ul>
<dl>
  <dt>HTML</dt><dd>Structure</dd>
  <dt>CSS</dt><dd>Presentation</dd>
</dl>
```

---
If any pattern/table in Q8 differs from your image, provide the exact layout and I will adjust.
