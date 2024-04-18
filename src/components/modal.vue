

<template>
   <div class="modal" v-if="isOpen" >
     <div class="modal__for">
     <button @click="$emit('close')" class="modal__btnfechar">X</button>
        <form @submit.prevent="addTarefa">
            <label>Digite sua tarefa</label>
            <input type="text" class="text-input" v-model="nameTarefa" placeholder="Digite uma tarefa">
             <select name="select" class="for__select" v-model="selectOpition">
                <option value="Tecnologias">Tecnologias</option>
                <option value="saúde" selected>Saúde</option>
                <option value="Outros">Outros</option>
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
        if(nameTarefa.value=='' && selectOpition.value==''){
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
    background-color: rgb(25, 17, 17);
}

.for__select,
.text-input{
    padding: .8rem;
}
.for__select{
    
    width: 300px;
}
form{
    display: flex;
    gap: 1rem;
    flex-direction: column;
}

.modal__btncriar{
    margin-top: 3rem;
    width: 100%;
    padding: .5rem;
    background-color: red;
}
.modal__btnfechar{
    top: 1.2rem;
    right: 1.15rem;
    position: absolute;
}
</style>