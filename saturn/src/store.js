import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        score: 0,
        timeLeft: 10,
        timerIsActive: false,
        completedImages: []
    },
    mutations: {
        increaseScore: state => state.score++,
        startTimer: state => state.timerIsActive = true,
        stopTimer: state => state.timerIsActive = false,
        resetTimer: state => state.timeLeft = 10,
        countdown: state => state.timeLeft--,
        addToCompletedImages: (state, imgId) => state.completedImages.push(imgId),
        resetStore: state => {
            state.score = 0;
            state.timeLeft = 10;
            state.timerIsActive = false;
            state.completedImages = [];
        }
    }
})

export default store;