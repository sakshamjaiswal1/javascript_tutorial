console.log('Dom-4')
/*
Exercise 1
--------------
Move the contents of the two paragraphs into one single <p> tag.  Ensure there are no empty <p> tags left on the page.
*/
const paragraphs = document.querySelectorAll('p')
paragraphs[1].insertAdjacentHTML('afterbegin',paragraphs[0].innerText)
paragraphs[0].remove()
/*
Exercise 2
--------------
Reduce the font-size of the paragraph text to be half the size of the menu text.
*/

/*
Exercise 3
--------------
Move the ‘Services’ menu item to be before the ‘About’ menu item (after Home).
*/

/*
  Exercise 04
  -----------
  Create the following new entries in the menu: FAQs, Pricing
*/

/*
Exercise 5
--------------
Add a hover effect to the menu items so when the user hovers over them the background and font-size change.  (Must be done with JavaScript!)
*/
