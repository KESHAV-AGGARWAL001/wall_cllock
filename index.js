setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime+ mtime/2;
    minrotation = 6*mtime;
    secrotation = 6*stime;
    hour.style.transform = `rotate(${hrotation}deg)`;
    minutes.style.transform = `rotate(${minrotation}deg)`;
    seconds.style.transform = `rotate(${secrotation}deg)`;
}, 1000);