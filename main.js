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
const quality_descriptors = {
    good_with_other_cats: {
        true: "Social with other cats",
        false: "Better as a solo cat"
    },
    kitten: { true: "Kitten", false: "Adult" },
    disabled: {
        true: "Disabled",
        false: "Fully able",
        undefined: "Fully able"
    },
    long_hair: { true: "Long hair", false: "Short hair" },
    male: { true: "Male", false: "Female" },
    energetic: { true: "Energetic", false: "Laid-back" },
    good_with_kids: { true: "Kid-friendly", false: "Best without kids" },
    cuddler: { true: "Cuddler", false: "Not a big cuddler" }
};
const num_qualities = qualities.length;
const questions = [
    {
        name: "good_with_other_cats",
        question: "Will this be a solo cat or will other cats be around?",
        answers: [
            { text: "Solo kitty", value: "false" },
            {
                text:
                    "I already have other cats (or will be getting more than one)",
                value: "true"
            }
        ]
    },
    {
        name: "kitten",
        question: "Would you prefer a kitten or an adult kitcat?",
        answers: [
            { text: "Kitten!", value: "true" },
            { text: "Adult!", value: "false" },
            { text: "Don't care!", value: "either" }
        ]
    },
    {
        name: "disabled",
        question: "How would you feel about a cute lil disabled kitty?",
        answers: [
            { text: "I want a disabled kitty please!", value: "true" },
            { text: "I'd prefer a fully able kitcat", value: "false" },
            { text: "I'm cool with any level of ability", value: "either" }
        ]
    },
    {
        name: "long_hair",
        question: "Would you prefer a luscious mane or short hair?",
        answers: [
            { text: "Long hair!", value: "true" },
            { text: "Short hair!", value: "false" },
            { text: "Any hair length!", value: "either" }
        ]
    },
    {
        name: "male",
        question: "Do you have a sex preference?",
        answers: [
            { text: "Male!", value: "true" },
            { text: "Female!", value: "false" },
            { text: "I don't care!", value: "either" }
        ]
    },
    {
        name: "energetic",
        question: "What energy level would you prefer?",
        answers: [
            { text: "Fully charged and ready to play!", value: "true" },
            { text: "Laid back and usually horizontal", value: "false" },
            { text: "Any adrenaline level is perfect for me", value: "either" }
        ]
    },
    {
        name: "good_with_kids",
        question: "Will you have small children around?",
        answers: [
            { text: "Yes, the cat will interact with lil 'uns", value: "true" },
            { text: "No, generally only adults and big kids", value: "false" }
        ]
    },
    {
        name: "cuddler",
        question: "Do you want a cuddler or an independent kitty?",
        answers: [
            { text: "All the cuddles, please", value: "true" },
            {
                text: "I want a cat who doesn't need much attention",
                value: "false"
            },
            { text: "I have no cuddle preference", value: "either" }
        ]
    }
];

add_questions();
function add_questions() {
    const container = document.getElementById("questions");

    // go through each question
    questions.forEach(question => {
        // add a div for the question
        let q_container = add_element(container, "div", {
            className: "question"
        });

        // add in the text of the question
        add_element(q_container, "p", {
            innerText: question.question,
            className: "question-text"
        });

        // add in all the answers
        question.answers.forEach((answer, answer_index) => {
            const answer_id = question.name + answer_index;

            let a_container = add_element(q_container, "div", {
                className: "form-check answer"
            });
            add_element(a_container, "input", {
                className: "form-check-input",
                type: "radio",
                name: question.name,
                id: answer_id,
                value: answer.value
            });
            add_element(a_container, "label", {
                className: "form-check-label answer-text",
                htmlFor: answer_id,
                innerText: answer.text
            });
        });
    });
}

let cats = [];

function use_cat_data(data) {
    const cells = data.feed.entry;
    let headers = [];

    let finding_headers = true;
    let cell_index = 0;
    let cell;
    while (finding_headers) {
        cell = cells[cell_index].gs$cell;
        if (cell.row === "1") {
            headers.push(cell.$t);
            cell_index++;
        } else finding_headers = false;
    }

    let row = cell.row;
    let cat = { qualities: {} };
    while (cell_index < cells.length) {
        cell = cells[cell_index].gs$cell;
        // if on a new row, it means the cat's info is fully filled out,
        // so add the cat to the list and create a new cat
        if (cell.row !== row) {
            cats.push(cat);
            cat = { qualities: {} };
        }

        row = cell.row;
        let { col, $t: content } = cell;
        col = parseInt(col, 10);
        const quality = headers[col - 1];
        if (qualities.includes(quality))
            cat.qualities[quality] = parse_content(content);
        else cat[quality] = parse_content(content);

        cell_index++;
    }
    // add the last cat
    cats.push(cat);
}

// parse content from a sheet cell
function parse_content(content) {
    if (content === "TRUE") return true;
    else if (content === "FALSE") return false;
    else if (content === "UNDEFINED" || content === "undefined")
        return undefined;
    else return content;
}

// removes cats of the wrong sex
function gender_filter(cats, should_be_male) {
    // if no preference is given, show all the cats
    if (should_be_male === "either") return cats;

    // otherwise, filter out the cats with the wrong bits
    return cats.filter(cat => cat.qualities.male === should_be_male);
}

const value_mapper = { true: true, false: false, either: "either" };

function find_best_cat() {
    // get all the data from the form
    const wanted_qualities = get_wanted_qualities();
    if (!all_questions_answered(wanted_qualities))
        return window.alert("Please answer all the questions!");

    // rank the cats
    let scored_cats = score_cats(wanted_qualities);

    // remove cats of the wrong gender
    const should_be_male = wanted_qualities.find(q => q.quality === "male")
        .value;
    scored_cats = gender_filter(scored_cats, should_be_male);

    // hide all the current stuff
    hide_form();

    // show all the new stuff
    show_scored_cats(scored_cats);

    // scroll to the top
    window.scroll({ top: 0 });
}

function all_questions_answered(wanted_qualities) {
    return (
        wanted_qualities.length === num_qualities &&
        !wanted_qualities.some(quality => quality.value === undefined)
    );
}

// gets the data from the form
function get_wanted_qualities() {
    return qualities.map(quality => {
        const string_value = $(`input[name=${quality}]:checked`).val();
        return {
            quality,
            value: value_mapper[string_value]
        };
    });
}

// get a ranked list of the cats in order of how well they fit the description
function score_cats(wanted_qualities) {
    return cats
        .map(cat => {
            let quality_matches = [];
            let quality_mismatches = [];

            wanted_qualities.forEach(quality_obj => {
                const quality = quality_obj.quality;
                const cat_value = cat.qualities[quality];
                if (
                    quality_obj.value === "either" ||
                    !!quality_obj.value === !!cat_value
                ) {
                    quality_matches.push({ quality, cat_value: !!cat_value });
                } else {
                    quality_mismatches.push({
                        quality,
                        cat_value: !!cat_value
                    });
                }
            });

            const score = num_qualities - quality_mismatches.length;
            return {
                ...cat,
                score,
                percent: score / num_qualities,
                quality_mismatches,
                quality_matches
            };
        })
        .sort((c1, c2) => c2.score - c1.score);
}

function hide_form() {
    $("#questions-area").hide();
}

// show all the ranked cats
const default_image = "./stretchy-cat.jpg";
function show_scored_cats(scored_cats) {
    const container = document.getElementById("ranked-cats");

    // go through every scored cat and add their info
    scored_cats.forEach(cat => {
        const { percent, name, image } = cat;

        let cat_container = add_element(container, "div", { className: "cat" });

        // name
        add_element(cat_container, "h4", {
            innerText: name,
            className: "center"
        });

        // score percent
        let score_container = add_element(cat_container, "p", {
            className: "score_container",
            className: "center"
        });
        add_element(score_container, "span", { innerText: "Score: " });
        const r = Math.round(255 - percent * 255);
        const g = Math.round(percent * 255);
        add_element(
            score_container,
            "span",
            { innerText: percent * 100 + "%" },
            { color: `rgb(${r}, ${g}, 0)` }
        );

        // image
        add_element(cat_container, "img", {
            src: image || default_image,
            className: "best-cat-img"
        });

        // description
        add_element(cat_container, "p", { innerText: cat.description });

        // pros and cons
        let pros_cons = add_element(cat_container, "div", {
            className: "pros-and-cons container"
        });
        let row = add_element(pros_cons, "div", { className: "row" });
        let pros = add_element(row, "div", { className: "col-6 center pros" });
        let cons = add_element(row, "div", { className: "col-6 center cons" });

        cat.quality_matches.forEach(quality_obj =>
            add_element(pros, "p", {
                innerText:
                    quality_descriptors[quality_obj.quality][
                        quality_obj.cat_value
                    ]
            })
        );
        cat.quality_mismatches.forEach(quality_obj =>
            add_element(cons, "p", {
                innerText:
                    quality_descriptors[quality_obj.quality][
                        quality_obj.cat_value
                    ]
            })
        );

        // adopt button
        let btn_container = add_element(cat_container, "div", {
            className: "center"
        });
        add_element(btn_container, "a", {
            className: "btn btn-primary",
            href: "https://www.letsbesmart-greece.org/adoption-form",
            innerText: `Adopt ${name}!`,
            target: "_blank"
        });
    });
}

function add_element(container_element, type, options, style) {
    let new_element = document.createElement(type);

    // add options
    if (typeof options === "object")
        Object.keys(options).forEach(
            option_name => (new_element[option_name] = options[option_name])
        );

    // add style
    if (typeof style === "object")
        Object.keys(style).forEach(
            style_key => (new_element.style[style_key] = style[style_key])
        );

    container_element.appendChild(new_element);
    return new_element;
}
