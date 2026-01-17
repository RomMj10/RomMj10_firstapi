const express = require('express');
const router = express.Router();
const {getAllStudents, 
    getStudentById,
    addStudent,
    updateStudent
} = require('../controllers/student.controller');
const { route } = require('../app');

router.get('/', getAllStudents);
router.get('/:id', getStudentById);
router.post('/', addStudent);
router.put('/:id', updateStudent);

module.exports = router;