import { test, expect } from '@playwright/test';
// import * as Client from 'node-regon';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Client = require('node-regon');

interface CompanyInfoByNip {
    Regon: string[];
    Nip: string[];
    StatusNip: string[];
    Nazwa: string[];
    Wojewodztwo: string[];
    Powiat: string[];
    Gmina: string[];
    Miejscowosc: string[];
    KodPocztowy: string[];
    Ulica: string[];
    NrNieruchomosci: string[];
    NrLokalu: string[];
    Typ: string[];
    SilosID: string[];
    DataZakonczeniaDzialalnosci: string[];
    MiejscowoscPoczty: string[];
}

test.skip('Connect to api', async () => {
    const client = await Client.createClient({
        key: process.env.API_TOKEN,
        sandbox: false,
        birVersion: '1.1',
    });

    const companyInfoByNip: CompanyInfoByNip =
        await client.findByNip('9910189080');
    console.log(companyInfoByNip);

    expect(companyInfoByNip).not.toBeNull();
    expect(companyInfoByNip.Regon).toStrictEqual(['160054760']);
    expect(companyInfoByNip.Nip).toStrictEqual(['9910189080']);
    expect(companyInfoByNip.StatusNip).toStrictEqual(['']);
    expect(companyInfoByNip.Nazwa).toStrictEqual(['LESŁAW KULA']);
    expect(companyInfoByNip.Wojewodztwo).toStrictEqual(['OPOLSKIE']);
    expect(companyInfoByNip.Powiat).toStrictEqual(['Opole']);
    expect(companyInfoByNip.Gmina).toStrictEqual(['Opole']);
    expect(companyInfoByNip.Miejscowosc).toStrictEqual(['Opole']);
    expect(companyInfoByNip.KodPocztowy).toStrictEqual(['45-940']);
    expect(companyInfoByNip.Ulica).toStrictEqual(['ul. Makowa']);
    expect(companyInfoByNip.NrNieruchomosci).toStrictEqual(['10']);
    expect(companyInfoByNip.NrLokalu).toStrictEqual(['']);
    expect(companyInfoByNip.DataZakonczeniaDzialalnosci).toStrictEqual(['']);
    expect(companyInfoByNip.MiejscowoscPoczty).toStrictEqual(['Opole']);
});

test('Społka Cywilna test', async () => {
    const client = await Client.createClient({
        key: process.env.API_TOKEN,
        sandbox: false,
        birVersion: '1.1',
    });

    // const companyInfoByNip: CompanyInfoByNip =
    const companyInfoByNip = await client.findByNip('9910347780');
    console.log(companyInfoByNip);
    expect(1).toBe(1);
    // const companyInfoByNip1 = await client.getFullReport('160383860', 'P', '6');
    const companyInfoByNip1 = await client.getFullReport('160270385', 'F', '1');
    console.log(companyInfoByNip1);
});
