import { describe,it,expect } from "vitest";
import {factorial} from "../src/Factorial"

describe("Factorial",()=>{


    it("It return 1 if input 1",()=>{
        expect(factorial(1)).toBe(1)
    })

    it("Random Number for factorail",()=>{
        expect(factorial(5)).toBe(120)
    })
})