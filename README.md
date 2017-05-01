# Mac Calculator Clone

Replicate the builtin Mac calculator as a web app.

This this the base repo for the [Mac Calculator Clone](http://jsdev.learnersguild.org/goals/150) goal.

![calculator-with-history](https://cloud.githubusercontent.com/assets/8385/22572149/9be3c83e-e957-11e6-9431-9b9742b6b4af.png)

## Installation and Setup

_Fill this out_

## Usage and Examples

_...and this_
  <h1 id="mac-calculator-clone">Mac Calculator Clone</h1>

<h2 id="challenge-rating">Challenge Rating</h2>

<p>This goal will likely be within your ZPD if you…</p>

<ul>
  <li>Can build a full-stack web app using Node.js and npm</li>
  <li>Can use HTML &amp; CSS to design a UI from a mockup</li>
  <li>Are interested in self-assessing your web developer skills</li>
</ul>

<h2 id="description">Description</h2>

<p>Replicate the builtin Mac calculator as a web app.</p>

<p>This goal has 3 linear stages. You must complete the specs of each stage before progressing onto the next.</p>

<p>Fork the the <a href="https://github.com/GuildCrafts/mac-calculator-clone">mac-calculator-clone repository</a> and use the fork as your project artifact.</p>

<h2 id="context">Context</h2>

<p><strong>Use a this goal to</strong>:</p>

<ul>
  <li>Take a break from pairing</li>
  <li>Get a sense of what you can accomplish by yourself</li>
  <li>Work on flexing problem solving skills</li>
  <li>Assess how much you’ve learned/grown as a developer</li>
</ul>

<p><strong>To get a proper self assessment</strong>:</p>

<ul>
  <li>Do this goal solo</li>
  <li>Start from scratch</li>
  <li>Do as much as you can</li>
  <li>Do not use any unmentioned frameworks</li>
  <li>Do not look at other solutions to this goal</li>
  <li>Understand and write every line of code</li>
  <li>Ask for coaching sessions</li>
  <li>Do not let coaches write code for you</li>
  <li>Get frequent code reviews</li>
  <li>Never copy and paste code from the Internet. Always type it out.</li>
</ul>

<h2 id="specifications">Specifications</h2>

<p>The specs are broken down in the following 3 stages, plus two “stretch” stages. Make sure to complete all the items in each stages’s <code class="highlighter-rouge">Specs</code> section.</p>

<ul>
  <li><a href="#stage-1">Stage 1</a></li>
  <li><a href="#stage-2">Stage 2</a></li>
  <li><a href="#stage-3">Stage 3</a></li>
  <li><a href="#general">General</a> (applies to the whole project)</li>
  <li><a href="#stretch-stage-1">Stretch Stage 1</a></li>
  <li><a href="#stretch-stage-2">Stretch Stage 2</a></li>
</ul>

<p><strong>IMPORTANT:</strong> When you complete a stage, before moving onto the next stage, tag the commit that completes stage N as <code class="highlighter-rouge">stage-N-complete</code> using <a href="https://git-scm.com/book/en/v2/Git-Basics-Tagging"><code class="highlighter-rouge">git tag</code></a>. <em>Don’t forget to push with <code class="highlighter-rouge">--tags</code></em>.</p>

<h3 id="stage-1">Stage 1</h3>

<p>In stage 1 you will only be using <code class="highlighter-rouge">HTML</code> and <code class="highlighter-rouge">CSS</code> to build a clone of the OS X calculator interface. You’re only building the interface in this stage. You’ll make the calculator work in stage 2.</p>

<p><img src="https://cloud.githubusercontent.com/assets/8385/22572099/6786dd74-e957-11e6-9340-278e63aa3809.png" alt="calculator-in-browser" /></p>

<h5 id="in-this-stage-you-will-be-using-at-least-the-following-skills">In this stage you will be using at least the following skills:</h5>

<ul>
  <li>HTML/CSS positioning</li>
  <li>CSS text/type styling</li>
  <li>Web Fonts</li>
  <li>Proper HTML formatting</li>
  <li>Proper CSS formatting</li>
  <li>Proper DOM positioning of assets</li>
  <li>Positioning with <code class="highlighter-rouge">inline</code>, <code class="highlighter-rouge">block</code> and <code class="highlighter-rouge">inline-block</code></li>
  <li>CSS pseudo-selectors</li>
  <li>CSS transitions</li>
  <li>Chrome Developer Tools Element tab</li>
</ul>

<h5 id="during-this-phase-you-should">During this phase you should…</h5>

<ul>
  <li>Use <a href="https://necolas.github.io/normalize.css/">normalize.css</a></li>
  <li>NOT use any other css frameworks or libraries</li>
  <li>NOT use any JavaScript</li>
  <li>NOT use an express server</li>
  <li>NOT use images</li>
  <li>NOT use <code class="highlighter-rouge">&lt;table&gt;</code> tags</li>
  <li>NOT use <code class="highlighter-rouge">&lt;form&gt;</code> tags</li>
  <li>NOT use <code class="highlighter-rouge">&lt;input&gt;</code> tags</li>
</ul>

<h5 id="specs">Specs</h5>

<ul>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> All text is in the <a href="https://fonts.google.com/specimen/Roboto">Roboto</a> web font</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> Your <code class="highlighter-rouge">HTML</code> and <code class="highlighter-rouge">CSS</code> follows this <a href="https://google.github.io/styleguide/htmlcssguide.xml">style guide</a></li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> The calculator is positioned in the center of the page, both vertically and horizontally</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> The calculator is a fixed size. It does not change in size when the page resizes.</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> If the window is too small for the calculator, the page scrolls, both vertically and horizontally</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> Each button has a CSS transition to slightly darken the background color on hover over 100ms</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> Each button has a CSS transition to slightly darken the background color on click over 100ms</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> All class names re: the calculator are name-spaced under <code class="highlighter-rouge">.calculator-…</code></li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> Your stylesheet contains little to no duplicate style declarations</li>
</ul>

<h3 id="stage-2">Stage 2</h3>

<p>In stage 2 you will be adding <code class="highlighter-rouge">JavaScript</code> to make the calculator work.</p>

<h5 id="in-this-stage-you-will-be-using-at-least-the-following-skills-1">In this stage you will be using at least the following skills:</h5>

<ul>
  <li>ES5 syntax</li>
  <li>Registering event listeners</li>
  <li>Binding to the DOM Ready event</li>
  <li>JavaScript closures</li>
  <li>JavaScript callbacks</li>
  <li>JavaScript formatting</li>
  <li>Event Delegation</li>
  <li>Event bubbling</li>
  <li>Querying the DOM API</li>
  <li>Manipulating the DOM using the DOM API</li>
  <li>Avoiding using the DOM for state</li>
</ul>

<h5 id="during-this-phase-you-should-1">During this phase you should…</h5>

<ul>
  <li>NOT use <code class="highlighter-rouge">jQuery</code> or any other <code class="highlighter-rouge">JavaScript</code> libraries or frameworks</li>
</ul>

<h5 id="specs-1">Specs</h5>

<ul>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> Your <code class="highlighter-rouge">JavaScript</code> is written in <code class="highlighter-rouge">ES5</code></li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> Your <code class="highlighter-rouge">JavaScript</code> follows this <a href="https://google.github.io/styleguide/jsguide.html">style guide</a></li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> Your JavaScript defines 1 or less global variables</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> The Calculator display is not an <code class="highlighter-rouge">&lt;input&gt;</code></li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> Typing a relevant key at any point is reflected on the calculator</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> Typing a relevant key causes the corresponding button on the calculator to appear to have been pressed. AKA flashes active</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> The state of the calculator is not be stored in the <code class="highlighter-rouge">DOM</code></li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> The mathematical operations for your calculator are each their own function, and are defined outside of any DOM event handler</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> When the length of the number displayed exceeds the width available, the font-size deterministically drops</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> Calculator functionality and behavior is consistent with <a href="#calculator-rules-and-examples">Mac calculator rules</a>
    <ul>
      <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> pressing <code class="highlighter-rouge">AC</code> displays <code class="highlighter-rouge">0</code></li>
      <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> pressing <code class="highlighter-rouge">AC</code> <code class="highlighter-rouge">8</code> <code class="highlighter-rouge">+/-</code> displays <code class="highlighter-rouge">-8</code></li>
      <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> pressing <code class="highlighter-rouge">AC</code> <code class="highlighter-rouge">-5</code> <code class="highlighter-rouge">+/-</code> displays <code class="highlighter-rouge">5</code></li>
      <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> pressing <code class="highlighter-rouge">AC</code> <code class="highlighter-rouge">99</code> <code class="highlighter-rouge">%</code> displays <code class="highlighter-rouge">0.99</code></li>
      <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> pressing <code class="highlighter-rouge">AC</code> <code class="highlighter-rouge">9</code> <code class="highlighter-rouge">+</code> <code class="highlighter-rouge">9</code> <code class="highlighter-rouge">-</code> <code class="highlighter-rouge">3</code> <code class="highlighter-rouge">=</code> displays <code class="highlighter-rouge">15</code></li>
      <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> pressing <code class="highlighter-rouge">AC</code> <code class="highlighter-rouge">6</code> <code class="highlighter-rouge">+</code> <code class="highlighter-rouge">=</code> displays <code class="highlighter-rouge">12</code></li>
      <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> pressing <code class="highlighter-rouge">AC</code> <code class="highlighter-rouge">4</code> <code class="highlighter-rouge">x</code> <code class="highlighter-rouge">4</code> <code class="highlighter-rouge">=</code> displays <code class="highlighter-rouge">16</code></li>
      <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> pressing <code class="highlighter-rouge">AC</code> <code class="highlighter-rouge">64</code> <code class="highlighter-rouge">+</code> <code class="highlighter-rouge">=</code> displays <code class="highlighter-rouge">128</code></li>
      <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> pressing <code class="highlighter-rouge">AC</code> <code class="highlighter-rouge">9</code> <code class="highlighter-rouge">+</code> displays <code class="highlighter-rouge">9</code></li>
      <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> pressing <code class="highlighter-rouge">AC</code> <code class="highlighter-rouge">8</code> <code class="highlighter-rouge">-</code> <code class="highlighter-rouge">5</code> <code class="highlighter-rouge">-</code> displays <code class="highlighter-rouge">3</code></li>
      <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> pressing <code class="highlighter-rouge">AC</code> <code class="highlighter-rouge">9</code> <code class="highlighter-rouge">-</code> <code class="highlighter-rouge">5</code> <code class="highlighter-rouge">+</code> displays <code class="highlighter-rouge">4</code></li>
      <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> pressing <code class="highlighter-rouge">AC</code> <code class="highlighter-rouge">9</code> <code class="highlighter-rouge">+</code> <code class="highlighter-rouge">9</code> <code class="highlighter-rouge">+</code> <code class="highlighter-rouge">+</code> <code class="highlighter-rouge">+</code> displays <code class="highlighter-rouge">18</code></li>
      <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> pressing <code class="highlighter-rouge">AC</code> <code class="highlighter-rouge">5</code> <code class="highlighter-rouge">+</code> <code class="highlighter-rouge">3</code> <code class="highlighter-rouge">x</code> <code class="highlighter-rouge">6</code> <code class="highlighter-rouge">+</code> displays <code class="highlighter-rouge">23</code></li>
      <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> pressing <code class="highlighter-rouge">AC</code> <code class="highlighter-rouge">9</code> <code class="highlighter-rouge">x</code> displays <code class="highlighter-rouge">9</code></li>
      <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> pressing <code class="highlighter-rouge">AC</code> <code class="highlighter-rouge">3</code> <code class="highlighter-rouge">x</code> <code class="highlighter-rouge">5</code> <code class="highlighter-rouge">x</code> displays <code class="highlighter-rouge">15</code></li>
      <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> pressing <code class="highlighter-rouge">AC</code> <code class="highlighter-rouge">6</code> <code class="highlighter-rouge">/</code> <code class="highlighter-rouge">3</code> displays <code class="highlighter-rouge">2</code></li>
      <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> pressing <code class="highlighter-rouge">AC</code> <code class="highlighter-rouge">3</code> <code class="highlighter-rouge">x</code> <code class="highlighter-rouge">4</code> <code class="highlighter-rouge">x</code> <code class="highlighter-rouge">x</code> <code class="highlighter-rouge">x</code> displays <code class="highlighter-rouge">12</code></li>
      <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> pressing <code class="highlighter-rouge">AC</code> <code class="highlighter-rouge">4</code> <code class="highlighter-rouge">+</code> <code class="highlighter-rouge">3</code> <code class="highlighter-rouge">x</code> <code class="highlighter-rouge">6</code> <code class="highlighter-rouge">x</code> displays <code class="highlighter-rouge">18</code></li>
      <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> pressing <code class="highlighter-rouge">AC</code> <code class="highlighter-rouge">3</code> <code class="highlighter-rouge">+</code> <code class="highlighter-rouge">5</code> <code class="highlighter-rouge">x</code> displays <code class="highlighter-rouge">5</code></li>
      <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> pressing <code class="highlighter-rouge">AC</code> <code class="highlighter-rouge">3</code> <code class="highlighter-rouge">+</code> <code class="highlighter-rouge">5</code> <code class="highlighter-rouge">x</code> <code class="highlighter-rouge">6</code> <code class="highlighter-rouge">x</code> displays <code class="highlighter-rouge">30</code></li>
      <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> pressing <code class="highlighter-rouge">AC</code> <code class="highlighter-rouge">3</code> <code class="highlighter-rouge">+</code> <code class="highlighter-rouge">5</code> <code class="highlighter-rouge">x</code> <code class="highlighter-rouge">6</code> <code class="highlighter-rouge">x</code> <code class="highlighter-rouge">2</code> <code class="highlighter-rouge">+</code> displays <code class="highlighter-rouge">63</code></li>
    </ul>
  </li>
</ul>

<h3 id="stage-3">Stage 3</h3>

<p>In stage 3 you are going to add a second calculator to the page. Both calculators will be exactly the same but work independently. This will likely require you to refactor some of the JavaScript you wrote in stage 2.</p>

<p><img src="https://cloud.githubusercontent.com/assets/8385/22572109/72df42ba-e957-11e6-8c9e-c9efd39045c1.png" alt="two-calculators-in-browser" /></p>

<h5 id="in-this-stage-you-will-be-using-at-least-the-following-skills-2">In this stage you will be using at least the following skills:</h5>

<ul>
  <li>Event delegation</li>
  <li>JavaScript Constructors</li>
  <li>Componentization</li>
  <li>Composition</li>
</ul>

<h5 id="during-this-phase-you-should-2">During this phase you should…</h5>

<ul>
  <li>duplicate the HTML for the calculator</li>
  <li>NOT try and render a calculator from <code class="highlighter-rouge">JavaScript</code></li>
  <li>NOT use <code class="highlighter-rouge">jQuery</code> or any other <code class="highlighter-rouge">JavaScript</code> libraries or frameworks</li>
  <li>consider using a constructor called <code class="highlighter-rouge">Calculator</code></li>
  <li>NOT give each calculator a unique <code class="highlighter-rouge">id</code> or <code class="highlighter-rouge">classname</code></li>
</ul>

<h5 id="specs-2">Specs</h5>

<ul>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> Each calculator acts independently.</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> Clicking anywhere on a calculator focuses that calculator.</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> Typing a relevant key affects the focused calculator.</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> Use event delegation to avoid binding a <code class="highlighter-rouge">click</code> event listener to each button</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> The focused calculator is <code class="highlighter-rouge">opacity: 1</code></li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> The not-focused calculator is <code class="highlighter-rouge">opacity: 0.5</code></li>
</ul>

<h3 id="general">General</h3>

<ul>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> Repository includes a README file with basic installation and setup instructions.</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> All dependencies are properly declared in <code class="highlighter-rouge">package.json</code>.</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> All major features are added via pull requests with a clear description and concise commit messages.</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> Code uses a linter and there are no linting errors.</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> Variables, functions, files, etc. have appropriate and meaningful names.</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> Functions are small and serve a single purpose.</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> The artifact produced is properly licensed, preferably with the <a href="https://opensource.org/licenses/MIT">MIT license</a>.</li>
</ul>

<h3 id="stretch">Stretch</h3>

<h4 id="stretch-stage-1">Stretch Stage 1</h4>

<p>In this stage you are going to move the work of your calculator to the server. This might seem silly but its a good way to practice moving logic from the browser to the server without the logic itself being too complex.</p>

<h5 id="in-this-stage-you-will-be-using-at-least-the-following-skills-3">In this stage you will be using at least the following skills:</h5>

<ul>
  <li>Setting up a simple Node express server</li>
  <li>XHR / AJAX requests</li>
  <li>Sending conventional HTTP status codes</li>
  <li>Using conventional HTTP verbs</li>
  <li>Setting common HTTP headers</li>
  <li>rendering JSON from express</li>
  <li>Following the RESTful routes convention</li>
</ul>

<h5 id="during-this-phase-you-should-3">During this phase you should…</h5>

<ul>
  <li>initialize a node <code class="highlighter-rouge">package.json</code></li>
  <li>use <code class="highlighter-rouge">express</code></li>
  <li>use a JSON body parser</li>
  <li>NOT use any other node packages</li>
</ul>

<h5 id="specs-3">Specs</h5>

<ul>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> Each mathematical operation should have it’s own API endpoint</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> Each mathematical operation is done on the server</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> Each request for a mathematical operation is a <code class="highlighter-rouge">post</code> request</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> Each operation request responds with <code class="highlighter-rouge">JSON</code></li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> When the calculator is waiting for an operation request response, it ignores all input</li>
</ul>

<h4 id="stretch-stage-2">Stretch Stage 2</h4>

<p>In this stage you are going to add persistence to your express server. We’re going to be persisting the history of the users calculations. We’re also going back to just having one calculator on the page.</p>

<p><img src="https://cloud.githubusercontent.com/assets/8385/22572149/9be3c83e-e957-11e6-9431-9b9742b6b4af.png" alt="calculator-with-history" /></p>

<h5 id="in-this-stage-you-will-be-using-at-least-the-following-skills-4">In this stage you will be using at least the following skills:</h5>

<ul>
  <li>SQL schema design</li>
  <li>writing SQL queries</li>
</ul>

<h5 id="during-this-phase-you-should-4">During this phase you should…</h5>

<ul>
  <li>use the <code class="highlighter-rouge">pg</code>, <code class="highlighter-rouge">pg-promise</code>, and/or <code class="highlighter-rouge">knex</code> packages</li>
  <li>NOT use any other node packages</li>
  <li>create a <code class="highlighter-rouge">visitors</code> table</li>
  <li>create a <code class="highlighter-rouge">calculations</code> table</li>
  <li>persist each mathematical operations</li>
</ul>

<h5 id="specs-4">Specs</h5>

<ul>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> there is only one calculator on the page</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> the calculator displays a scrolling history of calculations</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> the most recent calculation result is at the bottom</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> the scroll-back history is always scrolled to the bottom when a new operation result is added</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> the calculator history is stored per visitor (browser)</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> the express app uses a cookie to track individual visitors</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> reloading the page restores the calculator history</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> the server stores up to 100 calculation results</li>
  <li class="box task-list-item">
         <input type="checkbox" class="task-list-item-checkbox"> all mathematical operations have their own function, defined outside of any express router handlers.</li>
</ul>

<h2 id="resources">Resources</h2>

<h3 id="calculator-rules-and-examples">Calculator Rules and Examples</h3>

<h5 id="the-mac-calculator-supports">The Mac Calculator supports:</h5>
<ul>
  <li>addition</li>
  <li>subtraction</li>
  <li>multiplication</li>
  <li>division</li>
  <li>clear (display ‘0’ and reset calculator memory)</li>
  <li>change of sign (toggles between positive and negative)</li>
  <li>percentage (change number into its decimal equivalent (number/100) for computation)</li>
</ul>

<h5 id="rules">Rules</h5>
<p>The Mac Calculator buttons follow certain rules which govern what is displayed (and also what is computed, covered in the next section). The ‘=’ will always reset operator key presses to zero.</p>

<ul>
  <li>’=’ : Display varies as follows:
    <ul>
      <li>1st key press: Displays the results of all entered operations and operands</li>
      <li>Subsequent key presses: Applies last operator used with last operand to displayed value</li>
      <li>Special case: If equal was hit for result (or a number was entered), then an operator, then equal again, the operands used with the operator are both the results of the first equal result</li>
    </ul>
  </li>
</ul>

<div class="highlighter-rouge"><pre class="highlight"><code>9 + 9 - 3 = // Display will be 15
6 + =       // Display will be 12
4 X 4 =     // Display will be 16;
=           // if '=' hit again, answer will be 64
+ =         // if '+', then '=' pressed at this point, answer will be 128
</code></pre>
</div>
<ul>
  <li>’+’ : Display varies as follows:
    <ul>
      <li>1st key press: Most recently entered number</li>
      <li>Subsequent key presses: Displays as if equal button has been pressed, but is expecting to add another input afterwards</li>
      <li>Repeated key presses maintain the display until another number has been entered</li>
    </ul>
  </li>
  <li>’-‘ : Same display rules as addition button, but with subtraction functionality. Grouped with addition so that either operation counts as a key press
    <div class="highlighter-rouge"><pre class="highlight"><code>9 +           // Display will be 9
8 - 5 -       // Display will be 3
9 - 5 +       // Display will be 4
9 + 9 + + + + // Display will be 18
5 + 3 x 6 +   // Display will be 23
</code></pre>
    </div>
  </li>
  <li>‘x’ : Display varies as follows:
    <ul>
      <li>1st key press - Most recently entered number</li>
      <li>Subsequent key presses: Displays result of most recent multiplication operation</li>
      <li>Repeated key presses maintain the display until another number has been entered</li>
    </ul>
  </li>
  <li>‘÷’ : Same display rules as multiplication button, but with division functionality. Grouped with multiplication so that either operation counts as a key press</li>
</ul>

<div class="highlighter-rouge"><pre class="highlight"><code>9 x         // Display will be 9
3 x 5 x     // Display will be 15
6 / 3 x     // Display will be 2
4 + 3 x 6 x // Display will be 18
3 x 4 x x x // Display will be 12
</code></pre>
</div>
<h5 id="order-of-operations">Order of operations</h5>
<p>The Mac Calculator follows an order of operations where multiplication and division are given precedence over addition and subtraction. The Mac Calculator will follow the order of operations as long as ‘=’ has not been pressed or ‘+’  or ‘-‘ has not been pressed twice. Below are examples that illustrate this concept:</p>

<div class="highlighter-rouge"><pre class="highlight"><code>2 * 5 + 3 = 7
3 + 5 x 2 = 13
3 + 5 x 6 x 2 + // This operation will be broken into steps below
3 + 5 x         // Display will be 5
6 x             // Display will be 30
2 +             // Display will be 63 (5 x 6 x 2 = 60, then add 3)
</code></pre>
</div>



  </div>
</div>


          </div>
        </div>

      </main>

      <footer class="mdl-mini-footer">
        <div class="mdl-mini-footer__right-section">
          2017 Learners Guild. All right reserved.
        </div>
      </footer>
    </div>
  </body>
</html>
