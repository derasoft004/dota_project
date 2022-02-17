const article = document.querySelectorAll('.article');
const articles_box_name1 = document.querySelector('.articles_box_name1')
const articles_box_name2 = document.querySelector('.articles_box_name2')
const header_articles1 = document.querySelector('.header_articles1')
const header_articles2 = document.querySelector('.header_articles2')
const article_title = document.querySelectorAll('.article_title')
const attl2 = document.querySelectorAll('.attl2');
const attl1 = document.querySelectorAll('.attl1');
const black_background0 = document.querySelector('.black_background0')
const black_background = document.querySelector('.black_background')

/*---<header>смена текста над статьями</header>---*/

articles_box_name1.addEventListener('click', function(){
  articles_box_name1.style.visibility = 'hidden';
  articles_box_name2.style.visibility = 'visible';
  header_articles1.style.visibility = 'hidden';
  header_articles2.style.visibility = 'visible';
});

articles_box_name2.addEventListener('click', function(){
  articles_box_name2.style.visibility = 'hidden';
  articles_box_name1.style.visibility = 'visible';
  header_articles2.style.visibility = 'hidden';
  header_articles1.style.visibility = 'visible';
});

/*---<header>смена текста над статьями</header>---*/


/*---(статьи <main>)---*/
const main_article1 = document.querySelector('.main_article1');
const main_article2 = document.querySelector('.main_article2');
const main_article3 = document.querySelector('.main_article3');
const main_article4 = document.querySelector('.main_article4');
const main_article5 = document.querySelector('.main_article5');
const main_article6 = document.querySelector('.main_article6');

const main_article_title1 = document.querySelector('.main_article_title1')
const main_article_title2 = document.querySelector('.main_article_title2')
const main_article_title3 = document.querySelector('.main_article_title3')
const main_article_title4 = document.querySelector('.main_article_title4')
const main_article_title5 = document.querySelector('.main_article_title5')
const main_article_title6 = document.querySelector('.main_article_title6')

const main_article_title_text1 = document.querySelector('.main_article_title_text1')
const main_article_title_text2 = document.querySelector('.main_article_title_text2')
const main_article_title_text3 = document.querySelector('.main_article_title_text3')
const main_article_title_text4 = document.querySelector('.main_article_title_text4')
const main_article_title_text5 = document.querySelector('.main_article_title_text5')
const main_article_title_text6 = document.querySelector('.main_article_title_text6')
const black1 = document.querySelector('.black1')
const black2 = document.querySelector('.black2')
const black3 = document.querySelector('.black3')
const black4 = document.querySelector('.black4')
const black5 = document.querySelector('.black5')
const black6 = document.querySelector('.black6')

const main_article_big1 = document.querySelector('.main_article_big1')
const main_article_big2 = document.querySelector('.main_article_big2')
const main_article_big3 = document.querySelector('.main_article_big3')
const main_article_big4 = document.querySelector('.main_article_big4')
const main_article_big5 = document.querySelector('.main_article_big5')
const main_article_big6 = document.querySelector('.main_article_big6')

const footer = document.querySelector('.footer')
/*---(статьи <main>)---*/


/*---показ текста для первой страницы статей---*/

header_articles1.addEventListener('mouseover', function(){
  article.forEach( a => {
    a.addEventListener('mouseover', function(){
      article_title.forEach(ttl => {
        ttl.style.visibility = 'visible';
      });
      attl2.forEach(ttl2 => {
        ttl2.style.visibility = 'hidden';
      });
    });
    a.addEventListener('mouseout', function() {
      article_title.forEach(ttl => {
        ttl.style.visibility = 'hidden';
      });
    });
  });
});

/*---показ текста для первой страницы статей---*/



/*---показ текста для второй страницы статей---*/

header_articles2.addEventListener('mouseover', function(){
  article.forEach( a => {
    a.addEventListener('mouseover', function(){
      article_title.forEach(ttl => {
        ttl.style.visibility = 'visible';
      });
      attl1.forEach(ttl1 => {
        ttl1.style.visibility = 'hidden';
      });
    });
    a.addEventListener('mouseout', function() {
      article_title.forEach(ttl => {
        ttl.style.visibility = 'hidden';
      });
    });
  });
});

/*---показ текста для второй страницы статей---*/


/*----<main articles animation>---*/

main_article1.addEventListener('mouseover', function () {
  main_article1.classList.add('red')
  black1.style.opacity = '1'
  main_article1.style.width = '536px'
  main_article1.style.height = '314px'
  main_article1.style.top = '-3px'
  main_article1.style.left = '-2px'
  main_article_title1.classList.add('bigger');
  main_article_title_text1.style.opacity = '1';
  main_article_title_text1.style.top = '160px';
});
main_article1.addEventListener('mouseout', function(){
  main_article1.classList.remove('red')
  black1.style.opacity = '0'
  main_article1.style.width = '530px'
  main_article1.style.height = '310px'
  main_article1.style.top = '0'
  main_article1.style.left = '0'
  main_article_title1.classList.remove('bigger');
  main_article_title_text1.style.opacity = '0';
  main_article_title_text1.style.top = '260px';
});
if (main_article_big1.style.left = '-3000px'){
  main_article1.addEventListener('click', function(){
    main_article_big1.style.opacity = '1';
    main_article_big1.style.left = '-50px';
    main_article_big1.style.height = '116%';
    //main_article_big1.style.display = 'block'
    footer.style.opacity = '0'
    window.moveTo(100, 100);
    black_background0.classList.add('black_background');
  });
};

main_article2.addEventListener('mouseover', function () {
  main_article2.classList.add('red')
  black2.style.opacity = '1'
  main_article2.style.width = '536px'
  main_article2.style.height = '314px'
  main_article2.style.top = '-3px'
  main_article2.style.left = '2px'
  main_article_title2.classList.add('bigger');
  main_article_title_text2.style.opacity = '1';
  main_article_title_text2.style.top = '160px';
});
main_article2.addEventListener('mouseout', function(){
  main_article2.classList.remove('red')
  black2.style.opacity = '0'
  main_article2.style.width = '530px'
  main_article2.style.height = '310px'
  main_article2.style.top = '0'
  main_article2.style.left = '0'
  main_article_title2.classList.remove('bigger');
  main_article_title_text2.style.opacity = '0';
  main_article_title_text2.style.top = '260px';
});
if (main_article_big2.style.left = '-3000px'){
  main_article2.addEventListener('click', function(){
    main_article_big2.style.opacity = '1';
    main_article_big2.style.left = '-50px';
    main_article_big2.style.height = '122%';
    //main_article_big2.style.display = 'block'
    footer.style.opacity = '0'
    black_background0.classList.add('black_background');
  });
};

main_article3.addEventListener('mouseover', function () {
  main_article3.classList.add('red')
  black3.style.opacity = '1'
  main_article3.style.width = '536px'
  main_article3.style.height = '314px'
  main_article3.style.top = '-3px'
  main_article3.style.left = '-2px'
  main_article_title3.classList.add('bigger');
  main_article_title_text3.style.opacity = '1';
  main_article_title_text3.style.top = '160px';
});
main_article3.addEventListener('mouseout', function(){
  main_article3.classList.remove('red')
  black3.style.opacity = '0'
  main_article3.style.width = '530px'
  main_article3.style.height = '310px'
  main_article3.style.top = '0'
  main_article3.style.left = '0'
  main_article_title3.classList.remove('bigger');
  main_article_title_text3.style.opacity = '0';
  main_article_title_text3.style.top = '260px';
});
if (main_article_big3.style.left = '-3000px'){
  main_article3.addEventListener('click', function(){
    main_article_big3.style.opacity = '1';
    main_article_big3.style.left = '-50px';
    main_article_big3.style.height = '190%';
    //main_article_big3.style.display = 'block';
    footer.style.opacity = '0'
    black_background0.classList.add('black_background');
  });
};

main_article4.addEventListener('mouseover', function () {
  main_article4.classList.add('red')
  black4.style.opacity = '1'
  main_article4.style.width = '536px'
  main_article4.style.height = '314px'
  main_article4.style.top = '-3px'
  main_article4.style.left = '2px'
  main_article_title4.classList.add('bigger');
  main_article_title_text4.style.opacity = '1';
  main_article_title_text4.style.top = '160px';
});
main_article4.addEventListener('mouseout', function(){
  main_article4.classList.remove('red')
  black4.style.opacity = '0'
  main_article4.style.width = '530px'
  main_article4.style.height = '310px'
  main_article4.style.top = '0'
  main_article4.style.left = '0'
  main_article_title4.classList.remove('bigger');
  main_article_title_text4.style.opacity = '0';
  main_article_title_text4.style.top = '260px';
});
if (main_article_big4.style.left = '-3000px'){
  main_article4.addEventListener('click', function(){
    main_article_big4.style.opacity = '1';
    main_article_big4.style.left = '-50px';
    main_article_big4.style.height = '260%';
    //main_article_big4.style.display = 'block';
    footer.style.opacity = '0'
    black_background0.classList.add('black_background');
  });
};

main_article5.addEventListener('mouseover', function () {
  main_article5.classList.add('red')
  black5.style.opacity = '1'
  main_article5.style.width = '536px'
  main_article5.style.height = '314px'
  main_article5.style.top = '-3px'
  main_article5.style.left = '-2px'
  main_article_title5.classList.add('bigger');
  main_article_title_text5.style.opacity = '1'
  main_article_title_text5.style.top = '160px';
});
main_article5.addEventListener('mouseout', function(){
  main_article5.classList.remove('red')
  black5.style.opacity = '0'
  main_article5.style.width = '530px'
  main_article5.style.height = '310px'
  main_article5.style.top = '0'
  main_article5.style.left = '0'
  main_article_title5.classList.remove('bigger');
  main_article_title_text5.style.opacity = '0'
  main_article_title_text5.style.top = '260px';
});
if (main_article_big5.style.left = '-3000px'){
  main_article5.addEventListener('click', function(){
    main_article_big5.style.opacity = '1';
    main_article_big5.style.left = '-50px';
    main_article_big5.style.height = '197%';
    ////main_article_big5.style.display = 'block';
    footer.style.opacity = '0'
    black_background0.classList.add('black_background');
  });
};

main_article6.addEventListener('mouseover', function () {
  main_article6.classList.add('red')
  black6.style.opacity = '1'
  main_article6.style.width = '536px'
  main_article6.style.height = '314px'
  main_article6.style.top = '-3px'
  main_article6.style.left = '2px'
  main_article_title6.classList.add('bigger');
  main_article_title_text6.style.opacity = '1';
  main_article_title_text6.style.top = '160px';
});
main_article6.addEventListener('mouseout', function(){
  main_article6.classList.remove('red')
  black6.style.opacity = '0'
  main_article6.style.width = '530px'
  main_article6.style.height = '310px'
  main_article6.style.top = '0'
  main_article6.style.left = '0'
  main_article_title6.classList.remove('bigger');
  main_article_title_text6.style.opacity = '0'
  main_article_title_text6.style.top = '260px';
});
if (main_article_big6.style.left = '-3000px'){
  main_article6.addEventListener('click', function(){
    main_article_big6.style.opacity = '1';
    main_article_big6.style.left = '-50px';
    main_article_big6.style.height = '240%';
    //main_article_big6.style.display = 'block';
    footer.style.opacity = '0'
    black_background0.classList.add('black_background');
  });
};


/*----<main articles animation>---*/

////

/*---(закрытие main_article_big)---*/

window.addEventListener('click', c =>{
  const target = c.target;
  if (!target.closest('.main_article_big1') 
    & !target.closest('.main_article_big2') 
    & !target.closest('.main_article_big3') 
    & !target.closest('.main_article_big4') 
    & !target.closest('.main_article_big5') 
    & !target.closest('.main_article_big6')
    & !target.closest('.main_article1') 
    & !target.closest('.main_article2') 
    & !target.closest('.main_article3') 
    & !target.closest('.main_article4') 
    & !target.closest('.main_article5') 
    & !target.closest('.main_article6') 
    & (main_article_big1.style.left === '-50px' 
    | main_article_big2.style.left === '-50px'
    | main_article_big3.style.left === '-50px'
    | main_article_big4.style.left === '-50px'
    | main_article_big5.style.left === '-50px'
    | main_article_big6.style.left === '-50px')){
    main_article_big1.style.left = '-3000px';
    main_article_big2.style.left = '-3000px';
    main_article_big3.style.left = '-3000px';
    main_article_big4.style.left = '-3000px';
    main_article_big5.style.left = '-3000px';
    main_article_big6.style.left = '-3000px';
    main_article_big1.style.opacity = '.2';
    main_article_big2.style.opacity = '.2';
    main_article_big3.style.opacity = '.2';
    main_article_big4.style.opacity = '.2';
    main_article_big5.style.opacity = '.2';
    main_article_big6.style.opacity = '.2';
    main_article_big1.style.height = '1px';
    main_article_big2.style.height = '1px';
    main_article_big3.style.height = '1px';
    main_article_big4.style.height = '1px';
    main_article_big5.style.height = '1px';
    main_article_big6.style.height = '1px';
    footer.style.opacity = '1'
    black_background0.classList.remove('black_background');
    // main_article_big1.style.display = 'none';
    // main_article_big2.style.display = 'none';
    // main_article_big3.style.display = 'none';
    // main_article_big4.style.display = 'none';
    // main_article_big5.style.display = 'none';
    // main_article_big6.style.display = 'none';
  };
})





/*---(/закрытие main_article_big)---*/


/*---(статьи <main>)---*/








  








































