const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav
const navTab1 = document.querySelector('nav a');
const navTab2 = navTab1.nextSibling;
const navTab3 = navTab2.nextSibling;
const navTab4 = navTab3.nextSibling;
const navTab5 = navTab4.nextSibling;
const navTab6 = navTab5.nextSibling;

navTab1.textContent = "Servivces";
navTab2.textContent = "Product";
navTab3.textContent = "Vision";
navTab4.textContent = "Features";
navTab5.textContent = "About";
navTab6.textContent = "Contact";


// images 
const topImg = document.getElementById("cta-img");
topImg.setAttribute('src', "img/header-img.png");

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', "img/mid-page-accent.jpg");

// top

const topContent = document.querySelector(".cta-text");

const topText = topContent.querySelector('h1');
topText.textContent = "DOM IS AWESOME";

const topButton = topContent.querySelector('button');
topButton.textContent = "Get Started";

// main content

const mainContent = document.querySelector(".top-content");
const mainTextdiv = mainContent.querySelector('div');
mainTextdiv.className = "one";

const mainTextone = mainTextdiv.querySelector('h4');

mainTextone.textContent = "Features";
const mainTextpara = mainTextdiv.querySelector('p');
mainTextpara.textContent = `Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`

const maintextTwo = document.querySelector(".top-content .text-content h4");
maintextTwo.textContent = "About";
const mainTwopara = document.querySelector(".top-content .text-content p")
mainTwopara.textContent = `About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in
interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`;


// bottom content
const bottomContent = document.querySelector(".bottom-content");
const firstBottom = bottomContent.querySelector('div');
firstBottom.className = "firstBottom";
const seccondBottom = bottomContent.querySelector('.text-content');
seccondBottom.className = "seccondBottom";
const thirdBottom = bottomContent.querySelector('.text-content');
thirdBottom.className = "thirdBottom";

const firstHeader = firstBottom.querySelector('h4');
const seccondHeader = seccondBottom.querySelector('h4');
const thirdHeader = thirdBottom.querySelector('h4');

firstHeader.textContent = "Services";
seccondHeader.textContent = "Products";
thirdHeader.textContent = "Vision";

const firstPara = firstBottom.querySelector('p');
const seccondPara = seccondBottom.querySelector('p');
const thirdPara = thirdBottom.querySelector('p');

firstPara.textContent = `Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`;
seccondPara.textContent = `Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in
interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`;
thirdPara.textContent = `Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in
interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`;

// Footer

const Contact = document.querySelector(".contact")
const headerContact = Contact.querySelector('h4');
headerContact.textContent = "Contact";

const contactParaone = Contact.querySelector("p");
contactParaone.className = "contactOne";
const contactParatwo = contactParaone.nextElementSibling;
contactParatwo.className = "contactTwo";
const contactParathree = contactParatwo.nextElementSibling;
contactParathree.className = "contactThree";

contactParaone.textContent = `123 Way 456 Street <br>
Somewhere, USA`;
contactParatwo.textContent = `1 (888) 888-8888`;
contactParathree.textContent = `sales@greatidea.io`

const footer = document.querySelector('footer');
footer.textContent = "Copyright Great Idea! 2018"


// styling
const nav = document.querySelector('nav');

nav.style.color = "green";

// added tags to nav

const newTag = document.createElement('a');

newTag.textContent = "Projects";
newTag.href = "#";
document.querySelector("nav").appendChild(newTag);

const newTagtwo = document.createElement('a');
newTagtwo.textContent = "Join";
newTagtwo.href = "#";
document.querySelector("nav").appendChild(newTagtwo);