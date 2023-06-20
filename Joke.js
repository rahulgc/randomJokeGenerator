  const randomJokeGenerator = async () => {
    return new Promise((resolve,reject)=>{
    let flag;

    const delay = async (j) => {
        let h1 =
        document.body.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling;
       setTimeout(() => {
         h1.innerHTML = `CountDown : ` + (10 - j);
          if((10-j)==0){
            console.log("Success")
            resolve("Success");
            }
       }, j * 1000);
    };
    for (let j = 10; j >=0; j--) {
      delay(j);
    }
   
  })
    
};

const ansGenerator = async(ans) => {
    await randomJokeGenerator().then((x)=>{
    console.log(x)
    document.body.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.style.color =
    "green";
    document.body.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerHTML =
  ans;
  let image = document.getElementById("image");
  image.src =
  "data:image/jpeg;base64,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";
  console.log(res)
  return "Success";

  }).catch((x)=>{
    return new Error("error")

  })

};


const main=async ()=>{
  const jokes = [
    `Q: What goes up and down but does not move?
  A: Stairs `,
  
    `Q: Where should a 500 pound alien go?
  A: On a diet`,
  
    `Q: What did one toilet say to the other?
  A: You look a bit flushed.`,
  
    `Q: Why did the picture go to jail?
  A: Because it was framed.`,
  
    `Q: What did one wall say to the other wall?
  A: I'll meet you at the corner.`,
  
    `Q: What did the paper say to the pencil?
  A: Write on!`,
  
    `Q: What do you call a boy named Lee that no one talks to?
  A: Lonely`,
  
    `Q: What gets wetter the more it dries?
  A: A towel.`,
  
    `Q: Why do bicycles fall over?
  A: Because they are two-tired!`,
  
    `Q: Why do dragons sleep during the day?
  A: So they can fight knights!`,
  
    `Q: What did Cinderella say when her photos did not show up?
  A: Someday my prints will come!`,
  
    `Q: Why was the broom late?
  A: It over swept!`,
  
    `Q: What part of the car is the laziest?
  A: The wheels, because they are always tired!`,
  
    `Q: What did the stamp say to the envelope?
  A: Stick with me and we will go places!`,
  
    `Q: What is blue and goes ding dong?
  A: An Avon lady at the North Pole!`,
  
    `Q: Were you long in the hospital?
  A: No, I was the same size I am now!`,
  
    `Q: Why couldn't the pirate play cards?
  A: Because he was sitting on the deck!`,
  
    `Q: What did the laundryman say to the impatient customer?
  A: Keep your shirt on!`,
  
    `Q: What's the difference between a TV and a newspaper?
  A: Ever tried swatting a fly with a TV?`,
  
    `Q: What did one elevator say to the other elevator?
  A: I think I'm coming down with something!`,
  
    `Q: Why was the belt arrested?
  A: Because it held up some pants!`,
  
    `Q: Why was everyone so tired on April 1st?
  A: They had just finished a March of 31 days.`,
  
    `Q: Which hand is it better to write with?
  A: Neither, it's best to write with a pen!`,
  
    `Q: Why can't your nose be 12 inches long?
  A: Because then it would be a foot!`,
  
    `Q: What makes the calendar seem so popular?
  A: Because it has a lot of dates!`,
  
    `Q: Why did Mickey Mouse take a trip into space?
  A: He wanted to find Pluto!`,
  
    `Q: What is green and has yellow wheels?
  A: Grass…..I lied about the wheels!`,
  
    `Q: What is it that even the most careful person overlooks?
  A: Her nose!`,
  
    `Q: Did you hear about the robbery last night?
  A: Two clothes pins held up a pair of pants!`,
  
    `Q: Why do you go to bed every night?
  A: Because the bed won't come to you!`,
  
    `Q: Why did Billy go out with a prune?
  A: Because he couldn't find a date!`,
  
    `Q: Why do eskimos do their laundry in Tide?
  A: Because it's too cold out-tide!`,
  
    `Q: How do you cure a headache?
  A: Put your head through a window and the pane will just disappear!`,
  
    `Q: What has four wheels and flies?
  A: A garbage truck!`,
  
    `Q: What kind of car does Mickey Mouse's wife drive?
  A: A minnie van!`,
  
    `Q: Why don't traffic lights ever go swimming?
  A: Because they take too long to change!`,
  
    `Q: Why did the man run around his bed?
  A: To catch up on his sleep!`,
  
    `Q: Why did the robber take a bath before he stole from the bank?
  A: He wanted to make a clean get away!`,
  ];
  
  let colors = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
  ];
  
  let m = Math.round(Math.random() * colors.length);
  let n = Math.round(Math.random() * jokes.length);
  console.log(n);
  console.log(jokes.length);
  console.log(jokes[n]);
  let i = jokes[n].indexOf("A");
  let que = jokes[n].substring(0, i - 1);
  var ans = jokes[n].substring(i);
  document.body.style.background = colors[m];
    document.body.firstElementChild.firstElementChild.nextElementSibling.innerHTML = que;
    document.body.firstElementChild.style.color = "red";

await ansGenerator(ans).then((value) => {
  console.log(value);
  document.body.setAttribute("onClick", "location.reload()");
}).catch((value) => {
  document.body.firstElementChild.firstElementChild.nextElementSibling.innerHTML = `There was an error while fetching the joke .Right click to refresh`;
  
});
}
main();