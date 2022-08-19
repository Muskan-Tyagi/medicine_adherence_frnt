import { patient } from '../../src/redux/apis/patient';
import axios from "../../src/redux/apis/axios";

describe("test  patientProfile",()=>{
    
    it("test images",async()=>{
        const payload="payload"
        jest.spyOn(axios,"get").mockImplementation(
            jest.fn(()=>Promise.resolve({data:"dfghjk"})))
        patient.fetchPatient(payload);    
        })
})
describe("test patient details",()=>{
    it("test images",()=>{
        const payload="payload"
        jest.spyOn(axios,"get").mockImplementation(
            jest.fn(()=>Promise.resolve({data:"dfghjk"})))
        patient.patientProfile(payload);  
    })
})
describe("test patient profile",()=>{
    it("test images",()=>{
        const payload="payload"
        jest.spyOn(axios,"get").mockImplementation(
            jest.fn(()=>Promise.resolve({data:"dfghjk"})))
        patient.patientProfile(payload);  
    })
})
describe("test patient request",()=>{
    it("test images",()=>{
        const payload="payload"
        jest.spyOn(axios,"get").mockImplementation(
            jest.fn(()=>Promise.resolve({data:"dfghjk"})))
        patient.patientReq(payload);  
    })
})
describe("test notifypatient",()=>{
    it("test images",async ()=>{
        const payload="payload"
        jest.spyOn(axios,"put").mockImplementation(
            jest.fn(()=>Promise.resolve({data:"dfghjk"})))
        patient.notifyPatient(payload)
       
    })
})
describe("test delete request",()=>{
    it("test images",async ()=>{
        const payload="payload"
        jest.spyOn(axios,"get").mockImplementation(
            jest.fn(()=>Promise.resolve({data:"dfghjk"})))
        patient.reqDelete(payload)
       
    })
})

describe("test reqAccept",()=>{
    
    it("test images",async()=>{
        const payload="payload"
        jest.spyOn(axios,"get").mockImplementation(
            jest.fn(()=>Promise.resolve({data:"dfghjk"})))
        patient.reqAccept(payload);    
        })
})