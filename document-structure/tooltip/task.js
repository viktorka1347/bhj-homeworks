'use strict';

const tooltipLinks = document.getElementsByClassName('has-tooltip');

for (const link of tooltipLinks) {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.dataset.position = 'bottom';
  tooltip.innerText = link.title;
  
  link.insertAdjacentElement('afterEnd', tooltip);
  
  link.addEventListener('click', function(e) {
    e.preventDefault();
    if (tooltip.classList.contains('tooltip_active')) {
      tooltip.classList.remove('tooltip_active');
      return;
    }
    
    const prevTooltip = document.querySelector('.tooltip_active');
    if (prevTooltip)
      prevTooltip.classList.remove('tooltip_active');
      const linkRect = this.getBoundingClientRect();
      
      tooltip.classList.add('tooltip_active'); 
      const tooltipRect = tooltip.getBoundingClientRect();
      
      switch (tooltip.dataset.position) {
        case 'left':
          tooltip.style.top = linkRect.top + 'px';
          tooltip.style.left = (linkRect.left + tooltipRect.left - tooltipRect.right) + 'px';
          break;
        case 'right':
          tooltip.style.top = linkRect.top + 'px';
          tooltip.style.left = linkRect.right + 'px';        
          break;
        case 'top':
          tooltip.style.top = (linkRect.top + tooltipRect.top - tooltipRect.bottom) + 'px';
          tooltip.style.left = linkRect.left + 'px';            
          break;
        default:
          tooltip.style.top = linkRect.bottom + 'px';
          tooltip.style.left = linkRect.left + 'px';                  
	}  
  })  
}