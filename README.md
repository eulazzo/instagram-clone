<h1 align="center">
   <img alt="instagram" src="github/logo.svg" width="250px" />
</h1>

<div align="center">
  <h1>Instagram - Instagram clone for educational purposes only</h1>
</div>

<p align="center" >
  <a href="#about-the-project"> About </a> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;
  <a href="#app-features-so-far">Gifs</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#getting-started"> Getting Started</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies"> Technologies </a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</p>

<p align="center">
  <a href="https://github.com/eulazzo" target="_blank">
    <img src="https://img.shields.io/static/v1?label=author&message=eulazzo&color=400A14&labelColor=e1306c" alt="Github"> 
  </a>
  <img src="https://img.shields.io/github/stars/eulazzo/instagramclone?color=400A14&labelColor=e1306c" alt="Stars">
  <img src="https://img.shields.io/github/last-commit/eulazzo/instagramclone?color=400A14&labelColor=e1306c" alt="Commits">
  <img src="https://img.shields.io/static/v1?label=license&message=MIT&color=400A14&labelColor=e1306c" alt="License">
</p>
 
![SIGMA CHAT GIF](github/beforeLogin.gif)

# About the project

### Instagram clone

<p>
Application clone for educational purposes only
</p>
<p>Developed with <code>Nextjs</code>, <code>NodeJs</code>,<code>Tailwindcss</code>,</br><code> Firebase v9</code>, <code>Recoil</code> <code>NextAuth</code> </p> 

### What's Recoil ?
<p>
   Recoil is an state management librarie, like Redux or Context APIs. But Recoil unlike Redux is more easy to set up.
   Created by <code>Dave McCabe</code>, recoil provides a global state so all components in a react application can share states easily and it is minimal compared to Redux with no boilerplate code setup needed.</br></br>
   According to the official <a href="https://recoiljs.org/docs/introduction/core-concepts/">documentation</a> the two core concepts of recoil is <code>Atoms</code> and <code>Selector</code>.</br>
   Atoms are units of the global stated provided by recoil, components can access and subscribe to changes made to them.
   Selectors in other hands with them, we can transform states either synchronously or asynchronously, and components can also access and subscribe to.
</p>

### Why use Recoil ?
<p>
  In cases where Redux is not that necessary recoil has advantages as, for example, is a minimal and there are no boilerplate code to get started. Diferent from Redux that require write a ammount of code to set it up. Recoil just like Redux, provides a global state, with recoil we wont have to pass state as props down to childreen components in order to share them between components (a concept know as <code>prop drilling</code>)
</p>

### Recoil in this instagram clone
<p>
   So..in the header component when the user clicks on the <code>plus button</code> for upload an image. I need to be able to tell a global store that inside the app. I cant just have the plus button and then some state at the header level because doesn't work. If i do that, on the header level i will  have some state which means that if i click on the plus button to upload an image that state it is set to true so the modal is opened. So far so good, but firstly how do i go a level up? Because the header component is rendered on the Home component i can't lift state from the component. State is <code>one way thing</code>, it only go compoment and could pass down but we dont want to do that. For that reason, a global Store it's necessary. So...tipically the way it's works is if we had a "modal state" by default is gonna be false we dont want the modal to be opened all the time, when somebody clicks the litle plus icon on the header 
</p>

### Features
- [X] Login (Firebase Authentication)
- [X] Post (Firebase Store)
- [X] Like a post
- [X] Comment

## App features so far

### Login and Making a Comment

![SIGMA CHAT GIF](github/loginAndMakingAcomment.gif)

### Making a post

![SIGMA CHAT GIF](github/making-a-post.gif)

### Leaving a Comment on a Post

![SIGMA CHAT GIF](github/makingAComment.gif)

## Getting started
<ol>
   <li>Clone this repo using  <code> git@github.com:eulazzo/instagram-clone.git</code></li>
   <li>Move yourself to the appropriate directory: <code>cd instagram-clone</code></li>
   <li><code>Run npm install </code>to install dependencies</li>
   <li>Create a <code>.env.local </code>  file and add the <code>GOOGLE_CLIENT_ID</code>,</br><code>GOOGLE_CLIENT_SECRET</code> from firebase and for <code>NEXTAUTH_URL= http://localhost:3000</code></li>
</ol> 

### Getting started with the frontend

1. Run `npm start` or `yarn start` to start the web application <br>

## Technologies

<table>
   
  <thead>
    <th>Back-end</th>
    <th>Front-end</th>
  </thead>
   
  <tbody>
    <tr>
      <td>Firebase</td>
      <td>ReactJS</td>
    </tr>
     <tr>
      <td></td>
      <td>next</td>
    </tr>
    <tr>
      <td></td>
      <td>tailwindcss</td>
    </tr>
    <tr>
      <td></td>
      <td>Recoil</td>
    </tr>
   <tr>
      <td></td>
      <td>Prettier</td>
    </tr>
  </tbody>
  
</table>

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.
<!-- <h4>Techs:</h4>

![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  
![image](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

  -->

 
