
const boxes = document.querySelectorAll('.boxes div');


const createTooltip = (e) => {

    const tooltipParrent = e.target;
    const tooltipText = e.target.dataset.tooltip;
    // console.log(tooltipParrent);
    console.log(tooltipText);

    const newTooltip = document.createElement('span');
    newTooltip.innerHTML = tooltipText;
    newTooltip.classList = 'tooltip';
    tooltipParrent.appendChild(newTooltip);
}
boxes.forEach(box => box.addEventListener('mouseover', createTooltip));