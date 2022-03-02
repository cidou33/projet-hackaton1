/* Modale sur les affichages de légende, contact réseaux sociaux et les logos entreprises en responsive mobile et desktop*/

const cards = document.getElementsByClassName('cardHk1');
const paras = document.getElementsByClassName('paraHk1');

function clickMembers(elemList){
  
    for(let i = 0 ; i < elemList.length ; i++){
      elemList[i].addEventListener('click', (event)=>{
        for(let v = 0 ; v < paras.length ; v++){

          if(paras[v]!=paras[i]){
            paras[v].classList.add('displayNoneHk');
          }       
        }
          paras[i].classList.toggle('displayNoneHk');

          event.stopPropagation();
      })
      window.addEventListener('click', closeWindow);
    }
  }

  function closeWindow() {

    for(let i = 0 ; i < paras.length ; i++){
  
      paras[i].classList.add('displayNoneHk');
  
      cards[i].classList.remove('displayNoneHk');
    }
  }
  
  clickMembers(cards);
