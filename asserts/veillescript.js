 /*===== veille techno=====*/
 const cardveille = document.querySelector('.card_veille');
 const activeblur = document.querySelector('.active-blur');
 const histoir = document.querySelector('.histoir');
 const droneR = document.querySelector('.droneR');
 const droneC = document.querySelector('.droneC');
 const droneF = document.querySelector('.droneF');
 const ppdrone = document.getElementById('pdrone');
 const phistoir = document.getElementById('phistoir');
 const pracing = document.getElementById('pracing');
 const pcinematique = document.getElementById('pcinematique');
 const pfreestyle = document.getElementById('pfreestyle');
 const pdji = document.getElementById('pdji');
 const pfutur = document.getElementById('pfutur');
 const psource = document.getElementById('psource');
 const droneActue = document.querySelector('.droneActue');
 const droneFutur = document.querySelector('.droneFutur');
 const dronefpv = document.querySelector('.dronefpv');
 const villetittle = document.querySelector('.ville-tittle');
 const droneSource = document.querySelector('.droneSource');
 const pdrone = document.querySelector('.pdrone');


 window.addEventListener('load', () => {
     
     histoir.addEventListener('click', () => {
         histoir.classList.toggle('active-card-veille');
         document.querySelector('.h').classList.toggle('offdie');
         phistoir.classList.toggle('on');
         activeblur.classList.toggle('blur');
     });  droneR.addEventListener('click', () => {

         droneR.classList.toggle('active-card-veille');
         document.querySelector('.r').classList.toggle('offdie');    
         // document.getElementById('pdrone').classList.toggle('on');    
         pracing.classList.toggle('on');
         activeblur.classList.toggle('blur');
         
     });  droneC.addEventListener('click', () => {
         droneC.classList.toggle('active-card-veille');
         document.querySelector('.c').classList.toggle('offdie');
         pcinematique.classList.toggle('on');
         activeblur.classList.toggle('blur');

     });  droneF.addEventListener('click', () => {
         droneF.classList.toggle('active-card-veille');
         document.querySelector('.f').classList.toggle('offdie');
         pfreestyle.classList.toggle('on');
         activeblur.classList.toggle('blur');

     });  droneFutur.addEventListener('click', () => {
         droneFutur.classList.toggle('active-card-veille');
         document.querySelector('.futur').classList.toggle('offdie');
         pfutur.classList.toggle('on');
         activeblur.classList.toggle('blur');

     }); droneActue.addEventListener('click', () => {
         droneActue.classList.toggle('active-card-veille');
         document.querySelector('.actu').classList.toggle('offdie');
         pdji.classList.toggle('on');
         activeblur.classList.toggle('blur');

     });dronefpv.addEventListener('click', () => {
         dronefpv.classList.toggle('active-card-veille');
         document.querySelector('.drone').classList.toggle('offdie');
         // pdrone.classList.toggle('on');
         ppdrone.classList.toggle('on');
         activeblur.classList.toggle('blur');
     });
     droneSource.addEventListener('click', () => {
        droneSource.classList.toggle('active-card-veille');
         document.querySelector('.source').classList.toggle('offdie');
         // pdrone.classList.toggle('on');
         psource.classList.toggle('on');
         activeblur.classList.toggle('blur');
     });

 } );