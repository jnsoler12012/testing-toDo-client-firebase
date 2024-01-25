import { Task as TaskModel } from '../../src/api/models'


describe('src/models/Task', () => {
    test("should contain expected attributtes obj", async () => {
        console.log(TaskModel.name);

        const Attributes = TaskModel.getAttributes()
        const listAttributes = Object.keys(Attributes).reduce((prev, next) => { prev.push(next); return prev }, [])

        console.log(Attributes, listAttributes);
        expect(TaskModel.name).toBe('task')
        expect(listAttributes).toEqual(['id', 'name', 'description', 'state', 'expireDate', 'priority', 'createdAt', 'updatedAt'])
    })
})