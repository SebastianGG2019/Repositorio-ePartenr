// CUENTA REGRESIVA
/*    const getRemainingTime = deadline => {
  let now = new Date(),
      remainTime = (new Date(deadline) - now  + 1000) / 1000,
      remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
      remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
      remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
      remainDays = ('0' + Math.floor(remainTime / (3600 * 24)));

  return {
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays,
    remainTime
  }
};

const countdown = (deadline,elem,finalMessage) => {
  const el = document.getElementById(elem);

  const timerUpdate = setInterval( () => {
    let t = getRemainingTime(deadline);
  el.innerHTML = `<div><p>${t.remainDays}<span>Días</span></p><p>${t.remainHours}<span>Horas</span></p><p>${t.remainMinutes}<span>Minutos</span></p><p>${t.remainSeconds}<span>Segundos</span></p></div>`;

    if(t.remainTime <= 1) {
      clearInterval(timerUpdate);
      el.innerHTML = finalMessage;
    };

  }, 1000)
};

countdown('Sep 24 2020 18:00:00 GMT-0500', 'clock', '¡Ya empezó!');*/