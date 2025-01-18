<script setup>
const debugMode = false;

import { ref, computed, onMounted } from 'vue'
import { geminiPrompt } from '../main';
import { marked } from 'marked';

marked.setOptions({
  breaks: true,
});

const response = ref('You idea comes here!')

const interestArea = ref('');
const skillLevel = ref('');
const projectScale = ref('');


const ideaPrompt = computed(() => `Generate a brief project idea pitch. 
I want to work with ${interestArea.value}.
Im at a ${skillLevel.value} level.
Im looking for a ${projectScale.value} project.
Format your response in markdown. Use emojis for extra fun!`);

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
        <h1>Idea Generator</h1>

        <div class="optionsWrapper">
            <div class="option-set">
                <label>Interest Area:</label>
                <div>
                    <input type="radio" id="interest1" value="Web Development" v-model="interestArea">
                    <label class="radio-label" for="interest1">Web Development</label>
                </div>
                <div>
                    <input type="radio" id="interest2" value="Graphic Design" v-model="interestArea">
                    <label class="radio-label" for="interest2">Graphic Design</label>
                </div>
                <div>
                    <input type="radio" id="interest3" value="Mobile Apps" v-model="interestArea">
                    <label class="radio-label" for="interest3">Mobile Apps</label>
                </div>
                <div>
                    <input type="radio" id="interest4" value="UI / UX" v-model="interestArea">
                    <label class="radio-label" for="interest4">UI / UX</label>
                </div>
                <div>
                    <input type="radio" id="interest5" value="Digital Art" v-model="interestArea">
                    <label class="radio-label" for="interest5">Digital Art</label>
                </div>
                <div>
                    <input type="radio" id="interest6" value="Electronics / Robotics" v-model="interestArea">
                    <label class="radio-label" for="interest6">Electronics / Robotics</label>
                </div>
            </div>

            <div class="option-set">
                <label>Skill Level:</label>
                <div>
                    <input type="radio" id="skill1" value="First Timer" v-model="skillLevel">
                    <label class="radio-label" for="skill1">First timer</label>
                </div>
                <div>
                    <input type="radio" id="skill2" value="Beginner (don't do habit tracker or todo apps)" v-model="skillLevel">
                    <label class="radio-label" for="skill2">Beginner</label>
                </div>
                <div>
                    <input type="radio" id="skill3" value="Intermediate" v-model="skillLevel">
                    <label class="radio-label" for="skill3">Intermediate</label>
                </div>
                <div>
                    <input type="radio" id="skill4" value="Advanced" v-model="skillLevel">
                    <label class="radio-label" for="skill4">Advanced</label>
                </div>
                <div>
                    <input type="radio" id="skill5" value="Stretch my Abilities " v-model="skillLevel">
                    <label class="radio-label" for="skill5">Stretch my Abilities </label>
                </div>
            </div>

            <div class="option-set">
                <label>Project Scale:</label>
                <div>
                    <input type="radio" id="scale1" value="Afternoon Passtime" v-model="projectScale">
                    <label class="radio-label" for="scale1">Afternoon Passtime</label>
                </div>
                <div>
                    <input type="radio" id="scale2" value="Vacation Project" v-model="projectScale">
                    <label class="radio-label" for="scale2">Vacation Project</label>
                </div>
                <div>
                    <input type="radio" id="scale3" value="Startup Potential" v-model="projectScale">
                    <label class="radio-label" for="scale3">Startup Potential</label>
                </div>
            </div>

        </div>


        <button class="btn-primary" @click="handleClick(ideaPrompt)">Generate Idea</button>

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

    padding: 10% 0;

    min-height: 90vh;
}

.responseText{
    width: 60%;	
    padding: 32px;

    border: 1px solid #ccc;
    border-radius: 30px;
}

</style>