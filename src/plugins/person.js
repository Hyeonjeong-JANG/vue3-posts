export default {
  install(app, options) {
    const person = {
      name: '짐코딩',
      say() {
        alert(this.name);
      },
      ...options,
    };
    app.config.globalProperties.$person = person;
    // 위에 정의된 person을 app.config.globalProperties에 $person라는 이름으로 정의
    app.provide('person', person);
  },
};
