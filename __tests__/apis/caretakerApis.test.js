import {careTaker} from '../../src/redux/apis/careTaker';
import axios from "../../src/redux/apis/axios";

describe("test email caretaker",()=>{
    it("test images",async ()=>{
        const payload="payload"
        jest.spyOn(axios,"get").mockImplementation(
            jest.fn(()=>Promise.resolve({data:"dfghjk"})))
            careTaker.emailcaretaker(payload)
       
    })
})

describe("test request caretaker",()=>{
    it("test images",async ()=>{
        const payload="payload"
        jest.spyOn(axios,"get").mockImplementation(
            jest.fn(()=>Promise.resolve({data:"dfghjk"})))
            careTaker.reqCaretaker(payload)
       
    })
})

describe("test sending image to caretaker",()=>{
    it("test images",async ()=>{
        const payload="payload"
        jest.spyOn(axios,"post").mockImplementation(
            jest.fn(()=>Promise.resolve({data:"dfghjk"})))
            careTaker.sendImage(payload)
       
    })
})

describe("test caretaker",()=>{
    it("test images",async ()=>{
        const payload="payload"
        jest.spyOn(axios,"get").mockImplementation(
            jest.fn(()=>Promise.resolve({data:"dfghjk"})))
            careTaker.caretaker(payload)
       
    })
})