# Hindu Mythology Quiz
###### Code Institute / User-Centric Front-End Development / Milestone Project 2
------------
[View Live Project Here][def42]

As a part of Milestone Project 2 to demonstrate an understanding of Interactive app - use JS to achieve interactivity.

Welcome to the Hinduism-themed quiz! This engaging experience offers user an opportunity to delve into the depths of Hindu mythology and test their knowledge in an interactive manner. Takes the user on a journey of discovery and exploration as the user navigates through a series of questions designed to challenge and entertain. It gives the user an enriching adventure together and see how much the user knows about Hinduism's rich heritage and mythology. 

Overall, the user experience has been designed to be interactive and engaging, with clear instructions provided for playing the quiz. The inclusion of background music adds to the atmosphere of the quiz. The quiz also ensures that the quiz is accessible to all users, including those who may have disabilities or use assistive technologies made available via aria-lables.

![Screenshot][def24]

## **Index - Table of Contents**
------------

+ [User Experience (UX)](#-user-experience-ux)
    * [User Stories](#user-stories)
        - [First Time Visitor Goals](#a-first-time-visitor-goals)
        - [Returning Visitor Goals](#b-returning-visitor-goals)
        - [Frequent User Goals][def2]       
+ [UX Planes](#ux-planes)
    * [Strategy](#strategy)
        - [Project Goals](#project-goals) 
        - [Customer Goals](#customer-goals)
        - [Company Goals](#company-goals)
        - [Future Implementations][def3]
    * [Scope](#scope)
    * [Structure](#structure)
    * [Skeleton](#skeleton)     
    * [Surface](#surface)
        - [Colour Scheme](#colour-scheme)
        - [Typography](#typography)
        - [Imagery](#imagery)
+ [Features](#features)
    * [Home Page Features](#home-page-features)
        - [F1.1 Navigation Bar](#f11-navigation-bar)
        - [F1.2 Landing Page](#f12-landing-page)
        - [F1.3 Information Cards](#f13-information-cards)
        - [F1.4 Footer](#f14-footer)
    * [Events Page Features](#events-page-features)
        - [F2.1 Navigation Bar](#f21-navigation-bar)
        - [F2.2 Event Details](#f22-event-1)
        - [F2.3 Event Details](#f23-event-2)
        - [F2.4 Footer](#f24-footer)
    * [Gallery Page Features](#gallery-page-features)
        - [F3.1 Navigation Bar](#f31-navigation-bar)
        - [F3.2 Event Title](#f32-event-title)
        - [F3.3 Photograph Grid](#f33-photograph-grid)
        - [F3.4 Event Title](#f34-event-title)
        - [F3.5 Photograph Grid](#f35-photograph-grid)
        - [F3.6 Event Title](#f36-event-title)
        - [F3.7 Photograph Grid](#f37-photograph-grid)
        - [F3.8 Footer](#f38-footer)
    * [Contact Page Features](#contact-page-features)
        - [F4.1 Navigation Bar](#f41-navigation-bar)
        - [F4.2 Contact Form](#f42-contact-form)
        - [F4.3 Flipped Hero Image](#f43-flipped-hero-image)
        - [F4.4 Footer](#f44-footer)
    * [Thank You Page Features](#thank-you-page-features)
        - [F5.1 Navigation Bar](#f51-navigation-bar)
        - [F5.2 Confirmation Message](#f52-confirmation-message)
        - [F5.3 Flipped Hero Image](#f53-flipped-hero-image)
        - [F5.4 Footer](#f54-footer)
    * [Traceability Matrix](#traceability-matrix)
+ [Technologies Used](#technologies-used)
    * [Languages Used](#languages-used)
    * [Frameworks, Libraries and Programs Used](#frameworks-libraries-and-programs-used)
+ [Testing](#testing)
    * [Validator Testing](#validator-testing)
         - [HTML Validator](#html-validator)
            - [HTML Results index.html](#html-results-indexhtml)
            - [HTML Results events.html](#html-results-eventshtml)
            - [HTML Results gallery.html](#html-results-galleryhtml)
            - [HTML Results contact.html](#html-results-contacthtml)
            - [HTML thankyou.html](#html-results-thankyouhtml)
         - [CSS Validator](#css-validator)
            - [CSS Results](#css-results)
    * [Lighthouse Testing](#lighthouse-testing)
        - [Results](#results)
        - [Repairs to Optimize](#repairs-to-optimize)
+ [Browser Compatibility](#browser-compatibility)
+ [Deployment and Cloning](#deployment-and-cloning)
+ [Credits](#credits)
+ [Gratitude](#gratitude)

## **User Experience (UX)**
------------

- ### User stories
As a User from all different age groups and technical abilities I want the website not to be complicted and too busy.
- #### A. First Time Visitor Goals
    1. As a first-time visitor, I want to understand how to play the Hindu Mythology Quiz.
    2. As a first-time visitor, I want to access instructions on how to start the music, select answers, proceed to the next question, reset the game, and exit the guide.
    3. As a first-time visitor, I want to easily navigate through the quiz interface to answer questions and proceed to the next ones.
    4. As a first-time visitor, I want to have the option to toggle background music on or off.
    5. As a first-time visitor, I want to have a clear title indicating the name of the quiz.
    6. As a first-time visitor, I want to be able to identify the question box and answer options clearly.
    7. As a first-time visitor, I want to be able to distinguish between correct and incorrect answers easily.

-   #### B. Returning Visitor Goals
    1. As a returning visitor, I want to quickly access the instructions on how to play the quiz.
    2. As a returning visitor, I want to have the option to toggle background music on or off based on my preference.
    3. As a returning visitor, I want to have a smooth and seamless experience navigating through the quiz interface.
    4. As a returning visitor, I want to be able to enjoy the background music without it being distracting.
    5. As a returning visitor, I want to be able to easily understand the purpose of each button in the menu bar.

-   #### C. Frequent User Goals
    1. As a frequent user, I want to be able to quickly start the quiz without going through the instructions every time.
    2. As a frequent user, I want to be able to customize the quiz settings, such as the background music.
    3. As a frequent user, I want to be able to reset the game easily if needed.
    4. As a frequent user, I want to have a pleasant and engaging experience while answering questions by having new and random questions without them repeating.
    5. As a frequent user, I want to have access to additional content or links in the footer section for further exploration.
## **UX Planes**
------------
- ### **Strategy**
    * Create an engaging experience offers user an opportunity to delve into the depths of Hindu mythology and usrs can test their knowledge in an interactive manner.
+ #### Project Goals
    * The primary goal is to provide an engaging and educational experience to users through the Hindu Mythology Quiz. This involves creating an interactive platform where users can test their knowledge of Hindu mythology while enjoying an immersive experience.
+ #### Customer Goals
    * The focus is on meeting the needs of users, both first-time visitors and returning users. This includes providing clear instructions on how to play the quiz, offering options to toggle background music, ensuring ease of navigation, and delivering an enriching adventure through challenging and entertaining questions.
    * Being able to access all devices.
+ #### Company Goals
    * To have an online presence.
    * The aim is to create a quiz platform that reflects the depth and richness of Hindu mythology while ensuring accessibility and inclusivity for all users. 
    * Additionally, the company seeks to foster user engagement and satisfaction through an interactive and seamless user experience.
+ #### Future Implementations
    * There is a potential for future enhancements to the quiz platform, such as expanding the question database, incorporating multimedia elements like images or videos, introducing leaderboards or scoring systems, and integrating social sharing features to encourage user interaction and participation.
- ### Scope
    - The scope of the Hindu Mythology Quiz encompasses creating a user-friendly and accessible web interface that allows users to:
        * Easily understand how to play the quiz through clear instructions and intuitive design.
        * Toggle background music on or off according to their preference.
        * Navigate smoothly through the quiz interface to answer questions and 
        proceed to the next ones.
        * Identify question boxes and answer options clearly, ensuring a seamless user experience.
        * Distinguish between correct and incorrect answers easily, enhancing user engagement and satisfaction.
        * Access additional content or links in the footer section for further exploration and learning.
- ### Structure
    - The structure of the Hindu Mythology Quiz is designed to provide a logical flow for users, starting from the homepage and progressing through the quiz experience. Key structural elements include:

        * Header Section: Contains the title of the quiz and a menu bar with buttons for accessing the guide, toggling background music, and resetting the game.
        * Main Section: Features the question box and answer option boxes, allowing users to interact with the quiz content.
        * Modal Window (Guide): Provides detailed instructions on how to play the quiz, ensuring clarity for users.
        * Footer Section: Currently empty but open for future content or links to enhance user engagement and exploration.
- ### Skeleton
    + #### Wireframes
        * ##### Quiz Layout Wireframes
            ![Home Page Wireframe][def4]
        * ##### Score Wireframe
            ![Events Page Wireframe][def5]                    
- ### Surface
    + #### Colour Scheme
        * I have used a rusted copper ztar color palette consistent with the backgoruns image of a ethereal astronomical image.
        * #0C3D40 a shade of dark green, black, and a dark rusty font colors play a good contrast to the chosen colour palette.

        ![Colour Scheme][def42]        

    + #### Typography
        * The Samarkan font is representative of the Sanskrit Devnagri script therefore this font was chosen for the quiz title text. As this was not available on Google Fonts library, Cdnfonts has been used to import Samarkan font into style.css.
        ![samarkan][def43]
        * Google Fonts has been used to import 'SpaceMono' and  fonts into style.css. These have been chosen as they are readable in all font weights and have a playful look but are also easy to read. These fonts also match the style of the title font.
        **Lugrasimo**
        ![lugrasimo][def45]
        **SpaceMono**
        ![spaceMono][def44]
        * Arial, Helvetica, sans-serif - have been used as a contingency fonts when the above fonts fail to load. These have been chosen due to their versatality and readability.
    + #### Imagery
        ![backgroundimage][def46]
        *   The ethereal image of the Carina Nebula, with its vast expanse of swirling gas clouds and radiant celestial bodies, evokes a sense of awe and wonder that transcends the boundaries of our earthly existence. In Hinduism, spirituality is often intertwined with the contemplation of the cosmos, where the universe is perceived as a manifestation of the divine.
        * ![favicon][def49] The favicon was designed using an online favicon generator. This has been designed with an "Om" symbol that represents Hinduism.
        * All the images used are license free or been used with owners consent. The sources are listed in the Credits section.
        * Images used were compressed using Tinypng.com for better performance and user experience.

## **Features**
------------
- ### Quiz landing page
    * ##### F1.1 Guide
        - The "Guide" function serves as a navigational element within the user interface, denoted as a menu button. Upon activation, this button initiates the deployment of a modal interface, which in turn furnishes users with comprehensive instructional content outlining the how to participate in the quiz and explain all other features. Through these guidelines, the modal interface provides the steps to play the quiz to users, thereby enhancing their overall interactive experience within the quiz environment.

        ![Guide Button][def78]

    * ##### F1.2 Music Toggle Button
        - The incorporation of background music within the web interface is configured with the attributes of autoplay and loop, facilitating a continuous and immersive auditory experience for users engaging with the platform. Nonetheless, it is noteworthy that certain browser configurations may restrict the automatic playback of such audio elements. To address this potential limitation, users are provided with a dedicated music control button, enabling manual activation or deactivation of the auditory component. This toggle functionality dynamically adjusts the displayed text on the button interface in accordance with the current status of the background music, affording users intuitive control over their auditory environment.
        
        ![Music Toggle Button][def47]

    * ##### F1.3 Rest button
        - The "reset" button provides users the capability to reset the ongoing quiz at their discretion, thereby resetting the score to zero and initiating the quiz anew from question number 1. The randomized nature of question selection, ensures that subsequent quiz attempts commence with a fresh set of questions and so gives users a better experience.

        ![Reset Button][def50]
        
    * ##### F1.4 Question Box
        - The question box displays the question that is generated at random from a set of questions in the array.

        ![Question Display Box][def28]

    * ##### F1.5 Answer option buttons x 4
        - The quiz presents users with four answer options to select from. Functionality is implemented such that choosing the correct answer results in the option turning green. Conversely, selecting an incorrect answer causes the chosen option to turn red, while the correct answer is highlighted in green.

        ![Right Answer][def64] ![Wrong Answer][def65]

    * ##### F1.6 Next Button
        - The Next button is not visible until the user has clicked on an answer, therefore limiting the user to proceed without answering a question. User can click on the next button to proceed to the next question. When the next question is displayed the "Next" button disappears again until an answer is clicked upon.

        ![Next Button][def66]

    * ##### F1.7 Score Display Box
        - The score display box should appear at the end of 10 attempted questions and when the ""next"" button is clicked.
        The score should be displayed in the format your score is no. of right answer / total number of questions.
        
        ![Score Display][def67]

    * ##### F1.8 Instructions Modal
        - A modal interface appears providing comprehensive instructional content on how to participate in the quiz and explaining other features. Users should be guided through the steps to play the quiz, enhancing their overall interactive experience within the quiz environment. When the user clicks on the x mark it closes the modal.

        ![Instructions Modal][def68]

    

------------            
- ### Traceability Matrix
    ![Table][def74]
    
- ## **Technologies Used**
------------
+ ### Languages
    * #### HTML5
    * #### CSS3
    * #### Javascript
+ ### Frameworks, Libraries and Programs Used
    * #### [Cdnfonts][Cdnfonts] : was used to import Samarkan fonts into style.css file which has been used in the Main Logo title.
    * #### [Font Awesome][def9] : was used to add icons for aesthetic and UX purposes. Icons have been used to for social media links which can be easily identified by users regarless of their English language level. Icons have also been used on events page to depict type of event.
    * #### [Git][def10]: was used for version control by utilising the Gitpod terminal to commit to Git and Push to GitHub.
    * #### [GitHub][def11] : It is used as the repository for the project's code after being pushed from Git.
    * #### [Powerpoint][def12] : was used for resizing images and editing photos and screenshots for Readme. It is also used for designing flyers for event pages.
    * #### [Balsamiq][def13] : was used to create the wireframes during the design process.
    * #### [Coolors][def14] : was used to find complimenting colors to saffron for the website color palette.
    * #### [TinyPng][def15] : was used to compress the images that are used in the website, especially on the gallery page.
    * #### [ShrinkMedia by PixelBin.io][def16] : has been used to compress further and resize the images used on the website.
    * #### [Bootstrap][def17] : codes from Bootsrap grid html and Css library has been used in the events.html page to align the coontent in columns and rows.
    * #### [Autoprefixer CSS online][def18] : has been used to parse the CSS in style.css to add different browser prefixes to ensure the CSS works on all browsers.
    * #### [favicon.io][def19] : was used to generate the favicon for the website.
    * #### [W3C Markup Validation Service][def20] : has been used to validate the code on all pages and style.css.
    * #### [UI.Dev][def22] : was used to generate Mockup Screenshots.
    * #### [Free Formatter][def23] : was used to ensure proper indentation in the HTML and CSS codes.
    
- ## **Testing**
------------
+ ### Validating Testing
    * #### HTML Validator
        - HTML Results index.html <br>
        [HTML Full Results - index.html][def65]
        ![e][def71]
        - HTML Results events.html <br>
        [HTML Full Results - events.html][def66]
        ![e][def72]
        - HTML Results gallery.html <br>
        [HTML Full Results - gallery.html][def67]
        ![e][def73]
        - HTML Results contact.html <br>
        [HTML Full Results - contact.html][def68]
        ![e][def71]
        - HTML Results thankyou.html <br>
        [HTML Full Results - thankyou.html][def69]
        ![e][def71]
    * #### CSS Validator
        - CSS Results : [CSS Full Result][def70]
        ![e][def71]
    * #### Lighthouse Testing
    At the first instance the results for performance were very low. Thereafter, on further analysis of it was identified that the image sizes were causing the issue therefore I used Shrink Media website to further compress the images used which resulted in better results.
    Following are screen shots of Lighthouse analysis outcomes before repairs and after repairs
    - #### First Results 
        
    - #### Results After Image Were Further Compressed
        
    * #### Test Cases and Results
            

- ## Browser Compatibility
------------
* Testing has been carried out on the following browsers :
    - Chrome Version 120.0.6099.225 (Official Build) (64-bit)
    - Firefox Version 122.0 (64-bit)
    - Edge Version 121.0.2277.83 (Official build) (64-bit)

- ## Deployment and Cloning
------------- 
+ Deployment:

    *   In the GitHub repository, navigate to the Settings tab, then choose Pages from the left hand menu

    * Ensure the source section drop down menu is set to the Main Branch

    * Refresh the page and a link to access the page will appear at the top with an option next to it that says "visit page"

    * Any changes pushed to the master branch will take effect on the live project

+ Cloning:

    * visit url - https://github.com/ashwinsel/Milestone-1 this will open the repository on Github
    * Click on the "Code" green coloured button to the right of the screen, click HTTPs and copy the link there
    * Open a GitBash terminal and navigate to the directory where you want to locate the clone
    * On the command line, type "git clone" then paste in the copied url and press the Enter key to begin the clone process

- ## Credits
------------
- ### Content
    * Some of my content on the main page such as 'About Us' is roughly based on Maharashtra Mandal London website.
    * All other content has been drafted by the developer.
- ### Code
    * Code on how to present a 'Call-out' text in front of the Hero Image (on home page, Contact us page) and has been adapted from the Thrive project by Elaine Broche.
    * Code for the hover effect on info cards on Home page was an play around with some examples from  [Codepen][def75]
    * I have used Bootstrap grid classes to implement structure on Events page.
    * Responsive Photo gallery has been created using a tutorial on [Buy me a cofee][def76]
    * Hover effects on throughout has been created by using tutorials on [W3schools](https://www.w3schools.com/cssref/sel_hover.php)

- ### Media
    

- ## Gratitude
    * I would like to thank my mentor Dick Vlaanderen for all the coaching and helping me with their insight and experience.
    * thanks to tutor Jason, who helped me arrange folders within my repository and ensure my deployment worked well.
    * Thank you to Md—Fahim Kabir Hamim for the lessons on Tech2 etc.



[Cdnfonts]: https://www.cdnfonts.com/samarkan.font
[def2]: #c-frequent-user-goals
[def3]: #future-implementations
[def4]: ./documentation/wireframe1.png
[def5]: ./documentation/wireframe2.png
[def6]: ./documentation/gallerypagewireframe.png
[def7]: ./documentation/contactpagewireframe.png
[def8]: ./documentation/thankyoupagewireframe.png
[def9]: https://fontawesome.com/
[def10]: https://ashwinsel-milestone1-shxwdq7nqt6.ws-eu107.gitpod.io/
[def11]: https://github.com/ashwinsel/Milestone-1.git
[def12]: https://www.microsoft.com/en-gb/microsoft-365/powerpoint
[def13]: https://balsamiq.com/
[def14]: https://coolors.co/
[def15]: https://tinypng.com/
[def16]: https://www.shrink.media/upload
[def17]: https://getbootstrap.com/
[def18]: https://autoprefixer.github.io/
[def19]: https://favicon.io/
[def20]: https://validator.w3.org/
[def21]: ./documentation/homepagewireframe.png
[def22]: https://ui.dev/amiresponsive?url=https://ashwinsel.github.io/Milestone-1/index.html
[def23]: https://www.freeformatter.com/html-formatter.html
[def24]: ./documentation/uirespsh.jpg
[def25]: ./documentation/eventsscreenshot.png
[def26]: ./documentation/galleryscreenshot.png
[def27]: ./documentation/contactscreenshot.png
[def28]: ./documentation/questionbox.png
[def29]: ./documentation/1lhhome.png
[def30]: ./documentation/1lhcontact.png
[def31]: ./documentation/1lhgallery.png
[def32]: ./documentation/1lhevent.png
[def33]: ./documentation/1lhthankyou.png
[def34]: ./documentation/lheventpage.png
[def35]: ./documentation/lhhomepage.png
[def36]: ./documentation/lhgallerypage.png
[def37]: ./documentary/lhgallerypage1.png
[def38]: ./documentary/lhgallerypage2.png
[def39]: ./documentation/lhcontactpage.png
[def40]: ./documentation/lhthankyoupage.png
[def41]: ./documentation/thankyouscreenshot.png
[def42]: ./documentation/colorschemess.png
[def42]: https://ashwinsel.github.io/Milestone-Project-2/ "View Live Project Here"
[def43]: ./documentation/samarkanfont.png
[def44]: ./documentation/spacemonofont.png
[def45]: ./documentation/lugrasimofont.png
[def46]: ./documentation/backgroundimage.png
[def47]: ./documentation/musiconoff.png
[def48]: ./assets/images/footer.jpg
[def49]: ./assets/images/favicon.png
[def50]: ./documentation/reset.png
[def51]: ./documentation/homefeat.png
[def52]: ./documentation/events1.png
[def53]: ./documentation/footerss.png
[def54]: ./documentation/homefeat1.png
[def55]: ./documentation/events2.png
[def56]: ./documentation/eventtitle1.png
[def57]: ./documentation/photogrid1.png
[def58]: ./documentation/eventtitle2.png
[def59]: ./documentation/photogrid2.png
[def60]: ./documentation/photogrid3.png
[def61]: ./documentation/eventtitle3.png
[def62]: ./documentation/contactcallout.png
[def63]: ./documentation/himage2.png
[def64]: ./documentation/rightans.png
[def65]: ./documentation/wrongans.png
[def66]: ./documentation/nextbutton.png
[def67]: ./documentation/scorebox.png
[def68]: ./documentation/guidemodal.png
[def69]: https://validator.w3.org/nu/?showsource=yes&showoutline=yes&showimagereport=yes&doc=https%3A%2F%2Fashwinsel.github.io%2FMilestone-1%2F#textarea
[def70]: https://validator.w3.org/nu/?showsource=yes&showoutline=yes&showimagereport=yes&doc=https%3A%2F%2Fashwinsel.github.io%2FMilestone-1%2F#textarea
[def71]: ./documentation/homevalresult.jpg
[def72]: ./documentation/eventvalresult.png
[def73]: ./documentation/galleryvalresult.png
[def74]: ./documentation/treaceabilitymatrix.png
[def75]: https://codepen.io/wikyware-net/pen/abwVORa
[def76]: https://www.buymeacoffee.com/tech2etc
[def77]: https://www.vecteezy.com/members/graphicsrf
[def78]: ./documentation/menubar.png
[def79]: ./documentation/table2.png
