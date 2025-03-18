import ElementFactory from "./ElementFactory"; // Importing for creating elements
import { Content, ContentItem } from "./type/types"; // Importing TS interfaces
import data from "../assets/data.json"; // Importing JSON data

const typedData = data as Content; // 

export default class Initialize {

  private mContainer: HTMLDivElement; // Main container element

  constructor() {

    // Main container - append body
    this.mContainer = ElementFactory.createElement("div", "mContainer", document.body);

    // Header section with item's name
    const hSection = ElementFactory.createElement("section", "hSection", this.mContainer)
    const mHeader = ElementFactory.createElement("h1", "", hSection, "Ninja"); // "Ninja" default name
    
    // Main image section
    const mSection = ElementFactory.createElement("section", "mSection", this.mContainer);
    const mainImageSection = ElementFactory.createElement("section", "mainImageSection", mSection)
    const mainImage = ElementFactory.createElement("img", "mainImg", mainImageSection);
    mainImage.src = `../assets/images/ninja.png`; // default image

    // Main text description section
    const mainTextSection = ElementFactory.createElement("section", "mainTextSection", mSection);
    const mainText = ElementFactory.createElement("p", "mainText", mainTextSection);
    mainText.textContent = typedData.content[0].description; // default description

    // Nav section
    const mNav = ElementFactory.createElement("nav", "mNav", this.mContainer);
    this.contentNav(mNav, mHeader, mainImage, mainText); // Initialize navigation

  } // END : constructor

  private contentNav(navElement: HTMLElement, header: HTMLElement, mainImage: HTMLImageElement, mainText: HTMLElement) {
    data.content.forEach((item: ContentItem)=>{
        // wrapper for each navigation item
        const imgWrapper = ElementFactory.createElement("div", "", navElement, "", ["imgWrapper"]);
        const imgFigure = ElementFactory.createElement("figure", "", imgWrapper, "", ["imgFigure"]);
        const img = ElementFactory.createElement("img", "", imgFigure);

        // img attributes
        img.src = `../assets/images/${item.img}`;
        img.alt = item.name;

        // click event to update main content when nav item is clicked
        imgWrapper.addEventListener("click", ()=>{
            header.textContent = item.name;
            mainImage.src = `../assets/images/${item.img}`;
            mainImage.alt = item.name;
            mainText.textContent = item.description;
        })
    })
  }

} // END : class
