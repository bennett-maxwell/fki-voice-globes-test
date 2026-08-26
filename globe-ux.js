(function(){
  var talk=document.getElementById('talkBtn');
  var form=document.getElementById('formBtn');
  if(talk){
    talk.setAttribute('aria-pressed','false');
    talk.addEventListener('click', function(){
      talk.setAttribute('aria-pressed','true');
      if(form) form.setAttribute('aria-pressed','false');
      setTimeout(function(){
        var w=document.querySelector('elevenlabs-convai');
        var fail=document.getElementById('elFail');
        if(fail && w && !(w.shadowRoot)){
          fail.setAttribute('role','status');
          fail.setAttribute('aria-live','polite');
          fail.classList.add('on');
          fail.textContent='Talk widget did not finish loading. Use the form, or ask Kay to pay the ElevenLabs invoice if the globe stays silent.';
        }
      }, 8000);
    });
  }
  if(form){
    form.setAttribute('aria-pressed','false');
    form.addEventListener('click', function(){
      form.setAttribute('aria-pressed','true');
      if(talk) talk.setAttribute('aria-pressed','false');
    });
  }
})();

/* csll-v2-r3 2026-08-25T23:15:59Z unique */
