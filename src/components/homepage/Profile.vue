<!----------Make By YourName---------------->
 <template>
<v-layout>
<v-flex >
        <v-img
          src="https://i.redd.it/dnho7zz9et5z.jpg"
          height="300px"
        >
        </v-img>
<v-flex xs12 sm6 offset-sm3 >
        <v-card-title primary-title>
          <div>
            <div class="headline">Thanatorn Sungthong</div>
            <span class="grey--text">ID 59022277</span>
          </div>
        </v-card-title>

        <v-card-actions>
         
          <v-btn flat color="purple"><v-icon>account_box</v-icon>Edit data</v-btn>
          
          <v-btn flat color="purple"><v-icon>photo</v-icon>Edit Image</v-btn>
          <v-spacer></v-spacer>
          
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text >
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </v-slide-y-transition>
      
   <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-1"
  >
    <template v-slot:no-data>
      <v-alert :value="true" color="error" icon="warning">
        Sorry, nothing to data here :(
      </v-alert>
    </template>
  </v-data-table>

</v-flex>
</v-flex>
</v-layout>
</template>

  <script>
  import { get,sync,call } from "vuex-pathify"; 
export default {
  name: 'Root',
  /*-------------------------Load Component---------------------------------------*/
  components: {

  },
  /*-------------------------Set Component---------------------------------------*/
props:{

},
  /*-------------------------DataVarible---------------------------------------*/
  data() {
  return {
          show:false ,
          headers: [
          {
            text: 'List Subject',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          {
            text: 'Computer Architecture',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          {
            text: 'Operting System',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          {
            text: 'Component',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          {
            text: 'Software Architecture',
            align: 'left',
            sortable: false,
            value: 'name'
          },
        ],
          desserts: [],

    };
  }, 
  /*-------------------------Run Methods when Start this Page------------------------------------------*/
   async mounted() {
  /**** Call loading methods*/
      this.load(); 
  },
  /*-------------------------Run Methods when Start Routed------------------------------------------*/
   async beforeRouteEnter(to, from, next) { 
    next()
  },
  /*-------------------------Vuex Methods and Couputed Methods------------------------------------------*/
  computed:{

},
  /*-------------------------Methods------------------------------------------*/
methods:{
  /******* Methods default run ******/
  load:async function(){
}
},
  }
</script>
<style>


</style>