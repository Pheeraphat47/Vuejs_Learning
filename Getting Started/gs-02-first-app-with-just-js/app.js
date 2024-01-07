const buttonEl = document.querySelector('button'); // เข้าถึงปุ่ม tagbutton 
const inputEl = document.querySelector('input'); // เข้าถึงปุ่ม taginput
const listEl = document.querySelector('ul'); // เข้าถึง tag ul ที่เราจะ add li ของ goal เราเข้าไป

function addGoal() {
  const enteredValue = inputEl.value; // เก็บ value ที่ user ใส่เข้ามา
  const listItemEl = document.createElement('li'); // create new li element
  listItemEl.textContent = enteredValue;
  listEl.appendChild(listItemEl);
  inputEl.value = ''; // resetช่อง Input ให้ส่าวสำหรับ goal ใหม่ที่เราจะใส่
}

buttonEl.addEventListener('click', addGoal); // สร้าง event ของการ click ปุ่มให้ไปเรียก function ข้างบน