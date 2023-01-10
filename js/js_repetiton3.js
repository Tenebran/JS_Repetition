window.addEventListener('load', function () {
  const sm = document.getElementById('small');
  const md = document.getElementById('medium');
  const bg = document.getElementById('big');

  const handler1 = () => {
    alert('Click');
  };

  const handler2 = () => {
    alert('Yo!!!');
  };

  const handler3 = e => {
    e.stopPropagation();
    console.dir(e);
  };

  const handler4 = e => {
    e.stopPropagation();
    console.dir((e.currentTarget.style.backgroundColor = 'red'));
    console.dir(e);
  };

  //   sm.onclick = handler1;
  //   sm.onclick = handler2;
  //   sm.onclick = null

  //   sm.addEventListener('click', handler1); // handeler(e)
  //   sm.addEventListener('click', handler2);
  //   sm.removeEventListener('click', handler1);
  //   sm.addEventListener('click', handler3);
  //   sm.addEventListener('click', e => {
  //     e.stopPropagation();
  //     handler4(e);
  //   });
  md.addEventListener('click', handler4);
  bg.addEventListener('click', handler4);
  sm.addEventListener('click', handler4);

  const a = this.document.getElementById('a');
  a.addEventListener('click', e => {
    e.preventDefault();
    alert('Страница заблокирована полицией нравов.');
  });

  // e, ev, event => {} (object)
});
