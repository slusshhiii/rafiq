document.addEventListener("DOMContentLoaded", function() {
    var slider_img = document.querySelector('.my-wish__image-slide');
    var slider_text = document.querySelector('.my-wish__text');
    var nextPageButton = document.getElementById('next-page-button');
    
    var images = [
        '../images/1.jpg',
        '../images/2.jpg',
        '../images/3.jpg',
        '../images/4.jpg',
        '../images/5.jpg',
        '../images/6.jpg',
        '../images/7.jpg',
        '../images/8.jpg',
        '../images/9.jpg',
        '../images/10.jpg',
        '../images/11.jpg',
        '../images/12.jpg',
        '../images/13.jpg',
        '../images/14.jpg',
        '../images/15.jpg',
        '../images/16.jpg',
        '../images/17.jpg',
        '../images/18.jpg',
        '../images/19.jpg',
        '../images/20.jpg',
        '../images/21.jpg',
        '../images/22.jpg',
        '../images/23.jpg',
        '../images/24.jpg'
    ];

    var texts = [
        'Hi babyyy!', 
        'can`t believe our relationship has been 1 year already', 
        'to more trips and more memories together!', 
        'I always and will always love you sayang so dont worry about about not being loved okay!', 
        'sayangg, here`s some words from me to you, truly.', 
        'Even after all of these years, my love for you grows more and more each day', 
        'our deep, unbreakable connection is something I`ve always dreamed of. wishing us a blissful lifetime together.', 
        'Walking alongside you is the greatest journey of my life. I`ll cherish you always.', 
        'You always know just how to make me smile', 
        'I`m so excited about the future because I can`t wait to make all of our dreams come true', 
        'Sometimes I wonder how you put up with me, but then I remember that I put up with you too, so that makes us even!', 
        'Eventhough your snoring drives me crazy, I wouldn`t pick anyone else in the world to share my bed with', 
        'I`m yours always. No refunds.', 
        'In a world where so many things can be uncertain, you are the one thing that I will always be sure of', 
        'I`m so glad that you asked me out on this day one year ago! heheh ', 
        'You taught me what true love is, my dear. May our love and trust for each other keep growing', 
        'No matter where we go, or how difficult the situation is, we will always be there for each other.', 
        'I wish our love will flourish and stand the test of time.', 
        'It`s been pleasure watching days turn into weeks, weeks into months, and months to a year. I`m looking forward to watching how years turn into a lifetime with you baby.', 
        'rindu pula nak jalan jalan walaupun tiada hala tuju dengan sayang skskssk ', 
        'I miss you always sayang, can  t wait to spend more times with you later', 
        'One thing I always wish for is for you to lower down your ego and stop giving me silent treatments!', 
        'ehem !!  a-anyways....', 
        'You`re everything i`ve ever wanted and needed in a partner.Thank you for loving me. Happy anniversary sayang <3' 
    ];
    
    var i = 0;
    
    function prev(){
        if(i > 0) {  // Only decrease index if it's greater than 0
            i--;
            setContent();  
        }           
    }
    
    function next(){
        if(i >= images.length-1) {
            nextPage.style.display = 'flex'; // Show the next page section
            wishes.style.display = 'none';   // Hide image slides
            wishes2.style.display = 'none';  // Hide image button
        }
        i++;
        setContent();             
    }
    
    function setContent(){
        slider_img.setAttribute('src', images[i]);
        slider_text.textContent = texts[i];
    }
    
    // Attach event listeners to buttons
    document.querySelector('.slider__button-prev').addEventListener('click', prev);
    document.querySelector('.slider__button-next').addEventListener('click', next);
    
    // Set initial content
    setContent();
});
