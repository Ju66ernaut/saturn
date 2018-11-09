<template>
  <div id="app">
    <section class="hero is-fullheight is-default is-bold">
    <div class="hero-head">
      <div class="container">
        <nav class="nav has-shadow">
          <div class="container">
            <div class="nav-left">
              <span>Score: {{this.$store.state.score}}</span>
            </div>
           <Timer></Timer>
          </div>
        </nav>
      </div>
    </div>
    <ImageOptions :imgData="imgData"></ImageOptions>
    <div class="hero-foot">
      <div class="container">
        <div class="tabs is-centered">
          <ul class="social-links">
            <li><a href="https://www.linkedin.com/in/christopher-diaz-b0864860" target="_blank"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="http://stackoverflow.com/users/2530528/ju66ernaut?tab=profile" target="_blank"><i class="fa fa-stack-overflow"></i></a></li>
            <li><a href="https://github.com/Ju66ernaut" target="_blank"><i class="fa fa-github"></i></a></li>
            <li><a href="https://www.hackerrank.com/c_diaz86" target="_blank"><i class="fa fa-code"></i></a></li>
            <li><a href="https://twitter.com/the_ju66ernaut" target="_blank"><i class="fa fa-twitter"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
  import Timer from '@/components/Timer'
  import ImageOptions from '@/components/ImageOptions'

  import mockData from './assets/mockData.js'

  export default {
    name: 'app',
    data() {
      return {
        mockData: mockData,
        imgData: this.getNewImage
      }
    },
    components: {
      Timer,
      ImageOptions
    },
    methods: {
      getNewImage() {
        //pick random image from store
        let incompleteImages = this.mockData.data.filter(d => {
          return !this.$store.state.completedImages.includes(d.id);
        });
        this.imgData = incompleteImages[Math.floor(Math.random() * incompleteImages.length)];
        //reset timer
        this.$store.commit('resetTimer');
      },
      resetGame() {
        this.$store.commit('resetStore');
      }
    },
    mounted() {
      this.getNewImage();
    },
    created() {
      this.$eventHub.$on('getNextImage', this.getNewImage);
      this.$eventHub.$on('gameLost', this.resetGame);
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
