<template>
    <div class="container">
        <div >
            <h1>Probando los test</h1>
            <NuxtLogo />            
            <h3>Vue-Utils y Jest</h3>
        </div>
         <div v-if="!active">
            <p>Are you admin ? Press the button</p>
            <button @click="active = true">PRESS</button>
        </div>
        <div v-else class="container">
            <p>NAME: {{ name }}</p>
            <p>COUNTER: {{ count }}</p>
            <div class="container">
                <input v-model="name"/>
                <hr>
                <button @click="counter()">COUNT</button>
            </div>
            <div @click="saveData()" class="save">SAVE DATA</div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import NuxtLogo from '../components/NuxtLogo.vue'
export default {
    name: 'HelloTest',
    components: { NuxtLogo },
    props: {
        admin: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            count: 0,
            name: '',
            active: false
        }
    },
    computed: {
        ...mapState(['list'])
    },
    methods: {
         ...mapMutations(['setList']),
         ...mapActions(['setList']),
        counter () {
            try {
              return this.count ++  
            } catch (error) {
                console.error(error)
            }
        },
        saveData () {
            const data = {
                name: this.name,
                count: this.count
            }
            this.$store.commit('setList', data)
            console.log(this.$store.state.list)
        }
    }
}
</script>

<style>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h1 h3{
    font-family:'Courier New', Courier, monospace;
    color: rgb(46, 44, 44);
}
p {
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: rgb(11, 75, 11);
}
button {
    background-color: rgb(150, 192, 166);
    border-radius: 15px;
    height: 40px;
    width: 90px;
}
.save {
    background-color: rgb(144, 180, 144); 
    height: 50px; 
    width: 300px;
    border-radius: 15px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
}

</style>