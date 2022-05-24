import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";

import type { Component } from 'solid-js';
import Header from './components/Header';
import Content from './components/Content';

const App: Component = () => {
  return (
    <>
      <Header></Header>
      <Content></Content>
      <footer class="text-gray-300 text-center">&copy; 2022 Wojciech Surdyk</footer>
    </>
  );
};

export default App;
