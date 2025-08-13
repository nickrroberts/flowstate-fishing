(function() {
  // Create modal HTML with Formspree form
  function createModal() {
    var modalHTML = `
      <div id="booking-modal-overlay" class="modal-overlay"></div>
      <div id="booking-modal" class="modal-container booking-modal">
        <div class="modal-header">
          <h2 class="modal-title">Book Your Fishing Adventure</h2>
          <button id="booking-modal-close" class="modal-close" aria-label="Close modal">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="modal-body">
          <div id="booking-form-container">
            <form id="booking-form" class="booking-form">
              <div class="form-intro">
                <p class="form-tagline">Ready to level up your fishing game?</p>
                <p class="form-description">Fill out this form and we'll get you on the water ASAP!</p>
              </div>
              
              <div class="form-group">
                <label for="name">Your Name *</label>
                <input type="text" id="name" name="name" required placeholder="John Doe">
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input type="email" id="email" name="email" required placeholder="you@example.com">
                </div>
                
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="(555) 123-4567">
                </div>
              </div>
              
              <div class="form-group">
                <label for="service">What are you interested in? *</label>
                <select id="service" name="service" required>
                  <option value="">Select a service...</option>
                  <option value="fish-school-101">Fish School 101 - Beginner ($450)</option>
                  <option value="level-up">Level Up Your Game - Intermediate ($750)</option>
                  <option value="full-send">Full Send Mode - Full Day ($1,200/day)</option>
                  <option value="multi-day">Multi-Day Adventure</option>
                  <option value="group">Group Session</option>
                  <option value="custom">Custom Package</option>
                </select>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="experience">Experience Level *</label>
                  <select id="experience" name="experience" required>
                    <option value="">Choose your level...</option>
                    <option value="beginner">Total Noob</option>
                    <option value="novice">Novice</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="expert">Expert</option>
                  </select>
                </div>
                
                <div class="form-group">
                  <label for="date">Preferred Date</label>
                  <input type="date" id="date" name="preferred_date">
                </div>
              </div>
              
              <div class="form-group">
                <label for="message">Tell us more!</label>
                <textarea id="message" name="message" rows="4" placeholder="What are you hoping to achieve? Any specific goals? Favorite type of fish? Let us know!"></textarea>
              </div>
              
              <div class="form-group checkbox-group">
                <label class="checkbox-label">
                  <input type="checkbox" name="newsletter" value="yes">
                  <span>Send me fishing tips and updates</span>
                </label>
              </div>
              
              <div class="form-actions">
                <button type="submit" class="btn-submit">
                  <span class="btn-text">Book Now!</span>
                  <span class="btn-loading" style="display: none;">Sending...</span>
                </button>
              </div>
              
              <div class="form-message" id="form-message" style="display: none;"></div>
            </form>
          </div>
        </div>
      </div>
    `;
    
    var modalDiv = document.createElement('div');
    modalDiv.innerHTML = modalHTML;
    document.body.appendChild(modalDiv);
  }

  // Open modal function
  function openBookingModal(preselectedService) {
    var overlay = document.getElementById('booking-modal-overlay');
    var modal = document.getElementById('booking-modal');
    
    // Show modal
    document.body.classList.add('modal-open');
    overlay.classList.add('active');
    modal.classList.add('active');
    
    // Reset form message
    var formMessage = document.getElementById('form-message');
    formMessage.style.display = 'none';
    formMessage.className = 'form-message';
    
    // Preselect service if provided
    if (preselectedService) {
      var serviceSelect = document.getElementById('service');
      if (serviceSelect) {
        serviceSelect.value = preselectedService;
      }
    }
  }

  // Close modal function
  function closeBookingModal() {
    var overlay = document.getElementById('booking-modal-overlay');
    var modal = document.getElementById('booking-modal');
    
    document.body.classList.remove('modal-open');
    overlay.classList.remove('active');
    modal.classList.remove('active');
  }

  // Handle form submission
  function handleFormSubmit(e) {
    e.preventDefault();
    
    var form = document.getElementById('booking-form');
    var submitBtn = form.querySelector('.btn-submit');
    var btnText = submitBtn.querySelector('.btn-text');
    var btnLoading = submitBtn.querySelector('.btn-loading');
    var formMessage = document.getElementById('form-message');
    
    // Get Formspree URL from site settings
    var formspreeUrl = document.querySelector('[data-formspree-url]')?.dataset.formspreeUrl || 
                      document.querySelector('meta[name="formspree-url"]')?.content ||
                      'https://formspree.io/f/YOUR_FORM_ID'; // Default fallback
    
    // Show loading state
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';
    submitBtn.disabled = true;
    
    // Prepare form data
    var formData = new FormData(form);
    
    // Submit to Formspree
    fetch(formspreeUrl, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        // Success
        form.reset();
        formMessage.className = 'form-message success';
        formMessage.innerHTML = '🎣 Awesome! We\'ll be in touch soon to get you on the water!';
        formMessage.style.display = 'block';
        
        // Close modal after 3 seconds
        setTimeout(function() {
          closeBookingModal();
        }, 3000);
      } else {
        // Error
        throw new Error('Form submission failed');
      }
    })
    .catch(error => {
      formMessage.className = 'form-message error';
      formMessage.innerHTML = '😕 Oops! Something went wrong. Please try again or email us directly.';
      formMessage.style.display = 'block';
    })
    .finally(() => {
      // Reset button state
      btnText.style.display = 'inline';
      btnLoading.style.display = 'none';
      submitBtn.disabled = false;
    });
  }

  // Initialize when DOM is ready
  function initBookingModal() {
    createModal();
    
    // Attach event listeners to all book now buttons
    document.addEventListener('click', function(e) {
      // Check if clicked element or its parent is a book now button
      var bookButton = e.target.closest('.hero-cta, .service-cta, .btn-book-now, .footer-book-link, [href="#booking"]');
      if (bookButton) {
        e.preventDefault();
        
        // Check if this is a service card button with data attribute
        var serviceType = bookButton.getAttribute('data-service');
        
        // Map service card types to form values
        var serviceMap = {
          'beginner': 'fish-school-101',
          'intermediate': 'level-up',
          'full': 'full-send'
        };
        
        var preselectedService = serviceType ? serviceMap[serviceType] : null;
        openBookingModal(preselectedService);
      }
    });
    
    // Form submission
    document.getElementById('booking-form').addEventListener('submit', handleFormSubmit);
    
    // Close modal listeners
    document.getElementById('booking-modal-close').addEventListener('click', closeBookingModal);
    document.getElementById('booking-modal-overlay').addEventListener('click', closeBookingModal);
    
    // Escape key to close
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeBookingModal();
      }
    });
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBookingModal);
  } else {
    initBookingModal();
  }
})();