import React from 'react'
import './faq.css'
let summaryCollection = document.getElementsByTagName('summary');
let signsCollection = document.getElementsByClassName('faq-open-icon');

for(let i = 0; i < summaryCollection.length; i++) {
  summaryCollection[i].onclick = function() {
    if(signsCollection[i].innerHTML === '+') signsCollection[i].innerHTML = '—';
    else signsCollection[i].innerHTML = '+';
  }
}



const Faq = () => {
  
  return (
    <div class="container">
    <h2 class="faq-heading">Frequently asked questions</h2>

    <details class="faq-card" >
      <summary>How do I pay for the Essentials or Premium plan? <span class="faq-open-icon">+</span></summary>
      <span class="faq-card-spoiler">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare, sem at dictum faucibus, neque nunc pellentesque sem, nec pellentesque tellus ex vel lorem. Vestibulum magna odio, ornare in faucibus.</span>
    </details>
    <details class="faq-card">
      <summary>Can I cancel my Essentials or Premium plan subscription at any time? <span class="faq-open-icon">+</span></summary>
      <span class="faq-card-spoiler">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare, sem at dictum faucibus, neque nunc pellentesque sem, nec pellentesque tellus ex vel lorem. Vestibulum magna odio, ornare in faucibus.</span>
    </details>
    <details class="faq-card">
      <summary>We need to add new users to our team. How will that be billed? <span class="faq-open-icon">+</span></summary>
      <span class="faq-card-spoiler">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare, sem at dictum faucibus, neque nunc pellentesque sem, nec pellentesque tellus ex vel lorem. Vestibulum magna odio, ornare in faucibus.</span>
    </details>
    <details class="faq-card">
      <summary>My team wants to cancel its subscription. How do we do that? Can we get a refund? <span class="faq-open-icon">+</span></summary>
      <span class="faq-card-spoiler">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare, sem at dictum faucibus, neque nunc pellentesque sem, nec pellentesque tellus ex vel lorem. Vestibulum magna odio, ornare in faucibus.</span>
    </details>
    <details class="faq-card">
      <summary>Do you offer discounts for non-profit organizations or educational institutions? <span class="faq-open-icon">+</span></summary>
      <span class="faq-card-spoiler">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare, sem at dictum faucibus, neque nunc pellentesque sem, nec pellentesque tellus ex vel lorem. Vestibulum magna odio, ornare in faucibus.</span>
    </details>

    <h2 class="faq-heading">Still have questions?</h2>
    <p class="faq-aftertext">If you cannot find answer to your question in our FAQ, you can always<br/>
      contact us. We will answer shortly!
    </p>
  </div>
  )
}
export default Faq;
