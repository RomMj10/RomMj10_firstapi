const { get } = require('../app');
const db = require('../config/database');

const getAllStudents = async () => {
    const [rows] = await db.query('SELECT * FROM tbl_student');
    return rows;
};

const getStudentById = async (id) => {
    const [rows] = await db.query('SELECT * FROM tbl_student WHERE id = ?', [id]);
    return rows[0];
};

const addStudent = async (student) => {
    const { firstname, lastname, gender, age, course_id, department_id } = student;
    const [result] = await db.query('INSERT INTO tbl_student (firstname, lastname, gender, age, course_id, department_id) VALUES (?, ?, ?, ?, ?, ?)', 
        [firstname, lastname, gender, age, course_id, department_id]);
    return result.insertId;
};

const updateStudent = async (id, { firstname, lastname, gender,age, course_id, department_id }) => {
    const [result] = await db.query('UPDATE tbl_student SET firstname = ?, lastname = ?, gender= ?, age = ?, course_id = ?, department_id = ? WHERE id = ?', 
        [firstname, lastname, gender, age, course_id, department_id, id]);
    return result;
};

const updateStudentStatus = async (id, status) => {
    const [result] = await db.query('UPDATE tbl_student SET status = ? WHERE id = ?',
        [status, id]);
    return result;
}

const removeStudent = async (id) => {
    const [result] = await db.query('DELETE FROM tbl_student WHERE id = ?', [id]);
    return result;
}

module.exports = {
    getAllStudents,
    getStudentById,
    addStudent,
    updateStudent,
    updateStudentStatus,
    removeStudent
};