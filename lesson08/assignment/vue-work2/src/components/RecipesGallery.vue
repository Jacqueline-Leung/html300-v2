<template>
      <!--Images, cards, grid system-->
      <!--images that are looped through here and are imported to Recipes.vue page-->
      <div class="container">
        <div class="row">
            <div v-for="(recipe, index) in recipes" :key="index" class="figure text-center bg-light border m-4 col">                
                <div v-bind:class="{'showBorder': recipe.toggleBorder, 'hideBorder': !recipe.toggleBorder}" v-on:click="recipe.toggleBorder=!recipe.toggleBorder">
                <p class="d-grid gap-2 col-4 m-3 mx-auto" display-3 mb-3 :title="recipe.name">{{recipe.name}}</p>
                <figure >
                    <img class="figure-img rounded-top img-max py-3" :src=recipe.image :alt="recipe.name" />
                    <figcaption class="figure-caption px-2 pb-3">{{recipe.figcaption}}</figcaption>
                </figure>
                 </div>
            </div>
        </div>
      </div>
</template>


<script>
import shareMixin from '../mixin/shareMixin';

export default {
  mixin:[shareMixin],
    //prop validation
    props:{
      recipes:{
        type:Array,
        required:true
      }
    },
    data() {
        return{
        }
        
    }   
}
</script>


<style lang="scss" scoped>
.showBorder{
    border: 15px solid lightblue;
}
.hideBorder{
    border: 15px hidden lightblue;
}
.img-max {
  max-width: 300px;
}
#main-pic {
  max-height: 380px;
  max-width: auto;
}

</style>