<template>
  <div class="recipes">
    <!--import header from Header.vue-->
    <app-header></app-header>
    <div class="bg-danger" style="--bs-bg-opacity: .2">
            <div class="m-3 p-3 text-center">
                <h3 class="display-5 text-secondary pt-2 pb-3">Recipes</h3>
                <img id="main-pic" class="img-fluid rounded-top" 
                src="../assets/sushi.jpg" alt="three raw samlmon sushi">
            </div>             
      <!--import images from RecipesGallery.vue --> 
      <app-recipesgallery></app-recipesgallery>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import RecipesGallery from '../components/RecipesGallery.vue';
export default {
  components: {
    'app-header': Header,
    'app-recipesgallery': RecipesGallery
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