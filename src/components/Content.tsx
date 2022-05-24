import styles from './Content.module.css';

export default function Content() {
  return (
    <main data-content-start class={styles.content}>
      <p><span className="font-black">Wojciech Surdyk</span></p>
      <h1>Projects:</h1>
      <ol class={styles.projects}>
        <li>
          <h3>LEOR</h3>
          <p>A compiler for my general-purpose programming language (WIP)</p>
          <p>Used technologies: C++, Make, LLVM</p>
          <a href="https://github.com/aidutt13/leor" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github"></i> Github
          </a>
        </li>
        <li>
          <h3>PixelGameEngine Makefile Template</h3>
          <p>Makefile template for building OLC::PixelGameEngine applications</p>
          <p>Used technologies: Make</p>
          <a href="https://github.com/aidutt13/PixelGameEngine-Makefile" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github"></i> Github
          </a>
        </li>
        <li>
          <h3>aidutt13.github.io</h3>
          <p>This webpage :)</p>
          <p>Used technologies: SolidJS, Typescript, Tailwind</p>
          <a href="https://github.com/aidutt13/aidutt13.github.io.source" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github"></i> Github
          </a>
        </li>
      </ol>
    </main>
  );
}