$(document).ready(function() {

    const cats = [{
            name: "Alvin",
            age: 1.5,
            color: "#964100",
            gender: "male",
        },
        {
            name: "Briciola",
            age: 1,
            color: "#494146",
            gender: "female",
        },
        {
            name: "Massimo",
            age: 6,
            color: "#CAA446",
            gender: "male",
        },
        {
            name: "Pablo",
            age: 0.8,
            color: "#1E110A",
            gender: "male",
        },
        {
            name: "Felix",
            age: 15,
            color: "#6E4B35",
            gender: "female",
        }
    ];

    // section 1
    cats.forEach((cat) => {
        $("#section_1 ul").append(listGenerator(cat.color, cat.name));
    });

    // section 2
    const pink = "#ff00e6";
    const blue = "#0084ef";
    const newCats = cats.map((cat) => {
        let color = (cat.gender === "female") ? pink : blue;
        let opacity = cat.age / 10;
        return {
            ...cat,
            ribbon: {
                color,
                opacity
            }
        }
    });

    const femaleCats = newCats.filter((cat) => cat.gender === "female");
    const maleCats = newCats.filter((cat) => cat.gender === "male");


    femaleCats.forEach((cat) => {
        $("#section_2 ul").append(listGenerator(cat.color, cat.name, cat.ribbon.color, cat.ribbon.opacity));
    });

    maleCats.forEach((cat) => {
        $("#section_3 ul").append(listGenerator(cat.color, cat.name, cat.ribbon.color, cat.ribbon.opacity));
    });

    const orderCats = [...femaleCats, ...maleCats];

    const catsTarget = orderCats.map((cat) => {
        const { name, color, ribbon } = cat;

        $("#section_4 ul").append(listGenerator(color, name, ribbon.color, ribbon.opacity));

        return { name, color, ribbon };
    });
    console.log(catsTarget);
});

function listGenerator(catColor, name, ...ribbon) {

    let ribbonTag = "";
    if (ribbon.length > 0) {
        ribbonTag = ` <i class="fas fa-ribbon" style="color:${ribbon[0]}; opacity:${ribbon[1]}"></i> `;
    }

    let html = ` 
        <li>
            <i class="fas fa-cat" style="color:${catColor}"></i>
            ${ribbonTag}
            <p>${name}</p>
        </li>
    `;
    return html;
}