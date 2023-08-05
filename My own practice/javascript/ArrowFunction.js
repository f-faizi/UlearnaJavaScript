let group = {
  title: "Our Group",
  students: ["Ali", "Ahmad", "wali"],
  showList() {
    this.students.forEach((student) =>
      console.log(`${this.title} member is ${student}`)
    );
  },
};
group.showList();
