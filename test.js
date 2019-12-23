const cats = [
    {
        name: "Robin",
        qualities: {
            good_with_other_cats: true,
            bonded_to: "Tristan",
            kitten: false,
            disabled: undefined,
            long_hair: true,
            male: true,
            energetic: false,
            good_with_kids: true,
            cuddler: true,
            description:
                "The most docile and loving cat you'll ever meet, Robin is a fluffball who will be right at home with any family. Due to the bond he has with his brother and best friend Tristan, the two come as a pair."
        }
    },
    {
        name: "Tristan",
        qualities: {
            good_with_other_cats: true,
            bonded_to: "Robin",
            kitten: false,
            disabled: undefined,
            long_hair: false,
            male: true,
            energetic: false,
            good_with_kids: true,
            cuddler: true,
            description:
                "Tristan is a loving boy and wants nothing more than to come cuddle up on ya. He'd be great at any home with a family of any age. Due to the bond he has with his brother and best friend Robin, the two come as a pair."
        }
    },
    {
        name: "Stella",
        qualities: {
            good_with_other_cats: false,
            bonded_to: undefined,
            kitten: false,
            disabled: "Partially Blind",
            long_hair: false,
            male: false,
            energetic: false,
            good_with_kids: false,
            cuddler: true,
            description:
                "Stella has the most beautiful eyes, but that beauty comes with some visual impairment. She's a great single cat - she loves cuddles and gets a little jealous if another cat tries to steal your attention. She'll gladly try to sneakily grab your food, but isn't very good at it and it's hilarious to watch."
        }
    },
    {
        name: "Maggie",
        qualities: {
            good_with_other_cats: false,
            bonded_to: undefined,
            kitten: false,
            disabled: "Partially blind",
            long_hair: false,
            male: false,
            energetic: false,
            good_with_kids: false,
            cuddler: true,
            description:
                "Maggie, though a little timid at first, is a sweet and cuddly cat who will love to sleep next to you on the sofa. Since she is missing one eye and is going blind in the other, she can be a little over-protective of herself as well as her human, and so would do well in a home where she is the only cat. "
        }
    },
    {
        name: "Nami",
        qualities: {
            good_with_other_cats: true,
            bonded_to: undefined,
            kitten: true,
            disabled: undefined,
            long_hair: false,
            male: false,
            energetic: false,
            good_with_kids: true,
            description:
                "Nami loves a squishy cushion. She's been caught grooming other cats (scandalous!) and would be down to curl up on your lap for a snooze.",
            cuddler: true
        }
    },
    {
        name: "Smuk",
        qualities: {
            good_with_other_cats: true,
            bonded_to: undefined,
            kitten: true,
            disabled: undefined,
            long_hair: false,
            male: true,
            energetic: true,
            good_with_kids: false,
            cuddler: true,
            description:
                "A rambunctious boy who loves to play but also appreciates a good snuggle. He's gonna be a big boy someday."
        }
    },
    {
        name: "Toto",
        qualities: {
            good_with_other_cats: true,
            bonded_to: undefined,
            kitten: true,
            disabled: undefined,
            long_hair: false,
            male: true,
            energetic: false,
            good_with_kids: true,
            cuddler: true,
            description:
                "The squishiest one of them all, Toto is a friendly kitten who loves blanket caves, sleeping as close to your face as possible, and being held really, really tight."
        }
    },
    {
        name: "Zora",
        qualities: {
            good_with_other_cats: true,
            bonded_to: undefined,
            kitten: false,
            disabled: undefined,
            long_hair: false,
            male: false,
            energetic: false,
            good_with_kids: true,
            cuddler: true,
            description:
                "Zora is chill. She has beautiful amber eyes. She currently lives in a room with two other kitty cats and they are all besties. She will get along with other cats and will be a great cuddle companion."
        }
    },
    {
        name: "Shadow",
        qualities: {
            good_with_other_cats: false,
            bonded_to: undefined,
            kitten: true,
            disabled: "Deaf",
            long_hair: false,
            male: true,
            energetic: true,
            good_with_kids: false,
            cuddler: true,
            description:
                "Shadow is the most charismatic, loving guy around. He has a distinct intense personality and will be the talk of any party at your house. He always has a slight tilt to his head, which is super cute. He's completely deaf but that doesn't stop him from going up to everyone and making sure his love is known. He'll cuddle up to you all night and day if you let him. Best as an only cat."
        }
    },
    {
        name: "Stevie",
        qualities: {
            good_with_other_cats: true,
            bonded_to: undefined,
            kitten: false,
            disabled: "Blind",
            long_hair: false,
            male: true,
            energetic: false,
            good_with_kids: false,
            cuddler: true,
            description:
                "Stevie is a wonderful loving boy. He's a bit shy because he's totally blind, but"
        }
    },
    {
        name: "Misty",
        qualities: {
            good_with_other_cats: true,
            bonded_to: undefined,
            kitten: false,
            disabled: undefined,
            long_hair: true,
            male: false,
            energetic: true,
            good_with_kids: false,
            cuddler: true,
            description:
                "Cuter than you. Makes adorable chirp noises and, though a little timid, loves a face scratch once she gets to know you. "
        }
    },
    {
        name: "Sunny",
        qualities: {
            good_with_other_cats: true,
            bonded_to: undefined,
            kitten: false,
            disabled: undefined,
            long_hair: false,
            male: true,
            energetic: false,
            good_with_kids: true,
            cuddler: false,
            description:
                "Sunny is a sun-lover and is always down for a good pat on his spotted head."
        }
    },
    {
        name: "Oreo",
        qualities: {
            good_with_other_cats: false,
            bonded_to: undefined,
            kitten: false,
            disabled: undefined,
            long_hair: false,
            male: true,
            energetic: false,
            good_with_kids: true,
            cuddler: true,
            description:
                "Oreo is a little cross-eyed and it's hilarious. He'll cuddle right up to you if he can figure out how far away you are."
        }
    },
    {
        name: "Tommy",
        qualities: {
            good_with_other_cats: false,
            bonded_to: undefined,
            kitten: false,
            disabled: false,
            long_hair: false,
            male: false,
            energetic: false,
            good_with_kids: false,
            cuddler: true,
            description:
                "Contrary to popular belief, Tommy is a ladycat. She's a great cuddler once you get to know her - she'll stick her face into your belly and won't leave for hours. Sometimes she likes some alone time, but she'll always be back for some more love."
        }
    },
    {
        name: "Oliver",
        qualities: {
            good_with_other_cats: false,
            bonded_to: undefined,
            kitten: false,
            disabled: undefined,
            long_hair: false,
            male: true,
            energetic: false,
            good_with_kids: false,
            cuddler: false,
            description:
                "Oliver loves to be out in the sun. Give him some sunshine and he'll loosen up like a greased square knot."
        }
    },
    {
        name: "Romeo",
        qualities: {
            good_with_other_cats: false,
            bonded_to: undefined,
            kitten: false,
            disabled: undefined,
            long_hair: false,
            male: true,
            energetic: false,
            good_with_kids: false,
            cuddler: false,
            description:
                "Some cats will give away love willy-nilly. If you want to earn your love, Romeo is your man. As soon as he warms up to you, he's a great cat for petting while watching Mean Girls and sitting on your couch from 2004."
        }
    },
    {
        name: "Tina",
        qualities: {
            good_with_other_cats: true,
            bonded_to: undefined,
            kitten: false,
            disabled: undefined,
            long_hair: false,
            male: false,
            energetic: true,
            good_with_kids: true,
            cuddler: true,
            description:
                "Tina loves a good cuddle, and she'll be vocal in telling you that she's not done with your petting sesh."
        }
    },
    {
        name: "Topsi",
        qualities: {
            good_with_other_cats: false,
            bonded_to: undefined,
            kitten: true,
            disabled: undefined,
            long_hair: true,
            male: false,
            energetic: true,
            good_with_kids: false,
            cuddler: true,
            description:
                "Topsi would love you to hold her like a baby and carry her on your shoulder like a parrot."
        }
    },
    {
        name: "Barry",
        qualities: {
            good_with_other_cats: true,
            bonded_to: undefined,
            kitten: false,
            disabled: undefined,
            long_hair: false,
            male: true,
            energetic: false,
            good_with_kids: false,
            cuddler: true,
            description:
                "Barry is a wonderful boy, and he likes to take his relationships slow. He's the gentlest guy you could ask for, and once he's ready, he'll gladly sit on your lap while you pet his beautiful sun-tanned fur."
        }
    },
    {
        name: "Zikos",
        qualities: {
            good_with_other_cats: true,
            bonded_to: undefined,
            kitten: false,
            disabled: undefined,
            long_hair: false,
            male: true,
            energetic: false,
            good_with_kids: true,
            cuddler: true,
            description:
                "Zikos might actually be a meerkat. He's a great cuddler and looks like he's always raising one giant eyebrow which is hilarious."
        }
    },
    {
        name: "Bucky",
        qualities: {
            good_with_other_cats: false,
            bonded_to: undefined,
            kitten: false,
            disabled: "Wobbly",
            long_hair: false,
            male: true,
            energetic: false,
            good_with_kids: false,
            cuddler: true,
            description:
                "Bucky would love to cuddle up under the covers with you. He's a little wobbly and it's SO CUTE. He would be great with older kids."
        }
    },
    {
        name: "Nala",
        qualities: {
            good_with_other_cats: true,
            bonded_to: undefined,
            kitten: true,
            disabled: undefined,
            long_hair: false,
            male: false,
            energetic: false,
            good_with_kids: false,
            cuddler: true,
            description:
                "Nala has the cutest sad eyes that have ever existed on a cat. She is a loving kitten but is a bit of a scaredy-cat, so if you have small children another kittycat would be best."
        }
    }
];

const qualities = [
    "good_with_other_cats",
    "kitten",
    "disabled",
    "long_hair",
    "male",
    "energetic",
    "good_with_kids",
    "cuddler"
];
const num_qualities = qualities.length;

const value_mapper = { true: true, false: false, either: "either" };

function find_best_cat() {
    console.log("finding best cat!");

    const wanted_qualities = qualities.map(quality => {
        const string_value = $(`input[name=${quality}]:checked`).val();
        return {
            quality,
            value: value_mapper[string_value]
        };
    });
    console.log("wanted_qualities: ", wanted_qualities);

    const scored_cats = cats
        .map(cat => {
            const quality_mismatches = wanted_qualities
                .filter(
                    quality_obj =>
                        quality_obj.value !== "either" &&
                        !!quality_obj.value !==
                            !!cat.qualities[quality_obj.quality]
                )
                .map(quality_obj => quality_obj.quality);
            return {
                ...cat,
                score: num_qualities - quality_mismatches.length,
                quality_mismatches
            };
        })
        .sort((c1, c2) => c2.score - c1.score);

    console.log("scored_cats: ", scored_cats);

    window.location.pathname = "/ranked-cats.html";
}
