const downloadBtn = document.querySelector(".download-btn");
const fileLink = "https://download1649.mediafire.com/b8jlsx0mprvgYBx-M1OLRL4U0JHsggHPMXrQo1PVXoj5CpgHZCdVRkxdhEg8NnymP9TgQwB6RenmaW9hmyuKYQT99dJd/1bj0lnrlzbgubcp/How+to+Scan+a+site+for+bugs+or+Vulnerabilities.mp4";

const initTimer = () => {
    if(downloadBtn.classList.contains("disable-timer")) {
        return location.href = fileLink;
    }
    let timer = downloadBtn.dataset.timer;
    downloadBtn.classList.add("timer");
    downloadBtn.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
    const initCounter = setInterval(() => {
        if(timer > 0) {
            timer--;
            return downloadBtn.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
        }
        clearInterval(initCounter);
        location.href = fileLink;
        downloadBtn.innerText = "Your file is downloading...";
        setTimeout(() => {
            downloadBtn.classList.replace("timer", "disable-timer");
            downloadBtn.innerHTML = `<span class="icon material-symbols-rounded">vertical_align_bottom</span>
                                     <span class="text">Download Again</span>`;
        }, 3000);
    }, 1000);
}

downloadBtn.addEventListener("click", initTimer);