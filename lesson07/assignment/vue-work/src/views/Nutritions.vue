<template>
  <div class="nutritions bg-warning pb-5" style="--bs-bg-opacity: .1">
    <!--import header from Header.vue-->
    <app-header></app-header>
    <div class="m-3 p-3 text-center">
      <h3 class="display-5 text-secondary pt-2 pb-3">Nutritions</h3>
      <img id="main-pic" class="img-fluid rounded-top" 
      src="../assets/tomatoes-cut.jpg" alt="tomatoes">
    </div>
    <!--import accordion items from Accordion.vue -->
    <app-accordion></app-accordion>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Accordion from '../components/Accordion.vue';

export default {
  components: {
    'app-header': Header,
    'app-accordion': Accordion
  },
  data() {
    return{
    
      
    }
    
  }
}
</script>

<style lang="scss" scoped>
.img-max {
  max-width: 300px;
}
#main-pic {
  max-height: 380px;
  max-width: auto;
}
</style>