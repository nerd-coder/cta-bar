const options = {
  root: document.querySelector('.key'),
  rootMargin: '0px',
  threshold: 1.0
}

let target = document.querySelector('');

const observer = new IntersectionObserver(() => {
}, options);

export const onScroll = () => console.log('asdas')