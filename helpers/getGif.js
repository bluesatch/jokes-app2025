const getGif =()=> {

    const gifArr = [
        'https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyd2NvOXEwaTltNmg2NGJuMGMybmZ1aXF2Zm96ZGl1MjhucTlpbnpreSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/GDp7LycxkT3LG/200w.gif',
        'https://media.tenor.com/buKQt94Dy60AAAAM/gommehd-gommemode.gif',
        'https://media.tenor.com/YwFnfKYFJRQAAAAM/meme-troll.gif',
        'https://giffiles.alphacoders.com/130/13069.gif',
        'https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyNmFodjIyZXp4dzgxZzV6d3R5amd2bzF3ODh1bzIyZzlpcWwyb2w0ciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/14eA8rOu7waUbC/200w.gif'
    ]

    const randomGif = gifArr[Math.floor(Math.random() * gifArr.length)]

    return randomGif
}

module.exports = getGif