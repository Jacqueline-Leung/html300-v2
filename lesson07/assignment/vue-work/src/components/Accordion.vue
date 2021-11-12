<template>
    <!--accordion items that are looped through here and are imported to Nutritions.vue page-->
    <div class="container">
    <div id="ingredients" class="accordion" role="tablist">
           <div class="accordion-item">
               <div  >
                    <b-card v-for="(ingredient) in ingredients" :key="ingredient.id">                    
                        <b-card-header header-tag="header" class="card-header text-center pt-4 pb-2">
                            <b-button block v-b-toggle.:id=ingredient.accordionid variant="light"><img v-bind:src="ingredient.image" class="card-img-top" style="max-width: 15rem; max-height: 15rem" v-bind:alt="ingredient.name"/></b-button>
                            <b-button block v-b-toggle.:id=ingredient.accordionid class="btn btn-success me-md-2"><h6>{{ingredient.name}}</h6></b-button> 
                        </b-card-header>
                        <b-collapse :id=ingredient.accordionid visible accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <b-card-text class="card-block text-center">
                                <p class="px-5 py-2">{{ingredient.benefit}}</p>
                            </b-card-text>
                        </b-card-body>
                        </b-collapse>                    
                    </b-card>
               </div> 
            </div>     
    </div>
    </div>
</template>

<script>
import lettuceRS from '../assets/lettuceRS.jpg';
import tomatoesRS from '../assets/tomatoesRS.jpg';
import riceRS from '../assets/riceRS.jpg';
import gingerRS from '../assets/gingerRS.jpg';
import cinnamonRS from '../assets/cinnamonRS.jpg';
import lemonRS from '../assets/lemonRS.jpg';

export default {
    data() {
        return{
         ingredients:[
     {id:'1',
         name:'Lettuce',
     image:lettuceRS, 
     accordionid:"accordion-1",
     benefit:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam totam voluptate vel eaque? Laudantium nesciunt iste quo quod optio excepturi reprehenderit blanditiis minima sunt natus sit sed.'},
     {id:'2',
         name:'Tomatoes', 
     image:tomatoesRS, 
     accordionid:"accordion-2",
     benefit:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam totam voluptate vel eaque? Laudantium nesciunt iste quo quod optio excepturi reprehenderit blanditiis minima sunt natus sit sed.'},
     {id:'3',
         name:'Rice', 
     image:riceRS, 
     accordionid:"accordion-3",
     benefit:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam totam voluptate vel eaque? Laudantium nesciunt iste quo quod optio excepturi reprehenderit blanditiis minima sunt natus sit sed.'},
     {id:'4',
         name:'Ginger',
     image:gingerRS, 
     accordionid:"accordion-4",
     benefit:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam totam voluptate vel eaque? Laudantium nesciunt iste quo quod optio excepturi reprehenderit blanditiis minima sunt natus sit sed.'},
     {id:'5',
         name:'Cinnamon',
     image:cinnamonRS,  
     accordionid:"accordion-5",
     benefit:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam totam voluptate vel eaque? Laudantium nesciunt iste quo quod optio excepturi reprehenderit blanditiis minima sunt natus sit sed.'},
     {id:'6',
         name:'Lemon', 
     image:lemonRS,    
     accordionid:"accordion-6",
         benefit:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam totam voluptate vel eaque? Laudantium nesciunt iste quo quod optio excepturi reprehenderit blanditiis minima sunt natus sit sed.'} 
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