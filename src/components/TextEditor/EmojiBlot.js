import Quill from "quill";
import emojiMap from "./emojiMap";

var Embed = Quill.import("blots/embed");

class EmojiBlot extends Embed {
  static create(value) {
    let node = super.create();
    //important!!!
    node.setAttribute("contenteditable", true);
    node.setAttribute("tabIndex", -1);
    if (typeof value === "object") {
      EmojiBlot.buildSpan(value, node);
    } else if (typeof value === "string") {
      const valueObj = emojiMap[value];

      if (valueObj) {
        EmojiBlot.buildSpan(valueObj, node);
      }
    }

    return node;
  }

  static value(node) {
    return node.dataset.name;
  }

  static buildSpan(value, node) {
    node.setAttribute("data-name", value.name);
    let emojiSpan = document.createElement("span");
    emojiSpan.classList.add(this.emojiClass);
    emojiSpan.classList.add(this.emojiPrefix + value.name);
    emojiSpan.innerHTML = value.code_decimal;
    node.appendChild(emojiSpan);
  }
}

EmojiBlot.blotName = "emoji";
EmojiBlot.className = "ql-emojiblot";
EmojiBlot.tagName = "span";
EmojiBlot.emojiClass = "ap";
EmojiBlot.emojiPrefix = "ap-";

export default EmojiBlot;
