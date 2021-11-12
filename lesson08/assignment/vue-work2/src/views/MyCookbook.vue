<template>
  <div class="my-cookbook">
    <!--import header from Header.vue-->
    <app-header>
      <p>Your favorite menus!</p>
    </app-header>
     <!--Jumbotron-->
        <div class="jumbotron jumbotron-fluid background bg-success p-5">
            <div class="container">
                <div class="display-4 mb-3">My Cookbook</div>
                <p class="lead">Create your own cookbook, fill it with your favorite recipes.</p>
           </div>
        </div>
        <!--adding tooltips-->
        <div class="m-5 px-5">
            <h3>My cookbook</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere, quaerat cum <a href="#" data-bs-toggle="tooltip" title="vegan">cumque</a> harum culpa suscipit eum atque, voluptas soluta consequatur minus error autem quas! Molestias id ex labore dolor molestiae laboriosam veritatis, libero, excepturi animi neque eius? Minus perferendis saepe, harum perspiciatis <a href="#" data-bs-toggle="tooltip" title="lactose-free">aneque</a> quaerat error eveniet suscipit dignissimos, iure vitae porro sint exercitationem. Excepturi enim porro quibusdam modi nam architecto nobis.</p>
        </div>
        <!--grid system-->
        <!--import menu items from Menu.vue -->
        <app-menu></app-menu>
        <div class="m-5 row justify-content-center">
            <div v-for="(dish, index) in dishes" :key="index" class="mx-2 mb-3 px-3 border col-sm-5 col-md-4 col-lg-3 col-xl-2">
               
              <h5>{{dish.name}}</h5>
              <p>{{dish.cooking}}</p>
                 
            </div> 
            
        </div>

  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Menu from '../components/Menu.vue';

export default {
  components: {
    'app-header': Header,
    'app-menu': Menu
  },
  data() {
    return{
      
    }
    
  }
}
</script>

<style lang="scss" scoped>
.jumbotron {
  background-image: url("../assets/cookbook-banner.jpg");
  background-size: cover;
}
</style>


