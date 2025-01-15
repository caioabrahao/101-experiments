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
Format your response in markdown. Use emojis in the headings for extra fun!`);

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
            <div>
                <label>Interest Area:</label>
                <div>
                    <input type="radio" id="interest1" value="Web Development" v-model="interestArea">
                    <label for="interest1">Web Development</label>
                </div>
                <div>
                    <input type="radio" id="interest2" value="Graphic Design" v-model="interestArea">
                    <label for="interest2">Graphic Design</label>
                </div>
                <div>
                    <input type="radio" id="interest3" value="Mobile Apps" v-model="interestArea">
                    <label for="interest3">Mobile Apps</label>
                </div>
            </div>

            <div>
                <label>Skill Level:</label>
                <div>
                    <input type="radio" id="skill1" value="Beginner" v-model="skillLevel">
                    <label for="skill1">Beginner</label>
                </div>
                <div>
                    <input type="radio" id="skill2" value="Intermediate" v-model="skillLevel">
                    <label for="skill2">Intermediate</label>
                </div>
                <div>
                    <input type="radio" id="skill3" value="Advanced" v-model="skillLevel">
                    <label for="skill3">Advanced</label>
                </div>
            </div>

            <div>
                <label>Project Scale:</label>
                <div>
                    <input type="radio" id="scale1" value="Afternoon Passtime" v-model="projectScale">
                    <label for="scale1">Afternoon Passtime</label>
                </div>
                <div>
                    <input type="radio" id="scale2" value="Vacation Project" v-model="projectScale">
                    <label for="scale2">Vacation Project</label>
                </div>
                <div>
                    <input type="radio" id="scale3" value="Startup Potential" v-model="projectScale">
                    <label for="scale3">Startup Potential</label>
                </div>
            </div>
        </div>


        <button class="btn-primary" @click="handleClick(ideaPrompt)">Generate Idea</button>

        <div v-if="debugMode === true">
            <p>{{ ideaPrompt }}</p>
            <p style="opacity: .5">SELECTED OPTIONS: {{ interestArea }} | {{ skillLevel }} | {{ projectScale }}</p>

        </div>
        <div class="responseText markdownContent" v-html="response"></div>
    </section>
</template>


<style scoped>
.section{
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 10% 0;

    min-height: 90vh;
}

.optionsWrapper{
    display: flex;
    justify-content: space-around;
    gap: 32px;
}

.responseText{
    width: 60%;	
    padding: 32px;

    border: 1px solid #ccc;
    border-radius: 30px;

    h1{
        font-size: 2rem;
    }
}

</style>