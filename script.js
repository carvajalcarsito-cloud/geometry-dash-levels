const levels = [

{
name:"Neon Speed",
difficulty:"Hard",
file:"niveles/neon-speed.gmd",
preview:"preview/neon-speed.png"
},

{
name:"Dark Pulse",
difficulty:"Insane",
file:"niveles/dark-pulse.gmd",
preview:"preview/dark-pulse.png"
}

]

function loadLevels(){

const container = document.getElementById("levels")

container.innerHTML=""

levels.forEach(level=>{

container.innerHTML += `
<div class="level">

<img src="${level.preview}">

<h3>${level.name}</h3>

<p>Dificultad: ${level.difficulty}</p>

<a href="${level.file}" download>

<button>Descargar</button>

</a>

</div>
`

})

}

loadLevels()

document.getElementById("search").addEventListener("input",function(){

const text = this.value.toLowerCase()

const filtered = levels.filter(level => level.name.toLowerCase().includes(text))

const container = document.getElementById("levels")

container.innerHTML=""

filtered.forEach(level=>{

container.innerHTML += `
<div class="level">

<img src="${level.preview}">

<h3>${level.name}</h3>

<p>Dificultad: ${level.difficulty}</p>

<a href="${level.file}" download>

<button>Descargar</button>

</a>

</div>
`

})

})
