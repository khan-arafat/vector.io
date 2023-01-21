const mercury= [
    "Mercury",
    "176 Earth Days",
    "0",
    "4879.4 km",
    "Smallest planet in our solar System, and nearest to Sun.",
    "https://cdn.icon-icons.com/icons2/1434/PNG/256/02-mercury_98599.png"
];
const venus= [
    "Venus",
    "224.65 Earth Days",
    "0",
    "12,103 km",
    "Hottest and Brightest Planet also called as Twin of Earth.It rotates east to west.",
    "https://cdn.icon-icons.com/icons2/1434/PNG/256/03-venus_98590.png"
];
const earth= [
    "Earth",
    "365 Days",
    "0",
    "12,756 km",
    "Only Planet with life. Also called as blue Planet",
    "https://cdn.icon-icons.com/icons2/32/PNG/256/globe_earth_planet_2767.png"
]
const mars= [
    "Mars",
    "687 Earth Days",
    "2",
    "6792 km",
    "Also called as Red Planet. Only Planet with human landing missions",
    "https://cdn.icon-icons.com/icons2/1434/PNG/256/06-mars_98594.png"
];
const jupiter= [
    "Jupiter",
    "11.86 years",
    "79",
    "142,984 km",
    "Largest planet of Solar System. It has big red Spot on it's surface.",
    "https://cdn.icon-icons.com/icons2/1434/PNG/256/07-jupiter_98593.png"
];
const saturn= [
    "Saturn",
    "29.44 years",
    "83*",
    "120,000 km",
    "It has a large ring of gaseous clouds around it.It's largest satellite is Titan.",
    "https://cdn.icon-icons.com/icons2/1434/PNG/256/08-saturn_98601.png"
];
const uranus= [
    "Uranus",
    "83.96 years",
    "27",
    "51,118",
    "Discovered by William Herschel. It was the first planet discovered by a Telescope.Like Venus it also rotates east to west.",
    "https://cdn.icon-icons.com/icons2/1434/PNG/256/09-uranus_98592.png"
];
const neptune= [
    "Neptune",
    "164.77 years",
    "14",
    "49,500 km",
    "Neptune was named after the Roman God Of Sea.It became the most distant planet from Sun after Pluto was declared as Dwarf Planet in 2006.",
    "https://cdn.icon-icons.com/icons2/1434/PNG/256/10-neptune_98589.png"
];
const planet= document.getElementById('p-name');
const days= document.getElementById('p-days');
const moons= document.getElementById('sat');
const diameter= document.getElementById('dia');
const fact= document.getElementById('int');

const data=[planet, days, moons, diameter, fact];
const url= document.getElementById('img');
const btn_search= document.getElementById('search');
let searched= document.getElementById('result');
searched.style.display="none";
let paragraph=document.getElementById('random');
paragraph.style.display="none";
btn_search.addEventListener('click', ()=>{
    const text= document.getElementById('text');
    let search= text.value;
    const reg= search.toLowerCase();
    if(reg=='mercury'){
        for(let i=0;i<5;i++){
            data[i].innerText= `${mercury[i]}`;
        }
        url.src= mercury[5];
        searched.style.display="block";
        paragraph.style.display="none";
    }
    else if(reg=='venus'){
        for(let i=0;i<5;i++){
            data[i].innerText= `${venus[i]}`;
        }
        url.src= venus[5];
        searched.style.display="block";
        paragraph.style.display="none";
    }
    else if(reg=='earth'){
        for(let i=0;i<5;i++){
            data[i].innerText= `${earth[i]}`;
        }
        url.src= earth[5];
        searched.style.display="block";
        paragraph.style.display="none";
    }
    else if(reg=='mars'){
        for(let i=0;i<5;i++){
            data[i].innerText= `${mars[i]}`;
        }
        url.src= mars[5];
        searched.style.display="block";
        paragraph.style.display="none";
    }
    else if(reg=='jupiter'){
        for(let i=0;i<5;i++){
            data[i].innerText= `${jupiter[i]}`;
        }
        url.src= jupiter[5];
        searched.style.display="block";
        paragraph.style.display="none";
    }
    else if(reg=='saturn'){
        for(let i=0;i<5;i++){
            data[i].innerText= `${saturn[i]}`;
        }
        url.src= saturn[5];
        searched.style.display="block";
        paragraph.style.display="none";
    }
    else if(reg=='uranus'){
        for(let i=0;i<5;i++){
            data[i].innerText= `${uranus[i]}`;
        }
        url.src= uranus[5];
        searched.style.display="block";
        paragraph.style.display="none";
    }
    else if(reg=='neptune'){
        for(let i=0;i<5;i++){
            data[i].innerText= `${neptune[i]}`;
        }
        url.src= neptune[5];
        searched.style.display="block";
        paragraph.style.display="none";
    }
    else if(reg=='pluto'){
        paragraph.innerText='It is now a dwarf Planet!';
        searched.style.display="none";
        paragraph.style.display="inherit";
    }
    else {
        paragraph.innerText='Enter a planet of Solar System';
        searched.style.display="none";
        paragraph.style.display="inherit";
    }
})
document.getElementById('mangalyan').style.display="none";
document.getElementById('jwst').style.display="none";
let links=document.querySelectorAll('a');
for(let ele of links){
    ele.addEventListener('click', ()=>{
        let m1=document.getElementById('hubble');
        let m2=document.getElementById('jwst');
        let m3=document.getElementById('mangalyan');
        if(ele.id=='link1'){
            m1.style.display="block";
            m2.style.display="none";
            m3.style.display="none";
        }
        else if(ele.id=='link2'){
            m1.style.display="none";
            m2.style.display="block";
            m3.style.display="none";
        }
        if(ele.id=='link3'){
            m1.style.display="none";
            m2.style.display="none";
            m3.style.display="block";
        }
    })
}
