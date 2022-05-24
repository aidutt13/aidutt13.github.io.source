import { createEffect } from "solid-js"
import Typewriter from "../utils/Typewriter"

import styles from "./Header.module.css"

export default function Header() {
  createEffect(() => {
    const tw = new Typewriter(
      document.querySelector("[data-typewriter]") as HTMLElement,
      { typingSpeed: 100, deletingSpeed: 80 }  
    );

    tw.typeString("aidut13")
    .wait(200)
    .deleteChars(3)
    .typeString("tt13")
    .wait(200)
    .selectAll()
    .wait(100)
    .setStyle("italic")
    .wait(50)
    .setStyle("underline")
    .wait(150)
    .unselectAll()
    .wait(70)
    .typeString("!!1!")
    .wait(100)
    .deleteChars(4)
    .wait(200)
    .selectAll()
    .wait(50)
    .unsetStyle("underline")
    .wait(50)
    .unsetStyle("italic")
    .wait(50)
    .unselectAll()
    .start();
  })
  return (
    <header class={styles.header} data-typewriter></header>
  )
}