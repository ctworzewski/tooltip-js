
const boxes = document.querySelectorAll('.boxes div');


const createTooltip = (e) => {
    const tooltipParrent = e.target;
    console.log(tooltipParrent);
}
boxes.forEach(box => box.addEventListener('mouseover', createTooltip));