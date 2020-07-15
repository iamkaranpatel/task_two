
const boxs= document.querySelectorAll('.box');
const items= document.querySelectorAll('.item');

let draggedItem=null;

for(let i=0; i<items.length; i++){

    const list_items= items[i];

    list_items.addEventListener('dragstart',function(){
        draggedItem=this;
        // setTimeout(function(){
        //     list_items.style.display= 'block';
        // });
        this.append(draggedItem);
        
    });


    list_items.addEventListener('dragend',function(){
        setTimeout(function(){
            draggedItem=null;
        }, 0);
    });

    for(let j=0; j< boxs.length; j++){

        const box_one=boxs[j];

        box_one.addEventListener('dragover',function(event){
            event.preventDefault();
        });
    
        box_one.addEventListener('dragenter',function(event){
            event.preventDefault();
    
        });
    
        box_one.addEventListener('drop',function(){
            this.append(draggedItem);
    
        });

    }

    
}

