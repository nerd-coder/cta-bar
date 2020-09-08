const isInViewport = (elm) => {
  const rect = elm.getBoundingClientRect();
  console.log(rect)
  return (
      rect.top >= 0 &&
      rect.left > 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

export default function useMobileScroll(area,elmPrev,elmAfter,btnBack,btnNext){
  isInViewport(elmPrev)?btnBack.classList.add("hide"):btnBack.classList.remove("hide");
  isInViewport(elmAfter)?btnNext.classList.add("hide"):btnNext.classList.remove("hide");
}

export const useMScroll = useMobileScroll
 