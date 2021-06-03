import React, { useState } from "react";
import "./styles.css";
import { AiOutlineSearch } from "react-icons/ai";

export default function App() {
  const [name, setName] = useState("");

  const someEmoji = [
    { icon: "🍇", name: "Grapes" },
    { icon: "🍋", name: "Lemon" },
    { icon: "🍔", name: "Hamburger" },
    { icon: "🍉", name: "Watermelon" },
    { icon: "🥒", name: "Cucumber" },
    { icon: "🍌", name: "Banana" }
  ];

  const Emojis = [
    { icon: "🍇", name: "Grapes" },
    { icon: "🍋", name: "Lemon" },
    { icon: "🍊", name: "Tangerine" },
    { icon: "🍉", name: "Watermelon" },
    { icon: "🍈", name: "Melon" },
    { icon: "🍌", name: "Banana" },
    { icon: "🧀", name: "Cheese Wedge" },
    { icon: "🍟", name: "French Fries" },
    { icon: "🍔", name: "Hamburger" },
    { icon: "🍖", name: "Meat on Bone" },
    { icon: "🥓", name: "Bacon" },
    { icon: "🥒", name: "Cucumber" },
    { icon: "🥬", name: "Leafy Green" },
    { icon: "🧇", name: "Waffle" },
    { icon: "🥞", name: "Pancakes" },
    { icon: "🍺", name: "Beer Mug" },
    { icon: "🍸", name: "Cocktail Glass" },
    { icon: "🍷", name: "Wine Glass" },
    { icon: "🍾", name: "Bottle with Popping Cork" },
    { icon: "🍶", name: "Sake" },
    { icon: "🍵", name: "Teacup Without Handle" }
  ];

  const handleSearchInputChange = (event) => {
    setName("");

    for (let i = 0; i < Emojis.length; i++) {
      if (Emojis[i].icon === event.target.value) {
        setName(Emojis[i].name);
        return;
      }
    }

    setName("Sorry!!! we don't know this one");

    if(event.target.value === "")
      setName("");
  };

  return (
    <div className="App">
      <h1 className="FoodNDrinkText">
        Food & Drink <span className="emojiSpanText">emoji</span> Interpreter
      </h1>

      <div className="SearchInputContainer">
        <AiOutlineSearch className="SearchIcon" />
        <input
          type="search"
          className="SearchInput"
          onChange={handleSearchInputChange}
        />
      </div>

      <div className="DisplayEmojiName">{name}</div>

      <h2 className="SomeEmojiText">emojis Like</h2>
      <ul className="SomeEmojiUl">
        {someEmoji.map((emoji) => (
          <li
            className="SomeEmojiLi"
            key={emoji.name}
            onClick={() => {
              setName(emoji.name);
            }}
          >
            {emoji.icon}
          </li>
        ))}
      </ul>
    </div>
  );
}
