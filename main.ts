let word: string;
let star: Sprite;
let plr = sprites.create(assets.image`p`, SpriteKind.Player)
let user_words = []
let prompts = ["Enter a destination", "Enter how it was", "Enter a time (Hours)", "Enter an interesting thing seen"]
for (let prompt of prompts) {
    word = game.askForString(prompt)
    user_words.push(word)
}
let story = `Last month, my family and I went on a trip.
`
story += "We went to " + user_words[0] + " which was " + user_words[1] + "!\n"
story += "It took us " + user_words[2] + " to get there.\n"
story += "We even got to see " + user_words[3] + " there. We took a bunch of photos of it."
game.splash(story)
let star_list = []
for (let i = 0; i < 10; i++) {
    star = sprites.create(assets.image`st`, SpriteKind.Food)
    star.setPosition(randint(0, 160), randint(0, 120))
    star_list.push(star)
    pause(100)
}
for (star of star_list) {
    star.setFlag(SpriteFlag.Invisible, true)
    pause(100)
}
