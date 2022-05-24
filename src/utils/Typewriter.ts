export type TypewriterOptions = {
  loop?: boolean;
  typingSpeed?: number;
  deletingSpeed?: number;
}

export type TypewriterQueueFunc = () => Promise<void>;

export type Queue = TypewriterQueueFunc[];

export default class Typewriter {
    private element: HTMLElement;
    private options: TypewriterOptions;

    private queue: Queue = [];
    
    constructor(parent: HTMLElement, options: TypewriterOptions = { loop: false, typingSpeed: 50, deletingSpeed: 50 }) {
      this.element = parent.appendChild(document.createElement('span'));
      this.options = options;
    }

    private addToQueue(cb: (resolve: () => void) => void) {
      this.queue.push(() => {
        return new Promise(cb);
      });
    }

    typeString(str: string): Typewriter {
      this.addToQueue(resolve => {
        let i = 0;
        let interval = setInterval(() => {
          if (i >= str.length - 1) {
            clearInterval(interval);
            resolve();
          }
          this.element.append(str[i++]);
        }, this.options.typingSpeed);
      });
      return this;
    }

    deleteChars(num: number): Typewriter {
      this.addToQueue(resolve => {
        let i = 0;
        let interval = setInterval(() => {
          if (i++ >= num - 1) {
            clearInterval(interval);
            resolve();
          }
          this.element.innerText = this.element.innerText.slice(0, this.element.innerText.length - 1);
        }, this.options.deletingSpeed);
      });
      return this;
    }

    wait(num: number): Typewriter {
      this.addToQueue(resolve => {
        setTimeout(resolve, num);
      });
      return this;
    }

    selectAll(): Typewriter {
      this.addToQueue(resolve => {
        this.element.dataset.selected = 'true';
        resolve();
      });
      return this;
    }

    unselectAll(): Typewriter {
      this.addToQueue(resolve => {
        this.element.dataset.selected = 'false';
        resolve();
      });
      return this;
    }

    setStyle(style: "italic" | "bold" | "underline"): Typewriter {
      this.addToQueue(resolve => {
        this.element.dataset[style] = 'true';
        resolve();
      });
      return this;
    }

    unsetStyle(style: "italic" | "bold" | "underline"): Typewriter {
      this.addToQueue(resolve => {
        this.element.dataset[style] = 'false';
        resolve();
      });
      return this;
    }

    async start() {
      for (let cb of this.queue) {
        await cb();
      }
    }
}
