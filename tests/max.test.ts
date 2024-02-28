import { describe,it,expect } from "vitest";
import {max} from '../src/main'

describe("max",()=>{

it("the max number should be arguments first ",()=>{
expect(max(9,6)).toBe(9)
})

it("the max number should be arguments second ",()=>{
    expect(max(9,16)).toBe(16)
    })

})