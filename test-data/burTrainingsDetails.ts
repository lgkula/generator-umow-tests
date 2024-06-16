interface TrainingDetails {
    trainingId: string;
    trainingName: string;
    burNumber: string;
    netAmount: string;
    grossAmount: string;
    trainingTime: string[];
    servceEndDate: string;
    copmapnyName: string;
    companyEmail: string;
    companyRepresentative: string;
    companyNip: string;
    companyRegon: string;
    companyKrs: string;
    companyCapital: string;
    companyCourt: string;
    companyBankAccount: string;
    companyPostalCode: string[];
    companyCity: string;
    companyStreet: string;
    companyHouseNumber: string;
    companyFlatNumber: string;
    qualifiedAmount: string;
    fundingAmount: string;
    ownContributingAmount: string;
}

// copmapnyName: '',
// companyEmail: '',
// companyRepresentative: '',
// companyNip: '',
// companyRegon: '',
// companyKrs: '',
// companyCapital: '',
// companyCourt: '',
// companyBankAccount: '',
// companyPostalCode: [],
// companyCity: '',
// companyStreet: '',
// companyHouseNumber: '',
// companyFlatNumber: '',
// qualifiedAmount: '',
// fundingAmount: '',
// ownContributingAmount: '',

export const trainingDetails: TrainingDetails[] = [
    {
        trainingId: '2070322',
        trainingName: 'Krawcowa/krawiec z egzaminem czeladniczym',
        burNumber: '2024/02/12/30963/2070322',
        netAmount: '8500.00',
        grossAmount: '8500.00',
        trainingTime: ['05.08.2024', '30.08.2024'],
        servceEndDate: '19.09.2024',
        copmapnyName: '',
        companyEmail: '',
        companyRepresentative: '',
        companyNip: '',
        companyRegon: '',
        companyKrs: '',
        companyCapital: '',
        companyCourt: '',
        companyBankAccount: '',
        companyPostalCode: [],
        companyCity: '',
        companyStreet: '',
        companyHouseNumber: '',
        companyFlatNumber: '',
        qualifiedAmount: '',
        fundingAmount: '',
        ownContributingAmount: '',
    },
    {
        trainingId: '2153795',
        trainingName:
            'Księgowość, kadry i finanse w dobie cyberprzestępstw – kurs online',
        burNumber: '2024/05/17/43371/2153795',
        netAmount: '2190.00',
        grossAmount: '2693.00',
        trainingTime: ['04.09.2024', '30.09.2024'],
        servceEndDate: '18.10.2024',
        copmapnyName: '',
        companyEmail: '',
        companyRepresentative: '',
        companyNip: '',
        companyRegon: '',
        companyKrs: '',
        companyCapital: '',
        companyCourt: '',
        companyBankAccount: '',
        companyPostalCode: [],
        companyCity: '',
        companyStreet: '',
        companyHouseNumber: '',
        companyFlatNumber: '',
        qualifiedAmount: '',
        fundingAmount: '',
        ownContributingAmount: '',
    },
    {
        trainingId: '2153707',
        trainingName: 'Grafika komputerowa - szkolenie w Chałupkach',
        burNumber: '2024/05/17/162797/2153707',
        netAmount: '4950.00',
        grossAmount: '4950.00',
        trainingTime: ['24.06.2024', '27.08.2024'],
        servceEndDate: '16.09.2024',
        copmapnyName: 'FUNDACJA EDU ACTIVE',
        companyEmail: 'biuro@edu-active.pl',
        companyRepresentative: 'Adam Nierobotny (prezes)',
        companyNip: '5170420838',
        companyRegon: '520446383',
        companyKrs: '0000932362',
        companyCapital: '',
        companyCourt: 'SĄD REJONOWY W RZESZOWIE',
        companyBankAccount: 'PL57 9317 0002 1024 9682 7576 6731',
        companyPostalCode: ['3', '5', '0', '0', '5'],
        companyCity: 'Rzeszów',
        companyStreet: 'pl. Jana Kilińskiego',
        companyHouseNumber: '2',
        companyFlatNumber: '',
        qualifiedAmount: '4950.00',
        fundingAmount: '4207.50',
        ownContributingAmount: '742.50',
    },
];

export const checkTrainingDetailsId = (expectedId: number) => {
    if (expectedId < 0 || expectedId >= trainingDetails.length) {
        throw new Error(
            `Training details with id ${expectedId} not found in trainingDetails array`,
        );
    }
};
