var playList = [

    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },

    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },

    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

playListDOM = playList.map(index => {
    let res = "";
    res += `<li>${index.author, index.song}</li>`
    return res;
});


playListDOM = playListDOM.join("")
document.write(`<ol> ${playListDOM} </ol>`)

function clickOpen() {
    let moduleBlock = document.getElementById("block");
    moduleBlock.classList.add("module-active")
    let bg = document.getElementById('module-bg')
    bg.classList.add("module-bg-active")

}
function clickClose() {
    let moduleBlock = document.getElementById("block");
    moduleBlock.classList.remove("module-active")
    let bg = document.getElementById('module-bg')
    bg.classList.remove("module-bg-active")
}
function colorChanger() {
    let red = document.getElementById('circle-red')
    let yellow = document.getElementById('circle-yellow')
    let green = document.getElementById('circle-green')

    if (!red.classList.contains('circle--active') && !yellow.classList.contains('circle--active') && !green.classList.contains('circle--active')) {
        red.classList.add('circle--active')
    }
    else if (red.classList.contains('circle--active')) {
        red.classList.remove('circle--active');
        yellow.classList.add('circle--active');
    }
    else if (yellow.classList.contains('circle--active')) {
        yellow.classList.remove('circle--active');
        green.classList.add('circle--active');
    }
    else if (green.classList.contains('circle--active')) {
        green.classList.remove('circle--active');
        red.classList.add('circle--active')
    }
}

