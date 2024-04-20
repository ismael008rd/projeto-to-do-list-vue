

<template>
   <div class="modal" v-if="isOpen" >
     <div class="modal__for">
     <button @click="$emit('close')" class="modal__btnfechar"><i class="ri-close-large-line"></i></button>
        <form @submit.prevent="addTarefa">
            <label>Digite sua tarefa</label>
            <input type="text" class="text-input" v-model="nameTarefa" placeholder="Digite uma tarefa">
            <label>Escolha uma tarefa</label>
             <select name="select" class="for__select personalizar-select" v-model="selectOpition" >
                <option value="Tecnologias" selected="selected" class="personalizar-option">Tecnologias</option>
                <option value="saúde"  class="personalizar-option">Saúde</option>
                <option value="Outros" class="personalizar-option">Outros</option>
             </select>
          
             <button type="submit" class="modal__btncriar" >Criar Tarefa</button>
        </form>
      
     </div>
   </div>
</template>

<script>
 import { ref } from 'vue';

 export const todo=ref([])
const nameTarefa= ref('')
const selectOpition=ref('')

export default{
 
    data(){
        return{
            nameTarefa,
            selectOpition,
            todo
        }
    },
  props:{
    isOpen:{
        type:Boolean,
        required:true
    },
    dados:{
        namem:nameTarefa.value,
        tipotarefa:selectOpition.value
    }
  },
  methods:{
    addTarefa(){
        if(nameTarefa.value=='' || selectOpition.value==''){
            console.log('digitar algo imorali')
            return
        }
        todo.value.push({
            name:nameTarefa.value,
            selctOption:selectOpition.value,
            tarefConcluir:false
        })
       nameTarefa.value=''
       console.log(todo.value)
      
    },
    
  }

}





</script>

<style>
.modal{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal__for{
    position: relative;
    width: 300px;
    padding: 2rem;
    height: 400px;
    background-color: rgb(175, 228, 221);
}

.for__select,
.text-input{
    padding: .4rem;
    background-color: #9cb6fb;
}

form{
    display: flex;
    gap: 1rem;
    flex-direction: column;
}

label{
    color: black;
}

.modal__btncriar{
    margin-top: 3rem;
    width: 100%;
    padding: .5rem;
    background-color:#CB5A82;
    color: white;
    transition: .2s;
}
.modal__btncriar:hover{
    background-color: #ba2c5e;
}
.modal__btnfechar{
    top: 1.2rem;
    right: 1.15rem;
    padding: .3rem;
    border-radius: .3rem;
    position: absolute;
}

.modal__btnfechar:hover{
    background-color:  #ba2c5e;
    color: white;
}


    
    .personalizar-option{
       
        
        background: rgb(228, 213, 213);
        color: #000000;
        

    }  
    .personalizar-option:hover{
        background: #fff;
        color: black;
    }
</style>