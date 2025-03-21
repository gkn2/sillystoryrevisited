let word: string;
let plr = sprites.create(img`
    . . . . . . 5 5 5 5 . . . . . .
    . . . . 5 5 5 5 5 5 5 . . . . .
    . . . 5 5 5 5 5 5 5 5 5 . . . .
    . . . 5 5 5 5 5 5 5 5 5 . . . .
    . . . . 5 5 5 5 5 5 5 . . . . .
    . . . . . 5 5 5 5 5 . . . . . .
    . . . . . . 5 5 5 . . . . . . .
    . . . . . . 5 5 5 . . . . . . .
    . . . . . 5 5 5 5 5 . . . . . .
    . . . . . 5 . . . 5 . . . . . .
    . . . . . 5 . . . 5 . . . . . .
    . . . . . 5 . . . 5 . . . . . .
    . . . . . 5 . . . 5 . . . . . .
    . . . . . 5 5 5 5 5 . . . . . .
`, SpriteKind.Player)
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
