const mongoose = require("mongoose");
const Student = require("@models/student");

// Seeder using async await
const seedDatabase = async function () {
  const howie = {
    name: "howie",
    age: 18,
    grade: 12,
    prefect: true,
  };

  const felix = {
    name: "felix",
    age: 17,
    grade: 11,
    prefect: true,
  };

  const hela = {
    name: "hela",
    age: 16,
    grade: 10,
    prefect: true,
  };

  await Student.create(howie);
  await Student.create(felix);
  await Student.create(hela);
};

// Drop DB then seed
mongoose.connection.collections.students.drop(async function () {
  await seedDatabase();
  mongoose.connection.close();
});

/**
 * cd here and type the following commands
 *
 * node students_seeds.js
 *
 */
