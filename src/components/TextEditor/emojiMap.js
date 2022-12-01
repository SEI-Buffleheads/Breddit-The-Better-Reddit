import emojiList from "./EmojiList";

const emojiMap = {};

emojiList.forEach((emojiListObject) => {
  emojiMap[emojiListObject.name] = emojiListObject;
});

export default emojiMap;
