document.addEventListener('DOMContentLoaded', () => {
    // Regular expressions for validation
    const mailValidator = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    const phoneValidator = /^(?:\+62|08)[0-9]{8,12}$/;
    const nameValidator = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    const passwordValidator = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/;
    const numberValidator = /^(0|[1-9]\d*)$/;
    const linkValidator = /^(http|https)?:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/;
    const textValidator = /[A-Za-z]{2}[A-Za-z]*[ ]?[A-Za-z]*/;

    function valid(el) {
        el.parentElement.querySelectorAll('.valid')[0].classList.remove('disabled');
        el.parentElement.querySelectorAll('.invalid')[0].classList.add('disabled');
    }
    
    function invalid(el) {
        el.parentElement.querySelectorAll('.valid')[0].classList.add('disabled');
        el.parentElement.querySelectorAll('.invalid')[0].classList.remove('disabled');
    }
    
    function unfilled(el) {
        el.parentElement.querySelectorAll('em')[0].classList.remove('disabled');
        el.parentElement.querySelectorAll('.valid')[0].classList.add('disabled');
        el.parentElement.querySelectorAll('.invalid')[0].classList.add('disabled');
    }

    // Event listener for input fields
    document.querySelectorAll('.input-style input, .input-style textarea').forEach(el => {
        el.addEventListener('keyup', () => {
            if (el.value !== "") {
                el.parentElement.classList.add('input-style-active');
                el.parentElement.querySelector('em').classList.add('disabled');
            } else {
                el.parentElement.classList.remove('input-style-active');
                el.parentElement.querySelector('em').classList.remove('disabled');
                el.parentElement.querySelectorAll('.valid')[0].classList.add('disabled');
                el.parentElement.querySelectorAll('.invalid')[0].classList.add('disabled');
            }
        });
    });

    // Event listener for select fields
    document.querySelectorAll('.input-style select').forEach(el => {
        el.addEventListener('change', () => {
            if (el.value !== "default") {
                el.parentElement.classList.add('input-style-active');
                el.parentElement.querySelectorAll('.valid')[0].classList.remove('disabled');
                el.parentElement.querySelectorAll('.invalid, em')[0].classList.add('disabled');
            } else {
                el.parentElement.classList.add('input-style-active');
                el.parentElement.querySelectorAll('.valid, em')[0].classList.add('disabled');
                el.parentElement.querySelectorAll('.invalid')[0].classList.remove('disabled');
            }
        });
    });

    // Event listener for date fields
    document.querySelectorAll('.input-style input[type="date-tanggal"]').forEach(el => {
        el.addEventListener('change', () => {
            el.parentElement.classList.add('input-style-active');
            el.parentElement.querySelectorAll('.valid')[0].classList.remove('disabled');
            el.parentElement.querySelectorAll('.invalid')[0].classList.add('disabled');
        });
    });

    // Event listener for validation fields
    document.querySelectorAll('.validate-field input, .validate-field textarea').forEach(el => {
        el.addEventListener('keyup', () => {
            const getAttribute = el.getAttribute('type');
            switch (getAttribute) {
                case 'name': nameValidator.test(el.value) ? valid(el) : invalid(el); break;
                case 'number': numberValidator.test(el.value) ? valid(el) : invalid(el); break;
                case 'email': mailValidator.test(el.value) ? valid(el) : invalid(el); break;
                case 'text': textValidator.test(el.value) ? valid(el) : invalid(el); break;
                case 'url': linkValidator.test(el.value) ? valid(el) : invalid(el); break;
                case 'tel': phoneValidator.test(el.value) ? valid(el) : invalid(el); break;
                case 'password': passwordValidator.test(el.value) ? valid(el) : invalid(el); break;
                default: if (el.value === "") { unfilled(el); }
            }
        });
    });

    
        // Function to toggle password visibility
        function togglePasswordVisibility() {
            const passwordInputs = document.querySelectorAll('.validate-password');
            const eyeIcons = document.querySelectorAll('.eye-icons .fa-eye');
            const eyeSlashIcons = document.querySelectorAll('.eye-icons .fa-eye-slash');
    
            // Check if any .fa-eye is visible
            const isVisible = Array.from(eyeIcons).some(icon => icon.style.display === 'none');
    
            // Toggle visibility of password inputs
            passwordInputs.forEach(input => {
                input.type = isVisible ? 'password' : 'text';
            });
    
            // Toggle visibility of eye icons
            eyeIcons.forEach(icon => {
                icon.style.display = isVisible ? 'block' : 'none';
            });
            eyeSlashIcons.forEach(icon => {
                icon.style.display = isVisible ? 'none' : 'block';
            });
        }
    
        // Attach event listeners to all eye icon containers
        document.querySelectorAll('.eye-icons').forEach(container => {
            container.addEventListener('click', togglePasswordVisibility);
        });
    


    // Slider functionality
    let slideIndex = 1;
    displaySlide(slideIndex);
    let slideInterval = setInterval(() => moveSlides(1), 3000); // Change slide every 3 seconds

    function moveSlides(n) {
        displaySlide(slideIndex += n);
    }

    function activeSlide(n) {
        displaySlide(slideIndex = n);
        resetInterval(); // Reset the autoplay interval when manually changing slides
    }

    function displaySlide(n) {
        let i;
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("footerdot");

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => moveSlides(1), 3000); // Restart autoplay
    }
});


document.addEventListener('DOMContentLoaded', function() {
    flatpickr("#tanggal-lahir", {
        dateFormat: "d-m-Y", // Format of the selected date
        placeholder: "Tanggal Lahir", // Placeholder text
        allowInput: true, // Allows typing in the input field
        clickOpens: true // Opens date picker on input click
    });
});