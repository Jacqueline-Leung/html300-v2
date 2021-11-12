//set share method in mixin
export const border = {
    data() {
        return {
            'recipe.toggleBorder': false,
        }
       },
       methods: {
        'recipe.toggleBorder'()
           {
            this.isHidden = !this.isHidden;
           }
       }
      
}
   