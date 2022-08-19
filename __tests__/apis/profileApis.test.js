import { profile } from '../../src/redux/apis/profile';
import axios from "../../src/redux/apis/axios";

describe("test profile",()=>{
    it("test images",async ()=>{
        const payload="payload"
        jest.spyOn(axios,"put").mockImplementation(
            jest.fn(()=>Promise.resolve({data:"dfghjk"})))
            profile.saveProfile(payload)
       
    })
})
