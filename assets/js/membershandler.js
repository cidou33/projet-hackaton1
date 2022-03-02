/* Modale sur les affichages de légende, contact réseaux sociaux et les logos entreprises en responsive mobile*/

const cards = document.getElementsByClassName('cardHk');
const paras = document.getElementsByClassName('paraHk');

function clickMembers(elemList){
  
    for(let i = 0 ; i < elemList.length ; i++){
      elemList[i].addEventListener('click', (event)=>{
        for(let v = 0 ; v < paras.length ; v++){

          if(paras[v]!=paras[i]){
            paras[v].classList.add('displayNoneBisHk');
          }       
        }
          paras[i].classList.toggle('displayNoneBisHk');

          event.stopPropagation();
      })
      window.addEventListener('click', closeWindow);
    }
  }

  function closeWindow() {

    for(let i = 0 ; i < paras.length ; i++){
  
      paras[i].classList.add('displayNoneBisHk');
  
      cards[i].classList.remove('displayNoneBisHk');
    }
  }
  
  clickMembers(cards)

/* Modals sur les Supressions et Modifications des membres*/
/*class list permet de modifier les class ajouter ou supprimer des "élements" des "fonctions" par exemple etc...*/

const btnModalsPen = document.getElementsByClassName('btnModalsPen');/*Var Pen & Fonction Non créé pour le moment*/
const btnModalsTrash = document.getElementsByClassName('btnModalsTrash');
const modalsTrashHk = document.getElementsByClassName('modalsTrashHk');


for(let i = 0 ; i < btnModalsTrash.length ; i++){
  btnModalsTrash[i].addEventListener('click', function(){
    console.log('ok');

      modalsTrashHk[i].classList.toggle('displayNoneButtonHk');
   })
}

const croixHk = document.getElementsByClassName('croixHk');

for(let i = 0 ; i <croixHk.length ; i++){
  
  croixHk[i].addEventListener('click', function(){
    //croix.classList.toggle('displayNone');
    croixHk[i].parentNode.classList.toggle('displayNoneButtonHk');
  });
}