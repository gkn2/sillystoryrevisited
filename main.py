plr = sprites.create(assets.image("""p"""), SpriteKind.player)


user_words = []

prompts = [
    "Enter a destination",
    "Enter how it was",
    "Enter a time (Hours)",
    "Enter an interesting thing seen"
]

for prompt in prompts:
    word = game.ask_for_string(prompt)
    user_words.append(word)

story = "Last month, my family and I went on a trip.\n"
story += "We went to " + user_words[0] + " which was " + user_words[1] + "!\n"
story += "It took us " + user_words[2] + " to get there.\n"
story += "We even got to see " + user_words[3] + " there. We took a bunch of photos of it."

game.splash(story)


star_list = []


for i in range(10):
    star = sprites.create(assets.image("""st"""), SpriteKind.food)
    star.set_position(randint(0, 160), randint(0, 120))
    star_list.append(star)
    pause(100)


for star in star_list:
    star.set_flag(SpriteFlag.INVISIBLE, True)
    pause(100)