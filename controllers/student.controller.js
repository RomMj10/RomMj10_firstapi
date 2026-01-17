const Students = require('../models/student.model');

const getAllStudents = async (req, res) => {
    try {
        const students = await Students.getAllStudents();
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getStudentById = async (req, res) => {
    try {
        const students = await Students.getStudentById(req.params.id);
        res.json(students);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
};

const addStudent = async (req, res) => {
    try {
        const studentId = await Students.addStudent(req.body);
        res.status(201).json({ id: studentId, ...req.body });
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
};

const updateStudent = async (req, res) => {
    try {
        const studentID = await Students.updateStudent(req.params.id, req.body);
        res.json({ message: 'Student updated successfully' });
    } catch(err) {
        res.status(500).json({ message: err.message});
    }
}

module.exports = {
    getAllStudents,
    getStudentById,
    addStudent,
    updateStudent
};