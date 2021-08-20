const mainScroll = () => {
    const main = document.getElementById('main');
    const samples = document.getElementById('samples');

    const homebtn = document.getElementById('home-btn');
    const samplesbtn = document.getElementById('samples-btn');
    const commsbtn = document.getElementById('comms-btn');
    console.log(`${main.scrollTop + 20} | ${samples.offsetTop}`);
    if (main.scrollTop <= samples.offsetTop - 10) {
        // HOME
        homebtn.classList.add('active');
        samplesbtn.classList.remove('active');
        commsbtn.classList.remove('active');
    } else if((main.scrollTop) <= (samples.offsetHeight * 0.8)) {
        // SAMPLES
        samplesbtn.classList.add('active');
        homebtn.classList.remove('active');
        commsbtn.classList.remove('active');
    } else {
        // COMMS
        commsbtn.classList.add('active');
        homebtn.classList.remove('active');
        samplesbtn.classList.remove('active');
    }
}