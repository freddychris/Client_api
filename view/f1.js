extends layout

block content
  h1= title
  p Welcome to #{title}
  form(action="/", method="POST")
    input(name ="lead_email", type="email", placeholder="Enter Your E-Mail Address")
    button(type="submit") Submit;