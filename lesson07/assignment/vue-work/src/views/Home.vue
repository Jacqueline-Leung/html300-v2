<template>
  <div class="home">
    <!--import header from Header.vue-->
    <app-header></app-header>
        <!--apply v-if and v-else -->
        <div>
          <div class="d-grid gap-2 col-4 m-3 mx-auto" display-2 mb-3>First time visitor?</div>
          <div class="d-grid gap-2 col-4 mx-auto">
          <b-button class="btn btn-success me-md-2" type="button" v-on:click="yes = !yes">Yes</b-button>         
          </div>
          <p v-if="yes" class="d-grid gap-2 col-4 m-3 mx-auto" display-4 mb-3>Welcome!</p>
          <p v-else></p>

        </div>
            <!--Carousel-->
        <div class="m-5 p-3">
            <b-carousel id="carousel" class="carousel slide carousel-fade" pause="false" wrap="true" data-bs-touch="false" data-bs-ride="carousel" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
                <div class="carousel-indicators">
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <!--import carousel items from Carousel.vue -->           
                <app-carousel></app-carousel>
            
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>
            </b-carousel>
        </div> 

  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Carousel from '../components/Carousel.vue';
export default {
  components: {
    'app-header': Header,
    'app-carousel': Carousel
  },
  data() {
    return{
     yes: false,
     no: false,      
    }    
  }
}
</script>

<style lang="scss" scoped>
.main {
    padding: 2rem;
  padding: 2rem;
}
//main page
.carousel-inner {
  width: 100%;
  height: auto;
  max-height: 500px;
  border-radius: 5px;
}
.carousel-caption {
  top: 0;
  bottom: auto;
}

</style>


