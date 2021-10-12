<template>
<!--grid system-->
<!--menu items that are looped through here and are imported to MyCookbook.vue page-->
<div class="m-5 row justify-content-center">
            <div v-for="(dish, index) in dishes" :key="index" class="mx-2 mb-3 px-3 border col-sm-5 col-md-4 col-lg-3 col-xl-2">
               
              <h5>{{dish.name}}</h5>
              <p>{{dish.cooking}}</p>
                 
            </div> 
            
        </div>
    
</template>

<script>

export default {
    data() {
        return{
        dishes:[
        {name:'Salads', cooking:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam totam voluptate vel eaque? Laudantium nesciunt iste quo quod optio excepturi reprehenderit blanditiis minima sunt natus sit sed.'},
        {name:'Soup', cooking:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam totam voluptate vel eaque? Laudantium nesciunt iste quo quod optio excepturi reprehenderit blanditiis minima sunt natus sit sed.'},
        {name:'Appetitzers', cooking:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam totam voluptate vel eaque? Laudantium nesciunt iste quo quod optio excepturi reprehenderit blanditiis minima sunt natus sit sed.'},
        {name:'Seafood', cooking:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam totam voluptate vel eaque? Laudantium nesciunt iste quo quod optio excepturi reprehenderit blanditiis minima sunt natus sit sed.'},
        {name:'Meat', cooking:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam totam voluptate vel eaque? Laudantium nesciunt iste quo quod optio excepturi reprehenderit blanditiis minima sunt natus sit sed.'},
        {name:'Vegetarian', cooking:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam totam voluptate vel eaque? Laudantium nesciunt iste quo quod optio excepturi reprehenderit blanditiis minima sunt natus sit sed.'},
        {name:'Desserts', cooking:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam totam voluptate vel eaque? Laudantium nesciunt iste quo quod optio excepturi reprehenderit blanditiis minima sunt natus sit sed.'},
        {name:'Drinks', cooking:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam totam voluptate vel eaque? Laudantium nesciunt iste quo quod optio excepturi reprehenderit blanditiis minima sunt natus sit sed.'},
        {name:'Snacks', cooking:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam totam voluptate vel eaque? Laudantium nesciunt iste quo quod optio excepturi reprehenderit blanditiis minima sunt natus sit sed.'}
    ]
           
    }
        
    }
}
</script>