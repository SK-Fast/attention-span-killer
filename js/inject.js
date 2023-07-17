async function start() {
    // hardcode lmao
    const clipCount = 20

    // Preload clips
    for (let i = 0;i <= clipCount;i++) {
        const v = document.createElement('video')
        v.style.display = 'none'
        v.preload = 'auto'
        v.setAttribute('src', `https://devpixels.xyz/static/at/clip${i}.mp4`)
        document.body.appendChild(v)
    }

    // Modify webpage to be half the size
    document.body.style.transition = "transform 0.2s linear"
    document.body.style.transform = "scaleX(0.5) translateX(-50%)"

    const tmpDiv = document.createElement('div')
    tmpDiv.style.display = 'none'

    // Create video wrapper and the video
    const htm = document.querySelector('html')
    const splitScreen = document.createElement('div')
    splitScreen.style.transition = "width 0.2s linear"
    splitScreen.style.backgroundColor = "black"
    splitScreen.style.width = '0%'
    splitScreen.style.height = '100vh'
    splitScreen.style.position = 'fixed'
    splitScreen.style.top = '0'
    splitScreen.style.right = '0'
    splitScreen.innerHTML = `<video id="genVid" loop src="https://devpixels.xyz/static/at/clip${Math.floor(Math.random() * clipCount)}.mp4" autoplay="" style="width: 100%;height: 100%;object-fit: fill;transition: height 0.2s linear;position: absolute;top: 0;left: 0"></video>`
    htm.appendChild(splitScreen)
    htm.appendChild(tmpDiv)

    // Get video eariler
    const genVid = document.querySelector("#genVid")

    // Transition the width
    setTimeout(() => {
        splitScreen.style.width = '50%'
    }, 10);

    window.putAnotherVid = () => {
        // Create second video
        const bottomD = `<video id="anotherVid" src="https://devpixels.xyz/static/at/clip${Math.floor(Math.random() * clipCount)}.mp4" loop autoplay="" style="width: 100%;height: 0%;object-fit: fill;position: absolute;bottom: 0;left: 0;transition: height 0.2s linear"></video>`

        tmpDiv.innerHTML += bottomD

        const anotherVid = document.querySelector("#anotherVid")
        splitScreen.appendChild(anotherVid)

        // Transition the height
        setTimeout(() => {
            anotherVid.style.height = '50%'
            genVid.style.height = '50%'
        }, 10);
    }

    window.closeVid = () => {
        // Transition the width
        document.body.style.transform = "scaleX(1)"
        splitScreen.style.width = '0%'

        setTimeout(() => {
            // Reset everything
            splitScreen.remove()
            document.body.style.transition = ""
            document.body.style.transform = ""
        }, 200)
    }
}

start()