<script setup>
import { ref } from 'vue';
let currentSlide = ref(1);

const interestArea = ref(null);
const skillLevel = ref(null);
const hoveredButton = ref(null);

function nextSlide(){
    currentSlide.value += 1;
}

function interestAreaSelect(area){
    interestArea.value = area;
    document.getElementById(area).classList.add('active');
}

</script>


<template>
<div class="buttons">
    <button @click="currentSlide = 1">Slide 1</button>
    <button @click="currentSlide = 2">Slide 2</button>
    <button @click="currentSlide = 3">Slide 3</button>
    <button @click="currentSlide = 4">Slide 4</button>
    <button @click="currentSlide = 5">Slide 5</button>
</div>

<transition class="transition-wrapper">
<div v-if="currentSlide === 1" class="slide 1" id="slide1">
    <p>1</p>
    <h1>Bem-Vindo ao 101 EXPERIMENTS!</h1>
    <p>Esse guia rápido vai te familiarizar com o desafio e te botar no caminho certo para começar a aprimorar suas habilidades!</p>

    <button @click="nextSlide" class="btn-primary">Vamos começar! 🌟</button>
</div>

<div v-else-if="currentSlide === 2" class="slide" id="slide2">
    <p>2</p>
    <h1>Sobre o 101EXP</h1>
    <p>O objetivo é simples: criar 101 experimentos</p>
    <p>Você pode trabalhar em projetos de diversas áreas como programação, design, escrita ou qualquer outro que você queira!</p>
    <p>Cada experimentos te ajuda a crescer e aprender uma nova habilidade, seja iniciante, intermediário ou avançado!</p>

    <button @click="nextSlide" class="btn-primary">Entendido! 👍</button>
</div>

<div v-else-if="currentSlide === 3" class="slide" id="slide3">
    <p>3</p>
    <h1>Areas de Interesse</h1>
    <p>Quais áreas você está interessado em aprender ou aprimorar?</p>
    <div class="options">
        <label>
            <input type="radio" name="interestArea" value="programming" @change="interestAreaSelect('programming')" />
            <span class="option-btn"><i class="ri-braces-line"></i> Programação</span>
        </label>
        <label>
            <input type="radio" name="interestArea" value="design" @change="interestAreaSelect('design')" />
            <span class="option-btn"><i class="ri-palette-line"></i> Design</span>
        </label>
        <label>
            <input type="radio" name="interestArea" value="writing" @change="interestAreaSelect('writing')" />
            <span class="option-btn"><i class="ri-quill-pen-line"></i> Escrita</span>
        </label>
    </div>
    

    <button @click="nextSlide" class="btn-primary">Confirmar</button>
</div>

<div v-else-if="currentSlide === 4" class="slide" id="slide4">
    <p>4</p>
    <h1>Nível de Experiência</h1>
    <p>Qual seu nível de habilidade e experiência nessa área?</p>
    <div class="options">
        <button @mouseover="hoveredButton = 'Beginner'" @mouseleave="hoveredButton = null" @click="skillLevel = 'Beginner'" class="option-btn"><i class="ri-braces-line"></i> Iniciante</button>
        <button @mouseover="hoveredButton = 'Intermediate'" @mouseleave="hoveredButton = null" @click="skillLevel = 'Intermediate'" class="option-btn"><i class="ri-palette-line"></i> Intermediário</button>
        <button @mouseover="hoveredButton = 'Advanced'" @mouseleave="hoveredButton = null" @click="skillLevel = 'Advanced'" class="option-btn"><i class="ri-quill-pen-line"></i> Avançado</button>
    </div>
    <div class="option-description-wrapper">
        <p v-if="hoveredButton === 'Beginner'" class="option-description">Estou só começando... Pronto para aprender!</p>
        <p v-if="hoveredButton === 'Intermediate'" class="option-description">Eu já criei uma coisa ou outra antes...</p>
        <p v-if="hoveredButton === 'Advanced'" class="option-description">Estou confortável em criar coisas mais complexas!</p>
    </div>
</div>

<div v-else-if="currentSlide === 5" class="slide" id="slide5">
    <p>5</p>
    <h1>Tudo pronto!</h1>
    <p>Baseado na suas respostas criamos um roadmap personalizado para você começar sua jornada de 101 Experimentos!</p>
    
    <button class="btn-primary">Veja seu primeiro Experimento!</button>
</div>

</transition>


</template>


<style scoped>
h1, h2{
    font-size: 3rem;
}
p{
    font-size: 1.2rem;
}

.options{
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
}

.option-btn{
    padding: 8px 16px;
    margin: 8px;
    border: 1px solid black;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    text-transform: uppercase;

    cursor: pointer;

    width: 150px;
    i{
        font-size: 2rem;
    }
}

.option-description-wrapper{
    height: 1.2rem;
}

.buttons{
    position: absolute;
    z-index: 1000;

    bottom: 16px;
    right: 16px;
}

.slide{
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 96px;
}

</style>