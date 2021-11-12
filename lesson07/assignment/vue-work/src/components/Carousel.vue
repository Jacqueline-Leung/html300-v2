<template>
        <!--carousel items that are looped through here and are imported to Home.vue page-->
        <div class="container">
            <div class="carousel-inner">
                <div v-for="ingredient in ingredients" :key="ingredient.id">
                <div class="carousel-item">
                    <img :src="ingredient.image" class="d-block w-100" :alt="ingredient.name" />
                    <div class="carousel-caption text-secondary" style="--bs-bg-opacity: .1">
                    <h4>{{ingredient.name}}</h4>                 
                    </div>
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
     },
     {id:'2',
         name:'Tomatoes', 
     image:tomatoesRS, 
     },
     {id:'3',
         name:'Rice', 
     image:riceRS, 
     },
     {id:'4',
         name:'Ginger',
     image:gingerRS, 
     },
     {id:'5',
         name:'Cinnamon',
     image:cinnamonRS,  
     },
     {id:'6',
         name:'Lemon', 
     image:lemonRS,    
     } 
    ]   
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