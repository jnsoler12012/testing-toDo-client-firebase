import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
var SequelizeMock = require('sequelize-mock');
import { default as dataBaseConnection } from "../../src/api/DB/dataBaseConnection.js";
import express, { Router, json } from "express";
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { signupUser } from "../../src/api/controllers/auth/index.js";
import { default as errorController } from "../../src/api/controllers/errorController.js";
import { Category } from '../../src/api/models/index.js';
import createCategory from '../../src/api/controllers/category/createCategory.js';

jest.mock('bcrypt');
jest.mock('jsonwebtoken');
jest.mock('../../src/api/models/');
jest.mock('../../src/api/controllers/errorController.js');

const mockDB = new SequelizeMock();


let productId

describe("POST /api/auth/signup", () => {
    let req;
    let res;
    let next;

    const validUser = {
        name: "tester",
        description: "description tester",
    };

    const errorControllerMock = errorController;
    errorControllerMock.mockImplementation(async (error, res) => {
        return (error, res)
    });

    beforeEach(() => {
        jest.clearAllMocks();
        req = {
            body: {
                ...validUser
            },
        };
        res = express.response
        next = () => next;
    });

    

    it('should return a successful login response', async () => {

        // Mock the User.findOne method to simulate a valid user
        require('../../src/api/models/index.js').Category.findOne.mockResolvedValue({
            ...validUser
        });

        // Call the loginUser function
        await createCategory(req, res);
        const response = res
        console.log(req, response, response);

        // Assertions
        expect(response.statusCode).toBe(200);

    });
});