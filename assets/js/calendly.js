(function() {
  // Load Calendly script
  function loadCalendlyScript() {
    if (typeof window === 'undefined') return;
    var SCRIPT_ID = 'calendly-widget-js';
    if (document.getElementById(SCRIPT_ID)) return;
    var script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    document.head.appendChild(script);
  }

  // Create modal HTML
  function createModal() {
    var modalHTML = `
      <div id="calendly-modal-overlay" class="modal-overlay"></div>
      <div id="calendly-modal" class="modal-container calendly-modal">
        <div class="modal-header">
          <h2 class="modal-title">Book Your Experience</h2>
          <button id="calendly-modal-close" class="modal-close" aria-label="Close modal">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="modal-body">
          <div id="calendly-widget-container"></div>
        </div>
      </div>
    `;
    
    var modalDiv = document.createElement('div');
    modalDiv.innerHTML = modalHTML;
    document.body.appendChild(modalDiv);
  }

  // Open modal function
  function openCalendlyModal() {
    var overlay = document.getElementById('calendly-modal-overlay');
    var modal = document.getElementById('calendly-modal');
    var container = document.getElementById('calendly-widget-container');
    
    // Get Calendly URL from site settings or use default
    var baseUrl = document.querySelector('[data-calendly-url]')?.dataset.calendlyUrl || 
                  document.querySelector('meta[name="calendly-url"]')?.content ||
                  'https://calendly.com/nickrroberts';
    
    // Add parameters to hide header and streamline the view
    var calendlyUrl = baseUrl + (baseUrl.includes('?') ? '&' : '?') + 'hide_landing_page_details=1&hide_gdpr_banner=1';
    
    // Clear and recreate widget
    container.innerHTML = '';
    var widget = document.createElement('div');
    widget.className = 'calendly-inline-widget';
    widget.setAttribute('data-url', calendlyUrl);
    widget.style.width = '100%';
    widget.style.height = '100%';
    container.appendChild(widget);
    
    // Initialize Calendly widget with compact settings
    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url: calendlyUrl,
        parentElement: widget,
        prefill: {},
        utm: {}
      });
    }
    
    // Show modal
    document.body.classList.add('modal-open');
    overlay.classList.add('active');
    modal.classList.add('active');
  }

  // Close modal function
  function closeCalendlyModal() {
    var overlay = document.getElementById('calendly-modal-overlay');
    var modal = document.getElementById('calendly-modal');
    
    document.body.classList.remove('modal-open');
    overlay.classList.remove('active');
    modal.classList.remove('active');
  }

  // Initialize when DOM is ready
  function initCalendlyModal() {
    loadCalendlyScript();
    createModal();
    
    // Attach event listeners to all book now buttons
    document.addEventListener('click', function(e) {
      // Check if clicked element or its parent is a book now button
      var bookButton = e.target.closest('.hero-cta, .service-cta, .btn-book-now, .footer-book-link, [href="#booking"]');
      if (bookButton) {
        e.preventDefault();
        openCalendlyModal();
      }
    });
    
    // Close modal listeners
    document.getElementById('calendly-modal-close').addEventListener('click', closeCalendlyModal);
    document.getElementById('calendly-modal-overlay').addEventListener('click', closeCalendlyModal);
    
    // Escape key to close
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeCalendlyModal();
      }
    });
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCalendlyModal);
  } else {
    initCalendlyModal();
  }
})();


