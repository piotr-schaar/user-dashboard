const rewire = require("rewire")
const useRandomItemFromArray = rewire("./useRandomItemFromArray")
const get_random = useRandomItemFromArray.__get__("get_random")
// @ponicode
describe("get_random", () => {
    test("0", () => {
        let callFunction = () => {
            get_random("black", 10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [[-1, 0.5, 1, 2, 3, 4, 5], ["a", "b", "043", "foo bar"], [10, -45.9, 103.5, 0.955674]]
        let callFunction = () => {
            get_random(param1, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            get_random("rgb(0.1,0.2,0.3)", 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "foo bar"], [10, -45.9, 103.5, 0.955674]]
        let callFunction = () => {
            get_random(param1, 3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [[-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "foo bar"]]
        let callFunction = () => {
            get_random(param1, -10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            get_random([], NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
