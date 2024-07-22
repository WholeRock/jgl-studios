/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    const form = document.getElementById('contactForm');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      
      const data = new FormData(form);
      console.log('entries: ', data.entries());
      formObj = {};
      for (var pair of data.entries()) {
        formObj[pair[0]] = pair[1];
      }
      const formdata = JSON.stringify(formObj);
      console.log(formdata);

      const url = 'https://script.google.com/macros/s/AKfycbyKv4wgj58uCiqAt0RCBhMK-GUccKDCYo8WWzHlrWGl-wqDVJ2DFWvpuBaLNqtTdOAbMA/exec';
        fetch(`${url}`, {
        method: 'POST',
        // headers: {
        //     // 'Accept': 'application/json, text/plain, */*',
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json',
        //     'Access-Control-Allow-Origin': 'http://127.0.0.1:9999/'
        //   },
        body: formdata,
      })
      .then(res => res.json())
      .then(() => { document.getElementById("submitSuccessMessage").className = "d-block"; document.getElementById("submitErrorMessage").className = "d-none";  document.getElementById("submitButton").disabled = true; })
    .catch((error) => { document.getElementById("submitErrorMessage").className = "d-block"; document.getElementById("submitSuccessMessage").className = "d-none";});
    });

});
