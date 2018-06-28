const projects = [
  {
    id: "event",
    name: "Create Event",
    link: "http://seizetheparty.events/#/",
    image1: "event1.png",
    image: "https://s10.postimg.org/f8jglndbt/event1.png",
    description: "This was the final project of my 12-weeks long BootCamp. The purpose was to make use of all the things that we had learned thoughout the course. " +
      "Together with my group we decided to create a service where you can create events, invite your friends and also keep track of RSVP. " +
      "We started with building our own backend with MongoDB and Mongoose. The continued to design and build the frontend in React. We implemented " +
      "the service Sendgrid to be able to actually send invites to guests.",
    keywords: "React, JavaScript, HTML5, CSS, Node"
  }, {
    id: "grid",
    name: "CSS-Grid",
    link: "https://mariejohanna.github.io/CSS-Grid/",
    image: "https://s26.postimg.org/bv7snu0vt/cssgrid1.png",
    description: "Using CSS-grid to create to create the structure of boxes and then style each box with its different features such as images, different font size and structure.",
    keywords: "React, JavaScript, HTML5, CSS"
  }, {
    id: "habit-tracker",
    name: "Habit Tracker",
    link: "https://mariejohanna.github.io/Habit-Tracker",
    image: "https://s26.postimg.org/i8wvr40mx/habit-tracker2.png",
    description: "As a group project we decided to build a habit tracker for children who require a more structured everyday life. We have facilited the view and user interaction with designated color for each weekday.",
    keywords: "React, JavaScript, HTML5, CSS"
  }, {
    id: "sveriges-radio",
    name: "Sveriges Radio",
    link: "https://mariejohanna.github.io/Sveriges-radio/",
    image: "https://s26.postimg.org/k39q8ndax/radio2.png",
    description: "Using Sverige's radio's API to create a page where you can listen to the radio station provided by public service. In the scroll down menu you can you choose the station you like.",
    keywords: "React, Javascript, HTML5, CSS"
  }, {
    id: "api-weather",
    name: "Check the weather in..",
    link: "https://mariejohanna.github.io/check-weather/",
    image: "weather",
    description: "The website calls an API to check current weather in different preset cities",
    keywords: "HTML5, CSS, JavaScript"
  }, {
    id: "css-santa",
    name: "CSS-Santa",
    link: "https://santagodjul.netlify.com/",
    image: "https://s26.postimg.org/6owncxz0p/santacss.png",
    description: "Just before Christmas we had a small competition to create a Santa only using HTML and CSS. I decided to try to use CSS-grid and create reusable classes to style my Santa.",
    keywords: "HTML5, CSS, JavaScript"
  }, {
    id: "yearbook",
    name: "Yearbook Technigo 2017",
    link: "asdasf",
    image: "bildyearbook",
    description: 'Using Flexbox with HTML5 elements to create a "yearbook" of my class at Technigo.',
    keywords: "HTML5, CSS"
  }, {
    id: "form",
    name: "Sign Up for..",
    link: "asdasd",
    image: "signupform",
    description: "build a signup form for any web service that should contain; text fields, password fields, radio buttons, checkboxes and a submit button. had to post to a server",
    keywords: "HTML5, CSS"
  }
]

export const getAll = () => {
  return projects
}

export const getById = (id) => {
  const project = projects.find(project => project.id === id)
  if (!project) {
    return null
  }
  return Object.assign({}, project)
}

export default { projects, getAll, getById }
