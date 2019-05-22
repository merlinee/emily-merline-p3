var defaultSpace = 'images/starrysky.jpg';

var spaceLogs = [
  {
    pic: 'images/swirlingstars.jpg',
    logs: "Captain's log. We've been travelling for many months." +
    "Or are they really months? Time is strange out here." +
    " But it doesn't really matter. We can't go home. " +
    "At least it's beautiful out here."
  },
  {
    pic: 'images/brightsun.jpg',
    logs: "Captain's log. We still haven't found life." +
    "Maybe we never will. Maybe we really are alone." +
    " But no, I can't give into despair. The crew needs me. " +
    "I better get some sleep."
  },
  {
    pic: 'images/keplerplanet.jpg',
    logs: "Captain's log. We found a planet." +
    "There's nothing here." +
    " There never is." +
    " Maybe we really are alone. Maybe that's better, in the end."
  }
];

var spookyLog = {
  pic: 'images/helixnebula.jpg',
  logs: "I can feel it watching me."
};


function newLog(pic, logs)
{
  this.pic = pic;
  this.logs = logs;
}

function displaySpace(pic)
{
  var view = document.getElementById('main-view');
  view.style.backgroundImage = "url("+pic+")";
}

function get(element)
{
  return document.getElementById(element);
}

function openModal()
{
  var modal = get('modal-dialog');
  var backdrop = get('modal-backdrop');

  modal.classList.add('visible');
  backdrop.classList.add('visible');
}

function closeModal()
{
  var url = get('edit-image-url');
  var text = get('edit-content-text');
  var modal = get('modal-dialog');
  var backdrop = get('modal-backdrop');

  url.value = "";
  text.value = "";

  modal.classList.remove('visible');
  backdrop.classList.remove('visible');
}

function saveContent()
{
  var newPic = get('edit-image-url');
  var text = get('edit-content-text');
  var logScreen = get('logs');
  var viewScreen = get('main-view');

  var logs = new newLog(aPic, aLog);
  spaceLogs.push(logs);

  addLog(logs);
  closeModal();
  if((spaceLogs.length) % 4 === 0 )
  {
    spaceLogs.push(spookyLog);
    addLog(spookyLog);
    displaySpace(spookyLog.pic);
    setTimeout(displaySpace, 3000, defaultSpace);
  }
}

function addLog(log)
{
  var newLog = document.createElement('div');
  newLog.className = 'log';
  var logContent = document.createElement('p');
  var logText = document.createTextNode(log.logs);
  var viewButton = document.createElement('button');
  viewButton.textContent = 'View Image';
  viewButton.value = log.pic;
  viewButton.onclick = function() {
			var btn = newLog.getElementsByTagName("button")[0];
			var spacePic = btn.value;
			displaySpace(spacePic)
    };
  var mainScreen = get('logs');

  logContent.appendChild(logText);
  newLog.appendChild(logContent);
  newLog.appendChild(viewButton);
  mainScreen.appendChild(newLog);

}

window.addEventListener('load', function() {
  var addLogs = get('add-log');
  var cancelButton = get('cancel-button');
  var saveButton = get('save-button');

  for(let log of spaceLogs)
  {
    addLog(log);
  }

  displaySpace(defaultSpace);

  addLogs.addEventListener('click', openModal);
  cancelButton.addEventListener('click', closeModal);
  saveButton.addEventListener('click', saveContent);
})
