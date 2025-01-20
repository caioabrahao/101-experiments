<script setup>
const debugMode = false;

import { ref, computed, onMounted } from 'vue'
import { geminiPrompt } from '../main';
import { marked } from 'marked';

marked.setOptions({
  breaks: true,
});

const lang = 'pt-br'
const response = ref('You idea comes here!')

const interestArea = ref('');
const skillLevel = ref('');
const projectScale = ref('');


const ideaPrompt = computed(() => `Generate a creative project Idea pitch. Something unique and fun!
I want to work with ${interestArea.value}.
Im at a ${skillLevel.value} level.
Im looking for a ${projectScale.value} project.
Format your response in markdown. Make sure to answer in ${lang} Use emojis for extra fun!`);

function handleClick(promptInput) {
    response.value = "Generating Content..."
    geminiPrompt(promptInput)
    .then((outcome) => {
        response.value = marked(outcome);
    })

}

onMounted(() => {
    
});

</script>

<template>
    <section class="section">
        <h1>Idea Generator (Beta)</h1>

        <div class="optionsWrapper">
            <div class="option-set">
            <label>Área de Interesse:</label>
            <div>
                <input type="radio" id="interest1" value="Web Development" v-model="interestArea">
                <label class="radio-label" for="interest1">Desenvolvimento Web</label>
            </div>
            <div>
                <input type="radio" id="interest3" value="Mobile Development" v-model="interestArea">
                <label class="radio-label" for="interest3">Aplicativos Mobile</label>
            </div>
            <div>
                <input type="radio" id="interest4" value="UI/UX" v-model="interestArea">
                <label class="radio-label" for="interest4">UI / UX</label>
            </div>
            <div>
                <input type="radio" id="interest5" value="Dev Ops" v-model="interestArea">
                <label class="radio-label" for="interest5">Dev Ops</label>
            </div>
            <div>
                <input type="radio" id="interest6" value="Electronics" v-model="interestArea">
                <label class="radio-label" for="interest6">Eletrônica</label>
            </div>
            </div>

            <div class="option-set">
            <label>Nível de Habilidade:</label>
            <div>
                <input type="radio" id="skill1" value="I want to learn" v-model="skillLevel">
                <label class="radio-label" for="skill1">Quero aprender</label>
            </div>
            <div>
                <input type="radio" id="skill2" value="Beginner. I know a little and want to improve." v-model="skillLevel">
                <label class="radio-label" for="skill2">Iniciante</label>
            </div>
            <div>
                <input type="radio" id="skill3" value="Intermediate" v-model="skillLevel">
                <label class="radio-label" for="skill3">Intermediário</label>
            </div>
            <div>
                <input type="radio" id="skill4" value="Avançado" v-model="skillLevel">
                <label class="radio-label" for="skill4">Avançado</label>
            </div>
            <div>
                <input type="radio" id="skill5" value="Desafiar minhas Habilidades" v-model="skillLevel">
                <label class="radio-label" for="skill5">Desafiar minhas Habilidades</label>
            </div>
            </div>

            <div class="option-set">
            <label>Escala do Projeto:</label>
            <div>
                <input type="radio" id="scale1" value="Passatempo de Tarde" v-model="projectScale">
                <label class="radio-label" for="scale1">Passatempo de Tarde</label>
            </div>
            <div>
                <input type="radio" id="scale2" value="Projeto de Férias" v-model="projectScale">
                <label class="radio-label" for="scale2">Projeto de Férias</label>
            </div>
            <div>
                <input type="radio" id="scale3" value="Potencial de Startup" v-model="projectScale">
                <label class="radio-label" for="scale3">Potencial de Startup</label>
            </div>
            </div>

        </div>

        <div class="genButtons">
            <button class="btn-primary" @click="handleClick(ideaPrompt)">Generate Idea</button>
            <button class="btn-secondary"> Me surpreenda</button>
        </div>
        

        <div v-if="debugMode === true">
            <h4>Debugging Display</h4>
            <p>{{ ideaPrompt }}</p>
            <p style="opacity: .5">SELECTED OPTIONS: {{ interestArea }} | {{ skillLevel }} | {{ projectScale }}</p>
        </div>

        <div class="responseText markdownContent" v-html="response"></div>
    </section>
</template>


<style scoped>
/* Radio Button Styles */
.optionsWrapper{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 32px;
}

.option-set{
    display: flex;
    flex-direction: column;
    gap: 8px;
}
input[type="radio"] {
    display: none;
}
.radio-label {
    display: inline-block;
    padding: 10px 20px;
    border: 2px solid #ccc;
    border-radius: 16px;
    cursor: pointer;
    transition: background-color 0.1s, border-color 0.1s;

    width: 100%;
}
input[type="radio"]:checked + .radio-label {
    background-color: #007BFF;
    border-color: #007BFF;
    color: white;
}
.radio-label:hover {
    background-color: #a7a7a7;
}

.section{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    padding: 10% 0;

    min-height: 90vh;
}

.responseText{
    width: 60%;	
    padding: 32px;

    border: 1px solid #ccc;
    border-radius: 30px;
}

.genButtons{
    display: flex;
    gap: 16px;
}

@media (max-width: 768px) {
    .section{
        padding: 10vh 0;
    }
    .optionsWrapper{
        flex-direction: column;
    }
    .option-set{
        width: 100%;
    }
    .radio-label {
        width: 100%;
    }
    .responseText{
        width: 90%;
    }
}

</style>