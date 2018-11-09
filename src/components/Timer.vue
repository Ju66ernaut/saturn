<template>
    <div>
      <button class="button" @click="beginCountdown">Begin</button> <br>
     <span>{{this.$store.state.timeLeft}}</span>
    </div>
</template>

<script>
  let timer;
  export default {
    name: 'Timer',
    data() {
      return {
        
      }
    },
    created() {
      this.$eventHub.$on('stopTimer', function() {
        clearInterval(timer);
      });
      this.$eventHub.$on('gameLost', function() {
        alert('game over');
        clearInterval(timer);
      });
    },
    methods: {
      beginCountdown: function() {
        this.$store.commit('startTimer');
        timer = setInterval(this.tick, 1000);
        return timer;
      },
      tick: function() {
        if (this.$store.state.timeLeft === 0) {
          this.$store.commit('stopTimer');
          alert('times up');
          clearInterval(timer);
        }
        else {
          this.$store.commit('countdown');
        }
      }
    }
  }
</script>
