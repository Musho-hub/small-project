export default class ElementFactory {
  static createElement<K extends keyof HTMLElementTagNameMap>(
    tag: K,                                     // element tag
    id: string = "",                            // ID - if no ID = empty string = "",           OPTIONAL
    parent?: HTMLElement,                       // appendChild
    text?: string,                              // textContent                                  OPTIONAL
    classes: string[] = [],                     // class - if no class = empty string = "",     OPTIONAL
  ): HTMLElementTagNameMap[K] {
    const element = document.createElement(tag);
    if (id) element.id = id;
    if (parent) parent.appendChild(element);
    if (text) element.textContent = text;
    if (classes.length) element.classList.add(...classes);
    return element;
  }
}
