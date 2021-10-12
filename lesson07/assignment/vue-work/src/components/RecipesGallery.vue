<template>
      <!--Images, cards, grid system-->
      <!--images that are looped through here and are imported to Recipes.vue page-->
      <div class="container">
        <div class="row" >
            <div v-for="(recipe, index) in recipes" :key="index" class="figure text-center bg-light border m-4 col">                
                <figure >
                    <img class="figure-img rounded-top img-max py-3" :src=recipe.image v-bind:alt="recipe.name" />
                    <figcaption class="figure-caption px-2 pb-3">{{recipe.figcaption}}</figcaption>
                </figure> 
            </div>
        </div>
      </div>
</template>


<script>
import cupcakes from '../assets/cupcakes.jpg';
import macaroons from '../assets/macaroons.jpg';
import salad from '../assets/salad.jpg';
import vermicelli from '../assets/vermicelli.jpg';
import eggrice from '../assets/eggrice.jpg';
import friedrice from '../assets/friedrice.jpg';
import dumplings from '../assets/dumplings.jpg';
import soup from '../assets/soup.jpg';


export default {
    data() {
        return{
         recipes:[
        {id:'1',
         name:'cupcakes',
        image:cupcakes, 
        figcaption:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sunt, minus, enim, provident culpa magnam necessitatibus ipsum sapiente laudantium nam perferendis quo tempore ab? Quia voluptas velit laboriosam sed exercitationem, distinctio molestiae accusantium, eligendi voluptatem itaque voluptate sapiente inventore cupiditate asperiores consequatur optio quibusdam possimus suscipit reiciendis aperiam. Architecto, quam.'},
        {id:'2',
         name:'macaroons',
        image:macaroons, 
        figcaption:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sunt, minus, enim, provident culpa magnam necessitatibus ipsum sapiente laudantium nam perferendis quo tempore ab? Quia voluptas velit laboriosam sed exercitationem, distinctio molestiae accusantium, eligendi voluptatem itaque voluptate sapiente inventore cupiditate asperiores consequatur optio quibusdam possimus suscipit reiciendis aperiam. Architecto, quam.'},
        {id:'3',
         name:'salad',
        image:salad, 
        figcaption:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sunt, minus, enim, provident culpa magnam necessitatibus ipsum sapiente laudantium nam perferendis quo tempore ab? Quia voluptas velit laboriosam sed exercitationem, distinctio molestiae accusantium, eligendi voluptatem itaque voluptate sapiente inventore cupiditate asperiores consequatur optio quibusdam possimus suscipit reiciendis aperiam. Architecto, quam.'},
        {id:'4',
         name:'vermicelli',
        image:vermicelli, 
        figcaption:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sunt, minus, enim, provident culpa magnam necessitatibus ipsum sapiente laudantium nam perferendis quo tempore ab? Quia voluptas velit laboriosam sed exercitationem, distinctio molestiae accusantium, eligendi voluptatem itaque voluptate sapiente inventore cupiditate asperiores consequatur optio quibusdam possimus suscipit reiciendis aperiam. Architecto, quam.'},
        {id:'5',
        name:'egg and rice',
        image:eggrice, 
        figcaption:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sunt, minus, enim, provident culpa magnam necessitatibus ipsum sapiente laudantium nam perferendis quo tempore ab? Quia voluptas velit laboriosam sed exercitationem, distinctio molestiae accusantium, eligendi voluptatem itaque voluptate sapiente inventore cupiditate asperiores consequatur optio quibusdam possimus suscipit reiciendis aperiam. Architecto, quam.'},
        {id:'6',
        name:'fried rices',
        image:friedrice, 
        figcaption:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sunt, minus, enim, provident culpa magnam necessitatibus ipsum sapiente laudantium nam perferendis quo tempore ab? Quia voluptas velit laboriosam sed exercitationem, distinctio molestiae accusantium, eligendi voluptatem itaque voluptate sapiente inventore cupiditate asperiores consequatur optio quibusdam possimus suscipit reiciendis aperiam. Architecto, quam.'},
        {id:'7',
        name:'dumplings',
        image:dumplings, 
        figcaption:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sunt, minus, enim, provident culpa magnam necessitatibus ipsum sapiente laudantium nam perferendis quo tempore ab? Quia voluptas velit laboriosam sed exercitationem, distinctio molestiae accusantium, eligendi voluptatem itaque voluptate sapiente inventore cupiditate asperiores consequatur optio quibusdam possimus suscipit reiciendis aperiam. Architecto, quam.'},
        {id:'8',
        name:'soup',
        image:soup, 
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