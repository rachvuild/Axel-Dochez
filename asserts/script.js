/*===== loading page=====*/
 
const loadbody = document.querySelector('.load-body');
const body = document.querySelector('html');
const bodyall  = document.querySelector('.body-all ');
window.addEventListener('load', () => {
    console.log('pol');
    // normal.classList.toggle('glow');
    // dark.classList.remove('glow');
    // kawai.classList.remove('glow');
    img_gsb.classList.toggle('on');
    bodyall.classList.add("off");
    body.classList.add("noscroll");
    
    setTimeout(load, 2500);
    setTimeout(loaded, 3000);
});
  function load(){
      bodyall.classList.remove("off");
      body.classList.remove("noscroll");
      loadbody.classList.add("off");
    }
    function loaded(){
        
        loadbody.classList.add("offdie");
    }
    /*===== DRAG and DROP =====*/
    // const normal = document.getElementById('normal');
    // const dark = document.getElementById('dark');
    // const kawai = document.getElementById('kawai');
    // const dropItems = document.getElementById('drop-items');
    
// new Sortable(dropItems, {
    //     animation: 350,
    //     chosenClass: "sortable-chosen",
    //     dragClass: "sortable-drag"
    // });


   
            
    
    /*===== click menu mod =====*/

    // normal.addEventListener('click', () => {
    //     console.log('normal');
    //     normal.classList.toggle('glow');
    //     dark.classList.remove('glow');
    //     kawai.classList.remove('glow');    
    // } );
    
    
    // dark.addEventListener('click', () => {
    // console.log('dark');
    // dark.classList.toggle('glow');
    //     normal.classList.remove('glow');
    //     kawai.classList.remove('glow');

    
    
    // } );
    // kawai.addEventListener('click', () => {
    // console.log('kawai');
    // kawai.classList.toggle('glow');
    //     normal.classList.remove('glow');
    //     dark.classList.remove('glow');
    // } );
/*===== click projet=====*/
const gsb = document.getElementById('gsb');
const efs = document.getElementById('efs');
const manga = document.getElementById('manga');
const chat = document.getElementById('chat');
const btn = document.getElementById('btn');

const img_gsb = document.getElementById('img-gsb');
const img_efs = document.getElementById('img-esf');
const img_manga = document.getElementById('img-manga');
const img_chat = document.getElementById('img-chat');
const img_btn = document.getElementById('img-btn');

const infogsb = document.getElementById('info-gsb');
const infoefs = document.getElementById('info-efs');
const infomanga = document.getElementById('info-manga');
const infochat = document.getElementById('info-chat');
const infobtn = document.getElementById('info-btn');

const desgsb = document.getElementById('des-GSB');
const desefs = document.getElementById('des-esf');
const desmanga = document.getElementById('des-manga');
const deschat = document.getElementById('des-chat');
const desbtn = document.getElementById('des-btn');

gsb.addEventListener('click', () => {
img_gsb.classList.toggle('on');
img_efs.classList.remove('on');
img_manga.classList.remove('on');
img_chat.classList.remove('on');
img_btn.classList.remove('on');
});
infogsb.addEventListener('click', () => {
    desgsb.classList.toggle('on');
    desefs.classList.remove('on');
    desmanga.classList.remove('on');
    deschat.classList.remove('on');
    desbtn.classList.remove('on');
});
btn.addEventListener('click', () => {
img_gsb.classList.remove('on');
img_efs.classList.remove('on');
img_manga.classList.remove('on');
img_chat.classList.remove('on');
img_btn.classList.toggle('on');
});
infobtn.addEventListener('click', () => {
    desgsb.classList.remove('on');
    desefs.classList.remove('on');
    desmanga.classList.remove('on');
    deschat.classList.remove('on');
    desbtn.classList.toggle('on');
});
chat.addEventListener('click', () => {
img_gsb.classList.remove('on');
img_efs.classList.remove('on');
img_manga.classList.remove('on');
img_chat.classList.toggle('on');
img_btn.classList.remove('on');
});
infochat.addEventListener('click', () => {
    desgsb.classList.remove('on');
    desefs.classList.remove('on');
    desmanga.classList.remove('on');
    deschat.classList.toggle('on');
    desbtn.classList.remove('on');
});
manga.addEventListener('click', () => {
img_gsb.classList.remove('on');
img_efs.classList.remove('on');
img_manga.classList.toggle('on');
img_chat.classList.remove('on');
img_btn.classList.remove('on');
});
infomanga.addEventListener('click', () => {
    desgsb.classList.remove('on');
    desefs.classList.remove('on');
    desmanga.classList.toggle('on');
    deschat.classList.remove('on');
    desbtn.classList.remove('on');
});
efs.addEventListener('click', () => {
img_gsb.classList.remove('on');
img_efs.classList.toggle('on');
img_manga.classList.remove('on');
img_chat.classList.remove('on');
img_btn.classList.remove('on');
}); 
infoefs.addEventListener('click', () => {
    desgsb.classList.remove('on');
    desefs.classList.toggle('on');
    desmanga.classList.remove('on');
    deschat.classList.remove('on');
    desbtn.classList.remove('on');
});

/*===== click copy mail =====*/


    const secondBackImgemail = document.querySelector('#back-email');
    const secondsendemail = document.querySelector('#email');

    secondsendemail.addEventListener('click', () => {
        console.log('dark');
        var copyText = 'axel.dochezmz5@gmail.com';
        console.log(copyText);
        navigator.clipboard.writeText(copyText);
        secondBackImgemail.classList.add('second-back-img-copy');
        setTimeout(remouvegreen, 1200);
        function remouvegreen(){
            secondBackImgemail.classList.remove("second-back-img-copy");
        };
    } );
    

        /*===== hover  desciptif me=====*/
        const voirPlus = document.querySelector('.voir-plus');
        addEventListener('mouseover', (event) => {});
    

        /*===== cursor=====*/
        const cursor = document.querySelector('.cursor');
        document.addEventListener('mouseover', p =>{
            cursor.setAttribute('style', 'top:'+(p.pageY -50)+'px; left:'+(p.pageX - 50)+"px;")
        });
        
        /*===== pop=====*/
        const htmlcss = document.querySelector('.html-css');
        const js = document.querySelector('.js');
        const php = document.querySelector('.php');
        const sql = document.querySelector('.sql');
        const symfony = document.querySelector('.symfony');
        const python = document.querySelector('.python');
        const twig = document.querySelector('.twig');
        document.querySelector('#html-css').addEventListener('click', p =>{
            console.log('pol');
            htmlcss.setAttribute('style', 'top:'+(p.pageY-150 )+'px; left:'+(p.pageX-75 )+"px;")
            htmlcss.classList.toggle('on');
        });
        document.querySelector('#js').addEventListener('click', p =>{
            js.setAttribute('style', 'top:'+(p.pageY-150 )+'px; left:'+(p.pageX-75 )+"px;")
            js.classList.toggle('on');
        });
        document.querySelector('#php').addEventListener('click', p =>{
            php.setAttribute('style', 'top:'+(p.pageY-150 )+'px; left:'+(p.pageX-75 )+"px;")
            php.classList.toggle('on');
        });
        document.querySelector('#sql').addEventListener('click', p =>{
            sql.setAttribute('style', 'top:'+(p.pageY-150 )+'px; left:'+(p.pageX-75 )+"px;")
            sql.classList.toggle('on');
        });
        document.querySelector('#symfony').addEventListener('click', p =>{
            symfony.setAttribute('style', 'top:'+(p.pageY-150 )+'px; left:'+(p.pageX-75 )+"px;")
            symfony.classList.toggle('on');
        });
        document.querySelector('#python').addEventListener('click', p =>{
            python.setAttribute('style', 'top:'+(p.pageY-150 )+'px; left:'+(p.pageX-75 )+"px;")
            python.classList.toggle('on');
        });
        document.querySelector('#twig').addEventListener('click', p =>{
            twig.setAttribute('style', 'top:'+(p.pageY-150 )+'px; left:'+(p.pageX-75 )+"px;")
            twig.classList.toggle('on');
        });

        /*===== engrenage projet=====*/
        const engrenage = document.querySelector('.engrenage');
        const engGSB = document.getElementById('eng-GSB');
        const engEFS = document.getElementById('eng-EFS');
        const engManga = document.getElementById('eng-manga');
        const engChat = document.getElementById('eng-chat');
        const engButton = document.getElementById('eng-button');
        // engrenage.addEventListener('click', () => {
        //     document.querySelector('#html-css').classList.remove('glowing');
        //     document.querySelector('#php').classList.remove('glowing');
        //     document.querySelector('#sql').classList.remove('glowing'); 
        //     document.querySelector('#js').classList.remove('glowing');
        //     document.querySelector('#symfony').classList.remove('glowing');
        //     document.querySelector('#python').classList.remove('glowing');
        //     document.querySelector('#twig').classList.remove('glowing');
        //     });  
       
        engGSB.addEventListener('click', () => {
            document.getElementById('html-css').classList.add('glowing');
            document.getElementById('php').classList.add('glowing');
            document.getElementById('sql').classList.add('glowing'); 
            document.getElementById('js').classList.add('glowing');
            document.getElementById('symfony').classList.remove('glowing');
            document.getElementById('python').classList.remove('glowing');
            document.getElementById('twig').classList.remove('glowing');
            engGSB.addEventListener('click', () => {
                document.getElementById('html-css').classList.toggle('glowing');
            document.getElementById('php').classList.toggle('glowing');
            document.getElementById('sql').classList.toggle('glowing'); 
            document.getElementById('js').classList.toggle('glowing');
            document.getElementById('symfony').classList.remove('glowing');
            document.getElementById('python').classList.remove('glowing');
            document.getElementById('twig').classList.remove('glowing');
            }); });
            engEFS.addEventListener('click', () => {
                document.getElementById('html-css').classList.add('glowing');
                document.getElementById('php').classList.add('glowing');
                document.getElementById('sql').classList.add('glowing'); 
                document.getElementById('js').classList.add('glowing');
                document.getElementById('symfony').classList.remove('glowing');
                document.getElementById('python').classList.remove('glowing');
                document.getElementById('twig').classList.remove('glowing');
                document.getElementById('sass').classList.remove('glowing');
                engEFS.addEventListener('click', () => {
                    document.getElementById('html-css').classList.toggle('glowing');
                document.getElementById('php').classList.toggle('glowing');
                document.getElementById('sql').classList.toggle('glowing'); 
                document.getElementById('js').classList.toggle('glowing');
                document.getElementById('symfony').classList.remove('glowing');
                document.getElementById('python').classList.remove('glowing');
                document.getElementById('twig').classList.remove('glowing');
                document.getElementById('sass').classList.remove('glowing');
                }); });
            engManga.addEventListener('click', () => {
            document.getElementById('html-css').classList.remove('glowing');
            document.getElementById('php').classList.add('glowing');
            document.getElementById('sql').classList.add('glowing'); 
            document.getElementById('js').classList.add('glowing');
            document.getElementById('symfony').classList.add('glowing');
            document.getElementById('python').classList.remove('glowing');
            document.getElementById('twig').classList.add('glowing');
            document.getElementById('sass').classList.add('glowing');
            engManga.addEventListener('click', () => {
                document.getElementById('html-css').classList.remove('glowing');
                document.getElementById('php').classList.toggle('glowing');
                document.getElementById('sql').classList.toggle('glowing'); 
                document.getElementById('js').classList.toggle('glowing');
                document.getElementById('symfony').classList.toggle('glowing');
                document.getElementById('python').classList.remove('glowing');
                document.getElementById('twig').classList.toggle('glowing');
                document.getElementById('sass').classList.toggle('glowing');
            });});
            engChat.addEventListener('click', () => {
            document.getElementById('html-css').classList.add('glowing');
            document.getElementById('php').classList.add('glowing');
            document.getElementById('sql').classList.add('glowing'); 
            document.getElementById('js').classList.remove('glowing');
            document.getElementById('symfony').classList.remove('glowing');
            document.getElementById('python').classList.remove('glowing');
            document.getElementById('twig').classList.remove('glowing');
            document.getElementById('sass').classList.remove('glowing');
            engChat.addEventListener('click', () => {
                document.getElementById('html-css').classList.toggle('glowing');
                document.getElementById('php').classList.toggle('glowing');
                document.getElementById('sql').classList.toggle('glowing'); 
                document.getElementById('js').classList.remove('glowing');
                document.getElementById('symfony').classList.remove('glowing');
                document.getElementById('python').classList.remove('glowing');
                document.getElementById('twig').classList.remove('glowing');
                document.getElementById('sass').classList.remove('glowing');
            });
            });
            engButton.addEventListener('click', () => {
            document.getElementById('html-css').classList.add('glowing');
            document.getElementById('php').classList.remove('glowing');
            document.getElementById('sql').classList.remove('glowing'); 
            document.getElementById('js').classList.add('glowing');
            document.getElementById('symfony').classList.remove('glowing');
            document.getElementById('python').classList.remove('glowing');
            document.getElementById('twig').classList.remove('glowing');
            document.getElementById('sass').classList.remove('glowing');
            engButton.addEventListener('click', () => {
                document.getElementById('html-css').classList.toggle('glowing');
            document.getElementById('php').classList.remove('glowing');
            document.getElementById('sql').classList.remove('glowing'); 
            document.getElementById('js').classList.toggle('glowing');
            document.getElementById('symfony').classList.remove('glowing');
            document.getElementById('python').classList.remove('glowing');
            document.getElementById('twig').classList.remove('glowing');
            document.getElementById('sass').classList.remove('glowing');
            });
            });
            document.getElementById('html-css').classList.add('glowing')
            console.log(document.getElementById('html-css').classList.contains('glowing'));
            if(document.getElementById('html-css').classList.contains('glowing')){
                console.log('jack');
            }