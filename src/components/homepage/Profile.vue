<template>
<layout>
    <v-card>
        <v-img : src="item" aspect-ratio="2.75">

        </v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div> {{ card_text }} </div>
          </div>
        </v-card-title>

<v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
        
    </v-card>
</layout>
</template>