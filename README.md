
**README.md**

  

**LinguaGames**

  ![Alt](assets/images/linguaGamesWelcome.png)

**Contents**

  

1.  UX Development

2.  Project Goals
3.  UX Requirements
4.  Users
5.  User Goals
6.  User Stories
7.  Design Choices

	7.1.Fonts
	7.2.Icons
	7.3.Colours
	7.4. Features & Future Releases
	7.5. Technology used

8.  Testing

9.  HTML and CSS check using WC3
10. Peer Code Review
11. User stories
12. User testing

13.  Bugs and De-bugging

	  13.1.Known Issues

14.  Project Deployment

15.  Deployment
16.  Creating a Local Version

17.  References
18.  Acknowledgements

  

===

  

1.  **UX Development**

Language based memory game will help users to learn a new language in the relaxed, entertaining way.
  
As user, I have never enjoyed playing games that do not have a purpose. Therefore, as a developer, I have decided to create the game that will help purpose and will make users interested to play a game and to learn a new language.

The primary goal of the website is to make learning fun and inspire users to return to the game, as they progress.

Playing memory games can improve other brain functions, such as attention, concentration, and focus. Memory games give space to critical thinking and that helps children nurture their attention to detail. Memory games can improve visual recognition.

**Project goal**

The purpose of this project to create website to enable consumers to have fun interactive experience in learning of the new words. 
The website has to be easy to navigate with clear purpose of the buttons and screen space. The game has to project the clear and safe framework for clients and to make the experience casual rather than requirement.
 

**UX requirements**

The website targets the individuals interested to learn or improve the knowledge of the foreign languages in the casual way, through the game experience. Present level of development offers only fail/win notification. Please see future implementations plan for more details of  users progress measurement.


**1.3. Users:**

 Individuals interested to learn a new language with no age limitation.


**1.4. User goals:**
Person interested to learn basics of the new language has to learn  300-600 words to be to travel and 1000 words to be able to converse;
the users goals is to identify application allowing them to have access to the application teaching them the most common words used in any language. Therefore, i have used the most common words used in English language
  
**1.5 Developer's Goals**

The site owner has the following goals:

-   To provide users with interactive and easy navigation learning process.
-   To encourage users to learn more 
-   To provide platform with colors and fonts stimulating users experience.
- To give users control over the game, by choosing of the language, initiating and resetting the game and timer.



**1.6. User Stories**

  

1.  As a visitor to the website, I want to easily navigate through the game
2.  As a visitor I want to have a clear rules, how to play.
6.  As a visitor want an easy way to contact developer.
8.  As a returning visitor to the website, I would like to have a choice of languages to learn or improve


**1.7. Design Choices**

When designing website i took inspiration for colours and fonts from the game Memory. The application is using colours and fonts scientifically proven to help users to learn and stimulate their cognitive functions.


**Fonts**

I have used Google Fonts to determine the best fonts suitable for each part of the website, I.e. Logo, Menu and Body information.

I opted to use Open Sans font for my website, which is one of the most popular fonts used by major internet companies.

[https://nestify.io/blog/top-10-best-google-fonts/](https://nestify.io/blog/top-10-best-google-fonts/)

**Icons**

Icons used where provided by [Font Awesome](https://fontawesome.com/), used in moderation and are self explanatory.

**Colours**

The colours were determined by the pallet of Cooler website:

-   For navbar and contact modal I used linear gradient of 
rgb(5,  57,  97),
and
rgb(10,  105,  177);

-   For body background: rgb(55,  149,  93).

**1.8. Features**

View my wireframes here.
It's one-page website with  a number of modal windows. I used JS to hide windows and information to make sure users are not distracted by excessive information on the page.
I placed only fixed navigation bar  with Logo and menu, linking user to the rules of the game and contact modal, and cards to play with.

Footer with Copyright info and Social Media icons

Translation API that translates seamlessly behind the scene  English words into three languages.

Features to implement:
- to add bigger choice of languages;
- to increase number and difficulty of words;
- to create competition board.
- The progress will be measured by virtual badges, stars and list of words learn during the session.


**1.9. Technologies Used**

  
**UX/UI design**

-   [Figma](https://figma.com/)

**Languages**

-   [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
-   [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  
**Tools & Libraries**

-   [Git](https://git-scm.com/)
-   [Bootstrap](https://getbootstrap.com/)
-   [Font-Awesome](https://fontawesome.com/icons?d=gallery)
-   [Google fonts](https://fonts.google.com/)
-   [Figma](https://figma.com/)
- [Flag icons](https://www.countryflags.com/en/)
- [Icons8](https://icons8.com/icon/NHEVr1Qkidu0)
- [Canva](https://canva.com/)
- [RapidApi](https://rapidapi.com)
  

**2. Testing**


First time testing. I used an online tool, using ami.responsivedesign.is and [Screenfly](https://bluetree.ai/screenfly/) website to test website on various devices.

I’ve tested the CSS with [CSS Validator](http://jigsaw.w3.org/css-validator/) which told me that there were mistake in different browsers attributes, which I removed.
<p>
    <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>
</p>

The HTML I’ve tested with [HTML Validator](https://validator.w3.org/) which gave me the good **results:**

JS was tested on [JSHint](https://jshint.com/)
  
Responsiveness

-   **Implementation** I tried CSS Grid but eventually opted to use **Bootstrap** and Flexbox throughout the project to ensure **maximum** responsibility. I've tested with **above tools and results was good except for ????.**

[Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) -

**3. Bugs and Debugging**

During testing I found that all iOS users encourtered a display glitch where the front-face cards do not show when the user touches a card to flip. Instead it momentarily displays the image then flips to the inverted back face card.

**4. Version Control**

 -   Used Git for version control.
 -   Branches were created to work on alternative grid layout.
 -   The branches were then merged with the master branch after any conflicts were addressed.


**4. Project Deployment**

I built website using **gitpod** and **GitHub** to host the repository.

To deploy the website using **GitHub Pages** the following steps have to be made:

-   Opened up and log in **GitHub** in the **browser**.
-   Selected my [repositories](https://github.com/alexeykuz-sys?tab=repositories).
-   Navigated  and open project to [MS2_LinguaGames_Project](https://github.com/alexeykuz-sys/MS2_LinguaGames_Project)
-   In the top navigation clicked **settings**.
-   Scrolled down to the **GitHub Pages** area.
-   Selected **Master Branch** from the **Source** dropdown menu.
-   Clicked to **confirm** my **selection**.

  

**You can run the project locally, in which case you have to follow the following steps:**


##### To clone this project from GitHub:

1. You can paste the repository link directly into any editor you use with the command 'git clone'. For example:

Type git clone and paste https://github.com/alexeykuz-sys/MS2_LinguaGames_Project.git


 
**5. Credits**

   ##### Media

The image for a game logo was taken from internet.

#####  Code

I used various YouTube and website to get ideas and logic of the game.
[Memory Game](https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae)
and
[How to build memory game](https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript)

[Timer](https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/)

**6. Acknowledgements**
I would like to thank:

-   My mentor,  Femi for his guidance and advice on this project before submission.
-   Bim Williams  for his support and guidance.
-   Slack Community  for always being on-line to answer the questions and give moral support

**Disclaimer**

The content on this website is for the purpose of this project only.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIxMTMyMjI3MTcsLTE4Nzc4MzEwNTksLT
gwNTk0MTI1MSwtNTM2MDM1OTEwLC0xNjQ3NzU4NDIsLTE5MDQz
NjY3NzEsLTE2MDUxNDcxMTYsODU0NTc3MTkyLC0xMzE2NzgxMz
cyLDExNDE4Njg1MTNdfQ==
-->