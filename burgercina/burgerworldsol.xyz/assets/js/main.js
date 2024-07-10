document.addEventListener("DOMContentLoaded", function() {
    const defaultSection = '#intro-screen';
    const sections = document.querySelectorAll('section');
    const goBackButton = document.getElementById('btn-goback');
    let lastHash = defaultSection;
    // Function to hide all sections
    function hideAllSections() {
      sections.forEach(section => section.style.display = 'none');
    }

    // Function to show a specific section
    function showSection(hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.style.display = 'block';
      }
    }

    // Show default or hash section on page load
    function handleHashChange() {
      const hash = window.location.hash || defaultSection;
      hideAllSections();
      showSection(hash);
      // Show or hide the go back button
      if (hash === defaultSection) {
        goBackButton.style.display = 'none';
      } else {
        goBackButton.style.display = 'block';
      }
      lastHash = hash;
    }

    // Initial load
    handleHashChange();

    // Handle hash change for back/forward buttons
    window.addEventListener('hashchange', handleHashChange);

    // Add click event listeners to all hash buttons
    const hashButtons = document.querySelectorAll('.hash-button');
    hashButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault();
        const targetHash = this.getAttribute('href');
        window.location.hash = targetHash;
        hideAllSections();
        showSection(targetHash);
      });
    });

    goBackButton.addEventListener('click', function() {
        // Check if there is a last hash to go back to
        if (lastHash && lastHash !== window.location.hash) {
          window.location.hash = lastHash;
        } else {
          window.history.back(); // Go back in history if no hash or same hash
        }
      });

      const copyBtn = document.querySelector('.copy-btn');
      copyBtn.addEventListener('click', () => {
          navigator.clipboard.writeText(copyBtn.getAttribute('data-token'));
      });
  });

window.addEventListener('load', function() {
    var audio = document.getElementById('audio');
    const audio2 = document.getElementById('audio2');
    const audio3 = document.getElementById('audio3');
    const audio4 = document.getElementById('audio4');

    audio.volume = 1;
    audio2.volume = 0;
    audio3.volume = 0;
    audio4.volume = 0;
    audio.play();

    function adjustVolumeBasedOnHash() {
      if (window.location.hash === '#resto-inside') {
        audio.volume = 0.1;
        audio2.volume = 1;
        audio2.play();
        audio3.pause();
        audio4.pause();
      } else if (window.location.hash === '#take-out') {
        audio.pause();
        audio2.pause();
        audio.volume = 0;
        audio3.volume = 0.2;
        audio4.volume = 1;
        audio3.play();
        audio4.play();
      } else if (window.location.hash === '#whats-cooking') {
        audio.pause();
        audio2.pause();
        audio3.pause();
        audio.volume = 0;
        audio4.volume = 1;
        audio4.play();
      } else {
        audio.play();
        audio.volume = 1;
        audio2.pause();
        audio3.pause();
        audio4.pause();
        document.body.addEventListener('click', function() {
          audio.play();
        });
      }
    }

    window.addEventListener('hashchange', adjustVolumeBasedOnHash);

    adjustVolumeBasedOnHash();

    document.getElementById('blob-enter').addEventListener('click', function() {
      audio.volume = 0.1;
      audio2.volume = 1;
      audio2.play();
      audio3.pause();
      audio4.pause();
    });

    document.getElementById('blob-takeout').addEventListener('click', function() {
      audio.pause();
      audio.volume = 0;
      audio2.pause();
      audio3.volume = 0.2;
      audio4.volume = 1;
      audio3.play();
      audio4.play();
    });

    document.getElementById('blob-whats-cooking').addEventListener('click', function() {
      audio.pause();
      audio2.pause();
      audio3.pause();
      audio.volume = 0;
      audio4.volume = 1;
      audio4.play();
    });

    document.body.addEventListener('click', function() {
      if (window.location.hash !== '#resto-inside' && window.location.hash !== '#take-out') {
        audio.play();
      }
    });

    // Play audio on hover over the body
    // document.body.addEventListener('mouseover', function() {
    //     audio.play();
    // });

    // // Or play audio on any click event on the body
    // document.body.addEventListener('click', function() {
    //     audio.play();
    // });
});

document.addEventListener('DOMContentLoaded', function() {
  var popupModal = $('#popupModal');

  // Show the modal if the screen width is 1024px or less
  if (window.innerWidth <= 1024) {
      popupModal.modal('show');
  }

  // Optionally, handle window resize to show the modal if resized to tablet/mobile width
  window.onresize = function() {
      if (window.innerWidth <= 1024) {
          popupModal.modal('show');
      } else {
          popupModal.modal('hide');
      }
  }
});
