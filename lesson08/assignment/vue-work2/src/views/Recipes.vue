<template>
  <div class="recipes">
    <!--import header from Header.vue-->
    <app-header>
      <p>A place for great recipes!</p>
    </app-header>
    <div class="bg-danger" style="--bs-bg-opacity: .2">
            <div class="m-3 p-3 text-center">
                <h3 class="display-5 text-secondary pt-2 pb-3">Recipes</h3>
                <img id="main-pic" class="img-fluid rounded-top" 
                src="../assets/sushi.jpg" alt="three raw samlmon sushi">
            </div>             
      <!--import images from RecipesGallery.vue --> 
      <!-- pass on prop on this tag -->
      <app-recipesgallery :recipes="recipes"></app-recipesgallery>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import RecipesGallery from '../components/RecipesGallery.vue';

import cupcakes from '../assets/cupcakes.jpg';
import macaroons from '../assets/macaroons.jpg';
import salad from '../assets/salad.jpg';
import vermicelli from '../assets/vermicelli.jpg';
import eggrice from '../assets/eggrice.jpg';
import friedrice from '../assets/friedrice.jpg';
import dumplings from '../assets/dumplings.jpg';
import soup from '../assets/soup.jpg';

export default {
  components: {
    'app-header': Header,
    'app-recipesgallery': RecipesGallery
  },
  data() {
    return{
     recipes:[
        {id:'1',
         name:'cupcakes',
        image:cupcakes, 
        toggleBorder:false,
        figcaption:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sunt, minus, enim, provident culpa magnam necessitatibus ipsum sapiente laudantium nam perferendis quo tempore ab? Quia voluptas velit laboriosam sed exercitationem, distinctio molestiae accusantium, eligendi voluptatem itaque voluptate sapiente inventore cupiditate asperiores consequatur optio quibusdam possimus suscipit reiciendis aperiam. Architecto, quam.'},
        {id:'2',
         name:'macaroons',
        image:macaroons, 
        toggleBorder:false,
        figcaption:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sunt, minus, enim, provident culpa magnam necessitatibus ipsum sapiente laudantium nam perferendis quo tempore ab? Quia voluptas velit laboriosam sed exercitationem, distinctio molestiae accusantium, eligendi voluptatem itaque voluptate sapiente inventore cupiditate asperiores consequatur optio quibusdam possimus suscipit reiciendis aperiam. Architecto, quam.'},
        {id:'3',
         name:'salad',
        image:salad, 
        toggleBorder:false,
        figcaption:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sunt, minus, enim, provident culpa magnam necessitatibus ipsum sapiente laudantium nam perferendis quo tempore ab? Quia voluptas velit laboriosam sed exercitationem, distinctio molestiae accusantium, eligendi voluptatem itaque voluptate sapiente inventore cupiditate asperiores consequatur optio quibusdam possimus suscipit reiciendis aperiam. Architecto, quam.'},
        {id:'4',
         name:'vermicelli',
        image:vermicelli, 
        toggleBorder:false,
        figcaption:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sunt, minus, enim, provident culpa magnam necessitatibus ipsum sapiente laudantium nam perferendis quo tempore ab? Quia voluptas velit laboriosam sed exercitationem, distinctio molestiae accusantium, eligendi voluptatem itaque voluptate sapiente inventore cupiditate asperiores consequatur optio quibusdam possimus suscipit reiciendis aperiam. Architecto, quam.'},
        {id:'5',
        name:'egg and rice',
        image:eggrice, 
        toggleBorder:false,
        figcaption:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sunt, minus, enim, provident culpa magnam necessitatibus ipsum sapiente laudantium nam perferendis quo tempore ab? Quia voluptas velit laboriosam sed exercitationem, distinctio molestiae accusantium, eligendi voluptatem itaque voluptate sapiente inventore cupiditate asperiores consequatur optio quibusdam possimus suscipit reiciendis aperiam. Architecto, quam.'},
        {id:'6',
        name:'fried rice',
        image:friedrice, 
        toggleBorder:false,
        figcaption:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sunt, minus, enim, provident culpa magnam necessitatibus ipsum sapiente laudantium nam perferendis quo tempore ab? Quia voluptas velit laboriosam sed exercitationem, distinctio molestiae accusantium, eligendi voluptatem itaque voluptate sapiente inventore cupiditate asperiores consequatur optio quibusdam possimus suscipit reiciendis aperiam. Architecto, quam.'},
        {id:'7',
        name:'dumplings',
        image:dumplings, 
        toggleBorder:false,
        figcaption:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sunt, minus, enim, provident culpa magnam necessitatibus ipsum sapiente laudantium nam perferendis quo tempore ab? Quia voluptas velit laboriosam sed exercitationem, distinctio molestiae accusantium, eligendi voluptatem itaque voluptate sapiente inventore cupiditate asperiores consequatur optio quibusdam possimus suscipit reiciendis aperiam. Architecto, quam.'},
        {id:'8',
        name:'soup',
        image:soup, 
        toggleBorder:false,
        figcaption:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sunt, minus, enim, provident culpa magnam necessitatibus ipsum sapiente laudantium nam perferendis quo tempore ab? Quia voluptas velit laboriosam sed exercitationem, distinctio molestiae accusantium, eligendi voluptatem itaque voluptate sapiente inventore cupiditate asperiores consequatur optio quibusdam possimus suscipit reiciendis aperiam. Architecto, quam.'}
     
        ]   
      
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