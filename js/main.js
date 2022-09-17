const openBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');
const menu = document.querySelector('.nav__menu');


// open nav menu 
openBtn.addEventListener('click',() => {
      menu.style.display = 'block';
      closeBtn.style.display = 'inline-block';
      openBtn.style.display = 'none'

})

// close nav menu 

const closeNav = () => {
      menu.style.display = 'none';
      closeBtn.style.display = 'none';
      openBtn.style.display = 'inline-block'
}
closeBtn.addEventListener('click', closeNav);

// Close nav menu when menu items are clicked 

if(window.innerWidth < 1024) {
      document.querySelectorAll('.nav__menu li a').forEach(navItem => {
            navItem.addEventListener('click', closeNav)
      })
}

// Change navbar styles on scroll 

window.addEventListener('scroll', () => {
      document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0);
})

// fetches testimonials from testimonials array 

/* const fetchTestimonials = () => {
      let testimonialsContainer = document.querySelector('.testimonials__container');
      testimonialsContainer.innerHTML = '';

      // loop through array and print testimonials 
      
      testimonials.forEach(testimonial => {
            const newTestimonial = document.createElement('article');
            newTestimonial.className = 'testimonial';
            newTestimonial.innerHTML`
            <p>
                "${testimonial.quote}"
            </p>

            <div class="testimonials__client">
                <span class="avator">
                    <img src="./img/${testimonial.avator}.jpg">
                </span>
                <div class="testimonial__work">
                  <p><b>${testimonial.name}</b></p>
                    <small>${testimonial.title}</small>
                </div>
            </div>  `;

            testimonialsContainer.append(newTestimonial);
      })


}

window.addEventListener('load', fetchTestimonials) */