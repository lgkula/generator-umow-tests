interface PersonalData {
    pesel: string;
    firstName: string;
    lastName: string;
    email: string;
    postalCode: string[];
    city: string;
    street: string;
    houseNumber: string;
    flatNumber: string;
}

// pesel: '',
// firstName: '',
// lastName: '',
// email: '',
// postalCode: [],
// city: '',
// street: '',
// houseNumber: '',
// flatNumber: '',

export const personalData: PersonalData[] = [
    {
        pesel: '63092478399',
        firstName: 'Mahmed',
        lastName: 'Czarnolicy',
        email: 'mah@lic.yy',
        postalCode: ['0', '0', '1', '0', '0'],
        city: 'Warszawa',
        street: 'Przechodnia',
        houseNumber: '17',
        flatNumber: '5',
    },
    {
        pesel: '94080649864',
        firstName: 'Stanisław',
        lastName: 'Rudy',
        email: 'stanislaw@rudy.com',
        postalCode: ['4', '5', '0', '0', '1'],
        city: 'Opole',
        street: 'Nadbżeżna',
        houseNumber: '18',
        flatNumber: '',
    },
];

export const checkPersonalDataDetailsId = (expectedId: number) => {
    if (expectedId < 0 || expectedId >= personalData.length) {
        throw new Error(
            `Training details with id ${expectedId} not found in trainingDetails array`,
        );
    }
};
