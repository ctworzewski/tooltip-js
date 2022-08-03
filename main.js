const boxes = document.querySelectorAll(".boxes div");

const createTooltip = (e) => {
  const tooltipParrent = e.target;
  const tooltipText = e.target.dataset.tooltip;
  // console.log(tooltipParrent);
  // console.log(tooltipText);

  const newTooltip = document.createElement("span");
  newTooltip.innerHTML = tooltipText;
  newTooltip.classList = "tooltip";
  tooltipParrent.appendChild(newTooltip);
};

const removeTooltip = (e) => {
  // console.log(e.target);
  const tolltip = e.target.querySelector(".tooltip");
  // console.log(tolltip);
  if (tooltip != undefined) {
    tolltip.remove();
  }
};
boxes.forEach((box) => box.addEventListener("mouseover", createTooltip));
boxes.forEach((box) => box.addEventListener("mouseleave", removeTooltip));
