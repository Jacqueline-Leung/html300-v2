<template>
    <!--Nav bar-->
            <nav class="navbar navbar-light bg-light navbar-expand-md">
                <div class="container">
                    <div class="navbar-brand text-success">Eat Well</div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleNav" aria-controls="toggleNav" aria-expanded="false" aria-label="toggle navigation"><span class="navbar-toggler-icon"></span></button>                 
                    <div class="collapse navbar-collapse" id="toggleNav">
                        <div class="navbar-nav">
                            <router-link to="/" class="nav-item nav-link" >Home</router-link>
                            <router-link to="/Recipes" class="nav-item nav-link" >Recipes</router-link>                            
                            <router-link to="/Nutritions" class="nav-item nav-link" >Nutritions</router-link>
                            <router-link to="/MyCookbook" class="nav-item nav-link" >My Cookbook</router-link>                           
                        </div>
                     </div>
                </div>
             </nav>
</template>

<script>

export default {
    data() {
        return{
           
        }
        
    }
}
</script>

<style scoped>
nav{
    background: pink;
    padding:10px;
}
h1{
    color:#222;
}

</style>

