"use server";

export const generate = async (length: number) => {
  let paragraph: string = "";
  const response = await fetch(
    `https://random-word-api.herokuapp.com/word?number=${length}`
  );
  const data = await response.json();

  // join the list of words in data to form the paragraph
  paragraph = data.join(" ");

  console.log("Generated");

  return paragraph;
};
