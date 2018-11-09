<template>
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="columns is-vcentered">
          <div class="column is-5">
            <figure class="image is-4by3">
              <img :class="{ blurred: !this.$store.state.timerIsActive }" :src="imgData.imgUrl" height="300" width="400" alt="Description">
            </figure>
          </div>
          <div class="column is-6 is-offset-1">
              <div>
                <button class="button" @click="choose(opt)" v-for="opt in imgData.options">
                  {{opt}}
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'ImageOptions',
    props: ['imgData'],
    data() {
      return {

      }
    },
    methods: {
      choose(answer) {
        if(answer === this.imgData.answer) {
          this.$store.commit('stopTimer');
          this.$eventHub.$emit('stopTimer');
          alert('good job fuck boi');
          this.$store.commit('increaseScore');
          //remove this image from the array of choices
          this.$store.commit('addToCompletedImages', this.imgData.id);
          
          //get another image
          this.$eventHub.$emit('getNextImage');
        }
        else {
          //wrong answer
          this.$eventHub.$emit('gameLost');
        }
      }
    }
  }
</script>
<style scoped>
  .blurred {
    filter: blur(26px);
  }
</style>
