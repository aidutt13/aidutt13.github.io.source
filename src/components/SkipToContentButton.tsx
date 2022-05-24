import styles from "./SkipToContentButton.module.css";

export default function SkipToContentButton() {

  return (
    <a
      class={`
        absolute block top-0 right-0 p-2 
        text-gray-300 bg-yellow-700
        focus:outline-none
        ${styles.button}
      `}
      tabIndex={1}
      onClick={() => {
        const content = document.querySelector("[data-content-start]");
        content.scrollIntoView({ behavior: 'smooth' });
      }}
      onKeyPress={() => {
        const content = document.querySelector("[data-content-start]");
        content.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <i class="fa-solid fa-chevron-down"></i> Skip to content
    </a>
  );
}