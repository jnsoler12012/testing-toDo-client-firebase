
import { Category as CategoryModel } from '../../src/api/models'


describe('src/models/Category', () => {
    test("should contain expected attributtes obj", async () => {
        console.log(CategoryModel.name);

        const Attributes = CategoryModel.getAttributes()
        const listAttributes = Object.keys(Attributes).reduce((prev, next) => { prev.push(next); return prev }, [])

        console.log(Attributes, listAttributes);
        expect(CategoryModel.name).toBe('category')
        expect(listAttributes).toEqual(['id', 'name', 'color', 'createdAt', 'updatedAt'])
    })
})