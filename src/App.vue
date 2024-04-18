

<template>
   <div class="applist">
    <div class="applist__title">
      <h1>Lista de Tarefa</h1>
      <button class="applist__btn" @click="openModal">CRIAR</button>
     
    </div>
     <div class="applist__search">
      <i class="ri-search-line"></i>
       <input type="text" placeholder="Digite sua pesquisa">
       <button class="applist__btnpesq">Search</button>
       
     </div>
     <modal :isOpen="isModalOpen" @close="closeModal"></modal>
     <div class="applist__tarefas">
      <div class="applist__todo">
       <div class="applist__todcard" v-for="tod in todo">
        <input type="checkbox" v-model="tod.tarefConcluir">
        <div>{{ tod.name }}</div>
        <div>{{ tod.selctOption }}</div>
        <button @click='removeTodo(tod)'>Delete</button>
       </div>
      </div>
     </div>
      
   </div>
</template>

<script>
import {ref,computed, watch} from 'vue'
import Modal from './components/modal.vue'
import { todo } from './components/modal.vue'

export default {
  components: {
    Modal,
    todo

  },



  data() {
    return {
       isModalOpen:false,
       todo,
     
        
      }
    },

  methods:{
  openModal(){
    this.isModalOpen=true
  },
  closeModal(){
   this.isModalOpen=false
  },
  removeTodo(element){
      todo.value=todo.value.filter(t=>t!==element)

      console.log(todo)
  }
  },


}
 
  
 
</script>


<style>

*{
  outline: none;
  border: none;
}

   body{
    display: flex;
    align-items: center;
    justify-content: center;
    
   }
      .applist{
        height: 100vh;

        padding: 1rem;
        border-radius: 5px;
        background-color: #79A7AA;
        width: 90%;
      }
      .applist__btn{
        width: 100%;
        outline: none;
        padding: 1rem;
        border: none;
        background-color: #34D444;
      }
      .applist__search{
        display: flex;
        margin-top: 2rem;
        justify-content: center;
        widows: 300px;
      }
     .applist__search input{
      width: 70%;
      padding: .2rem;
     }
     .applist__btnpesq{
      background-color: red;
      border-radius:  10px 40px 40px 10px;
      padding: .2rem;
     }
     .applist__search i{
        background-color: white;
        color:black;
        padding: .2rem;
     }

     .applist__todo{
        padding: 1rem;
        display: flex;
        
        flex-direction: column;
        justify-content: center;
        align-items: center;
     
      gap: 1rem;
      
     }
     .applist__tarefas{
      margin-top: 2rem;
      height: 70%;
      overflow: auto;
     }
     .applist__todcard{
      
      padding: 1.2rem;
      width: 50%;
      background-color: red;
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      
      
     }
</style>
