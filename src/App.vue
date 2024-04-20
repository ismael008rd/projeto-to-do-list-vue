

<template>
   <div class="applist">
    <div class="applist__title">
      <h1>Lista de Tarefa</h1>
      <button class="applist__btn" @click="openModal">CRIAR</button>
     
    </div>
     <div class="applist__search">
      <div class="applist__iconepesqui">
        <i class="ri-search-line"></i>
      </div>
    
       <input type="text"v-model="nametodo" @input="seachMenu" placeholder="Digite sua pesquisa">
      
      
       <button class="applist__btnpesq" @click="searChe" >Search</button>
       
     </div>
     <modal :isOpen="isModalOpen" @close="closeModal"></modal>
     <div class="applist__tarefas">
      <div class="applist__todo">
       <div class="applist__todcard" v-for="tod in todo">
        <input type="checkbox" v-model="tod.tarefConcluir">
        <div>{{ tod.name }}</div>
        <div>{{ tod.selctOption }}</div>
        <button @click='removeTodo(tod)' class="applist__delete"><i class="ri-delete-bin-6-line"></i></button>
       </div>
      </div>
     </div>
      
   </div>
</template>

<script>
import {ref,computed, watch} from 'vue'
import Modal from './components/modal.vue'
import { todo } from './components/modal.vue'

const nametodo=ref('')
let t1,t2

export default {
  components: {
    Modal,
    todo

  },



  data() {
    return {
       isModalOpen:false,
       todo,
       nametodo,
       t1,
       t2
     
        
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
  },
  seachMenu(){
    // console.log('digitando')
    // console.log(nametodo.value)
    const vertodocontent=todo.value.map((to,index)=>{
       if(to.name.toLowerCase().includes(nametodo.value.toLowerCase())){
       const namee= to.name
       const selecteded= to.selctOption
       return(
       [ namee,
        selecteded]
       )
       } ;
  
      
   
    
    })
    console.log(vertodocontent)
  },
  searChe(){
    alert('em desenvolvimento meu nobre ')
  }
  
  },
  computed:{
  
  }

}
 
  
 
</script>


<style>

*{
  outline: none;
  box-sizing: border-box;
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
        color: white;
        padding: 1rem;
        border: none;
        background-color: #34D444;
      }
      .applist__btn:hover{
        background-color: #0fa81f;
      }
      .applist__search{
        
        display: flex;
        margin-top: 2rem;
        justify-content: center;
       
      }
      .applist__iconepesqui{
        width:5%;
        display: flex;
        justify-content: center;
       background-color: #ddd;
}
     .applist__search input{
      width: 60%;
      padding-block: .5rem;
     }
     .applist__btnpesq{
      width: auto;
      background-color:rgb(43, 30, 139);
      color: white;
      border-radius:  0px 40px 40px 0px;
      padding-block: .5rem;
     }
     .applist__btnpesq:hover{
      background-color: rgb(45, 27, 27);
     }
     .applist__search i{
        background-color: #ddd;
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
      width: 100%;
      border-radius: 1rem;
      min-width: 300px;
      background-color: #D9D9D9;
      display: flex;
      align-items: center;
      justify-content: space-between;
    
     }
     .applist__delete{
      background-color: #FB38FF;
      padding-block: .4rem;
      width: 4rem;
     }
     .applist__delete i{
      font-size: 1.3rem;
      
      color:black;
     }
     input[type="checkbox"]{
      
      display: flex;
      align-items: center;
      justify-content: center;
      appearance: none;
      border: 2px solid #1c0d0d;
      width: 28px;
      height: 28px;
       
     }
     input:checked::before {
      
      appearance: none;
      content: "\2713"; 
      display: block;
     width: 26px;
    height: 25px;
    text-align: center;
    line-height: 25px; 
    color: #fff;
    background-color: #007bff; 
}
    
    </style>
