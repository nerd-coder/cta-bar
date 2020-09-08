export default function useMobileScroll(area,elmPrev,elmAfter,btnBack,btnNext){
  const options = {
    root: area,
    rootMargin: '10px',
    threshold: 1.0
  }
  const observer = new IntersectionObserver((entries, observer) => {
    let isDisplay = true
    for (const entry of entries) {
      entry.boundingClientRect.x <= 0? isDisplay = false : isDisplay = true
      if(isDisplay){
        btnBack.classList.add("hide")
        btnNext.classList.remove("hide")
        return
      }
      btnBack.classList.remove("hide")
      btnNext.classList.add("hide")
    }
  }, options);
  observer.observe(elmPrev)
}

export const useMScroll = useMobileScroll
 