import { test, expect } from "@playwright/test";
import { apiToken } from "../credentials";

test("Connect to api", async () => {
    const Client = require("node-regon");
    
    const client = Client.createClient({
         key: apiToken,
         sandbox: false,
         birVersion: "1.1",
       });

     await client.then(async function (gus) {
        await gus.findByNip(nip).then(async function (findCompanyByNip) {
console.log({findCompanyByNip});
            var companyRegon = findCompanyByNip.Regon; 
            await gus.getFullReport(companyRegon, findCompanyByNip.Typ, findCompanyByNip.SilosID).then(async function (fullReport) {
              console.log({fullReport}): 
        })
        })  
    })


});
