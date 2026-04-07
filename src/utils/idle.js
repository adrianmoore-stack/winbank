const idle = (s, logout, nav) => {
  let autoLogout;

  const startTimer = () => {
    autoLogout = setTimeout(() => {
      return logout(nav);
    }, s * 1000); // 3000000
  };
  startTimer();

  const resetTimer = () => {
    clearTimeout(autoLogout);
    startTimer();
  };

  document.addEventListener('mousemove', resetTimer);
  document.addEventListener('click', resetTimer);
  document.addEventListener('mousedown', resetTimer);
  document.addEventListener('keypress', resetTimer);
  document.addEventListener('touchmove', resetTimer);
  document.addEventListener('onscroll', resetTimer);
  document.addEventListener('wheel', resetTimer);
};

export default idle;
