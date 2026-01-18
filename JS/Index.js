const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const increment = target / 20000; // speed

    if(count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target.toLocaleString(); // adds commas
    }
  }

  // Trigger animation when visible
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        updateCounter();
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(counter);
});
