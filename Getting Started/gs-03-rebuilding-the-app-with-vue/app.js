Vue.createApp({
  data() {
    return {
      goals: [], // รับข้อมูลที่กรอกเป็น Object
      enteredValue: '' // ข้อมูลที่กรอกเริ่มที่ empty string 
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    }
  }
}).mount('#app');

// codeโดยวิธีการใช้ js ปกติ
// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);