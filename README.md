# DOM II - Event Exploration

Fun Bus wants you to make their site more interactive. They are relying on you to provide 10 unique events to enhance their site. Explore the many events available to you by using the [MDN events reference](https://developer.mozilla.org/en-US/docs/Web/Events).

## Set Up The Project With Git

**Follow these steps to set up and work on your project:**

* [v] Create a forked copy of this project.
* [v] Add your project manager as collaborator on Github.
* [v] Clone your OWN version of the repository (Not Lambda's by mistake!).
* [v] Create a new branch: git checkout -b `<firstName-lastName>`.
* [v] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
* [v] Push commits: git push origin `<firstName-lastName>`.

**Follow these steps for completing your project.**

* [v] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
* [v] Add your project manager as a reviewer on the pull-request
* [v] Your project manager will count the project as complete by merging the branch back into master.

## Task 1: Set Up LESS Preprocessor

* [v] Verify that you have LESS installed correctly by running `lessc -v` in your terminal, if you don't get a version message back, reach out to your project manager for help.

* [v] Open your terminal and navigate to your preprocessing project by using the `cd` command

* [v] Once in your project's root folder, run the following command `less-watch-compiler less css index.less`

* [v] Verify your compiler is working correctly by changing the `background-color` on the `html` selector to `red` in your `index.less` file.

* [v] Once you see the red screen, you can delete that style and you're ready to start on the next task

## Task 2: Create Unique Event Listeners

* [v] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 
	* [v] `mouseover`
	* [v] `mouseleave`
	* [v] `keydown`
	* [v] `wheel`
	* [v] `drag / drop`
	* [v] `load`
	* [v] `resize`
	* [v] `scroll`
	* [v] `dblclick`
	* [v] `readystatechange`
	* [ ] `select`
	* [ ] `focus`


Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

* [v] Nest two similar events somewhere in the site and prevent the event propagation properly
* [v] Stop the navigation items from refreshing the page by using `preventDefault()`

## Stretch Task:

* [v] Go look at [GSAP](https://greensock.com/) and implement the animations found in that library with your custom events.

## Stretch assignment

* [ ] Take a look at the [stretch assignment](stretch-assignment) and follow the instructions in the read me file.
